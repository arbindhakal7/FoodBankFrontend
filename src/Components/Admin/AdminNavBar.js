import React from 'react'

export default function AdminNavBar(props) {

    const handleLogout = () => {
        if(window.confirm('Do you want to logout?'))
        localStorage.removeItem('token');
        props.history.push('/');
        
    }
    
return(
<div>

</div>
)
}