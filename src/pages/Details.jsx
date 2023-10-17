import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importa useParams para obtener el parámetro de la URL
import { getArtistInfo } from "../services/services";

const Details = () => {
  const { artistName } = useParams();
  const navigate = useNavigate();

  const [artistInfo, setArtistInfo] = useState(null);

  useEffect(() => {
    const fetchArtistInfo = async () => {
      try {
        const info = await getArtistInfo(artistName);
        setArtistInfo(info);
      } catch (error) {
        console.error("Error al obtener la información del artista:", error);
      }
    };

    fetchArtistInfo();
  }, [artistName]);
  return (
    <div>
      <button onClick={() => navigate(-1)}>
        ←
      </button>
      {artistInfo ? (
        <div>
          <h1>Detalles del artista: {artistInfo.name}</h1>
        </div>
      ) : (
        <p>Cargando detalles del artista...</p>
      )}
    </div>
  );
};

export default Details;