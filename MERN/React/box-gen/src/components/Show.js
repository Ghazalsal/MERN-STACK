import React from 'react'

const Show = (props) =>{
    return(
        <div className="show">
            {props.boxes.map(
                (item, index) =>
                    <div style={{ width: item.width + 'px', height: item.height + 'px', backgroundColor: item.color, marginLeft: 10 + 'px' }} ></div>
            )}
        </div>
    );
}
export default Show;
