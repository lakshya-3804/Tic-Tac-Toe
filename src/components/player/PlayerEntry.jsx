import './playerEntryStyle.css';
let play1="";
let play2="";
function PlayerEntry(){
    
    function submit(e){

        e.preventDefault();
        play1=e.target.form[0].value
        play2=e.target.form[1].value
        // e.target.form[0].value=""
        // e.target.form[1].value=""
    }    
    return(
        <div className="playNames">
            <form action="">
                <label>X :</label>
                <input type="text" placeholder="player 1" title="Enter name of player 1"/><br />
                <label>O :</label>
                <input type="text" placeholder="player 2" title="Enter name of player 2"/><br />
                <button onClick={submit}>OK</button>
            </form>
        </div>
    )
}

export {play1,play2};
export default PlayerEntry;