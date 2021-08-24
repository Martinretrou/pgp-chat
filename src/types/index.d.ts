declare module 'redux-persist/lib/*'

export interface User {
  id: string
  email: string
  phone?: string
  name: string
}

export interface ChatMessage {
  id: number
  message: string
  sentAt: Date | string
  seenAt: Date | string
  sentBy: string
  publicKey: string
}
