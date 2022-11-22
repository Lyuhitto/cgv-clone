import React from 'react';
import TopBanner from './TopBanner/TopBanner';
import HeaderContent from './HeaderContent/HeaderContent';

export default function Header() {
  return (
    <header>
      <TopBanner />
      <HeaderContent />
    </header>
  );
}
