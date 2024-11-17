'use client';

import { Page } from '@/payload-types';
import FadeIn from '@/utils/animations';
import { LexicalReactRender } from '@/utils/serialize';
import styles from './styles.module.scss';

interface Props {
  content: Page['content'];
}

export const RichText = ({ content }: Props) => {
  if (!content?.root?.children) {
    return null;
  }

  // @ts-expect-error resolve content mismatch
  return <FadeIn className={styles.richText}>{LexicalReactRender({ content })}</FadeIn>;
};
