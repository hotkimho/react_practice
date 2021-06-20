import React from "react"
import useInputs from "./useInputs";


const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    const { name, nickname } = state;


    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}></input>
                <input name="nickname" value={nickname} onChange={onChange}></input>
            </div>
            <div>
                <b>name : </b>{name}
            </div>
            <div>
                <b>nickname : </b>{nickname}
            </div>
        </div>
    )
}

export default Info;
