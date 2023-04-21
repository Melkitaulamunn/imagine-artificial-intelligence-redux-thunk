
import { useState } from 'react';
import ChatAi from '../components/chatAi';
import ImageAi from '../components/imageAi';




const MainPage = () => {
    const [isChatMode,setIsChatMode]=useState(true)
    const handleToggleMode=()=> {
    setIsChatMode(!isChatMode)
  }
    
  return (
    <div className='chat-bot'>
        <h1>IM💭G🎈NE!</h1>
        <button onClick={handleToggleMode}>
            {
                isChatMode? "Hadiii Bi ReSim DüşLee..🎨" : "Bir şEy SoR🔮"
            }

        </button>
        {
            isChatMode ? <ChatAi/> : <ImageAi/>
        }
      
    </div>
  )
}

export default MainPage
