import React, { useState, useEffect, useRef } from 'react';
import { FiMessageSquare, FiX, FiActivity, FiArrowRight, FiSend } from 'react-icons/fi';
import { gsap } from '../../animations/gsap';
import Button from './Button';
import Card from './Card';
import Badge from './Badge';
import { navigateTo } from '../../utils/navigation';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Welcome to Aetheris Assistant. I'm here to help you manage your secure server nodes and cloud sandboxes. What can I help you with today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);
  const listEndRef = useRef(null);

  const initialOptions = [
    { label: 'Claim $500 Developer Credit', action: 'credit' },
    { label: 'Platform Node Latencies', action: 'latency' },
    { label: 'Schedule Systems Consultation', action: 'consult' },
    { label: 'Interactive Shell Demo', action: 'shell' }
  ];

  // Scroll to bottom on new messages
  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // GSAP animation on toggle
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        chatRef.current,
        { scale: 0.85, y: 30, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.5)',
          force3D: true
        }
      );
    }
  }, [isOpen]);

  const handleOptionClick = (option) => {
    // 1. Add User query message
    const userMsg = {
      sender: 'user',
      text: option.label,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // 2. Simulate Bot response after a short typing interval
    setTimeout(() => {
      let botResponseText = '';
      let includeCta = false;
      let ctaAction = null;
      let ctaText = '';

      switch (option.action) {
        case 'credit':
          botResponseText = "To claim your $500 developer credit, you need to launch a sandbox node. Sign up using our Cloud portal to instantly register your nodes.\n\nSandbox Details:\n• Credit Limit: $500 (Free Tier)\n• Expiry: 12-Month Trial\n• Allowed Workloads: Up to 3 active edge node clusters\n• Services: Zero-Trust gateways, DB sync, & analytics tracking";
          includeCta = true;
          ctaAction = () => navigateTo('auth');
          ctaText = 'Launch Cloud Sandbox';
          break;
        case 'latency':
          botResponseText = "All global edge servers are fully operational. Current live ledger latency counts: \n• node-us-east-1a: 0.32ms\n• node-eu-west-2b: 0.58ms\n• node-in-south-1c: 0.44ms\nPlatform complies with SOC2 zero-trust standards.";
          break;
        case 'consult':
          botResponseText = "To schedule a systems blueprint review with our core leads, please subscribe to our logs in the footer. An engineering associate will reach out directly.";
          includeCta = true;
          ctaAction = () => {
            setIsOpen(false);
            document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
          };
          ctaText = 'Scroll to Consultation Signup';
          break;
        case 'shell':
          botResponseText = "You can inspect active shell logs directly under the homepage Hero panel. The mock terminal renders live status reports and audit flags in real-time.";
          includeCta = true;
          ctaAction = () => {
            setIsOpen(false);
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
          };
          ctaText = 'Go to Console View';
          break;
        default:
          botResponseText = "I'm sorry, I didn't recognize that request. Please select one of the menu options below.";
      }

      const botMsg = {
        sender: 'bot',
        text: botResponseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        cta: includeCta ? { text: ctaText, handler: ctaAction } : null
      };

      setIsTyping(false);
      setMessages(prev => [...prev, botMsg]);
    }, 900);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] select-none font-sans">
      {/* 1. Floating Action FAB Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-premium text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
        >
          {/* Pulsing indicator ring */}
          <span className="absolute inset-0 rounded-full border-2 border-secondary animate-ping opacity-60 scale-105" />
          <FiMessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        </button>
      )}

      {/* 2. Floating Chat Drawer Panel */}
      {isOpen && (
        <div
          ref={chatRef}
          className="w-80 md:w-96 h-[480px] rounded-2xl border border-border-main/50 bg-bg-surface/95 dark:bg-bg-surface/90 shadow-2xl glassmorphism flex flex-col overflow-hidden text-left origin-bottom-right"
        >
          {/* Header Bar */}
          <div className="p-4 border-b border-border-main/20 flex items-center justify-between bg-gradient-premium text-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <FiActivity className="w-4 h-4 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold font-heading tracking-tight leading-none">Aetheris Core AI</span>
                <span className="text-[9px] text-teal-200 mt-1 uppercase tracking-wider font-semibold">● Engine Online</span>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors cursor-pointer"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="grow p-4 overflow-y-auto flex flex-col gap-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col max-w-[80%] ${
                  msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'
                }`}
              >
                {/* Message Bubble */}
                <div
                  className={`p-3 rounded-2xl text-xs leading-relaxed font-medium ${
                    msg.sender === 'user'
                      ? 'bg-secondary text-secondary-foreground rounded-tr-none'
                      : 'bg-bg-base/70 dark:bg-black/30 border border-border-main/20 text-text-main rounded-tl-none'
                  }`}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {msg.text}

                  {/* Render CTA Action Button inside Bubble */}
                  {msg.cta && (
                    <div className="mt-3">
                      <Button
                        size="xs"
                        variant={msg.cta.text.includes('Launch') ? 'gradient' : 'outline'}
                        className="w-full text-[10px]"
                        onClick={msg.cta.handler}
                      >
                        {msg.cta.text}
                      </Button>
                    </div>
                  )}
                </div>
                {/* Time Indicator */}
                <span className="text-[8px] text-text-muted/60 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {/* Dynamic Typing Indicator */}
            {isTyping && (
              <div className="self-start flex flex-col items-start max-w-[80%]">
                <div className="p-3.5 rounded-2xl rounded-tl-none bg-bg-base/70 dark:bg-black/30 border border-border-main/20 flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            
            <div ref={listEndRef} />
          </div>

          {/* Interactive Options Menu Footer */}
          <div className="p-3 border-t border-border-main/15 bg-bg-base/40 flex flex-col gap-1.5">
            <span className="text-[9px] font-bold font-heading text-text-muted uppercase tracking-widest px-1">
              Select Query Topic
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
              {initialOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt)}
                  disabled={isTyping}
                  className="px-2.5 py-1.5 rounded-lg border border-border-main/50 bg-bg-surface/50 text-[10px] font-semibold text-text-main hover:bg-bg-surface-hover hover:border-secondary/40 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
