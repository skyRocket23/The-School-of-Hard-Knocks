import './App.css'
import pict from './pict.jpeg'
import { useState } from 'react';

function App() {
  
  const historyValue = "Academics:<br/> <br/>🔥I final year student of Btech Cse.(8.5cgpa) <br/> <br/>🔥 I love problem solving and have solved 1000+ problems on codeforces and leetcode combined <br/> <br/> 🔥I love Mern stack";
  const visionValue = "My Vision:<br/> <br/>🔥 Building innovative and impactful software solutions that help people and organizations achieve their goals.<br/> <br/>🔥 Contributing to the development of cutting-edge technologies and tools that improve the efficiency and effectiveness of software development.<br/> <br/>🔥Collaborating with a diverse team of engineers and stakeholders to create software that meets the needs of users and exceeds their expectations.";
  const goalsValue = "My Goals:<br/> <br/>🔥Continuously improving and optimizing software development processes to increase efficiency and productivity.<br/> <br/>🔥Staying up-to-date with the latest industry trends and best practices to remain competitive and innovative.<br/> <br/>🔥Building strong relationships with stakeholders, including clients, team members, and end-users, to ensure successful collaboration and project outcomes.";

  const [content,setContent] = useState(historyValue);
  const [history,setHistory] = useState(true);
  const [vision,setVision]  = useState(false);
  const [goals,setGoals] = useState(false);

  const contentHistory = () => {
    setContent(historyValue);
    setHistory(true);
    setVision(false);
    setGoals(false);
  }


  const contentVision = () => {
    setContent(visionValue);
    setHistory(false);
    setVision(true);
    setGoals(false);
  }

  const contentGoals = () => {
    setContent(goalsValue);
    setVision(false);
    setGoals(true);
  }

  return (
    <div className='app'>
      <div className="app__heading">
        <h1>About</h1>
        <p>I am skyRocket23, specialist programmer at infoCorp. </p>
      </div>

      <div className="app__content">
        <img src="https://curioustushar.github.io/react-sample-projects/tabs/static/media/hero-bcg.1486d4061cd0252b9a21.jpeg" alt="" />
        <div className="app__describe">
          <button onClick={contentHistory} class={history?'selected':'unSelected'}>Academics</button>
          <button onClick={contentVision} class={vision?'selected':'unSelected'}>Vision</button>
          <button onClick={contentGoals} class={goals?'selected':'unSelected'}>Goals</button>
           <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
      </div>

     
    </div>
  );
}

export default App;
