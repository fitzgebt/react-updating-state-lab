// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component { 
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        };
      }

      handleBitrate = () => {
          this.setState({
              settings: {
                  ...this.state.settings,
                  bitrate: 12
                }, 
            })
        }
        
        handleResolution = () => {
            this.setState({
                settings: {
                  ...this.state.settings,
                  video: {
                      ...this.state.settings.video,
                      resolution: "720p",
                  }
              }
          })
      }

      handleTest = () => {
          debugger
      }

      render() {
          return (
              <div>
                <button className="bitrate" onClick={this.handleBitrate}>Bitrate:{this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.handleResolution}>Resolution: {this.state.settings.video.resolution}</button>
                <div>Resolution: {this.state.settings.video.resolution}</div>
                <div>Bitrate: {this.state.settings.bitrate}</div>
                <button class="test" onClick={this.handleTest}>Test</button>
              </div>
          )
      }


}

export default YouTubeDebugger;