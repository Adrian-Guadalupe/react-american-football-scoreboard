//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [currentDown, setCurrentDown] = useState(3);
  const [quarter, setQuarter] = useState(4);

  // Home Buttons Functionality
  const homeTouchdown = () => setHomeScore(homeScore + 7);
  const homeFieldgoal = () => setHomeScore(homeScore + 3);

  // Away Buttons Functionality
  const awayTouchdown = () => setAwayScore(awayScore + 7);
  const awayFieldgoal = () => setAwayScore(awayScore + 3);

  // Scoreboard Functionality Buttons
  const nextDown = () => setCurrentDown(currentDown + 1);
  const nextQuarter = () => setQuarter(quarter + 1);


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore + 32}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore + 32}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFieldgoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFieldgoal}>Away Field Goal</button>
        </div>
      </section>

      {/* Stretch */}
      <section className="scoreboard__functionality">
        <div className="scoreboard__functionality__buttons">
          <button className="down_button">Down</button>
          <button className="quarter_button">Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
