import React from 'react';
import { Page } from '@/payload-types';
import { Subheading } from '@/components/typography';
import { Accolades, Slider } from '../../features';

interface Props {
  blocks: Page['layout'];
  className?: string;
}

const components = {
  'accolades-block': Accolades,
  'slider-block': Slider,
  'subheading-block': Subheading,
};

export const RenderBlocks = ({ blocks, className }: Props) => (
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
