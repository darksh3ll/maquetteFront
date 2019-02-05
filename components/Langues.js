import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class Langues extends Component {
    render() {
        return (
            <View style={{paddingTop: 20}}>
                <View>
                    <Text style={{fontSize: 18 ,padding:10}} >Langue(s) parlee(s)</Text>
                </View>

                <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
                    <Text style={styles.text}>Francais</Text>
                    <Text style={styles.text} >Albanais</Text>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
});
export default Langues;