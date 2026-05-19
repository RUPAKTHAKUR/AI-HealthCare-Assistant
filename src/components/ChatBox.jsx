import { useState, useEffect } from "react";
import axios from "axios";
import MessageBubble from "./MessageBubble";

function ChatBox() {
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("chat")) || []
  );
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(messages));
  }, [messages]);

  const addMessage = (text, sender) => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const sendMessage = async () => {
  if (!input && !selectedFile) return;

  setLoading(true);

  const formData = new FormData();
  formData.append("message", input);

  if (selectedFile) {
    formData.append("file", selectedFile);
  }

  addMessage(
    selectedFile
      ? `📎 ${input || "Image uploaded for analysis"}`
      : input,
    "user"
  );

  const res = await axios.post(
    "http://localhost:5000/chat",
    formData
  );

  addMessage(res.data.reply, "ai");

  setInput("");
  setSelectedFile(null);
  setLoading(false);
};

  return (
  <div className="flex flex-col h-full">

    {/* ================= SCROLLABLE CHAT ================= */}
    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-50">
      {messages.map((msg, index) => (
        <MessageBubble
          key={index}
          message={msg.text}
          sender={msg.sender}
        />
      ))}

      {loading && (
        <div className="text-gray-500 text-sm">AI is thinking...</div>
      )}
    </div>

    {/* ================= FIXED INPUT ================= */}
    <div className="border-t bg-white px-6 py-4">
      <div className="flex items-center gap-3">

        <input
          type="text"
          className="flex-1 border rounded-xl px-4 py-2 outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about symptoms..."
        />

        <label className="cursor-pointer bg-gray-200 px-4 py-2 rounded-xl text-sm hover:bg-gray-300">
          Upload
          <input
            type="file"
            className="hidden"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </label>

        <button
          onClick={sendMessage}
          className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800"
        >
          Send
        </button>
      </div>

      {selectedFile && (
        <div className="text-sm text-gray-600 mt-2 truncate">
          📎 {selectedFile.name}
        </div>
      )}
    </div>
  </div>
);
}

export default ChatBox;