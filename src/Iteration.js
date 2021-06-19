import React, { useState } from "react";

const Iteration = () => {
	const [names, setNames] = useState([
		{ id : 1, text : "눈사람"},
		{ id : 2, text : "얼음"},
		{ id : 3, text : "눈"},
		{ id : 4, text : "바람"}
	]);
	const [inputText, setInputText] = useState("");
	const [nextId, setNextId] = useState(5);


	const onChange = (e) => setInputText(e.target.value);
	const addName = () => {
		const name = {id : nextId,
		text : inputText};
		setNames(names.concat(name));
		setNextId(nextId + 1);
		setInputText("");
	}
	const deleteName = (id) => {
		const name = names.filter(name => name.id !== id);
		setNames(name);
	}

	const nameList = names.map(name => {
		return <li key={name.id} onDoubleClick={() => deleteName(name.id)}>{name.text}</li>
	});

	return (
		<div>
			<input value={inputText} onChange={onChange} />
			<button onClick={addName}>add</button>
			<button onClick={deleteName}>delete</button>
			<ul>
				{nameList}
			</ul>
		</div>
	)
}

export default Iteration;