import React from 'react' ;
import { Link } from 'react-router-dom';


export default function Home(props)
{
    return (
        <>
        {/* Unordered List */}
            <ul> 
                <li>
                    <Link to="/Profile" >
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to="/Feed" >
                        Feed
                    </Link>
                </li>
            </ul>
        </>
    )
}