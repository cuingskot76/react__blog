import React from "react";
import Router from "./Router/Router";
import { BrowserRouter } from "react-router-dom";

import Header from "./Header";

function App() {
  return (
    <section className="text-white bg-[#0F172A] py-4 px-4">
      <div className="  max-w-[768px]  mx-auto ">
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </div>
    </section>
  );
}

export default App;
