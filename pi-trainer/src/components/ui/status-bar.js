import * as React from 'react'
import {StyleSheet, View} from 'react-native'
import {Constants} from 'expo'

export const StatusBar = () =>
  <View style={styles.statusBar} />

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#F24949',
    height: Constants.statusBarHeight,
  },
})
