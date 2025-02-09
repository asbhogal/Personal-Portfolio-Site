import type { JSX } from 'react';
import React from 'react';
import { Link } from '@/src/components/globals';

export default function Page(): JSX.Element {
  return (
    <div>
      <h1>Heading One</h1>
      <h2>Heading Two</h2>
      <h3>Heading Three</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>subtitle</p>
      <Link href="/work">Link</Link>
      <Link
        href="/work"
        type="secondary"
      >
        Link
      </Link>
    </div>
  );
}
