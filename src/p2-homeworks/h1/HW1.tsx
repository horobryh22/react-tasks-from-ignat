import React from 'react';
import {Message} from './Message';


const messageData = {
    avatar: 'https://sun6-20.userapi.com/s/v1/if2/LGcdeCWk_ND-T7q08oMFSWkfWn-JoouCvND3qSAWEsTB1jr5OadWUx7di7b3h4k7wlT_86bqcUVdW0LzeELONFUA.jpg?size=200x200&quality=96&crop=21,21,598,598&ava=1',
    name: 'Alex Borrow',
    message: 'Hello, Dear Friend. I\'m very happy that meet you here',
    time: '22:22'
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*            <hr/>
            для личного творчества, могу проверить
            <AlternativeMessage/>
            <hr/>*/}
        </div>
    )
}

export default HW1;
