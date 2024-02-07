import { React } from 'react';
import backgroundVideo from '../video/video1.mp4'
import "./StreamingStyles.css";
const Streaming=()=>{
    return(
        <div className= "streamingpage">
        
        <video autoPlay loop muted id = 'video'>
            <source src={backgroundVideo} type='video/mp4'/>
        </video>
        <div className="bg-overlay"></div>
        <div className="streamingtext">
            <h1>Streaming</h1>
            <h3>Powered By Advance AI tools</h3>
        </div>
        
        </div>
    );
}

export default Streaming