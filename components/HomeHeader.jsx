import { View, Text, Image, TextInput } from 'react-native'
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants'

const HomeHeader = ({onSearch}) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Image 
        source={assets.logo}
        resizeMode="contain"
        style={{
          width: 90,
          height: 25,
        }}
        />
        <View style={{
          height: 45,
          width: 45
        }}>
          <Image
          source={assets.Me}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 50,
            borderWidth: 2,
            borderColor: "white",
          }}
          />
          <Image
          source={assets.badge}
          resizeMode="contain"
          style={{
            width: 15,
            height: 15,
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
          />
        </View>
      </View>
      <View style={{
        marginVertical: SIZES.font, 
      }}>
        <Text style={{
          fontSize: SIZES.small,
          fontFamily: FONTS.regular,
          color: COLORS.white,
        }}>
          Hello Marco 👋
        </Text>
        <Text style={{
          fontSize: SIZES.large,
          fontFamily: FONTS.bold,
          color: COLORS.white,
          marginTop: SIZES.font/2,
        }}>
          Let's find gold 🛠️
        </Text>
      </View>
      <View style={{
        marginTop: SIZES.font,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.gray,
        borderRadius: SIZES.font,
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.small - 2,
      }}>
        <Image 
        source={assets.search}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
          marginRight: SIZES.base
        }}
        />
        <TextInput 
        placeholder="Search NFTs"
        style={{flex: 1}}
        onChangeText={onSearch}
        />
      </View>
    </View>
  )
}

export default HomeHeader