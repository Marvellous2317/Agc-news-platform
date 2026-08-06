import "./app.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ArticlePage from "./pages/ArticlePage";
import PageLayout from "./pages/components/PageLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="article" element={<ArticlePage />} />
          <Route path="category" element={<CategoryPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
