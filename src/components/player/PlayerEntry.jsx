import './playerEntryStyle.css';
function PlayerEntry(props){
    
    function submit(e){
        e.preventDefault();
        props.setp1(e.target.form[0].value)
        props.setp2(e.target.form[1].value)
        e.target.form[0].disabled=true;
        e.target.form[1].disabled=true;
        props.setcO(0);
        props.setcX(0);
    }
    
    function rename(e){
        e.target.form[0].disabled=false;
        e.target.form[1].disabled=false;
        props.setp1("X");
        props.setp2("O");
        props.setcO(0);
        props.setcX(0);
    }
    
    return(
        <div className="playNames">
            <form action="">
                <label>X :</label>
                <input type="text" placeholder="player 1" title="Enter name of player 1"/><br />
                <label>O :</label>
                <input type="text" placeholder="player 2" title="Enter name of player 2"/><br />
                <button onClick={submit}>OK</button>
                <button type='reset' onClick={rename}>Rename</button>
            </form>
        </div>
    )
}

export default PlayerEntry;