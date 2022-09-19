import {useState} from "react";
export default function ConditionalComponent() {
    const [display, setDisplay] = useState(true)
    let output

    if (display){
      
              output = <h2> This is a conditional component </h2>    
    } else{
        
             output = <h3> nothing to show. </h3>
            

    }
    return <div>{output}</div>

        
}


// // render by element, cleaner way to do it.
// let output;
// if display {
//     output = <h3> This is a conditional component </h3>

// } else {
//     output = <h3> nothing to see here  </h3>
// }

// return <div>{output}</div>
