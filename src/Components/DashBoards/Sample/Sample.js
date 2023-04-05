import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';



const Sample = () => {

  const [Value,setValue] = useState();

    const secondExample = {
        size: 50,
        count: 5,
        color: "black",
        activeColor: "Green",
        Value : "",
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: (Value) => {
          console.log(`Example 2: new value is ${Value}`);
          setValue(Value);
        }
      };
  return (
    // <div>
    //    <ReactStars {...secondExample}/>
    
    //  <h2>value = {Value}</h2>

    //  <div className='loader-parent'>
    //  <span className ="loader"></span>
    //  </div>
    // </div>
  <>
  Sample 1 ...
  </>
    )
}

export default Sample