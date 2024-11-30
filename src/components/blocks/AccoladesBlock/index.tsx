import { Page } from '@/payload-types';
import dayjs from 'dayjs';
import React from 'react';
import styles from './styles.module.scss';

type AccoladesBlock = Extract<NonNullable<Page['layout']>[number], { blockType: 'accolades-block' }>;

interface Props {
  accolades: AccoladesBlock['accolade'];
}

export const AccoladesBlock = ({ accolades }: Props) => (
  <ul className={styles.container}>
    {accolades?.map((accolade, index) => (
      <React.Fragment key={accolade.id}>
        <li>
          <p className={styles.date}>{dayjs(accolade.date).format('MMM YY')}</p>
          <p className={styles.body}>{accolade.awardingBody}</p>
          <p className={styles.award}>{accolade.award}</p>
        </li>
        {index < accolades.length - 1 && (<span className={styles.separator} />)}
      </React.Fragment>
    ))}
  </ul>
);
