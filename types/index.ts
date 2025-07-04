import { Icons } from "../components/Icons";

export interface NavItem {
   name: string,
   label: string,
   icon?:  keyof typeof Icons,
   isActive: boolean,          
   badge?: number,              
   requiresAuth?: boolean,
}