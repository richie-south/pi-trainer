import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
} from 'react-native'
import {compose, withHandlers, onlyUpdateForKeys} from 'recompose'
import {Column, Row} from './layout'

const enhance = compose(
  withHandlers({
    padClick: ({onPress}) => (nr) => onPress(nr)
  }),
  onlyUpdateForKeys(['padClick'])
)

const NumberButton = ({padClick, text, style = undefined}) =>
<TouchableNativeFeedback
  onPress={padClick}
  background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
>
  <View
    style={[styles.button, style]}
  >
    <Text
      style={styles.butonText}
    >{text}</Text>
  </View>
</TouchableNativeFeedback>

const StatelessNumberpad = ({padClick}) =>
  <View
    style={styles.container}
  >
    <Column>
      <Row>
        <NumberButton
          text={7}
          padClick={padClick.bind(null, 7)}
        />
        <NumberButton
          text={8}
          padClick={padClick.bind(null, 8)}
        />
        <NumberButton
          text={9}
          padClick={padClick.bind(null, 9)}
        />
      </Row>
      <Row>
        <NumberButton
          text={4}
          padClick={padClick.bind(null, 4)}
        />
        <NumberButton
          text={5}
          padClick={padClick.bind(null, 5)}
        />
        <NumberButton
          text={6}
          padClick={padClick.bind(null, 6)}
        />
      </Row>
      <Row>
        <NumberButton
          text={1}
          padClick={padClick.bind(null, 1)}
        />
        <NumberButton
          text={2}
          padClick={padClick.bind(null, 2)}
        />
        <NumberButton
          text={3}
          padClick={padClick.bind(null, 3)}
        />
      </Row>
      <Row>
        <NumberButton
          text={0}
          padClick={padClick.bind(null, 0)}
        />
        <NumberButton
          text={'CLEAR'}
          style={styles.lightButton}
          padClick={padClick.bind(null, null)}
        />
      </Row>
    </Column>
  </View>


const styles = StyleSheet.create({
  lightButton: {
    backgroundColor: '#E35A5A',
    borderRadius: 4,
  },

  container: {
    backgroundColor: '#EE5E5E',
  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 76,

  },

  butonText: {
    fontSize: 32,
    color: '#FFFFFF'
  }
})

export const Numberpad = enhance(StatelessNumberpad)
