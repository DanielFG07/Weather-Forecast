import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';

export default function App() {
  const [InputTempo, setInputTempo] = useState();
	async function carregaTempo(){ 	
	const response = await Api.get('?array_limit=1&key=45ef8699&city_name=Itanhaem,SP&fields=only_results,forecast,max,min,date,description,city&city_name=Itanhaem,SP');
		setInputTempo(response.pre);
	}
	return (

	<View style={styles.container}>
    <View style={styles.bloco}>
	<Text style={styles.TextoBloco}>Previsão do Tempo  </Text>
		  
		  <TouchableOpacity style={styles.botao}
			  onPress={carregaTempo}>
		  <Text style={styles.TextoB}>Mostrar a previsão do tempo</Text>
		  </TouchableOpacity>
		  
		<Tempo pre={InputTempo}/>
		  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
	
	bloco: {
		backgroundColor: '#FF0000',
	},
	
	TextoBloco: {
		fontSize: '24'	
	},
	
	TextoB: {
		fontSize: '20',
		backgroundColor: '#000000',
		color: '#fff',
	},
});
