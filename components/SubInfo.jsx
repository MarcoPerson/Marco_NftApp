import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

export const NFTTitle = ({title, subtitle, titleSize, subtitleSize}) => {
  return (
    <View>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: titleSize,
        color: COLORS.primary,
      }}>{title}</Text>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: subtitleSize,
        color: COLORS.primary,
      }}>{subtitle}</Text>
    </View>
  )
}
export const EthPrice = ({price}) => {
  return (
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
    }}>
        <Image 
        source={assets.eth}
        resiseMode="contain"
        style={{
            width: 20,
            height: 20,
            marginRight: 2
        }}
         />
      <Text style={{
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        color: COLORS.primary,
      }}>{price}</Text>
    </View>
  )
}
export const ImageIcone = ({imgUrl, index}) => {
  return (
    <Image 
    source={imgUrl}
    resizeMode="contain"
    style={{
        width: 50,
        height: 50,
        marginLeft: index === 0 ? 0 : -SIZES.font
    }}
    />
  )
}
export const People = ({data}) => {
  return (
    <View style={{
        flexDirection: 'row',
    }}>
      {data.bids.map((person, index) => (
        <ImageIcone imgUrl={person.image} index={index} key={`person_${index}`} />
      ))}
    </View>
  )
}
export const EndDate = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
  return (
    <View style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%',
    }}>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary,
      }}>Ending in</Text>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary,
      }}>{`${getRandomInt(23)}h ${getRandomInt(59)}m`}</Text>
    </View>
  )
}
export const SubInfo = ({data}) => {
  return (
    <View style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }}>
      <People data={data} />
      <EndDate />
    </View>
  )
}

