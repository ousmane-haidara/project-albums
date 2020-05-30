// Components/Search.js

import React from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text} from 'react-native';
import films from '../Helpers/filmsData';

class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => {}}/>
        <FlatList 
          data = { films } 
          keyExtractor={ (item) => item.id.toString() } 
          renderItem={ ({item}) => <Text>{item.title}</Text> } 
          />
      </View>
    )
  }
}

/*
Une FlatList doit obligatoirement implémenter deux propriétés :

  - data : qui correspond aux données affichées dans la liste. Ici, on renseignera nos films ;

  - renderItem : qui correspond au rendu des données de la liste. Ici, on définira un template pour afficher nos films.
*/




const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 45
  },
  textinput: {
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search