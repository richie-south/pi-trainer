export const textSize = (state = 60, action) => {
  switch (action.type) {
  case 'INCREASE_TEXT_SIZE':
    return action.payload > state
      ? action.payload
      : state
  case 'DECREASE_TEXT_SIZE':
    return action.payload < state
      ? action.payload
      : state
  default:
    return state
  }
}

export const groupSize = (state = 8, action) => {
  switch (action.type) {
  case 'INCREASE_GROUP_SIZE':
    return action.payload > state
      ? action.payload
      : state
  case 'DECREASE_GROUP_SIZE':
    return action.payload < state
      ? action.payload
      : state
  default:
    return state
  }
}
