import "./MainCardStyle.css";

function MainCard(props) {
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
    
  }

    let player = {
      X:  props.p1,
      O:  props.p2,
    };


  function checkWin() {
    const Btns = document.querySelectorAll(".gameBox button");
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
    let flag=false;
    for(let i=0 ;i<winConditions.length; i++){
        const [a, b, c] = winConditions[i];
        if (
          Btns[a].innerHTML !== "&nbsp;" &&
          Btns[a].innerHTML === Btns[b].innerHTML &&
          Btns[b].innerHTML === Btns[c].innerHTML
        ) {
          flag=true;
          props.setwinner(`${player[Btns[a].innerHTML]} wins !!`);
          if(Btns[a].innerHTML==='X') props.setcX(props.countX+1);
          else props.setcO(props.countO+1);
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
    if(!flag){
      for(let i=0; i<Btns.length; i++){
        if(Btns[i].innerHTML==='&nbsp;'){
          return;
        }
      }
      props.setwinner('Match Draw !!');
      disable();
    }
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
    })
    props.setwinner('');
}

  

  return (
    <>
    <div className="main">
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
      <div className="resButtonDiv">
        <h3>{props.countX}</h3>
        <button onClick={resGame} className="resButton">
          <img src="https://img.icons8.com/?size=100&id=bDkQlpOV2TWB&format=png&color=000000" />
        </button>
        <h3>{props.countO}</h3>
      </div>
      <div className="resButtonDiv">
        <button onClick={()=>{props.setcO(0);props.setcX(0)}} style={{'width':'100px ', 'margin':'0px', 'backgroundColor':'teal' , 'color':'white'}}>Reset Counter</button>
      </div>
    </div>
    </>
  );
}

export default MainCard;
