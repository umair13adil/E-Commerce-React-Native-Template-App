import React, { Component, useState } from 'react';
import { ActivityIndicator, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { FlatList } from "react-native";
import { appStyles } from '../utils/AppStyles';
import { ListItem } from '@rneui/themed';
import { Avatar } from '@rneui/base/dist/Avatar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useGetProductsQuery } from '../features/productsSlice';

const HomePage = ({ navigation }) => {
    const { data, error, isLoading, isFetching, isSuccess } = useGetProductsQuery('');
    return (
        <View
            style={[
                appStyles.container,
                {
                    flexDirection: 'column',
                },
            ]}>
            {(isLoading || isFetching) && <View style={[
                appStyles.container,
                {
                    flexDirection: 'column',
                },
            ]}>
                <ActivityIndicator size="large" />
                <Text style={appStyles.baseText}>Loading products..</Text>
            </View>}
            {isSuccess && <View style={appStyles.app}>
                <FlatList
                    data={data.products}
                    numColumns={2}
                    keyExtractor={(item, index) => '' + item.id}
                    renderItem={({ item }) => (
                        <View style={appStyles.item}>
                            <Pressable onPress={() => navigation.navigate('Details', { image: item.thumbnail, title: item.title, description: item.description })}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Image
                                        source={{ uri: item.thumbnail }} style={{ width: 140, height: 140 }} />
                                    <ListItem.Subtitle style={{
                                        position: 'absolute',
                                        width: '95%',
                                        paddingLeft: '25%',
                                        marginBottom: 80,
                                        height: 100,
                                    }}>{item.title}</ListItem.Subtitle>
                                </View>
                            </Pressable>
                        </View>
                    )}
                />
            </View>
            }
            {error && <Text style={appStyles.baseText}>Error</Text>}
        </View>
    );
};

export default HomePage;