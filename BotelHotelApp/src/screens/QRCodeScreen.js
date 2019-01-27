import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
  } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

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
    render() {
        return (
            <View style={styles.container}>
                <QRCode
                    value="http://awesome.link.qr"
                />
            </View>
        );
      };
}
