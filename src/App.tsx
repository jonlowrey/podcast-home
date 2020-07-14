import React from 'react';
import dude from './assets/dude.png';
import woman from './assets/woman.png';
import header from './assets/header1.png';
import './App.css';
import { NavBar } from './components/NavBar';

const episodes = [
  {
    title: "Caren Young, Unplugged",
    imageUrl: "https://blacktechunplugged.files.wordpress.com/2020/06/caren-young.png",
    description: "Caren Young, who for the past 14 years helped Fortune 1000 companies build, market, and sustain products that are user-centric and based in research. She has helped organizations craft compelling stories, execute, iterate, and get results. Blending a background in the social sciences, advertising, product management and diversity/inclusion management, I am able to pull disparate items together, build a cohesive solution and inspire teams to get the job done."
  }
]

function App() {
  return (
    <div className="App">
      {/* <div className="headerImg">
      <img src={header} alt="" className="header" /> */}
      {/* </div> */}
      <NavBar />
      <div className="appContent">
        <HeaderContent />
        <EpisodeList />
      </div>
    </div>
  );
}


function HeaderContent() {
  return (
    <div className="headerContent">
      <h1>Black Tech Unplugged Podcast</h1>
      <div className="buttonDark">Subscribe To Podcast</div>
      <div className="latestEpisodeCard">
        <img src={woman} alt="" className="latestEpImg" />
        <div className="latestEpContent">
          <h3 className="latestEpTitle">Caren Young Unplugged</h3>
          <div className="latestEpDescription">
            Caren Young, who for the past 14 years helped Fortune 1000 companies build, market, and sustain products that are user-centric and based in research. She has helped organizations craft compelling stories, execute, iterate, and get results. Blending a background in the social sciences, advertising, product management and diversity/inclusion management, I am able to pull disparate items together, build a cohesive solution and inspire teams to get the job done.
        </div>
        </div>
      </div>
    </div>
  )
}

function EpisodeList() {
  return (
    <div className="episodes">
      {
        episodes.map((episode, index) => (
          <div
            className="card"
          >
            <img src={episode.imageUrl} alt="" className="epCardImg" />
            <div className="epCardContent">
              <p className="epCardTitle">
                {episode.title}
              </p>
              <span className="epCardDesciption">
                {episode.description}
              </span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default App;
