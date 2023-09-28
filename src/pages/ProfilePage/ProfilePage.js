

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
//     'Customer_Telephone_Number',
//     'Actions' // New column for ellipsis menu
//   ];

//   const handleClickDataAnalytics = () => {
//     setShowDataAnalytics(true);
//     setShowDashboard(false);
//   }

//   const handleClickDashboard = () => {
//     setShowDashboard(true);
//     setShowDataAnalytics(false);
//   }

//   const handleNavMouseEnter = () => {
//     setIsNavOpen(true);
//   }
  
//   const handleNavMouseLeave = () => {
//     setIsNavOpen(false);
//   }

//   return (
//     <div className={`profile ${isNavOpen ? '' : 'nav-closed'}`}>
//       <nav className={`nav-container ${isNavOpen ? 'nav-open' : ''}${isNavOpen ? '' : 'white-icons'}`} onMouseEnter={handleNavMouseEnter} onMouseLeave={handleNavMouseLeave}>
//         <img src="https://vivifyassets.s3.ap-south-1.amazonaws.com/Group+18515.png" alt="logo" className={`logo ${isNavOpen ? 'nav-open' : 'nav-closed'}`} />
//         <button onClick={handleClickDashboard} type="button" className={`dashbord-btn ${showDashboard ? "selected-btn" : ""}`} value="dashboard">
//           <span className="button-icon">
//             <DashboardRoundedIcon className="button-icon-image" />
//           </span> Dashboard
//         </button>
//         <button onClick={handleClickDataAnalytics} type="button" className={`dataanalytics-btn ${showDataAnalytics ? "selected-btn" : ""}`} value="dataanalytics">
//           <span className="button-icon">
//             <PieChartRoundedIcon className="button-icon-image" />
//           </span> DataAnalytics
//         </button>
//       </nav>

//       {showDataAnalytics && (
//         <div className='profile_table_container'>
//           <table className="profile_table">
//             <thead>
//               <tr>
//                 {tableHeaders.map(header => (
//                   <th key={header}>{header}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {profileData.map((data, index) => (
//                 <tr key={index}>
//                   {tableHeaders.map(header => {
//                     if (header === 'Actions') {
//                       return (
//                         <td key={header} className="actions-cell">
//                           <div className="ellipsis-menu">
//                             <div className="dot"></div>
//                             <div className="dot"></div>
//                             <div className="dot"></div>
//                           </div>
//                         </td>
//                       );
//                     } else {
//                       return <td key={header}>{data[header]}</td>;
//                     }
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
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



















// import React, { useState, useEffect } from 'react';
// import './index.css';
// import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
// import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
// import EditIcon from '@mui/icons-material/Edit';
// import VisibilityIcon from '@mui/icons-material/Visibility';


// const ProfilePage = () => {
//   const [showDataAnalytics, setShowDataAnalytics] = useState(false);
//   const [showDashboard, setShowDashboard] = useState(false);
//   const [profileData, setProfileData] = useState([]);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [selectedRow, setSelectedRow] = useState(null);
  
  

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
//     'Customer_Telephone_Number',
//     'Actions' // New column for ellipsis menu
//   ];

//   const handleClickDataAnalytics = () => {
//     setShowDataAnalytics(true);
//     setShowDashboard(false);
//   }

//   const handleClickDashboard = () => {
//     setShowDashboard(true);
//     setShowDataAnalytics(false);
//   }

//   const handleNavMouseEnter = () => {
//     setIsNavOpen(true);
//   }
  
//   const handleNavMouseLeave = () => {
//     setIsNavOpen(false);
//   }

//   const handleEdit = (data) => {
//     // Add logic for handling Edit button click
//     console.log('Edit clicked for:', data);
//   }

//   const handleView = (data) => {
//     if (data.PAFORM_Link) {
//       window.open(data.PAFORM_Link, '_blank');
//     } else {
//       console.error('No PDF URL available for this data entry');
//     }
//   }



