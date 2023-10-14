import { Outlet } from 'react-router-dom';

const PrimaryLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default PrimaryLayout;