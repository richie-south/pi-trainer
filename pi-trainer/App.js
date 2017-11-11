import React from 'react'
import {StyleSheet, View, TouchableNativeFeedback, Text} from 'react-native'
import {TryView} from './src/components/pages/try-view'
import {StackNavigator} from 'react-navigation'
import {StatusBar} from './src/components/ui/status-bar'

class App extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar/>
        <TouchableNativeFeedback
          onPress={() => {
            this.props.navigation.navigate('Try')
          }}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View style={styles.buttonFirst}>
            <Text style={styles.buttonText}>REFERENCE</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => {
            this.props.navigation.navigate('Try')
          }}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>PRACTISE</Text>
          </View>
        </TouchableNativeFeedback>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonFirst: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    flex: 1,
    backgroundColor: '#EE5E5E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 32,
    color: '#FFFFFF',
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
  },

  Try: {
    screen: TryView,
  },
}, {})
