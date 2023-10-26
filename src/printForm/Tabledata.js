import React from 'react';

export default function Tabledata({tableApi}){

return(
    <>
    <table>
      <thead> 
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {
                tableApi.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{data.userFirstname}</td>
                            <td>{data.userLastname}</td>
                            <td>{data.userPhone}</td>
                            
                        </tr>
                    )
                })
            }                             


      </tbody> 
    </table>
    </>
)
}
