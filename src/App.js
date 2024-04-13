import React, { useState, useEffect } from "react";
import api from "./services/api.js";
import "./App.css";
import { Item, Carrito } from "./components";
import { Skeleton } from "@mui/material";

function App() {
  const [productos, setProductos] = useState();

  useEffect(() => {
    async function getData() {
      const respo = await api.get();
      const resp = await respo.data.products;
      setProductos(resp);
    }
    getData();
  }, [productos]);

  return (
    <div className="App">
      <header className="App-header">
        <section>
          {typeof productos !== "undefined" ? (
            <Item productos={productos} />
          ) : (
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={340}
              height={340}
            />
          )}
          <Carrito />
        </section>
      </header>
    </div>
  );
}

export default App;
