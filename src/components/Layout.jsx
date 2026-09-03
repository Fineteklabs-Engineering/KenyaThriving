import { Outlet } from 'react-router-dom';
import ScrollNav from './ScrollNav';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <ScrollNav />
      <Outlet />
      <Footer />
    </>
  );
}