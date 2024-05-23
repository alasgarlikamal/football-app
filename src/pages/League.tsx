import { useParams } from "react-router-dom";
import Table from "../components/Table";

function League() {
  const { id } = useParams();
  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
      <div className="">{id && <Table leagueId={parseInt(id)} />}</div>
    </div>
  );
}

export default League;
