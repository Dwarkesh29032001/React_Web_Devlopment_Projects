import React , {useEffect, useState} from 'react'



const UseEffectHookComp=()=> {
    const [count, setCount] = useState(0);
    const [Sal, setSal] = useState(10000);
    // Similar to componentDidMount and componentDidUpdate:
    // 1. with no dependency  (goes to Render infinite times)
    // useEffect(()=>{ 
    //     setCount(count+1)
    // })

    //2 . using Dependency as a Blank Array   (here useEffectHook  extustes only one time)
// useEffect(()=>{ 
//         setCount(count+1)
//     },[])



    //3. excute useEffect when dependency value change

    const incrementsalary =()=>{
        setSal(Sal+1000);
    }

    useEffect(()=>{
        setCount(count + 1)
    },[Sal])


    return (
        <div>
            <h2>This is UseEffectHookComp ! </h2>
            <p> Count  value is : <strong> {count}  </strong>  </p>
            <p> My salary is : <strong> {Sal}  </strong>  </p>
            <button type="button" onClick={incrementsalary} > incrementSalary </button>
           
        </div>
    )
}

export default UseEffectHookComp
