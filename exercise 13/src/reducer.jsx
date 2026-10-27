import { useReducer } from "react";
const initialstate={
    countA:0,
    countB:0
}
const Reducer=(state,action)=>{
switch (action.type)   { 
    case 'increment_A':
    return {countA:state.countA+1}
    case 'decrement_A':
    return{countA:state.countA-1}
    //B
    case 'increment_B':
        return {countB:state.countB+1};
        case 'decrement_B':
        return{countB:state.countB-1}

case 'resetall':
    return initialstate
    default :
        return state

}
}
const CounterwithReducer=()=>{
const [state,dispatch]=useReducer(Reducer,initialstate);
return(
    <div>

<div>
            <h1> countA {state.countA}</h1>
        <button onClick={()=>dispatch({type:'increment_A'})}>A+</button>
        <button onClick={()=>dispatch({type:'decrement_A'})}>A-</button>
</div>
<div>
            <h1> countB {state.countB}</h1>
        <button onClick={()=>dispatch({type:'increment_B'})}>A+</button>
        <button onClick={()=>dispatch({type:'decrement_B'})}>A-</button>
</div>
<button>{RES}</button>
    </div>
)
}
export default CounterwithReducer;