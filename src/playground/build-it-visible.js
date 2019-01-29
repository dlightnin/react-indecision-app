class VisibilityToggle extends React.Component{
    
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state ={
            visibility : false
        }
    }
    handleToggleVisibility(){
        // alert('toggle');
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render(){

        return (
            <div>
            <h1>Visibility toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                {this.state.visibility? 'hide details':'show details'} </button>
                {this.state.visibility && 
                    <div> 
                        <p>Some info here </p>
                    </div>
                }   
                 
            </div>

        );

    }
}
const appRoot = document.getElementById('app');

ReactDOM.render(<VisibilityToggle/>,appRoot);


// const appRoot = document.getElementById('app');
// let flag = false ;
// let vis = undefined;
// const toggleVis = () =>{
//     flag = !flag;
//     vis =  flag ? <p >Some info </p> : undefined;
    
//     render();

// }
// const render = ()=>{
// const template = 
// <div>
// <h1>Visibility toggle</h1>
//     <button onClick={toggleVis}>{flag? 'hide details':'show details'}</button>
//         {vis}    
// </div>;
// ReactDOM.render(template,appRoot);
// }

// render();