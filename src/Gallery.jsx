import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./routes/Photo";
import "./style.css";



const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
const API_KEY = process.env.REACT_APP_FLICKR_API_KEY;
const API_URL = "https://www.flickr.com/services/rest/";

  useEffect(() => {
    const fetchFlickrPhotos = async () => {
      try {
        const params = {
          method: "flickr.photos.search",
          api_key: API_KEY,
          tags: "landscape", // Tags o palabras clave para buscar fotos
          per_page: 10, // Número máximo de fotos por galería (máximo 10 según requisitos)
          format: "json",
          nojsoncallback: 1
        };

        const response = await axios.get(API_URL, { params });

        setPhotos(response.data.photos.photo);
      } catch (error) {
        setError(error);
      }
    };

    fetchFlickrPhotos();

    return () => {
      
    };
  }, []);

  if (error) {
    return <div>Error al cargar las fotos: {error.message}</div>;
  }

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default Gallery;
