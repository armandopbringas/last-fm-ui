import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUkTopTracks, getUserInfo } from "../services/services";
import styles from "../scss/Layout.module.scss";

const Home = () => {
  const [topTracks, setTopTracks] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        setUserName(userInfo.name);
      } catch (error) {
        console.error("Error when retrieving user info:", error);
      }
    };

    const fetchTopTracks = async () => {
      try {
        const tracks = await getUkTopTracks("United Kingdom");
        setTopTracks(tracks);
      } catch (error) {
        console.error("Error when retrieving the most listened songs:", error);
      }
    };

    fetchTopTracks();
    fetchUserInfo();
  }, []);

  return (
    <div>
      <div className={styles.FlexRow}>
        {userName && (
          <p className={styles.textGreeting}>
            Hi <strong className={styles.userText}>{userName}</strong>!
          </p>
        )}
        <Link to="/profile" className={styles.textLink}>
          My profile
        </Link>
      </div>
      <h1>Top ten tracks in UK</h1>
      <ul className={styles.FlexCol}>
        {topTracks.map((item) => (
          <Link to={`/details/${item.artist.name}`} className={styles.textLink}>
            <li key={item.name} className={styles.trackItemBox}>
              <div className={styles.trackItem}>
                {/* <img src={item.imageUrl} alt={item.name} /> */}
                <div>
                  <p className={styles.trackName}>{item.name}</p>
                  <p className={styles.artistName}>{item.artist.name}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
