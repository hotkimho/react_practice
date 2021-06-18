import { useState } from "react";


function EventPractice() {
  const [input, setInput] = useState({ name: "", message: "" });

  const { name, message } = input;

  const onChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value
    })
  }
  function onClick() {
    alert(input.name + " - " + input.message);
    setInput({
      ...input,
      message: ""
    });
  }
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="여기에 입력해!"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="message"
        value={message}
        onChange={onChange}
      />
      <button onClick={onClick}>
        print</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <EventPractice />
    </div >
  );
}

export default App;
