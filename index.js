import React from "react";
import { AppRegistry, Environment, View, StyleSheet, Text, VrButton } from "react-360";


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
    return (
      <View style={styles.container}>
        {/* <iframe src="button.html" style={{ position: 'absolute', width: '100%', height: '100%', border: 'none' }} /> */}
        <View style={styles.ui}>
          {/* <VrButton onClick={() => console.log('Button clicked!')} style={styles.button}>
            <Text style={styles.buttonText}>Click me</Text>
          </VrButton> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ui: {
    display: "flex",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    width: 200,
    height: 50,
    transform: [{ translate: [300, -200, -5] }], // Adjust the Z-axis value as needed
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  }
});

AppRegistry.registerComponent("avatour_360", () => avatour_360);
