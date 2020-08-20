import React from 'react'

export const MyLists = () => {
    return (
        <div>
            <div className="sub-heading">
                <h1>My Lists</h1>
                <button className="btn-create"> + Create New List</button>
            </div>
            <ul>
                <li>Anime Collection</li>
                <li>manhwa Collection</li>
                <li>Upcoming Movies</li>
            </ul>
        </div>
    )
}
