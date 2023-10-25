import axios from "axios";

export const username = "armandopbringas";
export const LAST_FM_API_KEY = "24241d44d5d80c14ad12cc9f4af7d776";

const LastFMApi = axios.create({
  baseURL: "https://ws.audioscrobbler.com/2.0/",
  params: {
    api_key: LAST_FM_API_KEY,
    format: "json",
  },
});

export const getUkTopTracks = async (country, limit = 10) => {
  try {
    const response = await LastFMApi.get("", {
      params: {
        method: "geo.gettoptracks",
        country,
        limit,
      },
    });

    if (response.status === 200) {
      return response.data.tracks.track;
    } else {
      throw new Error(
        "Error al obtener las canciones más escuchadas desde Last.fm"
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserInfo = async () => {
  try {
    const response = await axios.get("https://ws.audioscrobbler.com/2.0/", {
      params: {
        method: "user.getInfo",
        user: "armandopbringas",
        api_key: LAST_FM_API_KEY,
        format: "json",
      },
    });

    if (response.status === 200) {
      return response.data.user;
    } else {
      throw new Error("Error al obtener la información del usuario");
    }
  } catch (error) {
    throw new Error(
      "Error al obtener la información del usuario: " + error.message
    );
  }
};

export const getArtistInfo = async (artistName) => {
  try {
    const apiKey = LAST_FM_API_KEY;
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${apiKey}&format=json`
    );
    const data = await response.json();
    return data.artist;
  } catch (error) {
    throw error;
  }
};

export const fetchRecentTracks = async (apiKey, username) => {
  try {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${apiKey}&format=json&limit=5`
    );

    if (response.ok) {
      const data = await response.json();
      return data.recenttracks.track;
    } else {
      throw new Error("Error when retrieving last plays");
    }
  } catch (error) {
    console.error("Request error:", error);
    throw error;
  }
};

export const fetchLovedTracks = async (apiKey, username) => {
  try {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getLovedTracks&user=${username}&api_key=${apiKey}&format=json&limit=5`
    );

    if (response.ok) {
      const data = await response.json();
      return data.lovedtracks.track;
    } else {
      throw Error("Error when retrieving fav songs");
    }
  } catch (error) {
    console.error("Request error:", error);
    throw error;
  }
};

export default LastFMApi;
