import { useEffect, useState } from "react";
import { usePicContext } from "../context/picContext";
import Heart from "../svg/Heart";
import { Card } from "react-bootstrap";

export default function Favoritos() {
  const { dataPhotos } = usePicContext();

  const [favoritePhotos, setFavoritePhotos] = useState([]);

  useEffect(() => {
    const favoritesPhotos = dataPhotos.filter(
      (photos) => photos.liked === true
    );

    setFavoritePhotos(favoritesPhotos);
  }, [dataPhotos]);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favoritePhotos.map((photo) => (
          <Card style={{ width: "18rem" }}>
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
    </div>
  );
}
