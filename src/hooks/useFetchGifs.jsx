import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGist";

//
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGif(category).then((item) => {
      setTimeout(() => {
        setState({
          data: item,
          loading: false,
        });
      }, 500);
    });
  }, [category]);

  return state;
};
