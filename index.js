import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

class app3 extends Component {

    constructor(props){
        super(props);

        this.state = { escolhaUsuario: '' }
    }

    jokenpo(escUsuario){
        this.setState({ escolhaUsuario : escUsuario });
    }
    
    render(){
        return (
            <View>
                <Text>Escolha do computador</Text>
                <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
                <Text>Resultado</Text>
                <Button title="pedra" onPress={ () => { this.jokenpo('pedra')}} />
                <Button title="papel" onPress={ () => { this.jokenpo('papel')}} />
                <Button title="tesoura" onPress={ () => { this.jokenpo('tesoura')}} />
            </View>
        );
    }
}

AppRegistry.registerComponent('app3', () => app3);
