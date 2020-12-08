import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {
  StreamList,
  StreamCreate,
  StreamDelete,
  StreamEdit,
  StreamShow,
} from "./streams";
import Header from "./Header";

const PageOne = () => {
  return (
    <div>
      Page One
      <br />
      <Link to="/pagetwo">Page Two</Link>
    </div>
  );
};

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
