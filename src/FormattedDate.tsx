import React from "react";

interface FormattedDateProps{
    date: Date;
}

export const  FormattedDate = (props: FormattedDateProps) => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()]

    let hours = props.date.getHours() < 10 ? `0${props.date.getHours()}` : props.date.getHours();

    let minutes = props.date.getMinutes() < 10 ? `0${props.date.getMinutes()}` : props.date.getMinutes();
   
    return (
        <span>
            {day} at {hours}:{minutes}
        </span>
    );
    
}