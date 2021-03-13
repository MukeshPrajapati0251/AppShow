import React, { useState, useEffect, Fragment, useRef } from "react";
import {
    StyleSheet,
    View,
    Animated,
    Easing,
    StatusBar,
    Dimensions,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const THUMB_SIZE = 80;
const THUMB_MARGIN = 5;

const Slider = ({ data }) => {
    const topRef = useRef();
    const thumbRef = useRef();

    const [activeIndex, setActiveIndex] = useState(0)

    const scrollToActiveIndex = (index) => {
        setActiveIndex(index);
        topRef?.current?.scrollToOffset({
            offset: index * width,
            animated: true
        });
        if (index * (THUMB_SIZE + THUMB_MARGIN) - THUMB_SIZE / 2 > width / 2) {
            // width 424
            // index * (THUMB_SIZE + THUMB_MARGIN) - THUMB_SIZE / 2 > width / 2
            // 4 * (80 + 5) - 80 / 2 > width / 2 
            // 4 * 85 - 80 / 2 > width / 2 
            // 4 * 85 - 40 > width / 2 
            // 340 - 40 > width / 2 
            // 300 > 424 / 2
            // 300 > 212

            // index * (THUMB_SIZE + THUMB_MARGIN) - width / 2 + THUMB_SIZE / 2,
            // 4 * (80 + 5) - 424 /2 + 80 / 2
            // 4 * 85 - 212 + 40
            // 340 - 212 + 40
            // 380 - 212
            // 168

            thumbRef?.current?.scrollToOffset({
                offset: index * (THUMB_SIZE + THUMB_MARGIN) - width / 2 + THUMB_SIZE / 2,
                animated: true
            })
        } else {
            thumbRef?.current?.scrollToOffset({
                offset: 0,
                animated: true
            })
        }
    }

    return (
        <Fragment>
            <StatusBar currentHeight barStyle="light-conten" backgroundColor="lightskyblue" />
            <View style={{ backgroundColor: "#000", flex: 1 }}>
                <FlatList
                    ref={topRef}
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={event => {
                        scrollToActiveIndex(Math.round(event.nativeEvent.contentOffset.x / width))
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ width, height }}>
                                <Image
                                    source={item.imageUri}
                                    style={[StyleSheet.absoluteFillObject, { width, height }]}
                                />
                            </View>
                        )
                    }}
                />
                <FlatList
                    ref={thumbRef}
                    data={data}
                    keyExtractor={item => item.id}
                    horizontal
                    style={{ position: 'absolute', bottom: THUMB_SIZE }}
                    contentContainerStyle={{ paddingHorizontal: THUMB_MARGIN }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    scrollToActiveIndex(index)
                                }}
                            >
                                <Image
                                    source={item.imageUri}
                                    style={{
                                        width: THUMB_SIZE,
                                        height: THUMB_SIZE,
                                        borderRadius: 10,
                                        marginHorizontal: THUMB_MARGIN,
                                        borderWidth: 2,
                                        borderColor: activeIndex === index ? '#fff' : 'transparent'
                                    }}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </Fragment>
    )
}

export default Slider;