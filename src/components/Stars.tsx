import React from "react";
import { Text } from "react-native";

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
    return <Text>*****</Text>
}