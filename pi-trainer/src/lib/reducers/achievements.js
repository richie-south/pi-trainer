const initialAchievements = {
  recordPi: 0,
  time: 0,
}

export const records = (state = initialAchievements, action) => {
  switch (action.type) {
  case 'SET_RECORD_PI':
    return {
      ...state,
      recordPi: action.payload,
    }
  case 'SET_RECORD_TIME':
    return {
      ...state,
      time: action.payload,
    }
  default:
    return state
  }
}

export const isAchievementsActive = (state = false, action) => {
  switch (action.type) {
  case 'ACTIVATE_ACHIEVEMENTS':
    return true
  case 'DEACTIVATE_ACHIEVEMENTS':
    return false
  default:
    return state
  }
}

export const displayNewAchievement = (state = false, action) => {
  switch (action.type) {
  case 'DISPLAY_NEW_ACHIEVEMENT':
    return action.payload
  default:
    return state
  }
}
