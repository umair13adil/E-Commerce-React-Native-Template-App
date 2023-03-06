import React, { Component, useState } from 'react';
import { FlatList, Image, View } from "react-native";
import { appStyles } from '../globals/AppStyles';
import { ListItem } from '@rneui/themed';
import { Avatar } from '@rneui/base/dist/Avatar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card } from '@rneui/themed';
import { Text } from '@rneui/themed';
import { CardFeaturedSubtitle } from '@rneui/base/dist/Card/Card.FeaturedSubtitle';

const ProductDetailScreen = ({ route, navigation }) => {
    const { image, title, description } = route.params;
    return (
        <View
            style={[
                appStyles.container,
                {
                    flexDirection: 'column',
                    alignItems: 'center'
                },
            ]}>
            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    marginBottom: 40,
                }}
            >
                <Card.Title>{title}</Card.Title>
                <Card.Divider />
                <View style={{ position: "relative", alignItems: "center" }}>
                    <Image
                        style={{ width: "100%", height: 100 }}
                        resizeMode="contain"
                        source={{ uri: image }}
                    />
                    <Text>{description}</Text>
                </View>
            </View>
        </View>
    );
};

export default ProductDetailScreen;