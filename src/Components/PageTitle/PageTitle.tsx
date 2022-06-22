import React from "react";

type TitlePropsType = {
    title: string
}

export const PageTitle = (props: TitlePropsType) => {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    );
}