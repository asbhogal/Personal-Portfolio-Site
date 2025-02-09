import { Page } from '@/payload-types';
import dayjs from 'dayjs';
import styles from './styles.module.scss';

type AboutBlock = Extract<NonNullable<Page['layout']>[number], { blockType: 'about-block' }>;

interface Props {
  history: AboutBlock['about'];
}

export const AboutBlock = ({ history }: Props) => (
  <ul className={styles.containerOuter}>
    {history?.map((event) => (
      <li
        className={styles.container}
        key={event.id}
      >
        <div className={styles.containerInner}>
          <div className={styles.containerInnerHeader}>
            <p className={styles.date}>{dayjs(event.date).format('MMM YYYY')}</p>
            <span>-</span>
            <p className={styles.date}>
              {event.endDate ? (dayjs(event.endDate).format('MMM YYYY')) : 'Present'}
            </p>
          </div>
          <h2>
            {event.position}
          </h2>
          <h3>{event.company}</h3>
        </div>
        <div className={styles.containerInner}>
          <ul className={styles.stacks}>
            {event?.stacks?.map((stack) => (
              <li
                className={styles.stack}
                key={stack.id}
              >
                {stack.stack}
              </li>
            ))}
          </ul>
        </div>

      </li>
    ))}
  </ul>
);
