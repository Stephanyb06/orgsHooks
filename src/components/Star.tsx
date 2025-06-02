import React from "react";
import { GestureResponderEvent, Image, StyleSheet, TouchableOpacity } from "react-native";

import star from '../assets/estrela.png';
import grayStar from '../assets/estrelaCinza.png';

type StarsProps = {
    onPress: (event: GestureResponderEvent) => void;
    disabled?: boolean;
    filled: boolean;
    large?: boolean;
};

export default function Star({
    onPress,
    disabled =  true,
    filled,
    large = false,
}: StarsProps) {
    const styles = stylesFunction(large);
    const getImage = () => {
        return filled ? star : grayStar;   
    };

    return <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Image source={getImage()} style={styles.star} />
    </TouchableOpacity>
    };
    const stylesFunction = (large: boolean) => StyleSheet.create({
        star: {
            width: large ? 36 : 12,
            height: large ? 36 : 12,
            marginRight: 2,
        },
    });