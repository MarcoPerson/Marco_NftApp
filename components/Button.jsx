import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES, FONTS } from '../constants'

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props
    }}
    onPress={handlePress}
    >
        <Image source={imgUrl} resizeMode="contain" style={{
            height: 25,
            width: 25,
        }} />

    </TouchableOpacity>
  )
}

export const RectButton = ({minWidth, fontSize, handlePress, ...props}) => {
  return (
    <TouchableOpacity style={{
      borderRadius: SIZES.extraLarge,
      backgroundColor: COLORS.primary,
      minWidth: minWidth,
      padding: SIZES.small,
      ...props
  }}
  onPress={handlePress}
  >
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: fontSize,
        color: COLORS.white,
        textAlign: 'center',
        }}>Place a bid</Text>

  </TouchableOpacity>
  )
}

