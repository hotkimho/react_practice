import ColorContext from "../contexts/color";
import React, { useContext } from "react";

const ColorBox = () => {
    const { state, actions } = useContext(ColorContext);

    return (
        <>
            <div
                style={{
                    width: "64px",
                    height: "64px",
                    background: state.color,

                }}
                onClick={() => {
                    actions.setColor("blue");
                }}>

            </div>
            <div
                style={{
                    width: "32px",
                    height: "32px",
                    background: state.subcolor
                }}>

            </div>
        </>
    );
}
export default ColorBox;
