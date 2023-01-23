import styles from './UserInput.module.css';

interface Props {
  type: string;
  // eslint-disable-next-line react/require-default-props
  id?: string;
  // eslint-disable-next-line react/require-default-props
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

// eslint-disable-next-line object-curly-newline
function UserInput({ type, id, onChange }: Props) {
  return <input id={id} type={type} onChange={onChange} />;
}

export default UserInput;
