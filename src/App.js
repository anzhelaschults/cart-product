import React from "react";
import CartList from "./components/cartList";
import {ActiveCart} from "./components/activeCart";

function App() {
  return (
      <div className="container">
        <div className="row">
          <div className="col">
            <CartList/>
          </div>
          <div className="col">
            <ActiveCart/>
          </div>
        </div>
      </div>
  );
}

export default App;
