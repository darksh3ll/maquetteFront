import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Icon} from "react-native-elements";

class Footer extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: 'gray',
                alignItems: 'center',
                height: 100
            }}>
                <Icon
                    size={40}
                    name='backup'
                    type='backup'
                    color='black'
                />

                <Icon
                    size={40}
                    name='bookmark'
                    type='bookmark'
                    color='black'

                />

                <Icon
                    size={40}

                    name='dashboard'
                    type='dashboard'
                    color='black'

                />

                <Icon
                    size={40}

                    name='face'
                    type='face'
                    color='black'

                />

                <Icon
                    size={40}
                    name='mood'
                    type='mood'
                    color='black'
                />


            </View>
        );
    }
}

export default Footer;