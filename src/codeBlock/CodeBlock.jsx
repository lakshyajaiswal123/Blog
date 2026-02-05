import React, { useState } from 'react';
import { codeData } from './codeblockData/codeData';

const CodeBlock = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeData.code);
      setCopied(true);
      
      // Reset copy state after 2sec
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-8 font-mono ">
      {/* Code Area */}
      <div className="bg-[#1E1E1E] p-8  min-h-[240px]">
        <pre className="text-sm md:text-base leading-relaxed">
          <code className="text-gray-300">
            
            {/* Simple syntax highlighting colors based on your screenshot */}
            <span className="text-[#4EC9B0]">import</span> pandas{"\n"}
            <span className="text-[#D4D4D4]">from</span> sklearn <span className="text-[#4EC9B0]">import</span> linear_model{"\n\n"}
            
            df = <span className="text-[#CE9178]">pandas.read_csv</span>(<span className="text-[#CE9178]">"data.csv"</span>){"\n\n"}
            
            X = df[[<span className="text-[#CE9178]">'Weight'</span>, <span className="text-[#CE9178]">'Volume'</span>]]{"\n"}
            y = df[<span className="text-[#CE9178]">'CO2'</span>]
          </code>
        </pre>
      </div>

      {/* Footer / Copy Button Area */}
      <div className="bg-[#EFEFEF] border-t border-gray-300 py-2 px-4 flex items-center rounded-b-sm">
        <button 
          onClick={handleCopy}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm font-medium"
        >
          {/* SVG Copy Icon */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
          </svg>
          {copied ? <span className="text-green-600">Copied!</span> : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;