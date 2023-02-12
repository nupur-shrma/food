import { getDoc,doc, getDocs, collection } from "firebase/firestore";
//import firestore from '@react-native-firebase/firestore';
import React,{useEffect,useState} from "react";
import { View,FlatList,Text,StyleSheet,ScrollView,TouchableOpacity } from "react-native";
import { db } from "./config";
import { useDispatch } from "react-redux";
import { setCategory } from "../src/Categories/categoriesSlice";
//import { useIsFocused } from "@react-navigation/native";

// const DATA = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'Burgers',
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Drinks',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Desserts',
//     },
//     {
//         id: '58694a0f-3da1-471f-bd96-145571e29d45',
//         title: 'Wraps',
//       },
//   ];



const Categories = () => {

    const dispatch = useDispatch();

    //const isFocused = useIsFocused();

    const [loading, setLoading] = useState(true);
    const [Data, setData] = useState([])
    const [categoriesType, setCategoryType] = useState('Desserts')

    const handlePress = (title) => {
        dispatch(setCategory(title))
    }

    const Item = ({title,onPress}) => (
        <TouchableOpacity style={styles.item} onPress={onPress}>
          <Text style={title===categoriesType?styles.SelectedTitle:styles.title}>{title}</Text>
        </TouchableOpacity>
      );


useEffect(() => {
    //To get all categories from firebase
    const fetchData = async() => {
        try {
        //Read all data from Firebase
            await getDocs(collection(db,"Categories")).then(docSnap=>{
                    let categories = []; 
                    docSnap.forEach((doc)=>{
                        Data.push({...doc.data(),id:doc.id})
                    });
                    console.log('Document Data', Data);
                    setData(Data)
                    setLoading(false);
                });
                } 
                catch(err) {
                    console.error(err);
                }
            };
        fetchData();
}, []);

    return (
        !loading &&
        <ScrollView horizontal>
            <Text>
                <FlatList
                    data={Data}
                    renderItem={({item}) => <Item title={item.title} onPress={()=>{handlePress(item.title);setCategoryType(item.title)}}/>}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    extraData={categoriesType}
                />
            </Text>
        </ScrollView>
        
    );
};

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      //marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      //backgroundColor: '#f9c2ff',
      paddingHorizontal: 30,
      paddingTop:16,
      paddingBottom:8,
      //marginLeft:10,
      //marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 16,
      fontWeight:'700',
      color:'#676767'
    },
    SelectedTitle: {
        fontSize: 16,
        fontWeight:'700',
        color:'#FDBB06'
      },
  });

export default Categories;
