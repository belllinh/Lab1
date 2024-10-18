import React,{useState,useEffect} from "react";
import { StyleSheet,View,Text } from "react-native";
import { fetchRandomContact } from "../utils/api";
import ContactListItem from "../components/ContactListItem";
import DetailListItem from "../components/DetailListItem";
import colors from "../utils/colors";
import ContactThumbnail from "../components/ContactThumbnail";
const Profile=()=>
{
    const [contact,setContacts] = useState({});
    useEffect(()=>
    {
        fetchRandomContact()then(
            contact => setContacts(contact)
        )
    }
    ,[]);

    const {avatar, name, email,phone, cell} = contact;
    return(
        <View style ={style.container}>
            <View style ={style.avatarSection}>
                <ContactThumbnail avatar={avatar} name={name} phone={phone}/>
            </View>
            <View style={style.detailsSection}>
                <DetailListItem icon="mail" title="Email" subtitle={email}/>
                <DetailListItem icon="phone" title="Work" subtitle={phone}/>
                <DetailListItem icon="smartphone" title="Personal" subtitle={cell}/>


            </View>
        </View>
    );
}
export default Profile;
const style =StyleSheet.create({
    container:{
        flex:1,
    },
    avatarSection:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: colors.blue,
    },
    detailsSection:{
        flex:1,
        backgroundColor:'white'
    },
});