import {
   Cable,
   HousePlug,
   Settings
} from 'lucide-react-native';


export const navItems= [
   {
      name: 'history',
      label: 'History',
      icon: <Cable/>,
      isActive: true,          
      badge: 4,              
      requiresAuth: true,    
   },
   {
      name: 'index',
      label: 'Home',
      icon: <HousePlug/>,
      isActive: true,          
      badge: 4,              
      requiresAuth: true,    
   },
   {
      name: 'settings',
      label: 'Settings',
      icon: <Settings/>,
      isActive: true,          
      badge: 4,              
      requiresAuth: true,    
   },
]