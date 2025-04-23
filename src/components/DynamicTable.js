import React, { useState } from "react";

const DynamicTable = () => {
  const [value, setValue] = useState([]);

  const handleFetch = () => {
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(data => {
        setValue(data.data);
      })
      .catch(err => console.error("Fetch error:", err));
  };

  return (
    <div>
      <button onClick={handleFetch} className="btn">Get User List</button>

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>

        <tbody>
          {value.length > 0 ? (
            value.map(user => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.avatar} alt="avatar" width="50" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" align="center">No data found to display.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};




// import React,{useState} from 'react';
// import axios from 'axios';


// const DynamicTable=()=>{

//     const [user, setUser] = useState({})

//     const [loading, setLoading] = useState(true)

// return(

//     <div>
//           <button onClick={()=>{
//              axios.get('https://reqres.in/api/users')
//              .then(response=>{
//                 console.log(response.data.data)
//                setUser(response.data)
//                 setLoading(false)
//              })
//              .catch(error=>{
//                 console.error('Error fetching user:', error);
//                 setLoading(false);
//              })

//           }}>CLick to FetchData</button>

//           {
//             !loading && (
//                 <table>
//                     <thead>
//                        <tr>
//                        <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Email</th>
//                         <th>Avatar</th>
//                        </tr>
                    
//                     </thead>
//                     <tbody>
//                         {
//                             user.map(item=>{
//                                 <tr>
//                                     <td>{item.first_name}</td>
//                                     <td>{item.last_name}</td>
//                                     <td>{item.email}</td>
//                                     <td>
//                                         <img src="item.avatar" alt="avatar"  width={50}/>
//                                     </td>
//                                 </tr>
//                             })
//                         }
//                     </tbody>
//                 </table>
//             )
//           }
//   </div>
// );
// };
// export default DynamicTable;



// import React, { useState } from 'react';
// import axios from 'axios';

// const DynamicTable = () => {
//   const [user, setUser] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchData = () => {
//     axios.get('https://reqres.in/api/users')
//       .then(response => {
//         console.log(response.data.data);
//         setUser(response.data.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching user:', error);
//         setLoading(false);
//       });
//   };

//   return (
//     <div>
//       <button onClick={fetchData}>Click to Fetch Data</button>

//       {!loading && (
//         <table border="1" style={{ marginTop: '20px' }}>
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//               <th>Avatar</th>
//             </tr>
//           </thead>
//           <tbody>
//             {user.map(item => (
//               <tr key={item.id}>
//                 <td>{item.first_name}</td>
//                 <td>{item.last_name}</td>
//                 <td>{item.email}</td>
//                 <td>
//                   <img src={item.avatar} alt="avatar" width={50} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

export default DynamicTable;
