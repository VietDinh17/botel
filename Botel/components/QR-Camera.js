import React, {Component} from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Camera from 'react-native-camera'
import QRCodeScanner from 'react-native-qrcode-scanner'

class QRCScanner extends Component {
	
		state={
			qrCode: ''
		}

		onBarCodeRead = (e) => this.setState({qrcode: e.data});

		render(){
			return(
				<View style={style.container}>
					 <QRCodeScanner 
					 	onBarCodeRead={this.onBarCodeRead}
					 	aspect={Camera.constants.Aspect.fill}
		                style={styles.preview}
		                aspect={Camera.constants.Aspect.fill}
                     >
                     </QRCodeScanner>
                      <Text style={{
					        backgroundColor: 'white'
					        }}>{this.state.qrcode}
					    </Text>
				</View>
				)
		}
	
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default QRCamera
