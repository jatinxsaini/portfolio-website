'use client';

import React, { useState } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { profileData } from '@/data/profile';
import { skillsData } from '@/data/skills';
import { projectsData } from '@/data/projects';

export const TerminalWidget: React.FC = () => {
  const [input, setInput] = useState('');
  const [matrixMode, setMatrixMode] = useState(false);
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: 'welcome',
      output: `👋 Hello! Welcome to ${profileData.name}'s comic developer terminal. Type 'help' or click a command below.`,
    },
  ]);

  const quotes = [
    '"First, solve the problem. Then, write the code." — John Johnson',
    '"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra',
    '"Make it work, make it right, make it fast." — Kent Beck',
    '"Clean code always looks like it was written by someone who cares." — Robert C. Martin',
  ];

  const handleCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    let response = '';

    switch (cleanCmd) {
      case 'help':
        response = 'Available commands: help | bio | skills | projects | contact | quote | matrix | clear';
        break;
      case 'bio':
      case 'about':
        response = `${profileData.name} — ${profileData.role}. ${profileData.shortIntro}`;
        toast.success('📖 BIO DISPLAYED!');
        break;
      case 'skills':
        const topSkills = skillsData
          .flatMap((cat) => cat.skills)
          .map((s) => s.name)
          .join(', ');
        response = `🚀 Arsenal: ${topSkills}`;
        toast.success('🛠️ SKILLS LOADED!');
        break;
      case 'projects':
        if (projectsData.length > 0) {
          const list = projectsData.map((p, i) => `[${i + 1}] ${p.title} (${p.category})`).join(' | ');
          response = `📁 Works: ${list}`;
        } else {
          response = '📁 Projects ready to be added to src/data/projects.ts';
        }
        toast.success('📁 PROJECTS LISTED!');
        break;
      case 'contact':
      case 'email':
        response = `✉️ Email: ${profileData.email} | Location: ${profileData.location}`;
        toast.success('✉️ CONTACT INFO LOADED!');
        break;
      case 'quote':
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        response = `💡 ${randomQuote}`;
        toast.success('💡 DEV QUOTE DISPLAYED!');
        break;
      case 'matrix':
        setMatrixMode((prev) => !prev);
        response = matrixMode ? 'Matrix digital rain deactivated.' : '🟢 Matrix digital rain mode activated!';
        toast.success(matrixMode ? 'Matrix Off' : '🟢 MATRIX ACTIVATED!');
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        response = `Command '${cleanCmd}' not recognized. Type 'help' for options.`;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: response }]);
    setInput('');
  };

  return (
    <div className={`comic-terminal rounded-2xl p-4 sm:p-5 border-[3.5px] border-[#171717] shadow-[6px_6px_0px_#171717] text-xs sm:text-sm ${matrixMode ? 'bg-black text-emerald-400' : 'bg-[#171717] text-white'}`}>
      {/* Terminal Window Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-white/20">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-[#FF3B30] border border-[#171717]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#FFE500] border border-[#171717]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#B9F227] border border-[#171717]" />
          <span className="ml-2 font-mono text-[11px] text-white font-black tracking-wider uppercase flex items-center gap-1.5">
            <TerminalIcon className="w-4 h-4 text-[#FFE500]" />
            jatin-saini@comic-terminal:~
          </span>
        </div>
        <span className={`text-[10px] font-black uppercase text-[#171717] px-2.5 py-0.5 rounded border border-[#171717] ${matrixMode ? 'bg-emerald-400' : 'bg-[#B9F227]'}`}>
          {matrixMode ? 'MATRIX MODE' : 'ONLINE'}
        </span>
      </div>

      {/* Terminal History */}
      <div className="space-y-2.5 mb-3 max-h-48 overflow-y-auto font-mono text-white">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-[#FFE500] font-bold">
              <span>$</span>
              <span>{item.command}</span>
            </div>
            <div className={`text-xs leading-relaxed pl-3 border-l-2 ${matrixMode ? 'text-emerald-300 border-emerald-500' : 'text-zinc-200 border-[#FFE500]'}`}>
              {item.output}
            </div>
          </div>
        ))}
      </div>

      {/* Shortcut Command Chips */}
      <div className="flex items-center gap-1.5 flex-wrap mb-3 pt-2 border-t border-white/10">
        {['help', 'bio', 'skills', 'projects', 'contact', 'quote', 'matrix'].map((chip) => (
          <button
            key={chip}
            onClick={() => handleCommand(chip)}
            className="px-2.5 py-1 text-[11px] font-mono font-black uppercase rounded-md bg-white/10 hover:bg-[#FFE500] hover:text-[#171717] text-white transition-colors border border-white/20 cursor-pointer"
          >
            ${chip}
          </button>
        ))}
      </div>

      {/* Interactive Command Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand(input);
        }}
        className="flex items-center gap-2 pt-2 border-t-2 border-white/20"
      >
        <span className="text-[#FFE500] font-mono font-bold">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type command ('help', 'skills', 'quote', 'matrix')..."
          className="flex-1 bg-transparent font-mono text-xs sm:text-sm text-white placeholder-zinc-400 focus:outline-none"
        />
        <button
          type="submit"
          className="p-1.5 rounded bg-[#FFE500] text-[#171717] border border-[#171717] font-bold cursor-pointer hover:bg-[#B9F227] transition-colors"
        >
          <CornerDownLeft className="w-3.5 h-3.5 stroke-[3]" />
        </button>
      </form>
    </div>
  );
};
