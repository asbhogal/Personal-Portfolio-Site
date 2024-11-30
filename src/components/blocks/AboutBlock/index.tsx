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
          <p className={styles.date}>{dayjs(event.date).format('MMM YYYY')}</p>
          <p className={styles.position}>
            {event.position}
          </p>
          <p className={styles.company}>{event.company}</p>
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
          <ul className={styles.responsibilities}>
            {event?.responsibilities?.map((responsibility) => (
              <li
                className={styles.responsibility}
                key={responsibility.id}
              >
                {responsibility.responsibility}
              </li>
            ))}
          </ul>
        </div>

      </li>
    ))}
  </ul>
);
