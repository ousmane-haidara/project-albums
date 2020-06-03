import * as React from 'react'; // Important de faire cette importation !!!
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../Components/Search';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Rechercher" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigation;






/*import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../Components/Search';



const Stack = createStackNavigator();



const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Rechercher" component={Search} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
*/
  



/*
Un StackNavigator s'initialise avec les écrans qu'il va contenir. 
Cela signifie que vous devez renseigner la vue principale, mais aussi 
les vues qui vont être poussées et affichées. React Navigation associe 
ensuite des noms à vos vues et est capable d'appeler une vue, de revenir 
en arrière, de retourner sur une vue, etc.

La fonction createAppContainer de React Navigation permet de formater votre 
navigation pour la rendre utilisable dans l’application. Mais Il n existe plus 
 createAppContainer sur react navigation 5x, il faut suivre la documentation


*/

