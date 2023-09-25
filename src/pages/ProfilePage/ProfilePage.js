// import React, { useState } from 'react';

// import './index.css'

// const ProfilePage = () => {

//     const [showSection, setSection] = useState("blank")


//     const onClickSection = (e) => {
//         setSection(e.target.value)
//         console.log(e.target.value)
//     }
//    const buttonClass = showSection !== "blank" ? "selected-btn" : ""




//     return (
//         <div className="profile">
//             <nav className='nav-container'>
//                 <img src="https://vivifyassets.s3.ap-south-1.amazonaws.com/Group+18515.png" alt="logo" className='logo' />
//                 <button onClick={onClickSection} type="button" className={`dashbord-btn ${showSection === "dashboard" ? buttonClass :""}`} value="dashboard">Dashboard</button>
//                 <button onClick={onClickSection} type="button" className={`dataanalytics-btn ${showSection === "dataanalytics" ? buttonClass :""}`} value="dataanalytics">DataAnalytics</button>
//             </nav>
//             {showSection === "dataanalytics" && (<ul className="profile_details">
//                 <li className='list-item'>Customer_Firstname</li>
//                 <li className='list-item'>Customer_Surname</li>
//                 <li className='list-item'>Customer_Address</li>
//                 <li className='list-item'>Customer_State</li>
//                 <li className='list-item'>Customer_Postcode</li>
//                 <li className='list-item'>Customer_Telephone_Number</li>
//             </ul>)}

//         </div>
//     );
// }

// export default ProfilePage;


























/*  in this code data showing beside the table  */




// import React, { useState, useEffect } from 'react';
// import './index.css';

// const ProfilePage = () => {
//   const [showSection, setSection] = useState("blank");
//   const [profileData, setProfileData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://172.105.37.251:8000/POC/all_data/');
//         const data = await response.json();
//         setProfileData(data);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     }

//     fetchData();
//   }, []);

//   const onClickSection = (e) => {
//     setSection(e.target.value);
//     console.log(e.target.value);
//   }

//   const buttonClass = showSection !== "blank" ? "selected-btn" : "";

//   return (
//     <div className="profile">
//       <nav className='nav-container'>
//         <img src="https://vivifyassets.s3.ap-south-1.amazonaws.com/Group+18515.png" alt="logo" className='logo' />
//         <button onClick={onClickSection} type="button" className={`dashbord-btn ${showSection === "dashboard" ? buttonClass :""}`} value="dashboard">Dashboard</button>
//         <button onClick={onClickSection} type="button" className={`dataanalytics-btn ${showSection === "dataanalytics" ? buttonClass :""}`} value="dataanalytics">DataAnalytics</button>
//       </nav>

//       {showSection === "dataanalytics" && (
//         <table className="profile_details">
//           <thead>
//             <tr>
//               <th>Customer_Firstname</th>
//               <th>Customer_Surname</th>
//               <th>Customer_Address</th>
//               <th>Customer_State</th>
//               <th>Customer_Postcode</th>
//               <th>Customer_Telephone_Number</th>
//             </tr>
//           </thead>
//           <tbody>
//             {profileData.map((row, index) => (
//               <tr key={index}>
//                 <td>{row.Customer_Firstname}</td>
//                 <td>{row.Customer_Surname}</td>
//                 <td>{row.Customer_Address}</td>
//                 <td>{row.Customer_State}</td>
//                 <td>{row.Customer_Postcode}</td>
//                 <td>{row.Customer_Telephone_Number}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//     </div>
//   );
// }

// export default ProfilePage;






























import React, { useState, useEffect } from 'react';
import './index.css';

const ProfilePage = () => {
  const [showDataAnalytics, setShowDataAnalytics] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    if (showDataAnalytics) {
      fetch('http://172.105.37.251:8000/POC/all_data/')
        .then(response => response.json())
        .then(data => setProfileData(data))
        .catch(error => console.error('Error:', error));
    }
  }, [showDataAnalytics]);

  const tableHeaders = [
    'Customer_FirstName',
    'Customer_Surname',
    'Customer_Address',
    'Customer_State',
    'Customer_Postcode',
    'Customer_Telephone_Number'
  ];

  const handleClickDataAnalytics = () => {
    setShowDataAnalytics(true);
    setShowDashboard(false); // Make sure Dashboard is hidden
  }

  const handleClickDashboard = () => {
    setShowDashboard(true);
    setShowDataAnalytics(false); // Make sure DataAnalytics is hidden
  }

  return (
    <div className="profile">
      <nav className='nav-container'>
        <img src="https://vivifyassets.s3.ap-south-1.amazonaws.com/Group+18515.png" alt="logo" className='logo' />
        <button onClick={handleClickDashboard} type="button" className={`dashbord-btn ${showDashboard ? "selected-btn" : ""}`} value="dashboard">Dashboard</button>
        <button onClick={handleClickDataAnalytics} type="button" className={`dataanalytics-btn ${showDataAnalytics ? "selected-btn" : ""}`} value="dataanalytics">DataAnalytics</button>
      </nav>

      {showDataAnalytics && (
        <table className="profile_table">
          {/* Table headers */}
          <thead>
            <tr>
              {tableHeaders.map(header => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          {/* Table body with data */}
          <tbody>
            {profileData.map((data, index) => (
              <tr key={index}>
                {tableHeaders.map(header => (
                  <td key={header}>{data[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showDashboard && (
        <div className="dashboard-content">
          {/* Add content for the Dashboard here */}
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
