import React, { Component, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, BackHandler, Image, Pressable, StyleSheet, View } from 'react-native';
import { FlatList } from "react-native";
import { appStyles } from '../globals/AppStyles';
import { useGetProductsQuery } from '../store/product/queries/ProductsSlice';
import {
    createBox,
    createText,
    createRestyleComponent,
    createVariant,
    VariantProps,
} from '@shopify/restyle';
import { theme, darkTheme, Theme } from '../globals/Theme';
import ItemSeprator from '../components/ItemSeperator';
import Chip from '../components/Chip';
import { onShare } from '../components/ShareHelper';
import { CardText, CardTextType } from '../components/CardText';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SearchBar } from '@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Box = createBox<Theme>();
const Text = createText<Theme>();
const Card = createRestyleComponent<
    VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>,
    Theme
>([createVariant({ themeKey: 'cardVariants' })], Box);

const HomePage = ({ navigation }) => {
    var orientation = useDeviceOrientation()
    const [colValue, setColValue] = useState(2)
    const [search, setSearch] = useState("");
    const { data, error, isLoading, isFetching, isSuccess } = useGetProductsQuery('');

    useEffect(() => {
        if (orientation === 'landscape') {
            setColValue(3)
        } else {
            setColValue(2)
        }
    }, [orientation]);

    useEffect(() => {
        const backAction = () => {
            Alert.alert('Alert', 'Do you want to exit the app?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <Box backgroundColor="background" flex={1}>
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
                {isSuccess && <View>
                    <View style={{ flexDirection: 'column' }}>
                        <SearchBar
                            lightTheme
                            placeholderTextColor="#888"
                            round
                            placeholder="Type Here..."
                            onChangeText={updateSearch}
                            value={search}
                            searchIcon={<FontAwesomeIcon icon={faMagnifyingGlass} size={25} color={theme.colors.black} />}
                        />
                        <FlatList
                            data={data.products}
                            //ItemSeparatorComponent={ItemSeprator}
                            numColumns={colValue}
                            key={(colValue)}
                            keyExtractor={(item, index) => '' + item.id}
                            renderItem={({ item }) => (
                                <Card style={appStyles.item}>
                                    <Pressable onPress={() => 
                                    
                                    navigation.navigate('Details', { image: item.thumbnail, title: item.title, description: item.description })
                                    //onShare("Check out this item..")
                                
                                }>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Image
                                                source={{ uri: item.thumbnail }} style={appStyles.image} />
                                            <Chip text={item.brand} />
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'stretch', marginLeft: wp('10%') }}>
                                                <CardText text={item.title} cardTextType={CardTextType.Caption} />
                                                <CardText text={item.price + "$"} cardTextType={CardTextType.Caption} />
                                            </View>
                                            <CardText text={item.description} cardTextType={CardTextType.Description} />
                                        </View>
                                    </Pressable>
                                </Card>
                            )}
                        />
                    </View>
                </View>
                }
                {error && <Text style={appStyles.baseText}>Error</Text>}
            </View>
        </Box>
    );
};

export default HomePage;