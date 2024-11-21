import React from 'react';

import { serializeLexical } from './serialize';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: Record<string, any>
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
        && serializeLexical({ nodes: content?.root?.children })}
    </div>
  );
};

export default RichText;
