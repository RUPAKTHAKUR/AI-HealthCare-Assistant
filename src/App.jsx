import ChatBox from "./components/ChatBox";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center bg-gray-100">
  <div className="w-full max-w-4xl h-full flex flex-col bg-white shadow-xl">
    <div className="text-center text-2xl font-semibold py-4 border-b">
      AI Healthcare Assistant
    </div>

    <ChatBox />
  </div>
</div>
  );
}

export default App;