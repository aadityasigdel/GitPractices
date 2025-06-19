import { useState } from "react"

function NumberGuessed(){
    const [number,setnumber] = useState();
    return(
        <>
        The number U got is {}
        </>
    )
}