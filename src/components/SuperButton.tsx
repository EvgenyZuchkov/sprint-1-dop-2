import * as React from "react";
import {ButtonHTMLAttributes} from "react";
import s from './SuperButon.module.css'

// type SuperButtonProps = {
//     onClick: () => void;
//     color: string;
//     title?: string;
//     children?: React.ReactNode;
// };

type ColorsProps = {
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
    color5?: string;
    color6?: string;
}

type SuperButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    backgroundColors?: string;
} & Omit<ColorsProps, 'color4' | 'color5' | 'color6'>

export const SuperButton = (props: SuperButtonProps) => {
    const {onClick, color, children, title, className, disabled, ...restProps} = props

    // const finalClassName : string = s.button
    //
    //     + (disabled
    //         ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s.red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (className ? ' ' + className : '')

    const finalClassName = `
    ${s.button}
    ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default}
    ${disabled ? s.disabled : ''}
    `

    return (
        <button className={finalClassName}>{children}</button>
    );
};