import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  chatAi: [],
  imageAi: [],
  isLoading: false,
};
export const chatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_ANSWER:
      return {
        ...state,
        chatAi:[...state.chatAi,payload],
        isLoading:false
        }
      case ActionTypes.GET_DATA_START:
        return{
          ...state,
          isLoading:true
        }
      case ActionTypes.GET_IMAGE:
       
        return{
          ...state,
          imageAi:[...state.imageAi,payload],
          isLoading:false
        }

    default:
      return state;
  }
};