//   return (
//     <div className={`profile ${isNavOpen ? '' : 'nav-closed'}`}>
//       <nav className={`nav-container ${isNavOpen ? 'nav-open' : ''}${isNavOpen ? '' : 'white-icons'}`} onMouseEnter={handleNavMouseEnter} onMouseLeave={handleNavMouseLeave}>
//         <img src="https://vivifyassets.s3.ap-south-1.amazonaws.com/Group+18515.png" alt="logo" className={`logo ${isNavOpen ? 'nav-open' : 'nav-closed'}`} />
//         <button onClick={handleClickDashboard} type="button" className={`dashbord-btn ${showDashboard ? "selected-btn" : ""}`} value="dashboard">
//           <span className="button-icon">
//             <DashboardRoundedIcon className="button-icon-image" />
//           </span> Dashboard
//         </button>
//         <button onClick={handleClickDataAnalytics} type="button" className={`dataanalytics-btn ${showDataAnalytics ? "selected-btn" : ""}`} value="dataanalytics">
//           <span className="button-icon">
//             <PieChartRoundedIcon className="button-icon-image" />
//           </span> DataAnalytics
//         </button>
//       </nav>

//       {showDataAnalytics && (
//         <div className='profile_table_container'>
//           <table className="profile_table">
//             <thead>
//               <tr>
//                 {tableHeaders.map(header => (
//                   <th key={header}>{header}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {profileData.map((data, index) => (
//                 <tr key={index}>
//                   {tableHeaders.map(header => {
//                     if (header === 'Actions') {
//                       return (
//                         <td key={header} className="actions-cell">
//                           <div className="action-container">
//                           <div className={`ellipsis-menu ${selectedRow === index ? 'clicked' : ''}`} onClick={() => setSelectedRow(selectedRow === index ? null : index)}>
//                             <div className="dot"></div>
//                             <div className="dot"></div>
//                             <div className="dot"></div>
//                           </div>
//                           {selectedRow === index && (
//                             <div className="action-buttons">
//                               <button onClick={() => handleEdit(data)}><div className="icon"><EditIcon/></div> Edit</button>
//                               <button onClick={() => handleView(data)}><div className='icon'><VisibilityIcon/></div> View</button>
//                             </div>
//                           )}
//                           </div>
//                         </td>
//                       );
//                     } else {
//                       return <td key={header}>{data[header]}</td>;
//                     }
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
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
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ProfilePage = () => {
  const [showDataAnalytics, setShowDataAnalytics] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [showPdfViewer, setShowPdfViewer] = useState(false);

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

  const handleEdit = (data) => {
    console.log('Edit clicked for:', data);
  }

  const handleView = (data) => {
    if (data.PAFORM_Link) {
      setPdfUrl(data.PAFORM_Link);
      setShowPdfViewer(true);
    } else {
      console.error('No PDF URL available for this data entry');
    }
  }

  const handleClosePdfViewer = () => {
    setShowPdfViewer(false);
    setPdfUrl(null);
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
                          <div className="action-container">
                            <div className={`ellipsis-menu ${selectedRow === index ? 'clicked' : ''}`} onClick={() => setSelectedRow(selectedRow === index ? null : index)}>
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                            </div>
                            {selectedRow === index && (
                              <div className="action-buttons">
                                <button onClick={() => handleEdit(data)}><div className="icon"><EditIcon/></div> Edit</button>
                                <button onClick={() => handleView(data)}><div className='icon'><VisibilityIcon/></div> View</button>
                              </div>
                            )}
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

      {pdfUrl && showPdfViewer && (
        <div className='pdf-viewer-overlay'>
          <div className='pdf-viewer'>
            <div className='pdf-viewer-header'>
              <span className='pdf-viewer-close' onClick={handleClosePdfViewer}>X</span>
            </div>
            <iframe src={pdfUrl} title="PDF Viewer"/>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;

