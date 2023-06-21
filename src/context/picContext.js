import React, { createContext, useContext, useState } from "react";
import photos from "../data/fotos.json";

const PicContext = createContext();

export const usePicContext = () => {
  return useContext(PicContext);
};

export const PicProvider = ({ children }) => {
  const [dataPhotos, setDataPhotos] = useState(photos.photos);

  const context = { dataPhotos, setDataPhotos };

  return <PicContext.Provider value={context}>{children}</PicContext.Provider>;
};
