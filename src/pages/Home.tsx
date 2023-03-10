import Badge from '../components/Home/Badge';
import HomeWebtoon from '../components/Home/HomeWebtoon';
import styles from './styles/Home.module.css';

function Home(): JSX.Element {
  return (
    <div className={styles.home}>
      <Badge />
      <HomeWebtoon />
    </div>
  );
}

export default Home;
