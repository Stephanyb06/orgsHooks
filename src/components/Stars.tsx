import React, { useState } from "react";
import {StyleSheet, View } from "react-native";
import Star from "./Star";

type StarsProps = {
    quantity: number;
    editable?: boolean;
    large?: boolean;
};

export default function Stars ({
    quantity: oldQuantity ,
    editable = false,
    large = false,
}: StarsProps) {

    const [quantity, setQuantity] = useState(oldQuantity);
    const StarsRender = () => {
        const starsList = [];
        for (let i = 0; i < 5; i++) {
            starsList.push(
                <Star
                    key={i}
                    onPress={() => setQuantity(i + 1)}
                    disabled={!editable}
                    filled={i < quantity}
                    large={large}
                />
            );
        }
        return starsList;
    };
    return <View style={styles.stars}>
        <StarsRender />
    </View>;
}

const styles = StyleSheet.create ({
    stars: {
        flexDirection: 'row'
    },
});