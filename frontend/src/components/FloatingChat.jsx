import React, { useState, useEffect } from 'react';
import Chatbot from './Chatbot/Chatbot.jsx';

const FloatingChat = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed z-50 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-5 h-14 w-14 rounded-full
                   bg-brand-600 text-white shadow-lg hover:bg-brand-700 transition grid place-items-center"
        aria-label="Open AI Assistant"
      >💬</button>

      <div className={`fixed z-50 right-5 w-[360px] max-w-[90vw] card overflow-hidden transition-all duration-300
        ${open ? 'opacity-100 bottom-[calc(7.5rem+env(safe-area-inset-bottom))]' : 'opacity-0 pointer-events-none bottom-[calc(6rem+env(safe-area-inset-bottom))] translate-y-2'}`}>
        <div className="px-4 py-3 border-b border-white/60 dark:border-white/10 bg-brand-600 text-white flex items-center justify-between">
          <strong>AI Assistant</strong>
          <button onClick={() => setOpen(false)} aria-label="Close" className="hover:opacity-80">✕</button>
        </div>
        <div className="h-[460px] bg-white/85 dark:bg-white/[0.02]">
          <Chatbot />
        </div>
      </div>
    </>
  );
};

export default FloatingChat;
