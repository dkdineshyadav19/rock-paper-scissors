import {React }from 'react'

export default function User(props) {
  
  const handleEmotes =(e)=>{
    props.setPlayer1(e);
    props.setUserMove(e);
  }

  return (
    <div>
      <div className="user display-1  p-3 rounded-5 bg-light text-dark my-2">
          <h3 className='text-center  my-2'>Player 1</h3>
          <div className=" row emotes d-flex justify-content-center align-items-center my-3  ">
            <span className="col emote rounded-5" onClick={()=>{handleEmotes(0)}}>🪨</span> 
            <span className="col emote rounded-5" onClick={()=>{handleEmotes(1)}}>📜</span>
            <span className="col emote rounded-5" onClick={()=>{handleEmotes(2)}}>✂️</span>
          </div>
          
        </div>
        <h4 className='text-center text-success'>{props.playerScore===-1?'0':props.playerScore}</h4>
    </div>
  )
}
