import "../../node_modules/video-react/dist/video-react.css"; // import css
import "./VideoPlayer.css";

import { Player, ControlBar } from 'video-react';
import { React, Component } from 'react';

import Chapter from '../components/Chapter';

import data from '../backend.json';
const chapters = data.Chapters



export default class VideoPlayer extends Component {
  constructor(props, context) {
    super(props, context);

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  load() {
    this.player.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState();
      this.player.seek(player.currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.player.seek(seconds);
    };
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.playbackRate = player.playbackRate + steps;
    };
  }

 

  render() {
    return (
      <div>
        <Player
          ref={player => {
            this.player = player;
          }}
          autoPlay
        >
          <source src={data.Film.file_url} />

          <ControlBar autoHide={false} />
        </Player>
        <div className="py-3">
          <button onClick={this.play} className="mr-3">
            play()
          </button>
          <button onClick={this.pause} className="mr-3">
            pause()
          </button>
          <button onClick={this.load} className="mr-3">
            load()
          </button>
        </div>
        <div className="pb-3">
          <button onClick={this.changeCurrentTime(10)} className="mr-3">
            currentTime += 10
          </button>
          <button onClick={this.changeCurrentTime(-10)} className="mr-3">
            currentTime -= 10
          </button>
          <button onClick={this.seek(50)} className="mr-3">
            currentTime = 50
          </button>
        </div>
        <div class="chapters-list">
          {chapters.map((item, index) => (
            <Chapter title={item.title} pos={item.pos} /*onClick={this.playOnPos(item.pos)}*/></Chapter>
          ))}
        </div>
             
      </div>
    );
  }
}