import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/MainPage";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import TvDetail from "./pages/TvDetail";
import TvPage from "./pages/TvPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path={`/${process.env.REACT_APP_HOST}`}
            element={<Mainpage />}
          />
          <Route path="/tv" element={<TvPage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/tv/:id" element={<TvDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
