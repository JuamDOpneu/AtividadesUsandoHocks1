import { useState } from 'react';

function Like() {

    const [Likes, setLikes] = useState(0);
    const [Deslikes, setDeslikes] = useState(0);
    
  return (
      <>
    
        <div className='like'>
           
           <h2>Likes/Deslikes</h2>
    
           <p>Curtidas: {Likes}</p>
    
           <p>Deslikes: {Deslikes}</p>
    
           <button className='likes' onClick={() => setLikes(Likes + 1)}>Curtir</button>
    
           <button className='deslikes' onClick={() => setDeslikes(Deslikes + 1)}>Deslikes</button>     
   
        </div>
    </>
  );
}

export default Like;
