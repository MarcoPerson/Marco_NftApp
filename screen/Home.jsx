import {SafeAreaView, Text, FlatList, View} from "react-native"
import { useState } from "react"
import { HomeHeader, NFTCard, FocusedStatusBar } from "../components"

import {COLORS, NFTData} from "../constants"

const Home = () => {
  const [nftData, setNftData] = useState(NFTData)

  const handleSearch = (value) => {
    if(!value.length) return setNftData(NFTData)

    const filteredNFTData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))

    if(filteredNFTData.length){
      setNftData(filteredNFTData)
    }else{
      setNftData(NFTData)

    }
  }
  return (
    <SafeAreaView style={{flex: 1}}>
        <FocusedStatusBar style={{backgroundColor: COLORS.primary}} />
        <View style={{flex: 1}} >
            <View style={{zIndex: 0}}>
               <FlatList 
                data={nftData}
                renderItem={({item}) => <NFTCard data={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
               />
            </View>
            <View style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: -1}}>
                <View style={{height: 300, backgroundColor: COLORS.primary}}></View>
                <View style={{flex: 1, backgroundColor: COLORS.white}}></View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home