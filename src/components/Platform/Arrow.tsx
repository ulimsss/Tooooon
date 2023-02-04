import clsx from 'clsx';
import styles from './Arrow.module.css';

interface ArrowProps {
  // eslint-disable-next-line react/require-default-props
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function PrevArrow({ onClick }: ArrowProps) {
  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={clsx(styles.arrow, styles.left)} onClick={onClick}>
      &lt;
    </div>
  );
}
export function NextArrow({ onClick }: ArrowProps) {
  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={clsx(styles.arrow, styles.right)} onClick={onClick}>
      &gt;
    </div>
  );
}
