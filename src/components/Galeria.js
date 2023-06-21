import React from "react";
import "../assets/css/galeria.css";
import { usePicContext } from "../context/picContext";
import Heart from "../svg/Heart";
import { Card } from "react-bootstrap";

export default function Galeria() {
  const { dataPhotos, setDataPhotos } = usePicContext();

  const handlerLikePhoto = (photoId) => {
    const photoIndex = dataPhotos.findIndex((photo) => photo.id === photoId);

    if (photoIndex !== -1) {
      const updatedDataPhotos = [...dataPhotos];

      updatedDataPhotos[photoIndex].liked =
        !updatedDataPhotos[photoIndex].liked;

      setDataPhotos(updatedDataPhotos);
    }
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {dataPhotos.map((photo) => (
        <Card
          style={{ width: "18rem" }}
          onClick={() => handlerLikePhoto(photo.id)}
        >
          <Heart
            liked={photo.liked}
            style={{ position: "absolute", top: "10px", right: "10px" }}
          />
          <Card.Img
            id={photo.id}
            variant="top"
            src={photo.src.original}
            style={{ objectFit: "cover", height: "200px" }}
          ></Card.Img>
        </Card>
      ))}
    </div>
  );
}
