import { Link } from '@reach/router'
import React from 'react'

const DiffLinks = (props) => {
    return (
        <div>
            <h4><Link to="/players/list">List</Link> | <Link to="/players/addplayer">Add Player</Link> </h4>
        </div>
    )
}

export default DiffLinks;
