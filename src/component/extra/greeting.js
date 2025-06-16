


function greeting() {
        return <h1>Hello, world!</h1>;
    }
    
    // export default greeting;

function Student(props) {
    console.log(props);
    
    return (
      <>
        <h1>Hello, {props.name}</h1>
        <h2>Age: {props.age}</h2>
        <h2>Gender: {props.gender}</h2>
      </    >
    );
    // return <h1>Hello, {props.name}</h1>;
  }
  
  export default Student;