import premierLeagueIcon from "../assets/leagues/premier-league.png";
import laLigaIcon from "../assets/leagues/laliga.svg";
import bundesligaIcon from "../assets/leagues/bundesliga.svg";
import serieAIcon from "../assets/leagues/serie-a.svg";
import ligueUneIcon from "../assets/leagues/ligue-1.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      <div className="grid grid-cols-1 gap-10 p-10 px-20 m-auto justify-items-center md:grid-cols-2 lg:grid-cols-3 bg-slate-700">
        <div className="flex h-full p-5 transition duration-200 rounded-md shadow-xl cursor-pointer max-w-80 w-80 md:w-full md bg-slate-800 hover:scale-105">
          <img
            className="m-auto h-44 brightness-50"
            src={premierLeagueIcon}
            onClick={() => navigate("/league/152")}
          />
        </div>
        <div className="flex h-full p-5 transition duration-200 rounded-md shadow-xl cursor-pointer max-w-80 w-80 md:w-full md bg-slate-800 hover:scale-105">
          <img
            className="h-40 m-auto"
            src={laLigaIcon}
            onClick={() => navigate("/league/302")}
          />
        </div>
        <div className="flex h-full p-5 transition duration-200 rounded-md shadow-xl cursor-pointer max-w-80 w-80 md:w-full md bg-slate-800 hover:scale-105">
          <img
            className="m-auto h-44"
            src={bundesligaIcon}
            onClick={() => navigate("/league/175")}
          />
        </div>
        <div className="flex h-full p-5 transition duration-200 rounded-md shadow-xl cursor-pointer max-w-80 w-80 md:w-full md bg-slate-800 hover:scale-105">
          <img
            className="m-auto h-44"
            src={serieAIcon}
            onClick={() => navigate("/league/207")}
          />
        </div>
        <div className="flex h-full p-5 transition duration-200 rounded-md shadow-xl cursor-pointer max-w-80 w-80 md:w-full md bg-slate-800 hover:scale-105">
          <img
            className="m-auto h-44"
            src={ligueUneIcon}
            onClick={() => navigate("/league/168")}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
