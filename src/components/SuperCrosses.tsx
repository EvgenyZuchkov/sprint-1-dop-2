import * as React from "react";

type Cross = {
    id: number,
    model: string,
    size: string
}

type Props = {
    crosses: Cross[],
    children: React.ReactNode
};


export const SuperCrosses = ({crosses, children}: Props) => {
    return (
        <div>
            <ul>
                {crosses.map((crosse, index) => (
                    <li key={index}>
                        <div>{crosse.id}</div>
                        <div>{crosse.model}</div>
                        <div>{crosse.size}</div>
                    </li>
                ))}
            </ul>
            {children}

            <hr/>
        </div>
    );
};