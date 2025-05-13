import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Item from '../../components/item';

export default function Corridas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suas Corridas</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.month}>Abril</Text>
        <Item
          iconSrc={require('../../assets/cronometro.png')}
          iconAlt="Ícone cronômetro"
          title="Corrida 97"
          description="5.41 quilômetros percorridos"
          actionImage={require('../../assets/pin.png')}
          actionAlt="Ícone pin"
        />

        <Text style={styles.month}>Março</Text>
        <Item
          iconSrc={require('../../assets/cronometro.png')}
          iconAlt="Ícone cronômetro"
          title="Corrida 96"
          description="2.69 quilômetros percorridos"
          actionImage={require('../../assets/pin.png')}
          actionAlt="Ícone pin"
        />
        <Item
          iconSrc={require('../../assets/cronometro.png')}
          iconAlt="Ícone cronômetro"
          title="Corrida 95"
          description="2.69 quilômetros percorridos"
          actionImage={require('../../assets/pin.png')}
          actionAlt="Ícone pin"
        />
        <Item
          iconSrc={require('../../assets/cronometro.png')}
          iconAlt="Ícone cronômetro"
          title="Corrida 94"
          description="3.71 quilômetros percorridos"
          actionImage={require('../../assets/pin.png')}
          actionAlt="Ícone pin"
        />
        <Item
          iconSrc={require('../../assets/cronometro.png')}
          iconAlt="Ícone cronômetro"
          title="Corrida 93"
          description="4.65 quilômetros percorridos"
          actionImage={require('../../assets/pin.png')}
          actionAlt="Ícone pin"
        />
        <Item
          iconSrc={require('../../assets/cronometro.png')}
          iconAlt="Ícone cronômetro"
          title="Corrida 92"
          description="4.29 quilômetros percorridos"
          actionImage={require('../../assets/pin.png')}
          actionAlt="Ícone pin"
        />
      </ScrollView>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Nova Corrida</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f33',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 80,
  },
  month: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff8c00',
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#f0b300',
    paddingVertical: 15,
    borderRadius: 20,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
