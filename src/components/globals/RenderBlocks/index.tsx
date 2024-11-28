import React from 'react';
import { Page } from '@/payload-types';
import { Subheading } from '@/src/components/typography';
import { AccoladesBlock } from '@/src/payload/blocks/accolades';
import { SliderBlock } from '@/src/payload/blocks/slider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blockComponents: Record<string, any> = {
  'accolades-block': AccoladesBlock,
  'slider-block': SliderBlock,
  subheading: Subheading,
};

export const RenderBlocks: React.FC<{
  blocks: Page['layout']
}> = (props) => {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (!hasBlocks) return null;

  return (
    <React.Fragment>
      {blocks.map((block, index) => {
        const { blockType } = block;

        if (blockType && typeof blockComponents[blockType] === 'function') {
          const Block = blockComponents[blockType];

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          type BlockType = React.ComponentType<any>;
          const BlockInstance: BlockType = Block;

          return (
            <div
              key={index}
            >
              <BlockInstance {...block} />
            </div>
          );
        }

        return null;
      })}
    </React.Fragment>
  );
};
