'use client';

import { Page } from '@/payload-types';
import FadeIn from '@/utils/animations';
import { LexicalReactRender } from '@/utils/serialize';

interface RichTextProps {
  content: Page['content'];
}

export default function RichText({ content }: RichTextProps) {
  if (!content?.root?.children) {
    return null;
  }

  // @ts-expect-error resolve content mismatch
  return <FadeIn className="RichText">{LexicalReactRender({ content })}</FadeIn>;
}
