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
}

export const Home: React.FC<HomeProps> = ({ onInquireClick, onTeamClick, onEquityClick, onCreditClick }) => {
  return (
    <>
      <Hero onInquireClick={onInquireClick} />
      <Capabilities onEquityClick={onEquityClick} onCreditClick={onCreditClick} />
      <Execution />
      <GlobalFootprint />
      <InquireCTA onTeamClick={onTeamClick} />
    </>
  );
};