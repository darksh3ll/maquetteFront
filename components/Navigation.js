import { createStackNavigator,createAppContainer } from 'react-navigation'
import Users from './Users'


const AppNavigator = createStackNavigator({
    Users: {
        screen: Users
    }
});

export default createAppContainer(AppNavigator)