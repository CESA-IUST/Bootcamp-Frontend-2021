import React from 'react' ;
import { useHistory } from 'react-router';

export default function Profile(props)
{
    let history = useHistory() ;

    const userId = props.match ? props.match.params.userId : '' ;        

    const log_in = () => {
        // getting api 
        // history.push('/Feed');
    }

    return (
        <>
            <h2>
                Profile
            </h2>
            <button onClick= {() => {
                history.push('/Feed');
            }}>
                redirect to feed
            </button>
            {userId &&
                <p> {userId} </p>
            }
        </>
    )
}