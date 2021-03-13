import React, { Fragment } from "react";
import { StatusBar } from 'react-native';

import Slider from "../compontents/Slider";

const SLIDER_DATA = [
    {
        id: 1,
        imageUri: require('../assets/silder-img-1.jpg'),
    },
    {
        id: 2,
        imageUri: require('../assets/silder-img-2.jpg'),
    },
    {
        id: 3,
        imageUri: require('../assets/silder-img-3.jpg'),
    },
    {
        id: 4,
        imageUri: require('../assets/silder-img-4.jpg'),
    },
    {
        id: 5,
        imageUri: require('../assets/silder-img-5.jpg'),
    },
    {
        id: 6,
        imageUri: require('../assets/silder-img-6.jpg'),
    },
    {
        id: 7,
        imageUri: require('../assets/silder-img-7.jpg'),
    }
]

const ImageSlider = () => {
    return (
        <Fragment>
            <StatusBar currentHeight barStyle="light-conten" backgroundColor="lightskyblue" />
            <Slider data={SLIDER_DATA} />
        </Fragment>
    )
}

export default ImageSlider;