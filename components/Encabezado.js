import React from 'react';
import { View,Text,Image,StyleSheet} from 'react-native';

export default function Encabezado(props){
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>{props.TitleHeader}</Text>
            <Image style={styles.logo} source={{ uri:'https://www.xtrafondos.com/wallpapers/resized/jokers-jugando-poker-5158.jpg?s=large'}}/>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor:"black",
            width:"80%",
            display:"flex",
            alignItems: "center",
            justifyContent:"center",
            height:"12.3%"
        },

        logo:{
            height:80,
            width:"50%",
            position: "absolute",
            left:0,
            zIndex:1
        },
        
        titleText:{
            fontfamily: 'Open Sans',
            fontSize:50,
            position: "absolute",
            FontWeight:"10px",
            color:"red",
            right:"15%",
            zIndex:99
        }
    })