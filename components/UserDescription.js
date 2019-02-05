import React, {Component} from 'react';
import {Text, View} from 'react-native';

class UserDescription extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text style={{fontSize: 18 ,padding:10}}>Job stephane</Text>
                </View>

                <View style={{flexDirection: 'row',justifyContent: 'space-between',padding: 10}}>
                    <View>
                        <Text style={{color: '#1d97f3' ,padding:5}}>37 ans jardinier en couple</Text>
                        <Text style={{color: '#1d97f3',padding:5}}>Ville de residence Toulon</Text>
                        <Text style={{color: '#1d97f3',padding:5}}>Ville d'origine Paris</Text>
                    </View>

                    <View>
                        <Text style={{padding:5}}>15 post</Text>
                        <Text style={{padding:5}}>20 abonnements</Text>
                        <Text style={{padding:5}}>30 abonnes</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default UserDescription;