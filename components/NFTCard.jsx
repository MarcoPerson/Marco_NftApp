import { useNavigation } from '@react-navigation/core'
import { View, Text, Image } from 'react-native'
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants'
import { CircleButton, RectButton } from './index'
import { SubInfo, EthPrice, NFTTitle } from './SubInfo'

const NFTCard = ({data}) => {
    const navigation = useNavigation()
  return (
    <View style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
    }}>
      <View style={{
        width: "100%",
        height: 250,
        
      }}>
        <Image
        source={data.image}
        resizeMode="cover"
        style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
        }}
        />
        <CircleButton imgUrl={assets.heart} top={10} right={10} />

      </View>
      <SubInfo data={data} />
      <View style={{
        width: "100%",
        padding: SIZES.font
      }}>
        <NFTTitle
        title={data.name}
        subtitle={data.creator}
        titleSize={SIZES.large}
        subtitleSize={SIZES.small}
        />

        <View style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <EthPrice price={data.price} />
            <RectButton 
                minWidth={120}
                fontSize={SIZES.font}
                handlePress={() => navigation.navigate("Details", {data})}
            />

        </View>

      </View>

    </View>
  )
}

export default NFTCard