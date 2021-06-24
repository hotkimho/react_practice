import React, { useState, useCallback } from "react";
import axios from "axios";
import NewsList from "./component/NewsList";
import Categories from "./component/Categories";
import NewsPage from "./pages/NewsPage";
import { Route } from "react-router-dom";

function App() {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback(category =>
    setCategory(category), []
  )
  return (
    <div>
      <Route path="/:category?" component={NewsPage} />
    </div>
  );
}

export default App;
