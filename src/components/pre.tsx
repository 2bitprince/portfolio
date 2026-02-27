"use client";

import { useRef, useState } from "react";

export function Pre({
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLPreElement>) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    if (preRef.current) {
      const code = preRef.current.querySelector("code");
      if (code) {
        const text = code.textContent || "";
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  return (
    <div className="relative my-8 rounded-xl bg-[#0d1117] backdrop-blur-sm border border-zinc-800 shadow-2xl overflow-hidden group">
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-zinc-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500/80 border border-purple-500/20"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-500/20"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-500/20"></div>
        </div>
        <button
          style={{ cursor: "pointer" }}
          onClick={copyCode}
          className="flex items-center gap-1.5 rounded-md bg-zinc-800/50 hover:bg-zinc-700 px-2.5 py-1 text-xs font-medium text-zinc-300 transition-all duration-200 border border-zinc-700/50"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg
                className="w-3.5 h-3.5 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      <pre
        ref={preRef}
        {...props}
        className={`overflow-x-auto text-sm focus:outline-none ${props.className || ""}`}
        style={{ ...props.style, backgroundColor: "transparent" }}
      >
        {children}
      </pre>
    </div>
  );
}
