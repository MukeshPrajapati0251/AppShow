import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    Easing,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('screen');

let randomHex = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const CardItem = ({ item }) => {
    const [bgColor, setBgColor] = useState();

    const cardNumber = item?.number;
    let formattedCardNumber = cardNumber?.replace(/[^\d]/g, "");

    // Split the card number is groups of 4
    let cardNumberSections = formattedCardNumber?.match(/\d{1,4}/g);
    formattedCardNumber = cardNumberSections?.join(' / ');

    const cardDate = item?.date;
    let formattedCardDate = cardDate?.replace(/[^\d]/g, "");

    // Split the card Date is groups of 4
    let cardDateSections = formattedCardDate?.match(/\d{1,2}/g);
    formattedCardDate = cardDateSections?.join(' / ');

    useEffect(() => {
        setBgColor(randomHex);
    }, [])

    return (
        <View style={[styles.cardItemBlock, { backgroundColor: bgColor }]}>
            <Text style={{ fontSize: 30, color: '#fff' }}>{item?.name}</Text>
            <View>
                <Text style={[styles.cardText, { color: '#fff' }]}>{formattedCardNumber}</Text>
                <View style={[styles.cardCvvDate]}>
                    <Text style={{ color: '#fff', fontSize: 20 }}>{item?.cvv}</Text>
                    <Text style={{ color: '#fff', fontSize: 20 }}>{formattedCardDate}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardItemBlock: {
        width: width - 48,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 24,
        height: 240,
        padding: 30,
        overflow: 'hidden',
        justifyContent: 'space-between'
    },
    cardText: {
        fontSize: 26,
        width: '100%',
    },
    cardCvvDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 10
    }
});

export default CardItem;