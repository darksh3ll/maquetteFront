import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class Photos extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text style={{fontSize: 18 ,padding:10}} >Photos et videos</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Image
                        style={{width:150,height:150}}
                        source={{uri: 'https://picsum.photos/200?random'}}
                    />
                    <Image
                        style={{width:150,height:150}}
                        source={{uri: 'https://picsum.photos/200/300?random'}}
                    />
                    <Image
                        style={{width:150,height:150}}
                        source={{uri: 'https://picsum.photos/200'}}
                    />
                </View>
            </View>

        );
    }
}

export default Photos;