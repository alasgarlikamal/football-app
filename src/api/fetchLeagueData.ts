import axios from "axios";
import { API_KEY, API_URL } from "../utils/constants";
import { TeamData } from "./types";

export default async function fetchLeagueData(leagueId: number) {
  const url = `${API_URL}/?action=get_standings&league_id=${leagueId}&APIkey=${API_KEY}`;

  const { data } = await axios.get<TeamData[]>(url);

  return data;
}
