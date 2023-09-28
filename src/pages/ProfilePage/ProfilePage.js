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






















// import React, { useState, useEffect } from 'react';
// import './index.css';

// import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
// import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';




// const ProfilePage = () => {
//   const [showDataAnalytics, setShowDataAnalytics] = useState(false);
//   const [showDashboard, setShowDashboard] = useState(false);
//   const [profileData, setProfileData] = useState([]);
//   const [isNavOpen, setIsNavOpen] = useState(false);


//   useEffect(() => {
//     if (showDataAnalytics) {
//       fetch('http://172.105.37.251:8000/POC/all_data/')
//         .then(response => response.json())
//         .then(data => setProfileData(data))
//         .catch(error => console.error('Error:', error));
//     }
//   }, [showDataAnalytics]);

//   const tableHeaders = [
//     'Customer_FirstName',
//     'Customer_Surname',
//     'Customer_Address',
//     'Customer_State',
//     'Customer_Postcode',
//     'Customer_Telephone_Number'
//   ];

//   const handleClickDataAnalytics = () => {
//     setShowDataAnalytics(true);
//     setShowDashboard(false); // Make sure Dashboard is hidden
//   }

//   const handleClickDashboard = () => {
//     setShowDashboard(true);
//     setShowDataAnalytics(false); // Make sure DataAnalytics is hidden
//   }


//   const handleNavMouseEnter = () => {
//     console.log("Mouse entered nav");
//     setIsNavOpen(true);
//   }
  
//   const handleNavMouseLeave = () => {
//     console.log("Mouse left nav");
//     setIsNavOpen(false);
//   }


//   return (
//     <div className="profile">
//       <nav className={`nav-container ${isNavOpen ? 'nav-open' : ''}`} onMouseEnter={handleNavMouseEnter} onMouseLeave={handleNavMouseLeave}>
//         <img src="https://vivifyassets.s3.ap-south-1.amazonaws.com/Group+18515.png" alt="logo" className={`logo ${isNavOpen ? 'nav-open' : 'nav-closed'}`} />
//         <button onClick={handleClickDashboard} type="button" className={`dashbord-btn ${showDashboard ? "selected-btn" : ""}`} value="dashboard"><span className="button-icon"><DashboardRoundedIcon className="button-icon-image" /></span> Dashboard</button>
//         <button onClick={handleClickDataAnalytics} type="button" className={`dataanalytics-btn ${showDataAnalytics ? "selected-btn" : ""}`} value="dataanalytics"><span className="button-icon"><PieChartRoundedIcon className="button-icon-image" /></span> DataAnalytics</button>
//       </nav>

//       {showDataAnalytics && (
//         <table className="profile_table">
//           {/* Table headers */}
//           <thead>
//             <tr>
//               {tableHeaders.map(header => (
//                 <th key={header}>{header}</th>
//               ))}
//             </tr>
//           </thead>
//           {/* Table body with data */}
//           <tbody>
//             {profileData.map((data, index) => (
//               <tr key={index}>
//                 {tableHeaders.map(header => (
//                   <td key={header}>{data[header]}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {showDashboard && (
//         <div className="dashboard-content">
//           {/* Add content for the Dashboard here */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProfilePage;















import React, { useState, useEffect } from 'react';
import './index.css';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';

const ProfilePage = () => {
  const [showDataAnalytics, setShowDataAnalytics] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);

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
    'Customer_Telephone_Number',
    'Actions' // New column for ellipsis menu
  ];

  const handleClickDataAnalytics = () => {
    setShowDataAnalytics(true);
    setShowDashboard(false);
  }

  const handleClickDashboard = () => {
    setShowDashboard(true);
    setShowDataAnalytics(false);
  }

  const handleNavMouseEnter = () => {
    setIsNavOpen(true);
  }
  
  const handleNavMouseLeave = () => {
    setIsNavOpen(false);
  }

  return (
    <div className={`profile ${isNavOpen ? '' : 'nav-closed'}`}>
      <nav className={`nav-container ${isNavOpen ? 'nav-open' : ''}${isNavOpen ? '' : 'white-icons'}`} onMouseEnter={handleNavMouseEnter} onMouseLeave={handleNavMouseLeave}>
        <img src="https://vivifyassets.s3.ap-south-1.amazonaws.com/Group+18515.png" alt="logo" className={`logo ${isNavOpen ? 'nav-open' : 'nav-closed'}`} />
        <button onClick={handleClickDashboard} type="button" className={`dashbord-btn ${showDashboard ? "selected-btn" : ""}`} value="dashboard">
          <span className="button-icon">
            <DashboardRoundedIcon className="button-icon-image" />
          </span> Dashboard
        </button>
        <button onClick={handleClickDataAnalytics} type="button" className={`dataanalytics-btn ${showDataAnalytics ? "selected-btn" : ""}`} value="dataanalytics">
          <span className="button-icon">
            <PieChartRoundedIcon className="button-icon-image" />
          </span> DataAnalytics
        </button>
      </nav>

      {showDataAnalytics && (
        <div className='profile_table_container'>
          <table className="profile_table">
            <thead>
              <tr>
                {tableHeaders.map(header => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {profileData.map((data, index) => (
                <tr key={index}>
                  {tableHeaders.map(header => {
                    if (header === 'Actions') {
                      return (
                        <td key={header} className="actions-cell">
                          <div className="ellipsis-menu">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                          </div>
                        </td>
                      );
                    } else {
                      return <td key={header}>{data[header]}</td>;
                    }
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
