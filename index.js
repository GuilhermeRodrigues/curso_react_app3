import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

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
                result = 'Você ganhou';
            }

            if (escUsuario == 'tesoura'){
                result = 'Você perdeu';
            }
        }

        if (escComputador == 'papel'){
            if (escUsuario == 'papel'){
                result = 'Empate';
            }

            if (escUsuario == 'tesoura'){
                result = 'Você ganhou';
            }

            if (escUsuario == 'pedra'){
                result = 'Você perdeu';
            }
        }

        if (escComputador == 'tesoura'){
            if (escUsuario == 'tesoura'){
                result = 'Empate';
            }

            if (escUsuario == 'pedra'){
                result = 'Você ganhou';
            }

            if (escUsuario == 'papel'){
                result = 'Você perdeu';
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

                <Topo></Topo>

                <View style={styles.painelAcoes}>
                    <View style={styles.btnEscolha}>
                        <Button title="pedra" onPress={ () => { this.jokenpo('pedra')}} />
                    </View>
                    <View style={styles.btnEscolha}>
                        <Button title="papel" onPress={ () => { this.jokenpo('papel')}} />
                    </View>
                    <View style={styles.btnEscolha}>
                        <Button title="tesoura" onPress={ () => { this.jokenpo('tesoura')}} />
                    </View>
                </View>

                <View style={styles.palco}>
                    <Text style={styles.txtResultado}>{this.state.resultado}</Text>

                    <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
                    <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>
          
                </View>              
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnEscolha: {
        width: 90
    },
    painelAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    palco: {
        alignItems: 'center',
        marginTop: 10
    },
    txtResultado: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        height: 60
    }

});

AppRegistry.registerComponent('app3', () => app3);
