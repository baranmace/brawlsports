import React from 'react';
import Hero from './Hero';
import MetaSection from './MetaSection';
import TacticsSection from './TacticsSection';
import BrawlersSection from './BrawlersSection';
import CommunitySection from './CommunitySection';

const MainContent: React.FC = () => {
  return (
    <main>
      <Hero />
      <MetaSection />
      <TacticsSection />
      <BrawlersSection />
      <CommunitySection />
    </main>
  );
};

export default MainContent;