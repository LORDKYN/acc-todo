import { useContext } from "react";
import State from "../State";
import { useState } from "react";

const List = () => {

const {data , setData , toggle , setToggle} = useContext(State);
const [ temp , setTemp] = useState(null)
const togglehandler = (id) => {
    const tempData = [...data]
    const index = tempData.indexOf(obj => obj.id === id)
    setTemp(index + 1)
    // console.log(temp)
}

    return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {data &&  data.map(el => {
        console.log(el)
        return(
            <div key={el.id} className="accordion-item">
        <h2 className="accordion-header">
          <button
          
            className={`accordion-button  ${temp !== el.id ? 'collapsed' : ''}`}
            type="button"
            data-bs-toggle={`${temp === el.id ? 'collapse' : ''}`}
            data-bs-target={`${temp === el.id ? '#flush-collapseOne' : ''}`}
            aria-expanded={temp !== el.id ? "false" : "true" }
            aria-controls={`${temp === el.id ? 'flush-collapseOne' : ''}`}
            onClick={() => { toggle === false ? togglehandler(el.id) : setToggle(false) }}
          >
            {el.title}
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className={`accordion-collapse collapse ${temp !== el.id ? '' : 'collapsing' } ${temp !== el.id ? '' : 'show'} `}
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            hello
          </div>
        </div>
      </div>
        )
      })}
    </div>
  );
};
export default List;
