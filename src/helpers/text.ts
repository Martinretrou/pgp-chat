import { fonts, colors, sizes } from '../theme'

export const getTextFontFamily = (font: string) => fonts?.[font] || fonts.default

export const getTextColor = (color: string) => colors[color] || colors.black

export const getTextFontSize = (size: string) => sizes[size] || sizes.m
