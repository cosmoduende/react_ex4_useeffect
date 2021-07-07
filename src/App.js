import {useState, useEffect} from "react";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  // ComponenteDidUpdate
  useEffect(() => {
    console.log("haciendo lo mismo que con ComponentDidUpdate")
  });

// ComponenteDidMount
useEffect(() => {
  console.log("haciendo lo mismo que con ComponentDidMount")
}, []);

// useEffect sólo si y solo sí algo indicado cambia, en este caso name y en un segundo caso age
useEffect(() => {
  console.log("name cambió")
}, [name]);

useEffect(() => {
  console.log("age cambió")
}, [age]);

    return(
      <div>
        <h1>
          Hola
        </h1>
        <input value={name} onChange={({target : {value}}) => setName(value)}></input>
        <input type="number" age={age} onChange={({target : {value}}) => setAge(value)}></input>
      </div>
    );
}

export default App;
