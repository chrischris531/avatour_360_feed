import React from "react";
import { AppRegistry, Environment, View } from "react-360";

import VideoModule from "VideoModule";

class avatour_360 extends React.Component {
  componentDidMount() {
    this.introVideo = VideoModule.createPlayer("introVideo");
    this.introVideo.play({
      source: {
        url: "https://video.360cities.net/storyandmorecom/01669269_Pyramids-Aerial-360-VR-Stock-video-Footage-at-Egypt-Ancient-pharaonic-video-footage-ID2-3-1920x960.mp4",
      },
    });

    Environment.setBackgroundVideo("introVideo");
  }

  render() {
    return <View />;
  }
}

AppRegistry.registerComponent("avatour_360", () => avatour_360);
