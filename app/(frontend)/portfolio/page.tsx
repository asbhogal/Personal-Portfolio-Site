import PortfolioTitle from '@/components/covers/PortfolioTitle';
import { Portfolio } from '@/components/sections';
import { getProjectData } from '@/utils/functions';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  description: 'A list of portfolio projects created by Aman Singh Bhogal',
  title: 'Portfolio | Aman Singh Bhogal',
};

export default async function Page() {
  const { projects: portfolioData } = await getProjectData();

  return (
    <React.Fragment>
      <PortfolioTitle />
      <Portfolio portfolioData={portfolioData} />
    </React.Fragment>
  );
}
