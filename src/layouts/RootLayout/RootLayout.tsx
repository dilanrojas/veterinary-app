import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './RootLayout.css';

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
