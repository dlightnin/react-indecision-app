class Counter extends React.Component{
    constructor (props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        //default state
        this.state = {
            count:props.count,
            name:'kai'
        }

    }
    handleAddOne(){
        //manipulate componenet object and refresh 
        this.setState((prevState)=>{
            return {count : prevState.count+1
            };

        });
        // this.state.count ++;
    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return {count : prevState.count-1
            };

        });

    }
    handleReset(){
        this.setState((prevState)=>{
            return {count : 0
            };

        });
    }
    render(){
        return (
            <div>
                
                    <h1>Count: {this.state.count} </h1>
                    <button onClick={this.handleAddOne}>+1</button>
                    <button onClick={this.handleMinusOne}>-1</button>
                    <button onClick ={this.handleReset}>reset</button>
                
            </div>
           


        );
    }
}

Counter.defaultProps = {
    count:0
}


ReactDOM.render (<Counter/>, document.getElementById('app'));
// console.log('App is running');

// const app = {
//     title:'Indecision App',
//     subtitle:'Some subtitle',
//     options :['one','two']

// }

// //JSX javascript XML
// const template = 
// (<div>
//     <h1>{app.title}</h1>
//     { app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options.length >0 ? ' here are your options ': 'no options'}</p>
// </div>);



// const user = {
//     name :'Kai-Ming',
//     age: 25,
//     location: 'Earth'
// }

// const getLocation = (loc)=>{
//     return 'unknown'
// };

// const template2 = 
// (<div>
//     <h1>{user.name? user.name:'ananymous'}</h1>
//     { (user.age && user.age > 18) && <p>Age : {user.age}</p>}
//     <p>Location : {getLocation(user.location)}</p>
// </div>);
// let count =0;
// const addOne = ()=>{
//     count++;
//     console.log('addOne',count);
//     renderCounterApp();
// };
// const minusOne = ()=>{
//     count--;
//     console.log('minusOne',count );
//     renderCounterApp();
// };
// const resetBtn = ()=>{
//     count =0;
//     console.log('reset',count);
//     renderCounterApp();
// };


// const appRoot = document.getElementById('app');



// const renderCounterApp =() =>{
//     const template3= 
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={resetBtn}>reset</button>
//     </div>;

//     ReactDOM.render(template3,appRoot);

// }


// renderCounterApp();