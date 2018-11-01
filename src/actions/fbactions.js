import * as fb from '../backend/firebase'


const usersRef = fb.db.collection(users);

export const addUser = addUser => async dispatch =>{
   return {type: 'ADD_USER', 
   payload:  dataBase.doc(users).set({name: "Teddy"})
}}

export const fetchUsers = fetchUsers => async dispatch =>{
   return {type: 'FETCH_USERS', 
   payload: usersRef.get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            console.log(doc.id,"=>", doc.data());
        })
    
    })}
}