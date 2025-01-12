import './WinDisplayStyle.css'

function WinDisplay(props){
    return(
        <div className="winScreen" >
            <h1>{props.winner || props.match}</h1>
        </div>
    )
}

export default WinDisplay;