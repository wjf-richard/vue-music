import { palyMode } from '../common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: palyMode.sequence,
  currentIndex: -1
}

export default state