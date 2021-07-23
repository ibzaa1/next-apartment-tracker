import Head from 'next/head';
import ApartmentList from '../components/ApartmentList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home || Apartment Tracker</title>
      </Head>
      <ApartmentList />
    </div>
  );
}
