import React,{useState} from "react";
import { InputForm } from "./Component/InputForm";
import { OutputLeaderboard } from "./Component/OutputLeaderboard";
import  User  from "./Component/Output";
function App() {
  const [leaderboard, setLeaderboard] = useState([]);
  const updateLeaderboardArray = eachEntry => {   setLeaderboard([...leaderboard, eachEntry]);
  };
  console.log(leaderboard);
  return (
    <div className="container mt-4">
      <User/>
    </div>
  );
  }
export default App;