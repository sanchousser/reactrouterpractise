import { Routes, Route } from "react-router";
import BooksPage from './../pages/BooksPage/BooksPage'
import { Navigation } from "./Navigation/Navigation";
import HomePage from "pages/HomePage/HomePage";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
        </Route>

      </Routes>
    </div>
  );
};
