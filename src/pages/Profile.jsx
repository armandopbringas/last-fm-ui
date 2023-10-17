import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [lovedTracks, setLovedTracks] = useState([]);
  const [recentTracks, setRecentTracks] = useState([]);

  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchRecentTracks = async () => {
      try {
        const apiKey = "24241d44d5d80c14ad12cc9f4af7d776";
        const username = "armandopbringas";

        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${apiKey}&format=json&limit=5`
        );

        if (response.ok) {
          const data = await response.json();
          const tracks = data.recenttracks.track;
          setRecentTracks(tracks);
        } else {
          console.error("Error al obtener las reproducciones recientes");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    const fetchLovedTracks = async () => {
      try {
        const apiKey = "24241d44d5d80c14ad12cc9f4af7d776";
        const username = "armandopbringas";

        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getLovedTracks&user=${username}&api_key=${apiKey}&format=json&limit=5`
        );

        if (response.ok) {
          const data = await response.json();
          const tracks = data.lovedtracks.track;
          setLovedTracks(tracks);
        } else {
          console.error("Error al obtener las canciones favoritas");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchRecentTracks();
    fetchLovedTracks();
  }, []);

  return (
    <div>
      <button onClick={() => navigate(-1)}>←</button>
      <h1>Perfil del usuario</h1>

      <h2>Últimas canciones reproducidas</h2>
      <ul>
        {recentTracks.map((track) => (
          <li key={track.name}>
            {track.name} by {track.artist["#text"]}
          </li>
        ))}
      </ul>

      <h2>Últimas canciones favoritas</h2>
      <ul>
        {lovedTracks.map((track) => (
          <li key={track.name}>
            {track.name} by {track.artist["name"]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
