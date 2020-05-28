// Components/Search.js
import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';


const Search = () => {
    return (

        <View style = {{ marginTop: 45 }} >
            <TextInput style = {styles.textinput} placeholder='Titre du film'/>
            <Button title='Rechercher' onPress={() => {}}/>
        </View>

    )
}


//Externalisation des styles !!

const styles = StyleSheet.create( { // constante contenant toutes nos styles react native !!!

    textinput: {
      marginLeft: 10,
      marginRight: 10,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }

  } )

  // <TextInput style={[styles.textinput, { marginBottom: 10 }]} placeholder='Titre du film'/>

  // StyleSheet augmente les performances de votre application en associant votre style à un identifiant




/*
class Search extends React.Component {
  render() {
    return (
      <View>
        <TextInput placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => {}}/>
      </View>
    )
  }
};
*/

export default Search;