import React from 'react';

const Option = (props)=>
    //render must be defined. It returns some Jsx 
         (
            <div className='option'>
                <p className='option__text'>{props.count}. {props.optionText}  </p>
                
                <button 
                className='button button--link'
                onClick={ ()=>{
                    props.handleDeleteOption(props.optionText)
                }
                    }> Remove </button>
            </div>
            
        );
    




export default Option ; 