import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'
class NavSettings extends Component {
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.btnSettings} >

                    <Icon
                        style={{fontSize:42}}
                        name='settings'
                        type='settings'
                        color='white'
                    />
                    <Text
                        style={{fontSize:22,color:'white',padding: 15}}
                    >
                        Edit
                    </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height:100,
        backgroundColor: '#004288',
    },

    btnSettings: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems:'center',
        flexDirection: 'row',
        paddingTop: 20
    }
});

export default NavSettings;