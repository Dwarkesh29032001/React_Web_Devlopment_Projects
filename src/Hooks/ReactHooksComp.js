import React from 'react'
import { Outlet, Link } from 'react-router-dom'


const ReactHooksComp = () => {
    return (
        <div>
            <h2>This ReactHookComp !</h2>

            <div className='card border-primary' >
                <div className='card-header border-primary' >
                    <Link to="useState" className='btn btn-outline-primary btn-sm'>UseState</Link>
                    {" "}<Link to="useEffect" className='btn btn-outline-primary btn-sm'>useEffect</Link>     </div>
                <div className='card-body border-primary' >
                    <Outlet />
                </div>

            </div>

        </div>

    )
}

export default ReactHooksComp
