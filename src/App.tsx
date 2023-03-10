import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/index';
import { PageNotFound } from './components/PageNotFound/index';
import { Phones } from './components/Phones/index';
import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CartPage } from './components/CartPage';
import { UserContextProvider } from './utils/context/Context';
import { SingleItemPage } from './components/SingleItemPage';

export const App: React.FC = () => (
  <UserContextProvider>
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/phones/:phoneId" element={<SingleItemPage />} />
          <Route path="/shopBag" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </UserContextProvider>
);
