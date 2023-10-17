import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUkTopTracks, getUserInfo } from "../services/services";

const Home = () => {
  const [topTracks, setTopTracks] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        setUserName(userInfo.name);
      } catch (error) {
        console.error("Error al obtener la información del usuario:", error);
      }
    };

    const fetchTopTracks = async () => {
      try {
        const tracks = await getUkTopTracks("United Kingdom");
        setTopTracks(tracks);
      } catch (error) {
        console.error("Error al obtener las canciones más escuchadas:", error);
      }
    };

    fetchTopTracks();
    fetchUserInfo();
  }, []);

  return (
    <div>
      <div>
        {userName && (
          <p>
            Hi! <span>{userName}</span>!
          </p>
        )}
        <Link to="/profile">My profile</Link>
      </div>
      <h1>Top ten tracks in UK</h1>
      <ul>
        {topTracks.map((item) => (
          <li key={item.name}>
            <Link to={`/details/${item.artist.name}`}>
              <div>
                {/* <img src={item.imageUrl} alt={item.name} /> */}
                <div>
                  <p>{item.name}</p>
                  <p>{item.artist.name}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
