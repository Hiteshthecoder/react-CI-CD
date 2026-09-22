import React, { useEffect, useState } from 'react'

const DateAndTimeComponent = () => {

    let [date, setDate] = useState(new Date());

    useEffect(() => {
        let timeInterval = setInterval(() => {
            let currDate = new Date();
            setDate(currDate);
        }, 1000);

        return () => clearInterval(timeInterval)
    }, [])

    return (
        <div>
            <h1>{date.getHours()} {date.getMinutes()} {date.getSeconds()} </h1>
        </div>
    )
}

export default DateAndTimeComponent
