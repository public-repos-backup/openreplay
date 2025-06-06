import React, { useState } from 'react';
import copy from 'copy-to-clipboard';

function CopyButton({ content, className }) {
  const [copied, setCopied] = useState(false);

  const copyHandler = () => {
    setCopied(true);
    copy(content);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <button className={className} onClick={copyHandler}>
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

export default CopyButton;
