import React, {useState} from 'react'; 
import {Copy, Check } from 'lucide-react';

const CopyToClipboard = ({text, title}) => {
    const [copied, setCopied] = useState(false);
    const copyText = async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
      };

    return (
        <div class="flec items-center gap-2">
            <p className="text-gray-600">{text}</p>
                <button 
                    onClick={copyText}
                    className="p-1 hover:text-blue-600 transition-colors"
                    title={title}
                >
                    {copied ? 
                    <Check className="w-4 h-4 text-green-600" /> : 
                    <Copy className="w-4 h-4" />
                    }
                </button>
        </div>
    )
}

export default CopyToClipboard; 