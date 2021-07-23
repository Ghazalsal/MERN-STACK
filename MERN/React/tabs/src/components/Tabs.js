import React, {useState} from 'react'

const tabs =["t1", "t2","t3"];

const Tabs = () => {
    const [ msg, setMsg] =useState("")


    const clickHandler = (e, value ) => {
        setMsg(value + "content is showing here.")
    }

    return (
        <div>
            {tabs.map (( item, index) => {
                return <button onClick= { (e) => clickHandler(e,item)}>{item}</button>
            })}
            <p>{msg}</p>
        </div>
    );
}
export default Tabs;