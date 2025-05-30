import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { loadProducers } from "../../services/loadData";
import Top from "./Top";
import Producer from "./Producer";

type Producer = {
    name: string;
    image: any;
    distance: string;
    stars: number;
};

interface ProducersProps {
    top: React.ComponentType;
}

export default function Producers({ top: Top }: ProducersProps) {
    const [title, setTitle] = useState('');
    const [list, setList] = useState<Producer[]>([]);

    useEffect(() => {
        const result = loadProducers();
        setTitle(result.title);
        setList(result.list);
    }, []);

    const TopOfList = () => {
        return <>
            <Top />
            <Text style={styles.title}>{title}</Text>
        </> 
    }

    return <FlatList
        data={list}
        renderItem={({ item }) => <Producer {...item} />}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={TopOfList} />
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
});