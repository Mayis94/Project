import { Route, BrowserRouter, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import NotFound from "./NotFound";

const Categories = lazy(() => import("./Categories"));


export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" exact element={<Categories />}></Route>

            <Route path="/:nf" element={<NotFound />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
