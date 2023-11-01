import React, { useState, useEffect } from "react";
import {
  fetchRecentTracks,
  fetchLovedTracks,
  LAST_FM_API_KEY,
  username,
} from "../services/services";
import { SiApplemusic } from "react-icons/si";
import { BsFillPlayFill } from "react-icons/bs";
import styles from "../scss/Layout.module.scss";

const Profile = () => {
  const [lovedTracks, setLovedTracks] = useState([]);
  const [recentTracks, setRecentTracks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recentTracksData = await fetchRecentTracks(
          LAST_FM_API_KEY,
          username
        );
        setRecentTracks(recentTracksData);
        const lovedTracksData = await fetchLovedTracks(
          LAST_FM_API_KEY,
          username
        );
        setLovedTracks(lovedTracksData);
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Perfil del usuario</h1>

      <h4>Últimas canciones reproducidas</h4>
      <ul className={styles.listBox}>
        {recentTracks.map((track, index) => (
          <>
            <li key={index} className={styles.favTracks}>
              <div className={styles.trackBox}>
                <SiApplemusic size={35} color="#1814E4" />
                <div>
                  <p className={styles.textTrackTitle}>
                    <strong>{track.name}</strong>
                  </p>
                  <p className={styles.text}>by {track.artist["#text"]}</p>
                </div>
              </div>
              <BsFillPlayFill color="#1814E4" />
            </li>
          </>
        ))}
      </ul>

      <h4>Últimas canciones favoritas</h4>
      <ul className={styles.listBox}>
        {lovedTracks.map((track, index) => (
          <>
            <li key={index} className={styles.favTracks}>
              <div className={styles.trackBox}>
                <SiApplemusic size={35} color="#1814E4" />
                <div>
                  <p className={styles.textTrackTitle}>
                    <strong>{track.name}</strong>
                  </p>
                  <p className={styles.text}>by {track.artist["name"]}</p>
                  <p className={styles.likedText}>liked: {track.date["#text"]}</p>
                </div>
              </div>
              <BsFillPlayFill color="#1814E4" />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
