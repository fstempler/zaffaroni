import './App.css';

//Pages
import Home from './pages/Home';
import Comprar from './pages/Comprar';
import Campos from './pages/Campos';
import Contact from './pages/Contact';
import Emprendimientos from './pages/Emprendimientos';
import Nosotros from './pages/Nosotros';
import Vender from './pages/Vender';
import Alquilar from './pages/Alquilar';
import ProductDetailPage from './pages/ProductDetailPage';
import EmprendimientoDetailPage from './pages/EmprendimientoDetailPage';
//Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider, Route, useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname])
  return null;
}

const Root = () => {
  return (
    <>
    <Navbar />
    <ScrollToTop />
    <Outlet />
    <Footer />
    </>
  )
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />      
      <Route path="/alquilar" element={<Alquilar />} />
      <Route path="/campos" element={<Campos />} />
      <Route path="/comprar" element={<Comprar />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/emprendimientos" element={<Emprendimientos />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/vender" element={<Vender />} />
      <Route path="/producto/:id" element={<ProductDetailPage />} />
      <Route path="/emprendimientos/:id" element={<EmprendimientoDetailPage />} />
    </Route>
  )
);

function App() {  

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
