import React from 'react'
import {
	AppRegistry,
	StyleSheet, 
	View, 
	TextInput, 
	TouchableOpacity,
	Text
	} from 'react-native'
import QRCode from 'react-native-qrcode'

const QRcode = () => {
	return (
		<View>
		<Text>URL QR CODE</Text>

		<QRCode />
		</View> 

		)
}

export default QRCode