import PortfolioTitle from '@/src/components/covers/PortfolioTitle';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  description: 'A list of portfolio projects created by Aman Singh Bhogal',
  title: 'Portfolio | Aman Singh Bhogal',
};

export default async function Page() {
  return (
    <React.Fragment>
      <PortfolioTitle />
    </React.Fragment>
  );
}
