import { ActionTypes } from "../constants/actionTypes";
import axios from "axios";



//senkron aksiyon
export const getDataStart = () => ({
  type: ActionTypes.GET_DATA_START,
  payload: true,
});


//asenkron kısa kullanım
export const getAnswer = (prompt)=> async(dispatch)=>{
  const options = {
    method: 'POST',
    url: 'https://openai80.p.rapidapi.com/chat/completions',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '460846e882msh8fe11f469969b5dp1d63adjsnae912673fb4e',
      'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
    },
    data: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${prompt}"}]}`
  };
const res = await  axios.request(options)  ;


  dispatch({
    type:ActionTypes.GET_ANSWER,
    payload:{prompt,answer:res.data.choices[0].message.content},

  });
};
export const getImage = (prompt)=> async(dispatch)=>{
 
  const options = {
    method: 'POST',
    url: 'https://openai80.p.rapidapi.com/images/generations',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '460846e882msh8fe11f469969b5dp1d63adjsnae912673fb4e',
      'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
    },
    data: `{"prompt":"${prompt}","n":2,"size":"1024x1024"}`
  };
  const res=axios.request(options);
  console.log("resim",res)
   
  

dispatch({
  type:ActionTypes.GET_ANSWER,
  payload:{prompt,answer:res.data.data}

});
}