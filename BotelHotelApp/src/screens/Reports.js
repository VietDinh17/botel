import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar } from 'react-native-elements';


class Reports extends React.Component{
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#0cc',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  render(){
    return(
      <View>
        <Text>Reports</Text>
      </View>
    )
  }
}

export default Reports;


