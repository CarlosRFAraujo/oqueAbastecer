import React, { Component } from 'react';

import {
  Image,
  TextInput,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputAlcool: null,
      inputGasolina: null,
      priceAlcool: null,
      priceGasolina: null,
      modalVisible: false,
      result: null,
      resposta: '',
    }
    this.calcular = this.calcular.bind(this);
    this.fechar = this.fechar.bind(this);
  }

  calcular() {

    this.setState({      
      result: this.state.priceAlcool / this.state.priceGasolina,
    })
    if(this.state.result < 0.7) {
      this.setState({
        priceAlcool: this.state.inputAlcool,
        priceGasolina: this.state.inputGasolina,
        modalVisible: true,
        resposta: 'Melhor abastecer com Alcool',
      })
    } else {
      this.setState({
        priceAlcool: this.state.inputAlcool,
        priceGasolina: this.state.inputGasolina,
        modalVisible: true,
        resposta: 'Melhor abastecer com Gasolina',
      })
    }
  }

  fechar(visible) {
    this.setState({
      modalVisible: visible
    })
  }
  render() {
    return(
      <View style={styles.container}>
        <Image
        style={styles.img}
        source={require('./src/img/logo.png')}
        />
        <Text style={styles.title}>Qual a melhor opção?</Text>
        <Text style={styles.price}>Alcool (preço por litro):</Text>
        <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(valor) => this.setState({inputAlcool: valor})}
        value={this.state.inputAlcool}
        />
        <Text style={styles.price}>Gasolina (preço por litro):</Text>
        <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(valor) => this.setState({inputGasolina: valor})}
        value={this.state.inputGasolina}
        />
        <TouchableOpacity
        style={styles.btn}
        onPress={this.calcular}
        >
          <Text style={styles.btncalc}>Calcular</Text>
        </TouchableOpacity>
        <Modal
        visible={this.state.modalVisible}
        >
          <View style={styles.container}>
            <Image
            style={styles.img}
            source={require('./src/img/gas.png')}
            />
            <Text style={styles.compensa}>
              {this.state.resposta}
            </Text>
            <Text style={styles.priceCalc}>
              Com os valores: 
            </Text>
            <Text style={styles.descript}>Alcool: R$ {this.state.priceAlcool}</Text>
            <Text style={styles.descript}>Gasolina: R$ {this.state.priceGasolina}</Text>
            <TouchableOpacity
            style={styles.btn}
            onPress={ () => this.fechar(false)}
            >
              <Text style={styles.btnnovamente}>
                Calcular novamente
              </Text> 
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F0A01',
  },
  img: {
    width: 200,
    height: 200,
    marginLeft: 110,
    marginBottom: 30,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 60,
  },
  price: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  priceCalc: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  descript: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 25,
  },
  compensa: {
    color: '#1EA82C',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 34,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btncalc: {
    color: '#fff',
    backgroundColor: '#E60800',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 28,
    width: '70%',
  },
  btnnovamente: {
    color: 'green',
    fontSize: 18,
    borderColor: '#E60800',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    width: 240,
    height: 32,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default App;
