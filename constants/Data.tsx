import {
   Cable,
   CircleQuestionMark,
   HousePlug,
   Joystick,
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
      name: 'manual-control',
      label: 'Manual',
      icon: <Joystick/>,
      isActive: true,          
      badge: 0,              
      requiresAuth: true,    
   },
   {
      name: 'index',
      label: 'Home',
      icon: <HousePlug/>,
      isActive: true,          
      badge: 0,              
      requiresAuth: true,    
   },
   {
      name: 'faq',
      label: 'FAQ',
      icon: <CircleQuestionMark/>,
      isActive: true,          
      badge: 0,              
      requiresAuth: true,    
   },
   {
      name: 'settings',
      label: 'Settings',
      icon: <Settings/>,
      isActive: true,          
      badge: 0,              
      requiresAuth: true,    
   },
]