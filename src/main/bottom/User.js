import React from 'react'
import UserEl from './UserEl';

const info = [
    {
        message: "Son 3 günde sen 21, arkadaşların ise ortalama 251 soru çözdü."
    },
    {
        message: "Bugüne kadar toplam 3.48 net yaptın."
    },
    {
        message: "Bugüne kadar toplam 251 soru çözdün."
    },
    {
        message: "Bu hafta soru çözen 7315 kişi arasında 5832. sıradasın."
    }
];

const User = () => {

    return (
    <div style={{height:"15em"}}>
       <div style={{ display:'flex', width:'100%', height:"15em", justifyContent:'center',marginTop:'1em', flexWrap:'wrap',}}>
            {
            info.map((user,index) => (
                <UserEl 
                    user={user}
                    key={index}
                />
            ))
        }
       </div>
    </div>
    )
}

export default User;

