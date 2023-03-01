import React from 'react'
import UserCard from './UserCard'


function CardContainer() {
    let userList = [{
        username: "Vyshnavi",
        userid: 123
    },
    {
        username: "Athira",
        userid: 124
    },
    {
        username: "Akshay",
        userid: 125
    },
    {
        username: "Praveen",
        userid: 126
    }
    ]
    return (
        <div className='card'>
            {
                userList.map((u) => {
                    return <UserCard user={u}/>
                })
            }
        </div>
    )
}

export default CardContainer