import React from 'react'
import {StyleSheet , View} from 'react-native'
import {TryView} from './src/components/pages/try-view'
import {StackNavigator} from 'react-navigation'
import { Constants } from 'expo'

class App extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <TryView />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#F24949",
    height: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#FF7F7F',
  },
})

 export default StackNavigator({
  Main: {
    screen: App,
    navigationOptions: {
      tabBarLabel: 'Train',
    },
  },
}, {})
