export default function Guess(){
    function HandleGuess(){
        
    }
    return(
        <>
        <h1>Welcome to guess the number</h1>
        <input type="text" placeholder="Guess the number"/>
        <button onClick={HandleGuess}>Guess</button>
        </>
    )
}