import React from "react";

type StarsPropsType = {
    selected: boolean;
}

export const Stars = (props: StarsPropsType) => {
    if (props.selected === true) {
        return <span><b>star </b></span>;
    } else {
        return <span>star </span>;
    }

    return (
        <div>
            {props.selected}
        </div>
    );
}