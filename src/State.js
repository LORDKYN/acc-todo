import { createContext , useState } from "react";

const State = createContext()
export const StateProvider = ({children}) => {
        const [data , setData] = useState([
            {id : 1 , title : 'Go To Bank' , description : 'Boro bank rajebe vam bepors baraye reza'  , importance : true ,},
            {id : 2 , title : 'Buy Tickets', description : 'ticket baraye jome saat 8 cinema heravi bekhar '  , importance : false ,},
            {id : 3 , title : 'Take Shower', description : ' ghabl az raftan be dorehami doosh begir '  , importance : true ,}
        ]);
        const [toggle , setToggle] = useState(false)
    return(
        <State.Provider value={{data , setData , toggle , setToggle}} >
            {children}
        </State.Provider>
    )
}
export default State;