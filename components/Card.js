import React,{useEffect,useState} from "react";
import { View,Text,Image,Dimensions,StyleSheet, FlatList,ScrollView } from "react-native";
import { getDoc,doc, getDocs, collection,collectionGroup,query, where } from "firebase/firestore";
import { db } from "./config";
import { useCollection } from 'react-firebase-hooks/firestore';
import { useSelector,useDispatch } from "react-redux";
import {setCategoryData,setWrapsData,setBurgersData,setDrinkData} from "../src/Categories/categoriesSlice"

const Width = Dimensions.get('window').width*0.5
const Height = Dimensions.get('window').height*0.3


// const Data = [
// {
//     id:'1',
//     image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/640px-Hamburger_%28black_bg%29.jpg',
//     title:'CheeseBurger',
//     mainLine : 'Cheesy Burger is a cheesy'
// },
// {
//     id:'2',
//     image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/640px-Hamburger_%28black_bg%29.jpg',
//     title:'CheeseBurger',
//     mainLine : 'Cheesy Burger is a cheesy'
// },
// {
//     id:'3',
//     image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/640px-Hamburger_%28black_bg%29.jpg',
//     title:'CheeseBurger',
//     mainLine : 'Cheesy Burger is a cheesy'
// },
// {
//     id:'4',
//     image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/640px-Hamburger_%28black_bg%29.jpg',
//     title:'CheeseBurger',
//     mainLine : 'Cheesy Burger is a cheesy'
// },
// ];

const Item = ({id,title,image,mainLine}) => (
    <View style={{flexDirection:'column',paddingTop:10,paddingHorizontal:2}}>
        <Image source={{uri:image}} style={styles.image}/>
                <View style={styles.innerview}>
                    <Text style={styles.InnerViewText}>{title}</Text>
                    <Text style={styles.title}>{mainLine}</Text>
                </View>
    </View>
  );

const Card = (props) => {

    const dispatch = useDispatch();

    const categoryType = useSelector((state) => state.category.value);
    console.log('card ..',categoryType)

    const categoryData = useSelector((state) => state.category.Dessertdata);
    console.log('cardData ..',categoryData)

    const WrapData = useSelector((state) => state.category.WrapsData);
    console.log('WrapData ..',WrapData)

    const BurgerData = useSelector((state) => state.category.BurgersData);
    //console.log('WrapData ..',WrapData)

    const DrinkData = useSelector((state) => state.category.DrinksData);
    //console.log('WrapData ..',WrapData)

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        //To get all categories from firebase
        const fetchDesserts = async() => {
            dispatch(setCategoryData)
            try {
                //Read all data from Firebase
                await getDocs(collection(db,"/Categories/4ZZdV9bD3sNzGow5bXOd/Items")).then(docSnap=>{ 
                        docSnap.forEach((doc)=>{
                            //DessertData.push({...doc.data(),id:doc.id})
                            dispatch(setCategoryData({...doc.data(),id:doc.id}))
                        });
                        //console.log('Document Data', DessertData);
                        setDessertData(DessertData)
                        setLoading(false);
                    });
                    } catch(err) {
                        console.error(err);
                    }
                };
            fetchDesserts();
    }, []);

    useEffect(()=>{
        const fetchWraps = async() => {
            dispatch(setWrapsData)
            try {
            //Read all data from Firebase
                await getDocs(collection(db,"/Categories/QXMtKSSMbmfgyyZhHSmw/items")).then(docSnap=>{
                        let categories = []; 
                        docSnap.forEach((doc)=>{
                            //WrapData.push({...doc.data(),id:doc.id})
                            dispatch(setWrapsData({...doc.data(),id:doc.id}))
                        });
                        console.log('Document Data', WrapData);
                        //setWrapData(WrapData)
                        setLoading(false);
                    });
                    } catch(err) {
                        console.error(err);
                    }
                };
                fetchWraps();
    },[categoryType])

    useEffect(()=>{
        const fetchBurgers = async() => {
            dispatch(setBurgersData)
            try {
            //Read all data from Firebase
                await getDocs(collection(db,"/Categories/VUaZyg1XOAsbKQShBv2b/items")).then(docSnap=>{
                        let categories = []; 
                        docSnap.forEach((doc)=>{
                            //burgerData.push({...doc.data(),id:doc.id})
                            dispatch(setBurgersData({...doc.data(),id:doc.id}))
                        });
                        //console.log('Document Data', burgerData);
                        //setBurgerData(burgerData)
                        setLoading(false);
                    });
                    } catch(err) {
                        console.error(err);
                    }
                };
            fetchBurgers()
    },[categoryType])

    useEffect(()=>{
        const fetchDrinks = async() => {
            dispatch(setDrinkData)
            try {
            //Read all data from Firebase
                await getDocs(collection(db,"/Categories/zBKK4Ii1XyKOQqKGxjcF/items")).then(docSnap=>{
                        let categories = []; 
                        docSnap.forEach((doc)=>{
                            //drinkData.push({...doc.data(),id:doc.id})
                            dispatch(setDrinkData({...doc.data(),id:doc.id}))
                        });
                        // console.log('Document Data', drinkData);
                        // setDrinkData(drinkData)
                        setLoading(false);
                    });
                    } catch(err) {
                        console.error(err);
                    }
                };
                fetchDrinks();
    },[categoryType])

    return (
        !loading &&
        <View>
            <FlatList
            data={categoryType==='Desserts'?categoryData:categoryType==='Wraps'?WrapData:categoryType==='Burgers'?BurgerData:DrinkData}
            renderItem={({item}) => <Item image={item.image} title={item.title} mainLine={item.mainLine}  />}
            keyExtractor={item => item.id}
            numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        height:Height, 
        width:Width,  
    },
    innerview : { 
        backgroundColor:'#D8D8D8',
        width:Width,
        padding:20
    },
    InnerViewText:{
        color:'#000',
        fontSize:16,
        fontWeight:500
    },
    title:{
        paddingTop:5,
        color:'#5D5D5D',
        fontSize:12,
        fontWeight:400,
    },
})

export default Card;
