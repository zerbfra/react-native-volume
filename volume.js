import { NativeModules, NativeAppEventEmitter, Platform } from 'react-native'

const isAndroid = () => Platform.OS !== 'ios'
const RNVolume = isAndroid ? NativeModules.RNVolume : undefined

export function getVolume () {
  return RNVolume ? RNVolume.getVolume() : 0
}

export function setVolume (volume) {
  if (RNVolume) RNVolume.setVolume(volume)
}

export function muteVolume () {
  if (RNVolume) RNVolume.muteVolume()
}

export function unmuteVolume () {
  if (RNVolume) RNVolume.unmuteVolume()
}

export function getMaxVolume () {
  return RNVolume ? RNVolume.maxVolume : 1
}

export function onVolumeChange (listener) {
  NativeAppEventEmitter.addListener('volumeChange', data => {
    listener(data.volume)
  })
}
