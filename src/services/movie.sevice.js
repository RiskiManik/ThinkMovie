import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const token = import.meta.env.VITE_AUTH_TOKEN;
const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};
export const getImageMovie = async (kategori, page) => {
  const results = await axios.get(
    `${baseUrl}movie/${kategori}?page=${page}`,
    options
  );
  return results.data.results;
};

export const trendingMovie = async (kategori) => {
  const results = await axios.get(
    `${baseUrl}trending/${kategori}/day`,
    options
  );
  return results.data.results;
};

export const searchMovie = async (q) => {
  const results = await axios.get(`${baseUrl}search/multi?query=${q}`, options);
  return results.data.results;
};

export const detailMovie = async (id) => {
  const results = await axios.get(`${baseUrl}movie/${id}`, options);
  return results.data;
};
export const detailTv = async (id) => {
  const results = await axios.get(`${baseUrl}tv/${id}`, options);
  return results.data;
};
