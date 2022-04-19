import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
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
        setError('');
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

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser();
        }
    }

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onEnter={onEnter}
            setError={setError}
            error={error}
            totalUsers={totalUsers}
        />
    )
};

export default GreetingContainer;
