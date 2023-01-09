import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/index';
import { PageNotFound } from './components/PageNotFound/index';
import { Phones } from './components/Phones/index';
import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/phones" element={<Phones />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};
