import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NavSettings from "./NavSettings";
import Header from "./Header";
import UserDescription from "./UserDescription";
import Photos from "./Photos";
import CentreInteret from "./CentreInteret";
import Langues from "./Langues";
import Footer from "./Footer";
import Message from "./Message";
export default class Users extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <NavSettings/>
                <Header/>
                <UserDescription/>
                <Photos/>
                <CentreInteret/>
                <Langues/>
                <Footer/>
                <Message/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
});
