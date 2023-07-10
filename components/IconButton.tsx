import { Image, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import React from 'react';

type IconButtonProps = {
    icon: React.ComponentProps<typeof Entypo>['name'];
    text?: string | number;
}

const IconButton = ({ icon, text }: IconButtonProps) => {
    return (


        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
            <Entypo name={icon} size={16} color="grey" />
            <Text style={{
                fontSize: 12,
                marginLeft: 5,
                color: 'grey',
                opacity: 0.5,
            }}>{text}</Text>
        </View>
    )
}

export default IconButton;