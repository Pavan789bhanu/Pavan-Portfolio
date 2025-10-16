import React, { useEffect, useRef, useState } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I am Pavan's AI assistant." },
  ]);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    if (!sessionId && window.crypto?.randomUUID) {
      setSessionId(crypto.randomUUID());
    }
  }, [sessionId]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInput: trimmed, sessionId }),
      });

      // Handle invalid HTTP status
      if (!res.ok) {
        console.error("HTTP Error:", res.status);
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      console.log("Chatbot API Response:", data);

      const botContent = data?.response?.trim() ||
        "I'm having trouble responding right now.";

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: botContent },
      ]);

    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "I'm experiencing a connection issue." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-white/85 dark:bg-white/[0.02]">
        {messages.map((m, i) => {
          const isUser = m.role === 'user';
          return (
            <div key={i} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`rounded-lg px-3 py-2 max-w-[75%] whitespace-pre-line
                ${isUser
                    ? 'bg-brand-600 text-white'
                    : 'bg-white/85 dark:bg-white/[0.04] text-gray-900 dark:text-gray-100 border border-white/60 dark:border-white/10'
                }`}
              >
                {m.content}
              </div>
            </div>
          );
        })}
        {loading && <div className="text-gray-500 text-sm px-2">…typing</div>}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-white/60 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.03] flex gap-2">
        <textarea
          rows={2}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Ask about experience, projects, or skills…"
          className="flex-1 resize-none rounded-md p-2 outline-none
                     bg-white dark:bg-gray-900
                     text-gray-900 dark:text-gray-100
                     placeholder-gray-500 dark:placeholder-gray-400
                     border border-gray-300 dark:border-gray-700
                     focus:ring-2 focus:ring-brand-600/40"
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="px-4 py-2 rounded-md bg-brand-600 text-white disabled:opacity-50 hover:bg-brand-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
