
import {useState} from 'react'
function Update() {
    const [student, setStudent] = useState({ name: 'Alice', age: 25 });

    const updateStudent = () => {
        setStudent({ ...student, age: 26 });
    };

    return (
        <>
            <p>{student.name} is {student.age} years old.</p>
            <button onClick={updateStudent}>Update Age</button>
        </>
    );
}

export default Update;