//import home from './App.vue';
import rooms from './components/rooms.vue';
import windows from './components/windows';
import heaters from './components/heaters';
import buildings from './components/buildings'

export default [
    {path:'/buildings', component: buildings},
    {path:'/windows', component: windows},
    {path:'/rooms', component: rooms},
    {path:'/heaters', component:heaters}
]