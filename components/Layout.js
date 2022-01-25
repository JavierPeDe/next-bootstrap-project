import Navbar from './Navbar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const Layout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routerChangeStart', (url) => console.log(url));
  }, []);
  return (
    <>
      <Navbar />

      <main className="container py-4">{children}</main>

      <footer className="bg-dark text-light text-center">
        <div className="container p-4">
          <h1>&copy; JavierPere</h1>
          <p>2012-{new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
};
export default Layout;
