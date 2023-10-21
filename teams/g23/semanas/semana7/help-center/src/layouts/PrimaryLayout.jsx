import { Outlet } from 'react-router-dom';
import Header from '../components/layouts/Header';

const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PrimaryLayout;