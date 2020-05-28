// Components/Search.js
import React from 'react';
import { View, TextInput, Button } from 'react-native';


const Search = () => {
    return (

        <View style = {{ marginTop: 40}} >
            <TextInput placeholder='Titre du film'/>
            <Button title='Rechercher' onPress={() => {}}/>
        </View>

    )
}




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