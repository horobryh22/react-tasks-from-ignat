import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';

export type UserType = {
    _id: string
    name: string
}


const HW3: React.FC = () => {
    const [users, setUsers] = useState<Array<UserType>>([])

    console.log(users);

    const addUserCallback = (name: string) => {
        setUsers([{_id: v1(), name}, ...users]);
    }

    return (
        <div>
            <hr/>
            <h3>Third Homework:</h3>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    )
}

export default HW3;
