import React from "react";
import { Text, ImageSourcePropType, View, Image, StyleSheet } from "react-native";
import Stars from "../../components/Stars";

type ProducerProps = {
    name: string;
    image: ImageSourcePropType;
    distance: string;
    stars: number;
};

export default function Producer({ name, image, distance, stars }: ProducerProps) {
    return <View style={styles.card}>
        <Image  style={styles.image} source={image} />
        <View style={styles.info}>
            <View>
                <Text style={styles.name}>{name}</Text>
                <Stars quantity={stars} />
            </View>
        <Text style={styles.distance}>{distance}</Text>
    </View>
    </View>
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        elevation: 4,
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    name: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distance: {
        fontSize: 12,
        lineHeight: 19,

    }

})