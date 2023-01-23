import PostHeader from '../components/Board/PostHeader';
import PostListView from '../components/Board/PostListView';
import styles from './styles/Board.module.css';

function Board() {
  return (
    <div className={styles.boardWrapper}>
      <PostHeader />
      <PostListView />
    </div>
  );
}

export default Board;
