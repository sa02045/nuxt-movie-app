const BASE_URL = "https://www.omdbapi.com";
const API_KEY = process.env.API_KEY;
export const fetchMovieList = async (name, year, page = 1) => {
  if (!name) {
    throw new Error("영화 제목이 없습니다 ");
  }
  const res = await fetch(
    `${BASE_URL}?apiKey=${API_KEY}&s=${name}&page=${page}`
  );

  if (res.ok) {
    return res.json();
  }
  throw new Error("요청이 실패했습니다");
};

export const fetchMovieDetail = async (id, plot = "short") => {
  if (!id) {
    throw new Error("영화 아이디가 없습니다");
  }
  const res = await fetch(`${BASE_URL}?apiKey=${API_KEY}&i=${id}&=${plot}`);
  if (res.ok) {
    return res.json();
  }
  throw new Error("요청이 실패했습니다");
};
