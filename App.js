import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'
import logo from './components/Imagens/logoML.jpg'
import velocimetro from './components/Imagens/speedometer.png'
import aviao from './components/Imagens/plane.png'
import camisa from './components/Imagens/tshirt.png'
import carro from './components/Imagens/electric-car.png'
import banco from './components/Imagens/banco.jpg'
import capacete from './components/Imagens/capacete.jpg'
import lupa from './components/Imagens/search.png'
import sino from './components/Imagens/bell.png'
import coracao from './components/Imagens/heart.png'
import tag from './components/Imagens/tag.png'
import user from './components/Imagens/user.png'

export default function App() {
  const [busca, setBusca] = useState()

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.buscaLogo}>
        <View style={styles.busca}>
          <TextInput
            style={styles.barraBusca}
            placeholder="🔍 Buscar no Mercado Livre"
            placeholderTextColor="#A0A0A0"
            onChangeText={setBusca}
            value={busca}
          />
        </View>
        <View style={styles.logo}>
          <Image source={logo} style={{ width: 200, height: 200 }} />
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.categorias}>
          <TouchableOpacity>
            <View style={styles.categoria}>
              <View style={styles.imagem}>
                <Image source={velocimetro} style={styles.iconeCategoria} />
              </View>
            <Text style={styles.texto}>  Acessórios  para Veículos</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.categoria}>
                <View style={styles.imagem}>
                  <Image source={aviao} style={styles.iconeCategoria} />
                </View>
              <Text style={styles.texto}>Brinquedos e Hobbies</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.categoria}>
                <View style={styles.imagem}>
                  <Image source={camisa} style={styles.iconeCategoria} />
                </View>
              <Text style={styles.texto}>Calçados, Roupas e Bols...</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.categoria}>
                <View style={styles.imagem}>
                  <Image source={carro} style={styles.iconeCategoria} />
                </View>
              <Text style={styles.texto}>Carros, motos e Outros</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.produtos}>
          <TouchableOpacity>
            <Image source={banco} style={styles.produto} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={capacete} style={styles.produto} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.icones}>
        <TouchableOpacity>
          <Image source={lupa} style={styles.icone} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={coracao} style={styles.icone} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={tag} style={styles.icone} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={sino} style={styles.icone} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={user} style={styles.icone} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  buscaLogo: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  busca: {
    backgroundColor: '#ffe701',
    height: '27%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  barraBusca: {
    backgroundColor: '#fff',
    width: '90%',
    textAlign: 'center',
    padding: 5,
    borderRadius: 5,
    marginTop: 23
  },

  logo: {
    backgroundColor: '#ffe701',
    height: '72%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  main: {
    width: '100%',
    height: '60%',
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  

  categorias: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  categoria: {
    width: 85,
    height: 130,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  imagem: {
    height: 86,
    width: 86,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  iconeCategoria: {
    height: 40,
    width: 40
  },

  texto: {
    color: '#A0A0A0',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500'
  },

  produtos: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  produto: {
    height: 200,
    width: 170
  },

  icones: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'space-between',
    padding: 30
  },

  icone: {
    height: 30,
    width: 30
  }
})
