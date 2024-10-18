import { FlatList, ScrollView, View } from "react-native"
import { Appbar, Button, Text, TextInput } from "react-native-paper"
import firestore from "@react-native-firebase/firestore"

import { useEffect, useState } from "react"

const cTodos =firestore().collection("Todos")
const TodoApp = ()=>{
    const [todos, setTodos] =useState([])
    const [todo, setTodo] =useState([])
    const addNewToDo = ()=>
    {
        cTodos.add(
            {
                title: todo,
                complete: false,
            }
        )
        .then((doc) =>{
            doc.update({id: doc.id})
            console.log("add new toto")
        })
        .catch(e => console.log(e))
    }

    useEffect(()=>{
        cTodos.onSnapshot((data)=>{
            let result=[]
            data.forEach((item)=>{
                result.push(item.data())
            })
            setTodos(result)
        })
    }, [cTodos])
    const renderItem = ({item})=>{
        return(
            <Button>
                {item.title}
            </Button>
        )
    }
    return(
        <View style={{flex:1 }}>
            <Appbar.Header style ={{backgroundColor: "blue", 
            }}>
                <Appbar.Content title ={"Todo list"} 
                style={{
                    alignItems:"center"
                }} 
                color ="white"
                />

           
            </Appbar.Header>
            <ScrollView style={{flex:1}}>
                <FlatList
                    data={todos}
                    keyExtractor={item=> item.id}
                    renderItem={renderItem}
                />
            </ScrollView>
            <TextInput 
            values={todo}
            placeholder ="Input todo"
            onChangeText ={setTodo}
            />

            <Button onPress ={addNewToDo}> Add Todo</Button>
        </View>
    )
}


 export default TodoApp