
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: "Welcome to Power-Up Talent. I am your strategic consultancy assistant. How may I assist your organisation with market mapping or executive leadership acquisition today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatInstance = useRef<Chat | null>(null);

  useEffect(() => {
    const handleOpenChat = (e: any) => {
      const serviceContext = e.detail?.service;
      setIsOpen(true);
      
      if (serviceContext) {
        handleServiceInquiry(serviceContext);
      }
    };
    window.addEventListener('open-powerup-chat', handleOpenChat);
    return () => window.removeEventListener('open-powerup-chat', handleOpenChat);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initChat = () => {
    if (!chatInstance.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatInstance.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are the lead developer and brand strategist for Power-Up Talent. Your core identity is a "Strategic Partner" for the UK electrical wholesale sector.

STRICT GUIDELINES:
1. Use UK English ONLY (specialise, organisation, programme, modelling, behavioural).
2. NEVER use Americanisms or generic recruitment waffle (e.g., "talent pool," "hiring pipeline").
3. Use professional sector terms: "Branch Managers," "Regional Directors," "Market Mapping," and "Operational Alignment."
4. Tone must be authoritative, discreet, and consultative.
5. Emphasise "Quality Over Volume" and "Headhunting-First" methodologies.
6. Design and copy must be clean, professional, and high-impact.
7. NEVER mention "attached", "images", or "files".
8. NEVER use asterisks (*) for lists; use hyphens (-).`,
        },
      });
    }
  };

  const handleServiceInquiry = async (serviceName: string) => {
    const inquiryText = `I require information regarding your ${serviceName} services.`;
    setMessages(prev => [...prev, { role: 'user', text: inquiryText }]);
    setIsLoading(true);

    try {
      initChat();
      const response = await chatInstance.current!.sendMessage({ message: `Provide a professional overview of our ${serviceName} service for a Regional Director in the UK electrical wholesale sector.` });
      const botText = response.text || "Apologies, I encountered a connection issue. Please try again.";
      setMessages(prev => [...prev, { role: 'model', text: botText }]);
    } catch (error) {
      console.error("Chat Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      initChat();
      const response = await chatInstance.current!.sendMessage({ message: userMessage });
      const botText = response.text || "Apologies, I encountered a connection issue. Please try again.";
      setMessages(prev => [...prev, { role: 'model', text: botText }]);
    } catch (error) {
      console.error("Chat Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, i) => {
      let content: React.ReactNode = line;
      if (line.trim().startsWith('- ')) {
        content = (
          <li key={i} className="ml-4 list-none mb-1 text-slate-200 flex gap-2">
            <span className="text-primary">•</span> {line.trim().substring(2)}
          </li>
        );
      } else if (line.trim() === '') {
        return <div key={i} className="h-2" />;
      }
      return <div key={i}>{content}</div>;
    });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] flex flex-col items-end gap-3 md:gap-4">
      {isOpen && (
        <div className="w-[92vw] md:w-[450px] h-[600px] md:h-[700px] bg-navy-deep border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl animate-fade-in">
          <div className="bg-primary p-4 md:p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl font-bold">bolt</span>
              </div>
              <h4 className="text-navy-deep font-display font-bold text-base md:text-lg">Strategic Assistant</h4>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-navy-deep/50 hover:text-navy-deep transition-colors"><span className="material-symbols-outlined font-bold">close</span></button>
          </div>

          <div className="flex-grow overflow-y-auto p-4 md:p-6 space-y-4 no-scrollbar bg-black/40">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-primary text-navy-deep font-semibold' : 'bg-white/5 border border-white/10 text-slate-200 font-light'}`}>
                  {renderFormattedText(msg.text)}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-primary animate-pulse text-[10px] uppercase tracking-[0.3em] font-bold">Consulting Sector Knowledge...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-black/80 border-t border-white/10">
            <div className="relative">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask about market mapping..." className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-5 pr-12 text-sm text-white focus:border-primary outline-none" />
              <button onClick={handleSend} disabled={isLoading || !input.trim()} className="absolute right-1.5 top-1.5 w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-navy-deep shadow-lg"><span className="material-symbols-outlined font-bold text-lg">send</span></button>
            </div>
          </div>
        </div>
      )}

      <button onClick={toggleChat} className={`w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all border-2 ${isOpen ? 'bg-white text-navy-deep border-white' : 'bg-primary text-navy-deep border-primary'}`}><span className="material-symbols-outlined text-3xl font-bold">{isOpen ? 'close' : 'chat_bubble'}</span></button>
    </div>
  );
};

export default Chatbot;
