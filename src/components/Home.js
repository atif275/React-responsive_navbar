import "./HomeStyles.css";
import { React } from 'react';
import backgroundVideo from '../video/video.mp4'
const Home=()=>{
    return(
        <div className= "homepage">
        
        <video autoPlay loop muted id = 'video'>
            <source src={backgroundVideo} type='video/mp4'/>
        </video>
        <div className="bg-overlay"></div>
        <div className="hometext">
            <h1>Echelon Object Detection</h1>
            <h3>Powered By Advance AI tools</h3>
        </div>
        
        </div>
    );
}

export default Home
//  import startStream from "./startStream"
//function Home() {
    // function startStream () {
    //     console.log(' start stream button pressed');

    //     fetch('/start_stream')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('Start Stream:', data);
    //             document.getElementById('videoStream').src = '/video_feed';  
    //         });
    // }
    // function stopStream() {
    //     console.log(' stop stream button pressed');

    //     fetch('/stop_stream')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('Stop Stream:', data);
    //             document.getElementById('videoStream').src = ''; 
    //         });
    // }
    // function detectionButton(){
    //     console.log("detection button pressed")
    //     //this.innerHTML="<div class= 'loader'></div>"   
    //     setTimeout(()=>{
    //         // this.innerHTML="Detection Done";
    //         // this.style="background : #f1f5f4; color: #333; pointer-events: none";
    //     },2000)
    // }
    // function playButton() {

    //     videoPlayer.innerHTML = `<video id = vi src="/video/${videoDropdown.value}" controls></video>`;
    //     // function playVideo(videoSource) {
    //     //     var videoPlayer = document.getElementById("videoPlayer");
    //     //     videoPlayer.src = videoSource;
    //     //     videoPlayer.load();
    //     //     videoPlayer.play();
    //     //     toggleDropdown(); // Close the dropdown after selecting a video
    //     //   }
    //     //   playVideo(`/videos/${videoDropdown.value}`);

    // };

    // const videoDropdown = document.getElementById('videoDropdown');
    // const videoPlayer = document.getElementById('videoPlayer');
    // detectionButton= document.querySelector(".detectionButton");
    // //playButton= document.querySelector(".playButton");
    // fetch('/videos').then(response => response.json()).then(videos => {
    //     videos.forEach(video => {
    //         let option = document.createElement('option');
    //         option.value = video;
    //         option.textContent = video;
    //         videoDropdown.appendChild(option);
    //     });
    // });

  //return (
   // <>
      {/* <div className="home">
        <h1>React Navbar</h1>
        <h3>Difficulty Level: 0;</h3>
      </div> */}
      {/* <div class="button-container">
        <button id="startButton" onClick={startStream}>Start Stream</button>
        <button id="stopButton" onClick={stopStream}>Stop Stream</button>
      </div>
    
    
        <select id="videoDropdown">
            <option value="">Select a Video</option>
        </select>
    
        <button class="playButton" onClick={playButton}>PLAY</button>
        <button class="detectionButton" onClick={detectionButton}>DETECTION</button>
        <div id="videoPlayer"></div>
    

        <img id="videoStream" alt="Video Stream"/> */}
       
  //  </>
 // );
//}

//export default Home;

// handleClick = () =>{
//     this.setState({clicked: !this.state.clicked})
//  }


//  startStream =() => {

//     fetch('/start_stream')
//         .then(response => response.json())
//         .then(data => {
//             console.log('Start Stream:', data);
//             document.getElementById('videoStream').src = '/video_feed';  
//         });
// }