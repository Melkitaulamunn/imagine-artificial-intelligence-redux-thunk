import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer, getDataStart } from "../app/actions/chatActions";
import chatAi from "./chatAi"


const ChatAi = () => {
  
  const state=useSelector((state)=>state.chatState)
  const dispatch = useDispatch();
  const [prompt ,setPrompt]=useState("");

console.log("chatAi",state.chatAi)

  const handlesubmit=()=>{
    
    dispatch(getDataStart());
    dispatch(getAnswer(prompt));
  }

  const handleChange=(e)=>{
    setPrompt(e.target.value);
   
  };

  return (
    <div className="chat">
      <div className="list">
        {/*mesajı ekrana basıyoruz*/}
        {state.chatAi.map((message) => (
        <>
        <p className="prompt">{message.prompt}</p>
        <p className="answer">{message.answer}</p>
        </>
))}
{state.isLoading && <p>Loading..</p>}
</div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={handlesubmit}>GönDer📬</button>
      </div>
    </div>
  );
};

export default ChatAi;
