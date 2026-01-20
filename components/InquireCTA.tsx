import React from 'react';
import { Button } from './Button';

interface InquireCTAProps {
  onTeamClick: () => void;
}

export const InquireCTA: React.FC<InquireCTAProps> = ({ onTeamClick }) => {
  return (
    <section className="py-24 bg-obsidian border-t border-white/5 flex flex-col items-center text-center px-6">
        <div className="w-16 h-[1px] bg-oldgold mb-10"></div>
        <Button onClick={onTeamClick} variant="primary" className="px-12 py-5 text-sm">
            FIRM
        </Button>
    </section>
  )
}