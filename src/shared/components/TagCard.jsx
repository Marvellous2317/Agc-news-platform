import React, { children } from 'react';
import Card from './Card';

const TagCard = ({ text, textColor, children, className = '' }) => {
  return (
    <div
      className={`rounded-full py-3 px-6 w-fit flex items-center justify-center shadow-[0_0_30px_0px_rgba(0,0,0,0.1)] ${className}`}
    >
      <p
        className={`${textColor} text-[10px] font-poppins font-bold uppercase tracking-widest leading-none`}
      >
        {text}
      </p>
      {children}
    </div>
  );
};

export default TagCard;
