import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraScreen extends React.Component {
  state = {
    type: Camera.Constants.Type.back,
    photo: null
  };

  async componentDidMount() {
    // const { status } = await Permissions.askAsync(Permissions.CAMERA);
    // this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    // const { hasCameraPermission } = this.state;
    // if (hasCameraPermission === null) {
    //   return <View />;
    // } else if (hasCameraPermission === false) {
    //   return <Text>No access to camera</Text>;
    // } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ ref => {this.camera = ref;}}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <View >
            <TouchableOpacity
                style={{
                 // flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={async () => {
                    // let p = await this.camera.takePictureAsync();
                    // this.setState({ photo: p});
                    this.props.navigation.navigate('QR');
                  }}
                >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Take Picture{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    // }
  }
}