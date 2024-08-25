import React from 'react';
import { Page } from '@/payload-types';
import Accolades from '../features/Accolades';
import Slider from '../features/Slider';
import Subheading from '../typography/Subheading';

interface RenderBlocksProps {
  blocks: Page['layout'];
  className?: string;
}

const components = {
  'accolades-block': Accolades,
  'slider-block': Slider,
  'subheading-block': Subheading,
};

export default function RenderBlocks({ blocks, className }: RenderBlocksProps) {
  return (
    <div className={className}>
      {blocks?.map((block, i) => {
        const BlockComponent = components[block.blockType as keyof typeof components];

        if (BlockComponent) {
          return (
            <section key={i}>
              {/* @ts-expect-error resolve type mismatch */}
              <BlockComponent {...block} />
            </section>
          );
        }

        return null;
      })}
    </div>
  );
}
