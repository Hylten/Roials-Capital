import React from 'react';
import { Hero } from './Hero';
import { Capabilities } from './Capabilities';
import { Execution } from './Execution';
import { GlobalFootprint } from './GlobalFootprint';
import { InquireCTA } from './InquireCTA';

interface HomeProps {
  onInquireClick: () => void;
  onTeamClick: () => void;
  onEquityClick: () => void;
  onCreditClick: () => void;
  onCapOrigClick: () => void;
}

export const Home: React.FC<HomeProps> = ({ onInquireClick, onTeamClick, onEquityClick, onCreditClick, onCapOrigClick }) => {
  return (
    <>
      <Hero onInquireClick={onInquireClick} />
      <Capabilities onEquityClick={onEquityClick} onCreditClick={onCreditClick} onCapOrigClick={onCapOrigClick} />
      <Execution />
      <GlobalFootprint />
      <InquireCTA onTeamClick={onTeamClick} />
    </>
  );
};