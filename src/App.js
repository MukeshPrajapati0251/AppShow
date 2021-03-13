import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text, Animated,
  StatusBar,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
// import SkeletonLoading from "../compontents/Skeleton";
import CardItem from "../compontents/CardItem";

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const App = ({ }) => {
  const viewContainerAnimate = new Animated.Value(0);
  const flatListAnimate = new Animated.Value(0);

  const headerHeight = viewContainerAnimate.interpolate({
    inputRange: [0, 200],
    outputRange: [300, 80],
    extrapolate: "clamp",
    useNativeDriver: false,
  });
  const viewMargin = viewContainerAnimate.interpolate({
    inputRange: [0, 200],
    outputRange: [250, 80],
    extrapolate: "clamp",
    useNativeDriver: false
  });
  const viewBorderRadius = viewContainerAnimate.interpolate({
    inputRange: [0, 200],
    outputRange: [45, 0],
    extrapolate: "clamp",
    useNativeDriver: false
  });
  const textOpacity = viewContainerAnimate.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
    useNativeDriver: false
  });
  const imgDecreaseSize = viewContainerAnimate.interpolate({
    inputRange: [0, 180],
    outputRange: [70, 50],
    extrapolate: "clamp",
    useNativeDriver: false
  });
  const changeNamePositionTop = viewContainerAnimate.interpolate({
    inputRange: [0, 180],
    outputRange: [95, 30],
    extrapolate: "clamp",
    useNativeDriver: false
  });
  const changeNameSize = viewContainerAnimate.interpolate({
    inputRange: [0, 180],
    outputRange: [20, 16],
    extrapolate: "clamp",
    useNativeDriver: false
  });
  const changeNamePositionLeft = viewContainerAnimate.interpolate({
    inputRange: [0, 180],
    outputRange: [15, 80],
    extrapolate: "clamp",
    useNativeDriver: false
  });

  let heightStyle = { height: headerHeight }

  const data = [
    {
      name: 'Visa',
      cvv: "443",
      number: '1234567890123456',
      date: '2324',
      id: 1,
    },
    {
      name: 'Master',
      cvv: "443",
      number: '1234567890123456',
      date: '2324',
      id: 2,
    },
    {
      name: 'Visa',
      cvv: "443",
      number: '1234567890123456',
      date: '2324',
      id: 3,
    },
    {
      name: 'Visa',
      cvv: "443",
      number: '1234567890123456',
      date: '2324',
      id: 4,
    }
  ]

  return (
    <>
      <StatusBar barStyle="light-conten" backgroundColor="lightskyblue" />
      <SafeAreaView>
        <Animated.View style={[styles.header, heightStyle]}>
          <View style={[styles.headerProfile]}>
            <Animated.View style={[styles.profileImg, { width: imgDecreaseSize, height: imgDecreaseSize }]}></Animated.View>
            <Animated.Text style={[
              styles.userName,
              {
                top: changeNamePositionTop,
                left: changeNamePositionLeft,
                fontSize: changeNameSize,
                opacity: viewContainerAnimate.interpolate({
                  inputRange: [0, 50, 200],
                  outputRange: [1, 0, 1],
                  extrapolate: "clamp",
                  useNativeDriver: false
                })
              }
            ]}>Mukesh Prajapati</Animated.Text>
            <Animated.Text style={[styles.userTitle, { opacity: textOpacity }]}>
              Software Engeriner
            </Animated.Text>
            <Animated.Text style={[styles.userBio, { opacity: textOpacity }]}>
              Working as front-end developer at EncoreSky Technologies Pvt. Ltd
            </Animated.Text>
          </View>
        </Animated.View>

        <Animated.View style={[styles.mainView,
        {
          marginTop: viewMargin,
          borderTopRightRadius: viewBorderRadius,
          borderTopLeftRadius: viewBorderRadius
        }]}>
          <AnimatedScrollView
            onScroll={Animated.event(
              [{
                nativeEvent: {
                  contentOffset: {
                    y: viewContainerAnimate
                  }
                }
              }]
            )}
          >
            <View style={[styles.body]}>
              <FlatList
                bounces={false}
                data={data}
                renderItem={({ item }) => (
                  <CardItem item={item} />
                )}
              />
            </View>
          </AnimatedScrollView>
        </Animated.View>
        <AnimatedTouchableOpacity style={[styles.addNew, {
          width: viewContainerAnimate.interpolate({
            inputRange: [60, 100],
            outputRange: [180, 50],
            extrapolate: "clamp",
            useNativeDriver: false
          })
        }]}>
          <Animated.Text style={[styles.addNewIcon, {
            left: viewContainerAnimate.interpolate({
              inputRange: [60, 100],
              outputRange: [30, 16],
              extrapolate: "clamp",
              useNativeDriver: false
            })
          }]}>+</Animated.Text>
          <Animated.Text style={{
            opacity: viewContainerAnimate.interpolate({
              inputRange: [60, 100],
              outputRange: [1, 0],
              extrapolate: "clamp",
              useNativeDriver: false
            }),
            right: viewContainerAnimate.interpolate({
              inputRange: [60, 100],
              outputRange: [0, -100],
              extrapolate: "clamp",
              useNativeDriver: false
            }),
          }}>Add new card</Animated.Text>
        </AnimatedTouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.white,
    overflow: 'hidden'
  },
  header: {
    position: 'absolute',
    width: "100%",
    backgroundColor: "lightskyblue",
    paddingHorizontal: 10,
    zIndex: -99
  },
  body: {
    // backgroundColor: Colors.dark,
    // height: "100%",
    padding: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
  headerProfile: {
    paddingHorizontal: 15,
    paddingVertical: 18,
  },
  profileImg: {
    borderRadius: 60,
    overflow: 'hidden',
    backgroundColor: 'grey',
    marginBottom: 10
  },
  userName: {
    fontWeight: "700",
    color: 'black',
    position: 'absolute',
  },
  userTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: 'black',
    marginBottom: 12,
    marginTop: 25
  },
  userBio: {
    fontSize: 16,
    fontWeight: "500",
    color: 'black',
    marginBottom: 12,
  },
  addNew: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    bottom: 40,
    right: 20,
    position: 'absolute',
    elevation: 5,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    paddingLeft: 30
  },
  addNewIcon: {
    fontSize: 30,
    fontWeight: '600',
    marginRight: 10,
    width: 50,
    position: 'absolute',
    top: 2
  }
});

export default App;
