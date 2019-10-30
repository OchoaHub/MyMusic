import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    tEXT,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import {Actions} from 'react-native-router-flux'
import {getToken} from './api-client'
//import { super } from '@babel/types';
//import console = require('console');

export default class LoginView extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: null,
            password: null,
        };    
    }

    ingresar = () => {
        getToken(this.state.username, this.state.password).then(data => {
            global.token = data.token
            Actions.home()
        }).catch((error) => {
            //Accion si hay un error en la respuesta
            console.warn(error)
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./assets(ucol.png')} style={styles.logo} resizeMode="contain"/>
                <TextInput
                    style={styles.TextInput}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    placeholder={'Correo electronico*'}
                    onSubmitEditing={() => {this.passwordTextInput.focus(); }}
                    returnKeyType={'next'}
                />
                <TextInput
                    style={styles.TextInput}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    secureTextEntry = {true}
                    placeholder={'Contraseña'}
                    placeholderTextColor={'#000035'}
                    ref={(input) => {this.passwordTextInput = input; }}
                    returnKeyType={'done'}
                    onSubmitEditing={this.ingresar}
                />
                <TouchableOpacity onPress={this.ingresar} style={styles.boton}>
                    <Text style={styles.textoBoton}>
                        ENTRAR
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}