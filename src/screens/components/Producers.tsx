import React, { useMemo, } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Producer from "./Producer";
import useProducers, { ProducerItem } from "../../hooks/useProducers";
interface ProducersProps {
    top: React.ComponentType;
}
const TopOfList = ({ Top, title }: { Top: React.ComponentType; title: string }) => (
    <View>
        <Top />
        <Text style={styles.title}>{title}</Text>
    </View>
);
export default function Producers({ top: Top }: ProducersProps) {
    const [title, list] = useProducers();
    const topOfList = useMemo(() => <TopOfList Top={Top} title={title} />, [Top, title]);
    return (
        <FlatList<ProducerItem>
            data={list}
            renderItem={({ item }) => <Producer {...item} />}
            keyExtractor={({ name }) => name}
            ListHeaderComponent = {topOfList}
        />
    );
}    
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    }
});