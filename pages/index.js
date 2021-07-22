import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ApartmentList from '../components/ApartmentList';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home || Apartment Tracker</title>
      </Head>
      <ApartmentList />
    </div>
  );
}
