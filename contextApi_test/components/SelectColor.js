import ColorContext from "../contexts/color";
import { Component } from "react";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

class SelectColor extends Component {
    static contextType = ColorContext;

    handleSetColor = color => {
        this.context.actions.setColor(color);
    }

    handleSetSubcolor = subColor => {
        this.context.actions.setSubcolor(subColor);
    }
    render() {

        return (
            <div>
                <h2> select color</h2>
                <div style={{ display: "flex" }} >
                    {colors.map(color => (
                        <div key={color}
                            style={{
                                background: color,
                                width: "24px",
                                height: "42px",
                                cursor: "pointer"
                            }}
                            onClick={() => this.handleSetColor(color)}
                            onContextMenu={(e) => {
                                e.preventDefault();
                                this.handleSetSubcolor(color);
                            }}
                        />
                    )
                    )}
                </div>


                <hr />
            </div >
        )
    }
}

export default SelectColor;
