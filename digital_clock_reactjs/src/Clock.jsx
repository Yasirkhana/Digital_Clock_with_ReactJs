import React,{useState} from 'react'
import './index.css'

const Clock = ()  => {

    let time = new Date().toLocaleTimeString();
    const [Time,setTime] = useState(time)

    const upTime = () => {
        time = new Date().toLocaleTimeString();
        setTime(time);
    }
setInterval(upTime,1000)
return (    
<>
    <div className = 'MainClock'>
       
       <h1> {Time}</h1>
      <div className='contact'>
       <h2>BY: YASIR KHANA</h2>
       <h2>Email: Khan10055yasir@gmail.com</h2>
       </div>
    </div>

</>
)
};

export default Clock; 