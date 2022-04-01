import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categoria, setCategoria] = useState([""]);

  /* const handleAdd = () => {
        setCategoria(cast => [...cast, ''])
        ///setCategoria([...categoria, ''])
    } */
  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory setCategoria={setCategoria} />
      <hr />

      {/*  <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categoria.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
