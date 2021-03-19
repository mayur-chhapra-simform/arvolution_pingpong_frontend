import axios from "axios";
import { player } from "helpers/api";

export const login = async (player_1, player_2, name) => {
  try {
    const {
      data: { data: gameData },
    } = await axios.post(player.ADD_GAME, { name });

    const {
      data: { data: playerData },
    } = await axios.post(player.ADD_PLAYER, {
      player_1,
      player_2,
    });
    return { gameData, playerData };
  } catch (e) {
    throw e;
  }
};

export const saveScore = async (
  player1,
  player2,
  player1Win,
  player2Win,
  game
) => {
  try {
    await axios.post(player.ADD_GAME_SCORE, {
      player_ids: [player1, player2],
      score: [player1Win, player2Win],
      game_id: game,
    });
  } catch (e) {
    throw e;
  }
};
