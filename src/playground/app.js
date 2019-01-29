
//nested components
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            options : props.options

        }
        this.handleDeleteOptions =this.handleDeleteOptions.bind(this);
        this.handleDeleteOption =this.handleDeleteOption.bind(this);
        this.handlePick =this.handlePick.bind(this);
        this.handleAddOption =this.handleAddOption.bind(this);
    }

    componentDidMount(){
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

    //used to pass down to child components
    handleDeleteOptions(){
       - this.setState(()=>({options:[]}));
    }

    handleDeleteOption(optionToRemove){
        this.setState ((prevState)=>({
            //go through each element 
            options:prevState.options.filter((option)=>{
                //if condition is true, return this element to new array
                return optionToRemove !== option;
            })
        }));
    }

    handleAddOption(option){
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

    handlePick(){
        let randomNum = Math.floor(Math.random() * this.state.options.length);
        let picked = this.state.options[randomNum];
        alert(picked);
    }

    //render must be defined. It returns some Jsx 
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (<div>
        <Header  subtitle = {subtitle}/>
        <Action hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}/>
        <Options options={this.state.options}
        handleDeleteOptions = {this.handleDeleteOptions}
        handleDeleteOption = {this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
    </div>);
    }

}

IndecisionApp.defaultProps = {
    options : []
};

//accesing the Component class gives us all of the features of react 
// class Header extends React.Component {

//     //render must be defined. It returns some Jsx 
//     render(){
//         return (<div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>)
//     }

// }

//react components are used with class name tag

// class Action extends React.Component {
    
//     //render must be defined. It returns some Jsx 
//     render(){
//         return (<div>
//       <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>
//       What should I do?
//       </button>   
           
//         </div>);
//     }

// }

// class Options extends React.Component {
//     //use bind to make sure the context is correct
//     //reguklar functions have undefined this by default 
//     // constructor(props){
//         //constructor func of react componenets has props arguments 
//         // super(props);
//         // this.handleRemoveAll = this.handleRemoveAll.bind(this);    }


//     // handleRemoveAll(){
//     //     alert(this.props.options);

//     // }


//     //render must be defined. It returns some Jsx 
//     render(){
//         return (
//         <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             <p>  {this.props.options.length}</p>
//            {
//                this.props.options.map((option)=>{
//                    return <Option key={option} optionText={option}/>
//                })
//            }
//         </div>);
//     }

// }

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }
    //local method
    handleAddOption(e){
        e.preventDefault();//prevent page refresh 
        //retrieve input value 
        const option = e.target.elements.option.value.trim();
        const error =  this.props.handleAddOption(option);
        this.setState(()=>{ return {error}; });
        if(!error){
            e.target.elements.option.value='';
        }
        
    }
    //render must be defined. It returns some Jsx 
    render(){
        return (
        <div>
            {this.state.error && <p>{this.state.error}</p>}
           <form onSubmit={this.handleAddOption} >
                <input type='text' name='option' />
                <button >Add Option</button>
           </form>
        </div>);
    }

}

// class Option extends React.Component {
//     //render must be defined. It returns some Jsx 
//     render(){
//         return (
//             <p>{this.props.optionText}</p>
//         );
//     }

// }

//stateless functional component 
//faster because they dont come with overhead of a class
const User = (props) =>{

    return (
        <div>
            <p>Name: {props.name} </p>
            <p>Age: {props.age}</p>
        </div>
    );
}

const Action = (props) =>{
    return (<div>
        <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do?
        </button>   
             
          </div>);
}

const Header = (props)=>{

            return (<div>
                    <h1>{props.title}</h1>
                    {props.subtitle && <h2>{props.subtitle}</h2>}
                </div>);
        
    
    
}

Header.defaultProps = {
    title: 'Indecision'
};

const Option = (props)=>{
        //render must be defined. It returns some Jsx 
            return (
                <div>
                    {props.optionText}  
                    <button onClick={ ()=>{
                        props.handleDeleteOption(props.optionText)
                    }
                        }> Remove </button>
                </div>
                
            );
        
    
    
}

const Options = (props)=>{
        //use bind to make sure the context is correct
     
    
    
        //render must be defined. It returns some Jsx 
            return (
            <div>
                <button onClick={props.handleDeleteOptions}>Remove All</button>
                <p>  {props.options.length}</p>
               {
                   props.options.map((option)=>{
                       return <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption = {props.handleDeleteOption}
                       />
                   })
               }
            </div>);
        
}



ReactDOM.render(<IndecisionApp options={['devils den','second district']}/>, document.getElementById('app'));
