import type { JSX } from 'react';
import React from 'react';
import type { Page } from '@/payload-types';
import dayjs from 'dayjs';
import styles from './styles.module.scss';

type AboutBlockType = Extract<NonNullable<Page['layout']>[number], { blockType: 'about-block' }>;

interface Props {
  history: AboutBlockType['about'];
}

export const AboutBlock = ({ history }: Props): JSX.Element => (
  <ul className={styles.containerOuter}>
    {history?.map((event) => (
      <li
        className={styles.container}
        key={event.id}
      >
        <div className={styles.containerInner}>
          <div className={styles.dateContainer}>
            <p>{dayjs(event.date).format('MMM YYYY')}</p>
            <span>-</span>
            <p>
              {(event.endDate ?? '') ? (dayjs(event.endDate).format('MMM YYYY')) : 'Present'}
            </p>
          </div>
          <div className={styles.containerInnerHeader}>
            <h2>
              {event.position}
            </h2>
            <div>
              <h3>{event.company}</h3>
              <div className={styles.containerInner}>
                <ul className={styles.stacks}>
                  {event.stacks?.map((stack) => (
                    <li
                      className={styles.stack}
                      key={stack.id}
                    >
                      {stack.stack}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
    ))}
  </ul>
);
