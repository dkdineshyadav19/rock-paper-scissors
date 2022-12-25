import { useState, useEffect } from "react";
import "./App.css";
import Ai from "./component/Ai";

function App() {
  const [player1, setPlayer1] = useState(-1);
  const [computer, setComputer] = useState(-1);
  const [text, setText] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);


  const setComputerMove = () => {
    let random = Math.floor(Math.random() * 3);
    setComputer(random);
  };
  const setUserMove = (val) => {
    setComputerMove();
  
  };
  const resetGame=()=>{
    setComputerScore(0);
    setPlayerScore(0);
    setText('Choose a move');
    setComputer(-1);
  }


  useEffect(() => {
    const move=player1+''+computer;
  if(playerScore<10 && computerScore<10)
  {
    
    if(move==='02' || move==='10'||move==='21')
    {
      const player=playerScore+1;
      setPlayerScore(player);
      setText('Player Won!');

    }
    
    if(move==='01' || move==='12'||move==='20')
    {
      const ai=computerScore+1;
      setComputerScore(ai);
      setText('Computer Won!');
    }
    if(move==='00' || move==='11'||move==='22')
    {
      setText('Its a tie!');
    }
      
  }
     // eslint-disable-next-line
  }, [computer,player1]);
  return (
    <>
      <div className="container">
        <h1 className='text-center text-light my-2'>Rock, paper, scissors!</h1>
        <Ai
          player1={player1}
          setUserMove={setUserMove}
          setPlayer1={setPlayer1}
          computer={computer}
          playerScore={playerScore}
          computerScore={computerScore}
          text={text}
          resetGame={resetGame}
        />
      </div>
      
    </>
  );
}

export default App;
