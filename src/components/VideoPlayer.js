import "../../node_modules/video-react/dist/video-react.css"; // import css
import "./VideoPlayer.css";

import { Player, ControlBar } from 'video-react';
import { React, Component } from 'react';

import data from '../backend.json';
const chapters = data.Chapters

export default class VideoPlayer extends Component {

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
  }

  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  componentDidUpdate(prevProps) {
    if (this.props.timestamp !== prevProps.timestamp) {
      if (this.props.timestamp) {
        this.player.seek(this.props.timestamp);
      }
    }
  }

  handleStateChange(state) {
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
      this.timestamp = seconds
      this.player.seek(this.timestamp);
    };
  }

  seek(seconds) {
    return () => {
      this.player.seek(seconds);
    };
  }

  render() {
    return (
      <div className="VideoPlayer">
        <Player class="player"
          ref={player => {
            this.player = player;
          }}
          autoPlay
          muted
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