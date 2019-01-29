import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
console.log("app.js running boi");



//nested components
class IndecisionApp extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         options : props.options

    //     }
    //     this.handleDeleteOptions =this.handleDeleteOptions.bind(this);
    //     this.handleDeleteOption =this.handleDeleteOption.bind(this);
    //     this.handlePick =this.handlePick.bind(this);
    //     this.handleAddOption =this.handleAddOption.bind(this);
    // }
    state = {
        options : [],
        selectedOption : undefined
    };

    //used to pass down to child components
    handleDeleteOptions = () => {
         this.setState(()=>({options:[]}));
     }
 
     handleDeleteOption= (optionToRemove)=>{
         this.setState ((prevState)=>({
             //go through each element 
             options:prevState.options.filter((option)=>{
                 //if condition is true, return this element to new array
                 return optionToRemove !== option;
             })
         }));
     }
 
     handleAddOption= (option)=> {
         if(!option){
             return 'Enter valid value';
         }
         //check if alrerady in array
         else if(this.state.options.indexOf(option) > -1 ){
             return 'Already in array';
         }
 
         this.setState((prevState)=>{
             return {
             options: prevState.options.concat([option])};
         });
     }
 
     handlePick=()=>{
         let randomNum = Math.floor(Math.random() * this.state.options.length);
         let picked = this.state.options[randomNum];
         this.setState(()=>({selectedOption:picked}));
     }
     handleClearSelectedOption=()=>{
         
        this.setState(()=>({selectedOption:undefined}));
    }
    componentDidMount=()=>{
        try {
            console.log('fetching data');
            const json= localStorage.getItem('options');
            const options  = JSON.parse(json);
            if (options){
                this.setState(()=>({options:options}));
            }
            
        } catch (e) {
            //do nothing
        }

    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            
            console.log('saving data');

        }
    }
    //when componenet goes away
    componentWillUnmount(){
        console.log('unmount');
    }

    

    //render must be defined. It returns some Jsx 
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (<div>
        <Header  subtitle = {subtitle}/>
        <div className='container'>
            <Action hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}/>
            <div className='widget'>
                <Options options={this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
            
                <OptionModal
                selectedOption={this.state.selectedOption} 
                handleClearSelectedOption = {this.handleClearSelectedOption}
                />
        </div>
   
    </div>);
    }

}

// IndecisionApp.defaultProps = {
//     options : [],
//     selectedOption:undefined
// };
 
export default IndecisionApp;
