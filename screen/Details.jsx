import {
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants/index";
import {
  CircleButton,
  RectButton,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
  SubInfo,
} from "../components";
import React from "react";

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View
      style={{
        height: 373,
        width: "100%",
      }}
    >
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
      <CircleButton
        imgUrl={assets.left}
        handlePress={navigation.goBack}
        left={15}
        top={StatusBar.currentHeight + 10}
      />
      <CircleButton
        imgUrl={assets.heart}
        handlePress={() => {}}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
};

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
          paddingVertical: SIZES.font,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          zIndex: 1,
        }}
      >
        <RectButton
          handlePress={() => {}}
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS}
        />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({item}) => <DetailsBid bid={item} />}
        showVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
          backgroundColor: "rgb(255, 255, 255",
        }}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo data={data} />
            <View
              style={{
                padding: SIZES.font,
              }}
            >
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bids
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
