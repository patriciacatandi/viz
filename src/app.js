// gh-pages route for deployment
// https://stackoverflow.com/questions/41325890/indexroute-not-showing-when-pushing-to-gh-pages

import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home/home"));
const StorySample = lazy(() => import("./pages/sandbox/sample"));
const SubsidioSPPO = lazy(() => import("./pages/subsidio-sppo/story"));
const Interactive = lazy(() => import("./pages/subsidio-sppo/interactive"));

const TestLineChart = lazy(() => import("./pages/sandbox/test_linechart"));
const TestMap = lazy(() => import("./pages/sandbox/test_map"));
const DemolicoesSEOP = lazy(() => import("./pages/demolicoes-seop/story"));

DemolicoesSEOP;
function App() {
  return (
    <div id={"main"}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/especial-sppo/subsidio" element={<SubsidioSPPO />} />
            <Route path="/sandbox/sample" element={<StorySample />} />
            <Route
              path="/especial-sppo/interactive"
              element={<Interactive />}
            ></Route>
            <Route
              path="/sandbox/test-linechart"
              element={<TestLineChart />}
            ></Route>
            <Route path="/sandbox/test-map" element={<TestMap />}></Route>
            <Route
              path="/especial-seop/demolicoes"
              element={<DemolicoesSEOP />}
            ></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}
export default App;
