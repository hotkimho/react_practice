import React,{ useState } from "react";
import "./RefTest.css"

function RefTest() {
	const [password, setPassword] = useState({password: '',
	clicked: false,
	validated: false});

	const handleChange = (e) =>{
		setPassword({...password,password: e.target.value});
	}
	const handleButtonClick = () => {
		setPassword({...password,clicked: true, validated: password.password === "0000"});
		input.current.focus();
	}

	const input = React.createRef();

	const handleFocus = () => {


	}
	return(
		<div>
			<input
			type="password"
			value={password.password}
			onChange={handleChange}
			className={password.clicked ? (password.validated ? "success" : "failure") : ""}
			ref = {input}/>
			<button onClick={handleButtonClick}>검증!</button>
		</div>
	)
}

export default RefTest;