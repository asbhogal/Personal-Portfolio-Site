import React from 'react';

import type { Page } from '@/payload-types';
import type { DefaultNodeTypes } from '@payloadcms/richtext-lexical';
import { serializeLexical } from './serialize';

interface Props {
  className?: string;
  content: Page['content'];
}

export const RichText: React.FC<Props> = ({
  className,
  content,
}) => {
  if (!content) {
    return null;
  }

  return (
    <div className={['RichTextContainer', className].filter(Boolean).join(' ')}>
      {!Array.isArray(content)
        && typeof content === 'object'
        && 'root' in content
        // eslint-disable-next-line
        && serializeLexical({ nodes: content.root.children as DefaultNodeTypes[] })}
    </div>
  );
};
