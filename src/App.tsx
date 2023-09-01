import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Company from "./components/Company/Company";
import Technology from "./components/Technology/Technology";
import Contacts from "./components/Contacts/Contacts";

import "./App.css";

type RouteData = {
  path: string;
  element: JSX.Element;
};

function App() {
  const routes: RouteData[] = [
    { path: "/", element: <Hero /> },
    { path: "/about", element: <Company /> },
    { path: "/technology", element: <Technology /> },
    { path: "/contact", element: <Contacts /> },
    { path: "/garanty", element: <Company /> },
    { path: "/schedule", element: <Company /> }
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
