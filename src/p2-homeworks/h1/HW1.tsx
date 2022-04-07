import React from 'react';
import {Message} from './Message';


const messageData = {
    avatar: 'https://i1.sndcdn.com/artworks-yytPkjYAy2vyMlAD-Zm9gGQ-t240x240.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <h3>First Homework:</h3>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1;
