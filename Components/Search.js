// Components/Search.js
import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';


const Search = () => {
    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <View style={{ height: 50, width: 50, backgroundColor: 'green' }}></View>
        <View style={{ height: 50, width: 50, backgroundColor: 'yellow' }}></View>
        <View style={{ height: 50, width: 50, backgroundColor: 'red' }}></View>
      </View>

    )
}

//Le style  justifyContent  permet de définir comment sont distribués vos components enfants sur l'axe principal
//Le style  alignItems  est comme  justifyContent, sauf qu'il s'applique sur l'axe secondaire



//Externalisation des styles !!

const styles = StyleSheet.create( { // constante contenant toutes nos styles react native !!!

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