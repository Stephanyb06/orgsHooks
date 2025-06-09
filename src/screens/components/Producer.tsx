import React, { useMemo, useReducer, useState } from "react";
import { Text, ImageSourcePropType, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Stars from "../../components/Stars";

//incluir
const distanceInMeters = (distance: number) => {
    console.log('distanceImMeters');
    return `${distance}m`;
}

type ProducerProps = {
    name: string;
    image: ImageSourcePropType;
    distance: number;
    stars: number;
};

export default function Producer({ name, image, distance, stars }: ProducerProps) {
    // const [selected, setSelected] = useState(false);
    const [selected, setSelected] = useReducer (
        (prev) => !prev,
        // selected => !selected,
        false
    );


    //incluir
    const formattedDistance = useMemo(
        () => distanceInMeters(distance),
        [distance, selected]
    )

    return <TouchableOpacity 
        style={styles.card}
        // onPress={() => setSelected(!selected)}
        onPress={setSelected}
    >
        <Image  style={styles.image} source={image} />
        <View style={styles.info}>
            <View>
                <Text style={styles.name}>{name}</Text>
                <Stars 
                quantity={stars} 
                editable={selected}
                large={selected}
                />
            </View>
        <Text style={styles.distance}>{formattedDistance}</Text>
        </View>
    </TouchableOpacity>
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