
const initialState = {
    _id: 'whatever'
}

export default function ( state = initialState, action){
    console.log(state);
    
    

    switch(action.type){
        
        default: return state
    }
}