import { View, Text, Image } from 'react-native'
import { EthPrice } from './SubInfo'

import {COLORS, FONTS, SIZES } from "../constants"

const DetailsBid = ({bid}) => {
  return (
    <View  style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.font
      }}>
      <Image 
      source={bid.image}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
      }}
      />
      <View>
        <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
        }}>Placed by {bid.name}</Text>
        <Text style={{
            fontSize: SIZES.small-2,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
        }}>{bid.date}</Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  )
}

export default DetailsBid