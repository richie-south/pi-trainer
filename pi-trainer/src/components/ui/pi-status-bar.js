import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {compose, withHandlers, onlyUpdateForKeys} from 'recompose'
import {Column, Row} from './layout'
import {Notification} from './notification'

const enhance = compose(
  onlyUpdateForKeys(['digits', 'errors', 'precentage'])
)

const StatusProp = ({text, value}) =>
  <View style={styles.statusPropHolder}>
    <Text style={styles.title}>
      {text}
    </Text>
    <Text style={styles.value}>
      {value}
    </Text>
  </View>

const StatelessPiStatusBar = ({digits, errors, precentage, widthAnim}) =>
  <View
    style={{position: 'relative'}}
  >
    <Notification/>
    <Column>
      <Row>
        <StatusProp
          text='digits'
          value={digits}
        />
        <StatusProp
          text='errors'
          value={errors}
        />
        <StatusProp
          text='success rate'
          value={precentage}
        />
      </Row>
    </Column>
  </View>

const styles = StyleSheet.create({
  statusPropHolder: {
    marginBottom: 8,
    height: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 12,
    color: '#C44C4C'
  },

  value: {
    fontSize: 16,
    color: '#FFFFFF'
  }
})

export const PiStatusBar = enhance(StatelessPiStatusBar)
