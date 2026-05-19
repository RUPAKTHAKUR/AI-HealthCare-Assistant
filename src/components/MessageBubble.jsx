import ReactMarkdown from "react-markdown";

function MessageBubble({ message, sender }) {
  const isUser = sender === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      
      <div
        className={`
          max-w-[75%]
          px-4 py-3
          rounded-2xl
          break-words
          whitespace-pre-wrap
          text-sm
          leading-relaxed
          ${
            isUser
              ? "bg-blue-500 text-white rounded-br-md"
              : "bg-white text-gray-800 shadow-sm rounded-bl-md"
          }
        `}
      >
        <ReactMarkdown>{message}</ReactMarkdown>
      </div>

    </div>
  );
}

export default MessageBubble;