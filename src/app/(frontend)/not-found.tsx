import type { JSX } from 'react';
import React from 'react';
import { Error } from '@/src/components/sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: "Error 404. The page you're looking for does not exist.",
  title: 'Error 404 | Aman Singh Bhogal',
};

export default function NotFound(): JSX.Element {
  return <Error />;
}
