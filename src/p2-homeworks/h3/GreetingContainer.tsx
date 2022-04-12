import React, {ChangeEvent, ChangeEventHandler, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setName(value);
    };

    const addUser = () => {
        const trimmedName = name.trim();

        if (trimmedName) {
            setError('');
            addUserCallback(trimmedName);
            alert(`Hello  ${trimmedName}!`)
        } else {
            setError('You try to enter the wrong name');
        }

        setName('');
    };

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
};

export default GreetingContainer;
