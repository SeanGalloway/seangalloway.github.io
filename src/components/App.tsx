import React from 'react';
import '../css/App.css';
import ImageHolder from './ImageHolder';

function App() {
  return (
    <div className="App">
      <div id={"main-content-box"}>
        <div id={"header"}>
            <ImageHolder url="https://www.cs.odu.edu/~sgall/res/profilePic.jpg"/>
            <div id={"overview"}>
                <h1>
                    Sean Galloway
                </h1>
                <h3>
                    Software Engineer - Navient Solutions
                </h3>
                <h3>
                    Graduate student - Old Dominion University
                </h3>
                <h3>
                    Major - Computer Science
                </h3>
            </div>
        </div>
        <p>
            Hello! My name is Sean Galloway. I graduated this past May from Old Dominion University with a B.S. in Computer Science.
            I have now begun pursuit of my M.S. in Computer Science, and I expect to graduate in May 2022.
            I have always lived in Indianapolis, Indiana, so I will be completing this program online.

            I am currently employed as a software engineer at Navient Solutions, whose primary business line is in student loans.
            I am on the team that develops and maintains the application responsible for disbursing funds for these loans.
            I primarily work on the backend API of this application.

            Outside of work an school, I spend as much time as I can with others in my life.
            This can be in the evenings, pickup soccer games, meeting for lunch, and more.
            When I have some time on my hands, I also enjoy playing the piano and 3D design.
        </p>
        <div id="resume" >
            My Resume
        </div>
      </div>
    </div>
  );
}

export default App;
