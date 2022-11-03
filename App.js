import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import PackagesProvider from './controllers/PackagesContext';
import HomeRoute from './routes/HomeRoute';
import Favorites from './views/Favorites';

export default function App() {
  const Tab = createBottomTabNavigator();

  function AppProviders({ children }) {
    return <PackagesProvider>{children}</PackagesProvider>;
  }

  return (
    <AppProviders>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name='Home'
            component={HomeRoute}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
            }}
          ></Tab.Screen>
          <Tab.Screen
            name='Favorites'
            component={Favorites}
            options={{
              tabBarLabel: 'Favoritados',
              tabBarIcon: ({ color, size }) => <Ionicons name='flag-outline' color={color} size={size} />,
            }}
          ></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </AppProviders>
  );
}

/*
Um app para realizar a solicitação dos serviços de entrega. O app deve simular o processo de solicitação com lista de serviços e navegação entre telas

a. Componentes (2,0 pontos): Crie componentes para representar os elementos
visuais (telas, cards, botões, etc)

b. Navegação (2,0 pontos): Crie pelo menos duas telas com navegação entre elas.
Você pode usar o TabNavigation e/ou StackNavigation.

c. State (1,0 pontos): Realize o controle de estado de pelo menos um componente.
*/
