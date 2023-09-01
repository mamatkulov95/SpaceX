import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Company from "./components/Company/Company";

import "./App.css";

type RouteData = {
  path: string;
  element: JSX.Element;
};

function App() {
  const routes: RouteData[] = [
    { path: "/", element: <Hero /> },
    { path: "/about", element: <Company /> }
  ];

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          {" "}
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
