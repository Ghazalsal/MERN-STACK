import { Link } from '@reach/router'
import React from 'react'

const LinkTo = () => {
    return (
        <div>
            <h1><Link to="/players/list">Manage Players</Link>
                | <Link to="/status/game/1">Manage Player Status</Link> 
            </h1>
        </div>
    )
}

export default LinkTo
