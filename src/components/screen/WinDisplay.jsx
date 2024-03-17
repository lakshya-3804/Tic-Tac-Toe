import './WinDisplayStyle.css'

function WinDisplay(props){

    
    return(
        <div className="winScreen" >
            <h1>{props.textCont || "Win The Game !!"}</h1>
            <button className="reset" onClick={props.res}>Play Again</button>
        </div>
    )
}

export default WinDisplay;