import React from 'react'
import {StyleSheet , View} from 'react-native'
import {TryView} from './src/components/pages/try-view'

export default class App extends React.Component {
  render() {
    return (
      <TryView />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
