import React from 'react'

function Card(props) {
    const {user_id,username}=props
  return (
    <>
    <div className="container my-2">
        <div className="card" style={{width:"18rem"}}>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">user_id : {user_id}</li>
            <li className="list-group-item">username : {username}</li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Card