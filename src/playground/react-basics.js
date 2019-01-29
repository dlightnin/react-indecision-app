console.log('App is running');

const app = {
    title:'Indecision App',
    subtitle:'Some subtitle',
    options :[]

}

const numbers =[55,101,1000];

    


const onFormSubmit = (e) =>{
    e.preventDefault();

        console.log('form submitted');
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value ='';
        console.log(app.options);
    }
    render();

}

const removeAll = () =>{
    app.options = [];
    console.log(app.options);

    render();
}





const user = {
    name :'Kai-Ming',
    age: 25,
    location: 'Earth'
}

const getLocation = (loc)=>{
    return 'unknown'
};

const makeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);

}

const template2 = 
(<div>
    <h1>{user.name? user.name:'ananymous'}</h1>
    { (user.age && user.age > 18) && <p>Age : {user.age}</p>}
    <p>Location : {getLocation(user.location)}</p>
</div>);
    



const appRoot = document.getElementById('app');

const render =()=>{
    //JSX javascript XML
    const template = 
    (<div>
        <h1>{app.title}</h1>
        { app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length >0 ? ' here are your options ': 'no options'}</p>
        <p>{app.options.length}</p>
       
        <ol>
            {
                app.options.map((option)=> <li key={option}> {option}</li>)
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type = 'text' name='option'/>
            <button >Add Option</button>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAll} >Remove All</button>
        </form>

    </div>);
    ReactDOM.render(template,appRoot);
}

render();



