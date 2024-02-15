
import React, { useState } from 'react'

const UseStateHookComp = () => {
    const [count, setCount] = useState(0);
    const [myName, setMyname] = useState("Dwarkesh");
    const [friuts, setFriuts] = useState(["Apple", "Orange", "Grapes", "Banana", "Mango"]);

    const incrementcount = () => {
        setCount(count + 1);
    }

    const drecrementcount = () => {
        setCount(count - 1);
    }

    const getFriutBasket = () => {
        setFriuts(["Apple", "Orange", "Grapes", "Banana", "Mango"])
    };

    return (
        <div>
            <h2>This is UseStateHookComp !</h2>
            <p>Count value is : <strong> {count} </strong>    </p>
            <p>My name is : <strong> {myName} </strong>    </p>
            <button type="button" className='btn btn-primary mt-2' onClick={incrementcount} > Counter++   </button>
            {`        `}
            <button type="button" className='btn btn-primary mt-2' onClick={drecrementcount} > Counter--   </button>
            {`        `}
            <button type="button" className='btn btn-primary mt-2' onClick={() => setMyname("Dwarkesh Virkhare")} > SetMyName   </button>
            {`        `}
            <button type="button" className='btn btn-primary mt-2' onClick={() => {
                // setFriuts(["Apple", "Orange", "Grapes", "Banana", "Mango"])
                {
                    (<ul>
                        {friuts.map((val, index) => {
                            return <li key={index} > {val} </li>
                        })}
                    </ul>)
                }
            }}>getFruitBasket</button>

            {
                (<ul>
                    {friuts.map((val, index) => {
                        return <li key={index} > {val} </li>
                    })}
                </ul>)
            }

        </div>
    )
}

export default UseStateHookComp;
