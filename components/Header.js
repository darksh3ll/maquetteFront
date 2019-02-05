import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Icon} from "react-native-elements";
class Header extends Component {



    render() {
        return (
            <View>

                <Image
                    style={styles.MainContainer}
                    source={{uri: 'https://picsum.photos/200?random'}}
                />

                <View style={styles.MainContent}>

                    <View>
                        <Icon
                            size={50}
                            name='mood'
                            type='mood'
                            color='white'
                        />
                        <Text style={{color:'white'}}>S'abonner</Text>
                    </View>

                    <View>
                        <Image
                            style={{width: 100, height: 100, borderRadius: 50,borderWidth: 4 ,borderColor:'white'}}
                            source={{uri: 'https://randomuser.me/api/portraits/men/64.jpg'}}
                        />
                    </View>

                    <View>
                        <Icon
                            onPress={()=>this.handleMessage()}
                            size={50}
                            name='mail'
                            type='mail'
                            color='white'
                        />

                        <Text  style={{color:'white'}} >Message</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        width: 500,
        height: 200,
        position: 'relative',
    },
    MainContent: {
        flex:1,
        width: 400,
        height: 200,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});


export default Header;