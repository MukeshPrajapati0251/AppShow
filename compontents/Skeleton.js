import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    Easing,
    Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('screen');
const AnimatedLG = Animated.createAnimatedComponent(LinearGradient)

const SkeletonLoading = ({ }) => {
    const loadingAnimateView = new Animated.Value(0);

    useEffect(() => {
        Animated.loop(
            Animated.timing(loadingAnimateView, {
                toValue: 1,
                duration: 1200,
                easing: Easing.linear.inOut,
                useNativeDriver: false
            })
        ).start();
    }, []);

    let translateX = loadingAnimateView.interpolate({
        inputRange: [0, 1],
        outputRange: [-width, width]
    })

    return (
        <>
            <View>
                <View style={[styles.loadingViewSmall]}>
                    <AnimatedLG
                        colors={['#e0e0e0', '#e2e8d9', '#e0e0e0']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ width: '10%', height: '300%', transform: [{ translateX: translateX }, { skewX: '45deg' }] }}
                    ></AnimatedLG>
                </View>
                <View style={[styles.loadingViewLarge]}>
                    <AnimatedLG
                        colors={['#e0e0e0', '#f0f0f0', '#e0e0e0']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ width: '10%', height: '300%', transform: [{ translateX: translateX }, { skewX: '45deg' }] }}
                    ></AnimatedLG>
                </View>
                <View style={[styles.loadingViewSmall]}>
                    <AnimatedLG
                        colors={['#e0e0e0', '#e2e8d9', '#e0e0e0']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ width: '10%', height: '300%', transform: [{ translateX: translateX }, { skewX: '45deg' }] }}
                    ></AnimatedLG>
                </View>
                <View style={[styles.loadingViewLarge]}>
                    <AnimatedLG
                        colors={['#e0e0e0', '#f0f0f0', '#e0e0e0']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ width: '10%', height: '300%', transform: [{ translateX: translateX }, { skewX: '45deg' }] }}
                    ></AnimatedLG>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    loadingViewLarge: {
        width: '100%',
        height: 40,
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
        marginBottom: 20,
        overflow: 'hidden'
    },
    loadingViewSmall: {
        width: '70%',
        height: 25,
        backgroundColor: '#d3d3d3',
        borderRadius: 8,
        marginBottom: 8,
        overflow: 'hidden'
    },
});

export default SkeletonLoading;
