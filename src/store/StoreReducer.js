const types={

      is_loading:"IS_LOADING",   
}

//Estado global inicial
const initialStore={
   isLoading:false
}


const StoreReducer = (state,action)=> {
   
   //De acuerdo a la accion recibida por parámetro modifico el estado inicial, los datos a modificar vienen en payload
    switch (action.type) {
        case types.is_loading:
            return{
                ...state,
                isLoading:action.payload}   
                   
        default:
            return state;
    }
}

export {initialStore, types};
export default StoreReducer;