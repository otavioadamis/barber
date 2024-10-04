import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const Home = ({ color = "black", size = 24 }) => {
    return (
        <Entypo name="home" size={size} color={color} />
    );
}

const Clock = ({ color = "black", size = 24 }) => {
    return (
        <AntDesign name="clockcircleo" size={size} color={color}/>
    );
}

const Pencil = ({ color = color, size = 24 }) => {
    return (
        <Entypo name="edit" size={size} color={color} />
    );
}

export default {
    Home,
    Clock,
    Pencil
}