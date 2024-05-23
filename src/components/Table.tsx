import { useQuery } from "@tanstack/react-query";
import fetchLeagueData from "../api/fetchLeagueData";
import { TableProps } from "./types";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/constants";

function Table({ leagueId }: TableProps) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => fetchLeagueData(leagueId),
  });

  const navigate = useNavigate();

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  const logoUrl = `${API_URL}/badges/logo_leagues/${
    data[0].league_id
  }_${data[0].league_name.toLowerCase().replace(" ", "-")}.png`;
  console.log(logoUrl);
  console.log(data);

  return (
    <div className="flex flex-col gap-4 overflow-x-auto text-white">
      <div className="flex items-center justify-between">
        <button
          className="p-2 transition duration-200 rounded-md bg-slate-800 hover:bg-slate-900"
          onClick={() => navigate("/")}
        >
          Go back
        </button>
        <div className="flex items-center gap-4">
          <img src={logoUrl} className="h-10" alt="" />
          <h1 className="font-bold">{data[0].league_name}</h1>
        </div>
      </div>
      <div className="p-3 rounded-md w-fit bg-slate-800">
        <table className="text-white table-auto ">
          <thead>
            <tr className="[&>td]:p-2">
              <th>Club</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>Pts</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
            </tr>
          </thead>
          <tbody>
            {data.map((team) => {
              let highlight = "";

              if (
                team.overall_promotion.startsWith(
                  "Promotion - Champions League"
                )
              ) {
                highlight = "border-4 border-r-0 border-l-blue-500 border-y-0";
              } else if (
                team.overall_promotion.startsWith("Promotion - Europa League")
              ) {
                highlight =
                  "border-4 border-r-0 border-l-orange-500 border-y-0";
              } else if (
                team.overall_promotion.startsWith(
                  "Promotion - Europa Conference League"
                )
              ) {
                highlight = "border-4 border-r-0 border-l-green-500 border-y-0";
              } else if (team.overall_promotion.startsWith("Relegation")) {
                highlight = "border-4 border-r-0 border-l-red-500 border-y-0";
              }

              return (
                <tr className="[&>td]:p-2 hover:bg-slate-900 transition duration-200">
                  <td className={`flex items-center gap-2 ${highlight}`}>
                    <div className="w-4 text-center">
                      {team.overall_league_position}
                    </div>
                    <div className="w-10">
                      <img className="h-8" src={team.team_badge} alt="" />
                    </div>
                    <span>{team.team_name}</span>
                  </td>
                  <td>{team.overall_league_payed}</td>
                  <td>{team.overall_league_W}</td>
                  <td>{team.overall_league_D}</td>
                  <td>{team.overall_league_L}</td>
                  <td className="font-bold">{team.overall_league_PTS}</td>
                  <td>{team.overall_league_GA}</td>
                  <td>{team.overall_league_GF}</td>
                  <td>
                    {parseInt(team.overall_league_GF) -
                      parseInt(team.overall_league_GA)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="p-4 text-white rounded-md bg-slate-800 [&>div]:font-thin">
        <p className="font-bold">Qualification/Relegation</p>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500"></div>
          UEFA Champions League
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-500"></div>
          UEFA Europa League
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500"></div>
          UEFA Europa Conference League
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500"></div>
          Relegation
        </div>
      </div>
    </div>
  );
}

export default Table;
