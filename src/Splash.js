import React, { useRef, useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Animated,
} from 'react-native';

const Splash = () => {
    const viewContainerAnimate = new Animated.Value(0);
    const logoAnimate = useRef(new Animated.Value(0)).current;
    const logoTextAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(viewContainerAnimate, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true
        }).start(() => {
            Animated.parallel([
                Animated.spring(logoAnimate, {
                    toValue: 1,
                    tension: 10,
                    friction: 2,
                    duration: 1500,
                    delay: 1000,
                    useNativeDriver: true
                }).start(),
                Animated.timing(logoTextAnimate, {
                    toValue: 1,
                    duration: 12000,
                    useNativeDriver: true
                }).start(),
            ]).start()
        })
    }, [])

    const cardScale = viewContainerAnimate.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 1.1, 1.2]
    });
    let transformStyle = { ...styles.ViewContainer, transform: [{ scale: cardScale }] };

    return (
        <>
            <StatusBar barStyle="light-conten" backgroundColor="#61dafb" />
            <Animated.View style={transformStyle}>
                <Animated.View
                    style={{
                        opacity: logoAnimate,
                        top: logoAnimate.interpolate({
                            inputRange: [0, 1],
                            outputRange: [100, 0],
                        })
                    }}>
                    <Image source={require('../assets/logo.png')} style={styles.Logo} resizeMode="contain" />
                </Animated.View>
                <Animated.Text style={[{ opacity: logoTextAnimate }, styles.TextStyle]}>Logo Text</Animated.Text>
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    ViewContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#61dafb",
        flex: 1
    },
    TextStyle: {
        fontSize: 30,
        fontWeight: `600`
    },
    Logo: {
        width: 150,
        height: 150
    }
})

export default Splash;