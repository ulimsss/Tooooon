/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import styles from './Modal.module.css';

interface Props {
  title: string;
  // eslint-disable-next-line react/require-default-props
  alert?: string;
  closeModal: () => void;
}

function Modal({ title, alert, closeModal }: Props) {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalBG} onClick={closeModal} />
      <div className={styles.modalContainer}>
        <div className={styles.modalTitle}>{title}</div>
        <div className={styles.madalAlert}>{alert}</div>

        <div className={styles.buttonWrapper}>
          <button type="button">아니오</button>
          <button type="button">네</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
