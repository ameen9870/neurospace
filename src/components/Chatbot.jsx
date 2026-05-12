import { SendHorizonal } from "lucide-react";
import { useState } from "react";


function Chatbot() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello 👋 How can I help your productivity today?",
    },
  ]);
  const sendMessage = async () => {

  if (!input.trim()) return;

  const userMessage = {
    role: "user",
    content: input,
  };

  const updatedMessages = [...messages, userMessage];

  setMessages(updatedMessages);

  setInput("");

  // Fake AI Thinking Delay

  setTimeout(() => {

    let aiReply = "";

    if (input.toLowerCase().includes("productivity")) {
      aiReply =
        "✨ Focus on high-priority tasks first and avoid multitasking.";
    }

    else if (input.toLowerCase().includes("study")) {
      aiReply =
        "📚 Try the Pomodoro technique: 25 mins focus + 5 mins break.";
    }

    else if (input.toLowerCase().includes("motivate")) {
      aiReply =
        "🚀 Small progress every day creates massive results over time.";
    }

    else {
      aiReply =
        "🤖 I'm your AI productivity assistant. More smart features coming soon.";
    }

    const aiMessage = {
      role: "assistant",
      content: aiReply,
    };

    setMessages([...updatedMessages, aiMessage]);

  }, 1000);
};


  return (
    <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

      <h2 className="text-3xl font-bold mb-6">
        AI Chat Assistant
      </h2>

      <div className="h-72 md:h-96 overflow-y-auto space-y-4 pr-2">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`px-5 py-4 rounded-2xl max-w-md ${
                msg.role === "user"
                  ? "bg-blue-600/20 border border-blue-500/20"
                  : "bg-purple-600/20 border border-purple-500/20"
              }`}
            >
              {msg.content}
            </div>

          </div>

        ))}

      </div>

      <div className="mt-6 flex items-center gap-3">

        <input
          type="text"
          placeholder="Ask AI anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
        />

        <button
          onClick={sendMessage}
          className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-2xl hover:scale-105 transition"
        >
          <SendHorizonal />
        </button>

      </div>

    </div>
  );
}

export default Chatbot;