import {combineReducers} from 'redux'
import {textSize, groupSize} from './size'
import {records, isAchievementsActive, displayNewAchievement} from './achievements'

export const rootReducer = combineReducers({
  items,
  timetravelIndex,
  records,
  isAchievementsActive,
  displayNewAchievement,
})
