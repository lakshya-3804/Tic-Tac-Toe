import "./MainCardStyle.css";
import PlayerEntry,{play1,play2} from "../player/PlayerEntry";
import WinDisplay from "../screen/WinDisplay";
import { useState } from "react";


function MainCard() {
  let move = "X";
  function mark(e) {
    if (e.target.innerHTML === "&nbsp;") {
      e.target.innerHTML = move;
      move = move === "X" ? "O" : "X";
      checkWin();
    } else {
      alert("Block already filled!!");
    }
    console.log(player.X)
    if(play1!==''){
        player.X=play1;
    }
    if(play2!==''){
        player.O=play2;
    }
  }

    let player = {
      X:  "player 1",
      O:  "player 2",
    };


  let [sc, setsc] = useState("Win the Game");

  function checkWin() {
    const Btns = document.querySelectorAll(".gameBox button");
    let scr = "Win the Game";
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for(let i=0 ;i<winConditions.length; i++){
        const [a, b, c] = winConditions[i];
        if (
          Btns[a].innerHTML !== "&nbsp;" &&
          Btns[a].innerHTML === Btns[b].innerHTML &&
          Btns[b].innerHTML === Btns[c].innerHTML
        ) {
          scr = `${player[Btns[a].innerHTML]} wins`;
          Btns[a].style.fontSize='xx-large';
          Btns[a].style.fontWeight='bold';
          Btns[b].style.fontSize='xx-large';
          Btns[b].style.fontWeight='bold';
          Btns[c].style.fontSize='xx-large';
          Btns[c].style.fontWeight='bold';
          disable();
                    
          break;
        }
    }

    setsc(scr);
  }

  function disable(){
    const Btns = document.querySelectorAll(".gameBox button");
    Btns.forEach(btn=>btn.setAttribute('disabled','true'));
  }

  function resGame(){
    const Btns = document.querySelectorAll(".gameBox button");
    Btns.forEach(btn=>{
        btn.innerHTML="&nbsp;"
        btn.removeAttribute('disabled');
        btn.style.fontSize='large';
        btn.style.fontWeight='normal'
        setsc("Win the Game")
    })
}

  

  return (
    <>
    <div className="main">
      <PlayerEntry />
      <div className="gameBox">
        <button onClick={mark}>&nbsp;</button>
        <button onClick={mark}>&nbsp;</button>
        <button onClick={mark}>&nbsp;</button>
        <button onClick={mark}>&nbsp;</button>
        <button onClick={mark}>&nbsp;</button>
        <button onClick={mark}>&nbsp;</button>
        <button onClick={mark}>&nbsp;</button>
        <button onClick={mark}>&nbsp;</button>
        <button onClick={mark}>&nbsp;</button>
      </div>
      <WinDisplay textCont={sc} res={resGame} id="#go"/>
    </div>
    </>
  );
}

export default MainCard;
