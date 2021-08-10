import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native'
import DeviceInfo from 'react-native-device-info'

export const appName = DeviceInfo.getApplicationName()
export const appVersion = DeviceInfo.getVersion()

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height
// based on iphone 7's scale
const scale = SCREEN_WIDTH / 375
const scaleHeight = SCREEN_HEIGHT / 667
const systemVersion = Number(DeviceInfo.getSystemVersion().split('.')[0])
export const isAndroid = Platform.OS === 'android'
export const isIOS = Platform.OS === 'ios'

export const normalize = (size: number, forHeight?: boolean) => {
  const newSize = size * (forHeight ? scaleHeight : scale)

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
export const statusBarHeight = isAndroid ? StatusBar.currentHeight : 20
export const isLowAndroidVersion = isAndroid && systemVersion < 8
