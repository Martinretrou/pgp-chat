import { NavigationContainerRef } from '@react-navigation/native'
import * as React from 'react'

export const navigationRef = React.createRef<NavigationContainerRef>()

export const isReadyRef = React.createRef()

function navigate(name: string, params?: any) {
  const nav: any = navigationRef?.current
  nav?.navigate(name, params)
}

function goBack() {
  const nav: any = navigationRef?.current
  nav?.goBack()
}

function push(name: string, params?: any) {
  const nav: any = navigationRef?.current
  nav?.push(name, params)
}

function reset(option: any) {
  const nav: any = navigationRef?.current
  nav?.reset(option)
}

export default {
  navigate,
  goBack,
  reset,
  push,
}
