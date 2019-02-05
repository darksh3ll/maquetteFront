import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class Message extends Component {
    render() {
        return (
            <View>
                <View style={styles.nav}>

                    <Text style={{fontSize: 20, color: 'white'}}>Davea Butler</Text>
                </View>

                <View style={styles.boxMessage}>
                    <View>
                        <Image
                            style={{width: 100, height: 100, borderRadius: 50, borderWidth: 4, borderColor: 'white'}}
                            source={{uri: 'https://randomuser.me/api/portraits/men/64.jpg'}}
                        />
                    </View>

                    <View style={styles.message} >
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, optio! Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit. Aspernatur, optio!Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Aspernatur, optio!</Text>
                    </View>
                </View>

                <View style={styles.boxMessageUsers}>
                    <View>
                        <Image
                            style={{width: 100, height: 100, borderRadius: 50, borderWidth: 4, borderColor: 'white'}}
                            source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
                        />
                    </View>

                    <View style={styles.message1} >
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, optio! Lorem ipsum
                            dolorum dolor sit amet,
                            consectetur adipisicing elit. Aspernatur, optio!</Text>
                    </View>
                </View>

                <View style={styles.boxMessage}>
                    <View>
                        <Image
                            style={{width: 100, height: 100, borderRadius: 50, borderWidth: 4, borderColor: 'white'}}
                            source={{uri: 'https://randomuser.me/api/portraits/men/64.jpg'}}
                        />
                    </View>

                    <View style={styles.message} >
                        <Text>Lorem ipsum dolor sitnatur, optio!Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Aspernatur, optio!</Text>
                    </View>
                </View>

                <View style={styles.footer} >

                </View>


            </View>


        );
    }
}

const styles = StyleSheet.create({
    nav: {
        height: 100,
        backgroundColor: '#004288',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    message: {
        borderRadius: 5,
        width: 300,
        padding: 10,
        backgroundColor: '#ecf0f1'

    },
    boxMessage:{
        paddingTop:50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    boxMessageUsers:{
        paddingTop:50,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    message1 :{
        backgroundColor: '#33bef1',
        borderRadius: 5,
        padding: 10,

    },
    footer: {
      marginTop:240,
        height:100,
        backgroundColor:'#e5f1e9'
    }

});

export default Message;