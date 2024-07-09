import React from "react";

export default function FormattedDate(props) {
    if (!(props.date instanceof Date)) {
        return <div>Invalid date</div>;
    }

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();

    // Add leading zero if needed
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return <div>{day} {hours}:{minutes}</div>;
}

