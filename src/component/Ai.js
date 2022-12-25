import React from "react";
import User from "./User";

export default function Ai(props) {
  return (
    <>
      
      <div className="playbox d-flex  flex-column  flex-lg-row  ">
        <User setUserMove={props.setUserMove} setPlayer1={props.setPlayer1} player1={props.player1} playerScore={props.playerScore} />
        <p className="display-1 text-center my-2 text-light vs">vs</p>
        <div className="ai ">
            <div className="box rounded-5 display-1 d-flex  flex-column justify-content-center align-items-center p-3  bg-light text-dark my-3 vh-70">
                <h3 className="text-center my-1">Computer</h3>
                 {(props.computer===-1) &&<p className="lead text-center  display-1 para">{props.computer===-1?'Waiting for your selection!':''} </p>}
                  <div className="">
                  {props.computer===-1?'':(props.computer===0)?'🪨':(props.computer===1)?'📜':'✂️'}
                  </div>
            </div>
        <h4 className='text-center text-success my-1'>{props.computerScore}</h4>
        </div>
      </div>
      <div className="text-light result">
        <p className="display-6"> Result :<span className="text-success"> {props.text}</span></p>
      </div>
      {(props.playerScore===10||props.computerScore===10)&&<div className="reset bg-light d-flex flex-column justify-content-center align-items-center p-3 ">
        <div className="lead text-dark">
        {props.playerScore===10?'Player1 Wins The Round':(props.computerScore===10)?'Computer Wins The Round':''}
          </div>
        <button className="btn btn-success btn-md" onClick={props.resetGame}>Reset</button>
      </div>
}
    </>
  );
}
