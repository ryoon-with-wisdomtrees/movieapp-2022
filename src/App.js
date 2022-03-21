import React from "react";
import { Route, HashRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
//라우터는 사용자가 입려한 url을 통해 특정 컴포넌트를 불러준다.
// react-router-dome은 여러종류의 라우터를 제공하는데 우리는 hashRouter와 Route컴포넌트를 사용할거야
function App() {
  /** Route에는 2가지 props를 전달할 수 있다.
   * 1. Url을 위한 path props,
   * 2. Url에 맞는 컴포넌트를 소환하는 component props
   */
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
