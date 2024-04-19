import { useState, useEffect } from "react"

const Counter = () => {

    const [value, setValue] = useState(0)
    const [timing, setTiming] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setValue(value + 1)

        }, 1000)
        // Error! useEffect runs after every render without the dependencies array, causing infinite loop
    });

    setTimeout(() => {
        setTiming(timing + 1)
    }, 2000)

    return (

        <div>
            {value} <br />
            {timing}
        </div>

    )

}

export default Counter