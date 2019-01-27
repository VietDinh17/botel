import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import {FetchVehicles} from './token'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  componentDidMount(){
    FetchVehicles();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


//eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ1cm46YWlkOjEzMzliNTgxLWE1MWEtNGEyZi05OGY3LWE3ODljYmE4OGZmOSIsInN1YiI6InVybjphaWQ6MTMzOWI1ODEtYTUxYS00YTJmLTk4ZjctYTc4OWNiYTg4ZmY5IiwicG95bnQuc2N0IjoiSiIsInBveW50Lm9yZyI6Ijk2YTg3ZmUzLWViY2ItNDFhYS1iYjEwLWJhNDk2MjhlOTMyYSIsImlzcyI6Imh0dHBzOlwvXC9zZXJ2aWNlcy5wb3ludC5uZXQiLCJwb3ludC5raWQiOjYxNTUyNDYxNTI4MjcxNDE3NzcsInBveW50LmF0eSI6IlMiLCJleHAiOjE1NDg2MjkyNTIsImlhdCI6MTU0ODU0Mjg1MiwianRpIjoiNDJiYmE4NzItNjIxYS00MjkwLTg4NWYtY2M4YThiNDE2YjA5In0.QkGH0iGwbCF7lAZ23oxwgT8qCjVhzhOhIhI-0gvEk0Z1MzaN72AdTuuys4VEDM05gclFOyfed9aTYyWCepGzJlU9LcJ6g1sKSCJT-x6KluE-IxpYinuWxirDxNyU_Wfc-Lh-M_YmhlQF1vvG0ea5qsIW51YXUdR0xN5MLJCDT1dLNbQlTUFI5JX0_VMInRCxpIbzGw5h13vsurovi2AvhnjdCSgFK7jJY0l8f77V7m7dejVo9sLyOipOhx4FkV-CnljO74Myzil6l5fBM_xLLbc31mP9zU7OnHGIUALTz7bkJRMMp4ZPb4GWpkH4HrVrSxC8hY-mDPwl4JRPcF-yQA


//Business Id: faff4562-8490-4405-a109-268a8b4a16db
//Store Id: 1f0ceab0-8ab3-4d5a-9a4a-f477f06501c4
