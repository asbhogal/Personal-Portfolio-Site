import React from 'react';

import { Page } from '@/payload-types';
import { DefaultNodeTypes } from '@payloadcms/richtext-lexical';
import { serializeLexical } from './serialize';

type Props = {
  content: Page['content'];
}

const RichText: React.FC<Props> = ({
  content,
}) => {
  if (!content) {
    return null;
  }

  return (
    <div className="RichTextContainer">
      {content
        && !Array.isArray(content)
        && typeof content === 'object'
        && 'root' in content
        && serializeLexical({ nodes: content?.root?.children as DefaultNodeTypes[] })}
    </div>
  );
};

export default RichText;
