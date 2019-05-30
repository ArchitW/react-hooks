import React, {useState} from 'react';


function App() {

    //useState(value , function())
    // (current value of state, function to update current value of state)
    // getter and setter
    // * can not invoke in conditional loops (ex if)
    // use ES6 destructuring "[] = useState()" syntax to get state and function

    const [activated, setActivated] = useState(false);
    const buttonText = activated ? 'active' : 'inactive';

    /*
    inline onClick function can be extracted to:
        const onClick = () => setActivated(!activated);
    or
     function onClick() {
        setActivated(!activated);
    }
     */

    handleClick = () => {
        this,setState({count: this.state.counter + 1 });
        //or

        this.setState((previousState) => {
            return previousState + 1;
        })
    }

    return (

        <button
            onClick={() => setActivated(!activated)}>
            {buttonText}
        </button>
    );
}


/* Setting up multiple states
Method I:
const [location, setLocation] = setState({
    city:'',
    country:''
    });
setting up state: Hooks tends to over write whole object be careful
pass ...country (previous state object), function will going to
replace new state while keeping other states as it is,
*if not use ... will causes Undefined
"merge oldstate obj with new state obj"
function handleCityChange(event){
    setLocation({
            ...location, city:event.target.value
            })
}

function handleCountryChange(event){
    setLocation({
            ...location, country:event.target.value
           )}
}

Method II: call useState twice
const [city, setCity] = useState("");
const [Country, setCountry] = useState("");

function handleCityChange(event){
setCity(event.target.value)
}

const handleCountryChange =(event) => setCountry(event.target.value)

 */
export default App;
