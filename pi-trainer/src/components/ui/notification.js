import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Easing,
} from 'react-native'
import {compose, withHandlers, onlyUpdateForKeys, lifecycle, withState} from 'recompose'
import {Column, Row} from './layout'
const {height, width} = Dimensions.get('window')

const enhance = compose(
  withState('positionX', 'setPositionX', () =>
    new Animated.Value(width)),
  lifecycle({
    componentDidMount() {

      Animated.sequence([
        Animated.timing(
          this.props.positionX,
          {
            toValue: 0,
            duration: 300,
          }
        ),
        Animated.timing(
          new Animated.Value(0),
          {
            toValue: 100,
            duration: 2000,
          }
        ),
        Animated.timing(
          this.props.positionX,
          {
            toValue: width,
            duration: 200,
          }
        )
      ]).start()
    }
  }),
//  onlyUpdateForKeys(['digits', 'errors', 'precentage']),
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

const StatelessNotification = ({positionX, title = 'title', body = 'body'}) =>
    <Animated.View
      style={{
        width: width,
        position: 'absolute',
        zIndex: 2,
        transform: [{translateX: positionX}],
        backgroundColor: '#EE5E5E',
      }}
    >
      <Column
        style={styles.column}
      >
      <Row>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </Row>
    </Column>
    </Animated.View>

const styles = StyleSheet.create({
  column: {
    justifyContent: 'center',
    height: 60,
    paddingLeft: 16,
    paddingRight: 16,
  },

  title: {
    fontWeight: 'bold',
    marginRight: 16,
    fontSize: 16,
    color: '#C44C4C'
  },

  body: {
    fontSize: 16,
    color: '#FFFFFF'
  }
})

export const Notification = enhance(StatelessNotification)
