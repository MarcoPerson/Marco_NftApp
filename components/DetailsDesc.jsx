import { View, Text } from "react-native";
import { useState } from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import { EthPrice, NFTTitle } from "./SubInfo";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          titleSize={SIZES.extraLarge}
          subtitle={data.creator}
          subtitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View
        style={{
          marginVertical: SIZES.extraLarge,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
              onPress={() => {
                if(readMore){
                    setReadMore(false);
                    setText(data.description.slice(0, 100))
                }else{
                    setReadMore(true);
                    setText(data.description)
                }
              }}
            >
              {readMore ? "Read Less" : "Read More" }
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
