import { React } from 'react';
import { StyleSheet, Text} from 'react-native';

export default function Tempo(props){
	return(
	<>
		<Text>Dia: {props.pre.date}</Text>
		<Text>Como está o tempo: {props.pre.description}</Text>
		<Text>Cidade: {props.pre.city}</Text>
		<Text>Data: {props.pre.forecast.date}</Text>
		<Text>Temperatura máxima: {props.pre.forecast.max}</Text>
		<Text>Temperatura miníma: {props.pre.forecast.min}</Text>
		<Text>Descrição: {props.pre.forecast.description}</Text>
	</>
	);
}