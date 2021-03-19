export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const API_URL = `${BASE_URL}api/v1/`;

export const player = {
  ADD_GAME: `${API_URL}game`,
  ADD_PLAYER: `${API_URL}user`,
  ADD_GAME_SCORE: `${API_URL}score`,
};
