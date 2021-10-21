// S => State
// T => Type
// K => Key
// V => Value
// E => Element 

type numOrStr = number | string;

function useState<S extends numOrStr = string>() {
    let state: S;

    function getState() {
        return state;
    }

    function setState(newState: S) {
        state = newState;
    }

    return { getState, setState };
}

const newState = useState<number | string>();

newState.setState(10.9);
console.log(newState.getState());

newState.setState("Batatinha frita");
console.log(newState.getState());

newState.setState(45.91);
console.log(newState.getState());