import React, { useEffect, useState }from "react";
import { loadProducers } from "../services/loadData";

export type ProducerItem = {
    name: string;
    image: any;
    distance: number;
    stars: number;
}

export default function useProducers(): [string, ProducerItem[]] {
    const [title, setTitle] = useState('');
    const [list, setList] = useState<ProducerItem[]>([]);

    useEffect(() => {
        const result = loadProducers();
        result.list.sort(
            (producer1, producer2) => producer1.distance - producer2.distance
        );
        setTitle(result.title);
        setList(result.list);
    }, []);

    return [title, list];
}
