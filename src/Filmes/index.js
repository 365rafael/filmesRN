import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class Filmes extends Component {
  render() {
    return (
      <View>
        <View style={styles.card}>
          <Text style={styles.titulo}>{this.props.data.nome}</Text>
          <Image 
          source={{uri: this.props.data.foto}} 
          style={styles.capa} 
          />

          <View style={styles.Areabotao}>
            <TouchableOpacity style={styles.botao} onPress={()=>alert(this.props.data.nome)}>
              <Text style={styles.botaoTexto}>LEIA MAIS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    padding: 15,
  },
  capa: {
    height: 250,
    zIndex: 9,
  },
  Areabotao: {
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9,
  },
  botao:{
      width: 100,
      backgroundColor:'#09A6FF',
      opacity: 1,
      padding: 8,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius:5,
  },
  botaoTexto:{
      textAlign:'center',
      color: '#FFF',
  }
});

export default Filmes;
