import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRecentTracks, fetchLovedTracks, LAST_FM_API_KEY, username } from "../services/services";

const Profile = () => {
  const [lovedTracks, setLovedTracks] = useState([]);
  const [recentTracks, setRecentTracks] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const recentTracksData = await fetchRecentTracks(LAST_FM_API_KEY, username);
        setRecentTracks(recentTracksData);
        const lovedTracksData = await fetchLovedTracks(LAST_FM_API_KEY, username);
        setLovedTracks(lovedTracksData);
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <button onClick={() => navigate(-1)}>←</button>
      <h1>Perfil del usuario</h1>

      <h2>Últimas canciones reproducidas</h2>
      <ul>
        {recentTracks.map((track, index) => (
          <li key={index}>
            {track.name} by {track.artist["#text"]}
          </li>
        ))}
      </ul>

      <h2>Últimas canciones favoritas</h2>
      <ul>
        {lovedTracks.map((track, index) => (
          <li key={index}>
            {track.name} by {track.artist["name"]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
