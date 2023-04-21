
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImage, getDataStart } from "../app/actions/chatActions";


const ImageAi = () => {
  const state=useSelector((state)=>state.chatState)
  const dispatch = useDispatch();
  const [prompt ,setPrompt]=useState("");

  const handleChange=(e)=>{
    setPrompt(e.target.value);
   
  };
  const handlesubmit=()=>{
    
    dispatch(getDataStart());
    dispatch(getImage(prompt));
  }


  return (
    
      <div className="chat">
        <div className="list">
          {/*mesajı ekrana basıyoruz*/}
          {state.imageAi.map((message) => (
          <>
          <p className="prompt">{message.prompt}</p>
          <img src={state.imageAi.answer[0].url} className="answer image-answer"/>
          <img src={state.imageAi.answer[1].url} className="answer image-answer"/>
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
  
}

export default ImageAi
