import React from 'react';
import Option from './Option';

const Options = (props)=>
    //use bind to make sure the context is correct
 


    //render must be defined. It returns some Jsx 
         (
        <div>
            <div className='widget-header'>
                <h3 className='widget-header__title'>Your options</h3>
                <button 
                className='button button--link'
                onClick={props.handleDeleteOptions}>Remove All</button>
            </div>
           

             
             {(props.options.length ==0 )? <p className='widget__message'>Please add an option!</p> : <p className='widget__message'>Total options: {props.options.length}</p>}

           {
               props.options.map((option,index)=>{
                   return <Option 
                    key={option} 
                    optionText={option}
                    count = {index+1}
                    handleDeleteOption = {props.handleDeleteOption}
                   />
               })
           }
        </div>);
    


export default Options;
