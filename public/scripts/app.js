'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//nested components
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: props.options

        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                console.log('fetching data');
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                //do nothing
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);

                console.log('saving data');
            }
        }
        //when componenet goes away

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('unmount');
        }

        //used to pass down to child components

    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            -this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    //go through each element 
                    options: prevState.options.filter(function (option) {
                        //if condition is true, return this element to new array
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value';
            }
            //check if alrerady in array
            else if (this.state.options.indexOf(option) > -1) {
                    return 'Already in array';
                }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var picked = this.state.options[randomNum];
            alert(picked);
        }

        //render must be defined. It returns some Jsx 

    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision';
            var subtitle = 'Put your life in the hands of a computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
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

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }
    //local method


    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault(); //prevent page refresh 
            //retrieve input value 
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });
            if (!error) {
                e.target.elements.option.value = '';
            }
        }
        //render must be defined. It returns some Jsx 

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

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


var User = function User(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Name: ',
            props.name,
            ' '
        ),
        React.createElement(
            'p',
            null,
            'Age: ',
            props.age
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.hasOptions, onClick: props.handlePick },
            'What should I do?'
        )
    );
};

var Header = function Header(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

var Option = function Option(props) {
    //render must be defined. It returns some Jsx 
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            { onClick: function onClick() {
                    props.handleDeleteOption(props.optionText);
                } },
            ' Remove '
        )
    );
};

var Options = function Options(props) {
    //use bind to make sure the context is correct


    //render must be defined. It returns some Jsx 
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        React.createElement(
            'p',
            null,
            '  ',
            props.options.length
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

ReactDOM.render(React.createElement(IndecisionApp, { options: ['devils den', 'second district'] }), document.getElementById('app'));
