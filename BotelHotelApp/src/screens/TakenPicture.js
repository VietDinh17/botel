import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    Button
  } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
})

export default class QRCodeScreen extends React.Component{
    
    handleRoute = () => {
        this.props.navigation.navigate('QR');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Authenticating.... </Text>
                <Text>You will receive a QR Code if you information is correct</Text>
                <Button onPress={this.handleRoute} >Get QR Code</Button>
            </View>
        );
      };
}
