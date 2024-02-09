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
      this.player.seek(seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.player.seek(seconds);
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
        <div class="chapters-list">
          {chapters.map((item, index) => (
            <div class="chapter" onClick={this.changeCurrentTime(item.pos)}>
              <p class="chapter-title">{item.title}</p>
            </div>
          ))}
        </div>
             
      </div>
    );
  }
}