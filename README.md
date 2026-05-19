# 🏥 AI Healthcare Assistant Using RAG and Generative AI

An AI-powered Healthcare Assistant built with React.js, Node.js, Express.js, and Google Gemini API. The application allows users to chat about symptoms, upload medical reports (X-rays, blood reports, lab reports), and receive simplified educational explanations in natural language.

This project uses **Retrieval-Augmented Generation (RAG)** principles by combining uploaded medical report content and user queries with a specialized healthcare prompt to generate contextual and relevant responses.

---

## 🚀 Project Overview

AI Healthcare Assistant is a web-based intelligent healthcare chatbot that can:

- 💬 Discuss symptoms and possible health conditions
- 📄 Analyze blood reports and lab reports
- 🖼️ Interpret uploaded medical images and reports
- 💊 Suggest general OTC (Over-the-Counter) medicine information for temporary relief
- 🌐 Respond in multiple languages (English, Hindi, Hinglish)
- 🧠 Provide contextual responses using RAG-based prompting
- 💾 Store chat history using browser Local Storage

This project is intended for:

- Semester 6 Major Project
- AI and Machine Learning Demonstration
- Healthcare Technology Showcase
- Portfolio and Resume Projects

---

# 🧠 What is RAG in This Project?

**RAG (Retrieval-Augmented Generation)** is a technique where relevant external information is provided to the AI model before generating a response.

In this project:

1. User enters symptoms or uploads a medical report.
2. The report/image acts as retrieved context.
3. A specialized healthcare prompt is combined with the user question.
4. Gemini AI generates a contextual response based on both the prompt and the uploaded data.

### RAG Flow

User Query + Uploaded Medical Report + Healthcare Prompt → Gemini AI → Context-Aware Medical Explanation

✨ Features

💬 Intelligent Medical Chatbot
Symptom discussion
General health advice
Multilingual conversations

📄 Medical Report Analysis
CBC, Widal, Malaria, Thyroid, Sugar reports
Normal vs abnormal values explanation
Easy-to-understand summaries

🖼️ Image Upload and Analysis
Blood reports
X-rays
Scanned prescriptions
Medical PDFs converted to images

💊 OTC Guidance
Temporary relief suggestions
General adult dosage information
Emergency warning signs

🧠 RAG-Based Contextual Responses
Uses uploaded report content as contextual input

💾 Local Storage
Saves chat history in the browser
No database required

🎨 ChatGPT-Style UI
Full-screen centered layout
Fixed input area
Markdown-formatted AI responses

🛠️ Tech Stack

Frontend
React.js
Vite
Tailwind CSS
Axios
React Markdown

Backend
Node.js
Express.js
Multer
CORS
Dotenv

AI & Machine Learning
Google Gemini API (gemini-2.5-flash)
Retrieval-Augmented Generation (RAG)

Storage
Browser Local Storage

Development Tools
Visual Studio Code
Git
GitHub
Postman

💻 System Requirements

Hardware Requirements
Processor: Intel i3 or above
RAM: Minimum 4 GB (8 GB recommended)
Storage: 1 GB free disk space
Internet connection

Software Requirements
Node.js v18+
npm v9+
Modern web browser
VS Code

Supported Operating Systems
Windows 10/11
Linux
macOS


📂 Project Structure

ai-healthcare-assistant/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── ChatBox.jsx
│   │   ├── MessageBubble.jsx
│   │   └── FileUpload.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── server/
│   ├── uploads/
│   └── server.js
│
├── .env
├── package.json
├── vite.config.js
└── README.md

⚙️ Installation and Setup

1️⃣ Clone Repository
git clone https://github.com/your-username/ai-healthcare-assistant-rag.git
cd ai-healthcare-assistant-rag

2️⃣ Install Frontend Dependencies
npm install

3️⃣ Install Backend Dependencies
cd server
npm install

4️⃣ Create .env File
GEMINI_API_KEY=your_google_gemini_api_key

5️⃣ Start Backend
node server.js

6️⃣ Start Frontend
npm run dev

7️⃣ Open Application
http://localhost:5173

🔑 How to Get Gemini API Key
Visit https://aistudio.google.com/
Sign in with your Google account
Click "Get API Key"
Create a new API key
Add it to your .env file


📖 Usage Guide
Symptom Discussion

Ask:

"I have fever and headache."
"My tooth is hurting badly."
Medical Report Analysis

Upload:

Widal report
CBC report
Malaria report
Blood sugar report
Emergency Guidance

Ask:

"What medicine can I take for temporary relief?"
📸 Sample Queries
"Can you explain this blood report?"
"Is this Widal report positive?"
"What does high platelet count mean?"
"What medicine can I take for fever until I see a doctor?"
"Explain this X-ray in simple language."
🔮 Future Enhancements
🎤 Voice conversation
🗣️ Speech-to-Text
🔊 Text-to-Speech
👤 User authentication
☁️ Cloud database
📄 PDF report upload
🩺 Doctor appointment integration
📱 Mobile application
⚠️ Medical Disclaimer

This application is intended for educational and informational purposes only. It does not replace professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for medical concerns.

🎓 Academic Relevance

This project demonstrates:

Generative AI
Prompt Engineering
Retrieval-Augmented Generation (RAG)
Full Stack Web Development
Medical Image Analysis
Local Storage Management
API Integration
👨‍💻 Author

Rupak
Full Stack Developer | AI Enthusiast | SDET | Python Developer

📄 License

This project is licensed under the MIT License.

🌟 GitHub Repository Description

AI-powered Healthcare Assistant built with React, Node.js, Express, Gemini API, and RAG. Supports symptom discussion, medical report analysis, image-based report interpretation, multilingual responses, and educational OTC medicine guidance.

⭐ Support

If you found this project useful, please give it a ⭐ on GitHub.
