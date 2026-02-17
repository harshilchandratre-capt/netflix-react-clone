import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Header from './components/ui/Header/Header'
import LoadingScreen from "./components/shared/LoadingScreen/LoadingScreen";

const Films = lazy(() => import('./components/ui/Films/index'));
const Home = lazy(() => import('./components/ui/Home/index'));
const Popular = lazy(() => import('./components/ui/Popular/index'));
const TVSeries = lazy(() => import('./components/ui/TVSeries/index'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mainReload = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    mainReload();
  }, []);

  if (loading) return <LoadingScreen />;
  return (
    <>
      <div style={{ padding: "0 20px", backgroundColor: "#000" }}>
        <Router>
          <Header />
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tvseries" element={<TVSeries />} />
              <Route path="/films" element={<Films />} />
              <Route path="/popular" element={<Popular />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;