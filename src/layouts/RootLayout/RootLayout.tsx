import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <div className='wrapper'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}
