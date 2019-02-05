import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class CentreInteret extends Component {
    render() {
        return (
            <View style={{paddingTop: 20}} >
                <View>
                    <Text style={{fontSize: 18 ,padding:10}} >Centres d'interet</Text>
                </View>

                <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
                    <Text style={styles.text}>Animaux</Text>
                    <Text style={styles.text} >Aquqriophilie</Text>
                    <Text style={styles.text} >Musique</Text>
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
export default CentreInteret;