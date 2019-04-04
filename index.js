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

        this.state = { escolhaUsuario: '', escolhaComputador : '', resultado : '' }
    }

    jokenpo(escUsuario){

        //gera número aleatório (0, 1, 2)
        var numAleatorio = Math.floor(Math.random() * 3);

        var escComputador = '';

        switch(numAleatorio){
            case 0: escComputador = 'pedra'; break;
            case 1: escComputador = 'papel'; break;
            case 2: escComputador = 'tesoura'; break;
        }

        var result = '';

        if (escComputador == 'pedra'){
            if (escUsuario == 'pedra'){
                result = 'Empate';
            }

            if (escUsuario == 'papel'){
                result = 'Usuário ganhou';
            }

            if (escUsuario == 'tesoura'){
                result = 'Computador ganhou';
            }
        }

        if (escComputador == 'papel'){
            if (escUsuario == 'papel'){
                result = 'Empate';
            }

            if (escUsuario == 'tesoura'){
                result = 'Usuário ganhou';
            }

            if (escUsuario == 'pedra'){
                result = 'Computador ganhou';
            }
        }

        if (escComputador == 'tesoura'){
            if (escUsuario == 'tesoura'){
                result = 'Empate';
            }

            if (escUsuario == 'pedra'){
                result = 'Usuário ganhou';
            }

            if (escUsuario == 'papel'){
                result = 'Computador ganhou';
            }
        }

        this.setState({ escolhaUsuario : escUsuario,
                        escolhaComputador : escComputador,
                        resultado : result  
                    });
        
    }
    
    render(){
        return (
            <View>
                <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
                <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
                <Text>Resultado: {this.state.resultado}</Text>
                <Button title="pedra" onPress={ () => { this.jokenpo('pedra')}} />
                <Button title="papel" onPress={ () => { this.jokenpo('papel')}} />
                <Button title="tesoura" onPress={ () => { this.jokenpo('tesoura')}} />
            </View>
        );
    }
}

AppRegistry.registerComponent('app3', () => app3);
