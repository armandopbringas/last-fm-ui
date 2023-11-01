import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArtistInfo } from "../services/services";
import { SiApplemusic } from "react-icons/si";
import styles from "../scss/Layout.module.scss";

const Details = () => {
  const { artistName } = useParams();

  const [artistInfo, setArtistInfo] = useState(null);

  useEffect(() => {
    const fetchArtistInfo = async () => {
      try {
        const info = await getArtistInfo(artistName);
        setArtistInfo(info);
      } catch (error) {
        console.error("Error when retrieving artist information:", error);
      }
    };

    fetchArtistInfo();
  }, [artistName]);
  return (
    <div>
      {artistInfo ? (
        <div className={styles.BoxShadow}>
          <h2>{artistInfo.name}</h2>
          <div className={styles.BoxCentered}>
            <SiApplemusic size={375} color="#1814E4" />
            <div>
              <p>
                <strong>Aabout {artistInfo.name}:</strong>
              </p>
              <p>{artistInfo.bio.summary}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Details;
