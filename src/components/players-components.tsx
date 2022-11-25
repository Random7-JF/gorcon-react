import { useEffect, useState } from "react";
import { getData } from "../../utils/data-utils";

type Players = {
  currentcount: number;
  maxcount: number;
  players: Player[];
};

type Player = {
  name: string;
};

export default function PlayersList() {
  const [Players, SetPlayers] = useState<Players>();

  const fetchPlayers = async () => {
    console.log("Fetching Players");
    const players = await getData<Players>(
      "http://localhost:8080/api/v1/players"
    );
    SetPlayers(players);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div>
      <h3>Current: {Players?.currentcount}</h3>
      <h3>Max: {Players?.maxcount}</h3>
      <ul>
        {Players?.players.map((player) => {
          return <li key={player.name}>{player.name}</li>;
        })}
      </ul>
      <div>
        <button onClick={fetchPlayers}> Refresh</button>
      </div>
    </div>
  );
}
