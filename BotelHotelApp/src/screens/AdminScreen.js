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
import { Card, ListItem, Button } from 'react-native-elements'


class AdminScreen extends React.Component{
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
        <ScrollView>
        <Card
          title='REPORTS'
          image={require('../../assets/images/chart-icon.png')}>
          <Button
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW' 
            onPress={() => this.props.navigation.navigate('Reports')}
          />
        </Card>
        <Card
          title='RESERVATION'
          image={require('../../assets/images/reservation.jpg')}>
          <Button
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW' 
            onPress={() => this.props.navigation.navigate('Reservation')}  
          />
        </Card>
        <Card
          title='PRODUCT'
          image={require('../../assets/images/inventory.png')}>
          <Button
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW'
            onPress={() => this.props.navigation.navigate('Production')} 
          />
        </Card> 
        <Card
          title='PROMOTION'
          image={require('../../assets/images/promotion.jpg')}>
          <Button
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW' 
            onPress={() => this.props.navigation.navigate('Promo')}  
          />
        </Card>
        </ScrollView>
      </View>
    )
  }
}

export default AdminScreen;


