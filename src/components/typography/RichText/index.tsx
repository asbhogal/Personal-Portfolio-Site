import React from 'react';

import type { Page } from '@/payload-types';
import type { DefaultNodeTypes } from '@payloadcms/richtext-lexical';
import { serializeLexical } from './serialize';

interface Props {
  content: Page['content'];
}

export const RichText: React.FC<Props> = ({
  content,
}) => {
  if (!content) {
    return null;
  }

  return (
    <div className="RichTextContainer">
      {!Array.isArray(content)
        && typeof content === 'object'
        && 'root' in content
        // eslint-disable-next-line
        && serializeLexical({ nodes: content.root.children as DefaultNodeTypes[] })}
    </div>
  );
};
