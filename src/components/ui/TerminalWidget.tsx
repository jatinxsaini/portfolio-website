'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { toast } from 'sonner';
import { profileData } from '@/data/profile';
import { skillsData } from '@/data/skills';
import { projectsData } from '@/data/projects';

const quotes = [
  '"First, solve the problem. Then, write the code." — John Johnson',
  '"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra',
  '"Make it work, make it right, make it fast." — Kent Beck',
  '"Clean code always looks like it was written by someone who cares." — Robert C. Martin',
];

let quoteCounter = 0;
const getNextQuote = () => {
  const q = quotes[quoteCounter % quotes.length];
  quoteCounter = (quoteCounter + 1) % quotes.length;
  return q;
};

export const TerminalWidget: React.FC = () => {
  const [input, setInput] = useState('');
  const [matrixMode, setMatrixMode] = useState(false);
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: 'welcome',
      output: `👋 Hello! Welcome to ${profileData.name}'s developer terminal. Type 'help' or click a command below.`,
    },
  ]);

  const historyEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    let response = '';

    switch (cleanCmd) {
      case 'help':
        response = 'Commands: help | bio | skills | projects | contact | github | linkedin | resume | whoami | date | quote | matrix | clear';
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
      case 'github':
        response = '🌐 GitHub: https://github.com/jatinxsaini';
        toast.success('🌐 GITHUB REPOSITORIES!');
        break;
      case 'linkedin':
        response = '💼 LinkedIn: https://linkedin.com/in/jatinxsaini';
        toast.success('💼 LINKEDIN PROFILE!');
        break;
      case 'resume':
      case 'cv':
        response = `📄 Resume URL: ${profileData.resumeUrl || '/resume.pdf'}`;
        toast.success('📄 RESUME LINK!');
        break;
      case 'whoami':
        response = `${profileData.name} — Computer Science & Engineering Student @ Chitkara University`;
        break;
      case 'date':
      case 'time':
        response = `📅 Current timestamp: ${new Date().toLocaleString()}`;
        break;
      case 'quote':
        const randomQuote = getNextQuote();
        response = `💡 ${randomQuote}`;
        toast.success('💡 DEV QUOTE DISPLAYED!');
        break;
      case 'matrix':
        setMatrixMode((prev) => !prev);
        response = matrixMode ? 'Matrix digital rain deactivated.' : '🟢 Matrix digital rain mode activated!';
        toast.success(matrixMode ? 'Matrix Off' : '🟢 MATRIX ACTIVATED!');
        break;
      case 'clear':
      case 'cls':
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
    <div
      className={`comic-terminal rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border-2 sm:border-[3.5px] border-[var(--border-color)] shadow-[4px_4px_0px_var(--shadow-color)] sm:shadow-[6px_6px_0px_var(--shadow-color)] text-xs sm:text-sm ${
        matrixMode ? 'bg-black text-emerald-400' : 'bg-[#171717] text-white'
      }`}
    >
      {/* Terminal Window Header */}
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 mb-2.5 sm:mb-3 border-b-2 border-white/20 gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <div className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 rounded-full bg-[#FF3B30] border border-[#171717] flex-shrink-0" />
          <div className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 rounded-full bg-[#FFE500] border border-[#171717] flex-shrink-0" />
          <div className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 rounded-full bg-[#B9F227] border border-[#171717] flex-shrink-0" />
          <span className="ml-1 sm:ml-2 font-mono text-[10px] sm:text-[11px] text-white font-black tracking-wider uppercase flex items-center gap-1.5 truncate">
            <TerminalIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFE500] flex-shrink-0" aria-hidden="true" />
            <span className="truncate">jatin-saini@comic-terminal:~</span>
          </span>
        </div>
        <span
          className={`text-[9px] sm:text-[10px] font-black uppercase text-[#171717] px-2 py-0.5 rounded border border-[#171717] flex-shrink-0 ${
            matrixMode ? 'bg-emerald-400' : 'bg-[#B9F227]'
          }`}
        >
          {matrixMode ? 'MATRIX' : 'ONLINE'}
        </span>
      </div>

      {/* Terminal History */}
      <div className="space-y-2 mb-3 max-h-40 sm:max-h-48 overflow-y-auto font-mono text-white">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-[#FFE500] font-bold">
              <span>$</span>
              <span className="break-all">{item.command}</span>
            </div>
            <div
              className={`text-[11px] sm:text-xs leading-relaxed pl-2.5 sm:pl-3 border-l-2 ${
                matrixMode ? 'text-emerald-300 border-emerald-500' : 'text-zinc-200 border-[#FFE500]'
              }`}
            >
              {item.output}
            </div>
          </div>
        ))}
        <div ref={historyEndRef} />
      </div>

      {/* Shortcut Command Chips */}
      <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap mb-2.5 sm:mb-3 pt-2 border-t border-white/10">
        {['help', 'bio', 'skills', 'projects', 'github', 'quote', 'matrix'].map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => handleCommand(chip)}
            aria-label={`Run command ${chip}`}
            className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-mono font-black uppercase rounded-md bg-white/10 hover:bg-[#FFE500] hover:text-[#171717] text-white transition-colors border border-white/20 cursor-pointer"
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
        <label htmlFor="terminal-command-input" className="sr-only">
          Terminal command input
        </label>
        <span className="text-[#FFE500] font-mono font-bold" aria-hidden="true">$</span>
        <input
          id="terminal-command-input"
          name="terminalCmd"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type command ('help', 'skills', 'github')..."
          aria-label="Terminal command input"
          autoComplete="off"
          spellCheck={false}
          className="flex-1 min-w-0 bg-transparent font-mono text-xs sm:text-sm text-white placeholder-zinc-400 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Execute command"
          className="p-1 sm:p-1.5 rounded bg-[var(--comic-yellow)] text-[#171717] border border-[#171717] font-bold cursor-pointer hover:bg-[var(--comic-green)] transition-colors flex-shrink-0"
        >
          <CornerDownLeft className="w-3.5 h-3.5 stroke-[3]" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
};
