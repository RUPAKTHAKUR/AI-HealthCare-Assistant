import express from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ================= UNIFIED CHAT (TEXT + IMAGE) =================
app.post("/chat", upload.single("file"), async (req, res) => {
  try {
    const message = req.body?.message || "";
    const file = req.file;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    let result;

    // ===== CASE 1: IMAGE + TEXT =====
    if (file) {
      const imageBuffer = fs.readFileSync(file.path);

      result = await model.generateContent([
        {
          inlineData: {
            data: imageBuffer.toString("base64"),
            mimeType: file.mimetype,
          },
        },
        `You are a practical AI healthcare assistant.

Rules:
- You can explain medical reports in simple language.
- You can describe what values generally mean.
- You can provide general over-the-counter medicine information.
- Do NOT refuse unnecessarily.
- Do NOT say you cannot interpret reports.
- Add only one short disclaimer line at end.

If user uploads report:
Explain:
- What test is
- What high/low values generally indicate
- Whether values appear normal or elevated
- When to see doctor

If user asks emergency help:
Provide:
- General temporary relief steps
- Common OTC medicines (paracetamol, ibuprofen etc.)
- Safe dosage range for adults
- When it becomes emergency

Speak in natural human tone.

User question:
${message || "Analyze this medical report/image."}`
      ]);

      fs.unlinkSync(file.path);
    }

    // ===== CASE 2: TEXT ONLY =====
    else {
      result = await model.generateContent(
        `You are a practical AI healthcare assistant.

Rules:
- You can explain medical reports in simple language.
- You can describe what values generally mean.
- You can provide general over-the-counter medicine information.
- Do NOT refuse unnecessarily.
- Do NOT say you cannot interpret reports.
- Add only one short disclaimer line at end.

If user uploads report:
Explain:
- What test is
- What high/low values generally indicate
- Whether values appear normal or elevated
- When to see doctor

If user asks emergency help:
Provide:
- General temporary relief steps
- Common OTC medicines (paracetamol, ibuprofen etc.)
- Safe dosage range for adults
- When it becomes emergency

Speak in natural human tone.

User question:
${message}`
      );
    }

    const response = await result.response;
    const text = response.text();

    res.json({ reply: text });

  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing request");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));