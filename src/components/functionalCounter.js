import {userState} from "react"
function FunctionalCounter() {
    const [counter, setCounter] = userState(0)

    const increment = () =>{
        setCounter(counter+1)
    }


    return (
        <div>
            <div>Counter value: {counter}</div>
            <div>
                <button onClick={increment}>Increment</button>
            </div>



        </div>
    ) 
}