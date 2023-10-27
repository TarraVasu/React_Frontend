


// This is the correct code but view and edit actions not written ////



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
//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [showPdfViewer, setShowPdfViewer] = useState(false);

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
//     console.log('Edit clicked for:', data);
//   }

//   const handleView = (data) => {
//     if (data.PAFORM_Link) {
//       setPdfUrl(data.PAFORM_Link);
//       setShowPdfViewer(true);
//     } else {
//       console.error('No PDF URL available for this data entry');
//     }
//   }

//   const handleClosePdfViewer = () => {
//     setShowPdfViewer(false);
//     setPdfUrl(null);
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
//                             <div className={`ellipsis-menu ${selectedRow === index ? 'clicked' : ''}`} onClick={() => setSelectedRow(selectedRow === index ? null : index)}>
//                               <div className="dot"></div>
//                               <div className="dot"></div>
//                               <div className="dot"></div>
//                             </div>
//                             {selectedRow === index && (
//                               <div className="action-buttons">
//                                 <button onClick={() => handleEdit(data)}><div className="icon"><EditIcon/></div> Edit</button>
//                                 <button onClick={() => handleView(data)}><div className='icon'><VisibilityIcon/></div> View</button>
//                               </div>
//                             )}
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

//       {pdfUrl && showPdfViewer && (
//         <div className='pdf-viewer-overlay'>
//           <div className='pdf-viewer'>
//             <div className='pdf-viewer-header'>
//               <span className='pdf-viewer-close' onClick={handleClosePdfViewer}>X</span>
//             </div>
//             <iframe src={pdfUrl} title="PDF Viewer"/>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProfilePage;











///// This is the correct code loading symbol not added  important don't remove//////



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
//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [showPdfViewer, setShowPdfViewer] = useState(false);
  

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
//     console.log('Edit clicked for:', data);
//   }

//   const handleView = (data) => {
//     if (data.PAFORM_Link) {
//       setPdfUrl(data.PAFORM_Link);
//       setShowPdfViewer(true);
//     } else {
//       console.error('No PDF URL available for this data entry');
//     }
//   }

//   const handleClosePdfViewer = () => {
//     setShowPdfViewer(false);
//     setPdfUrl(null);
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
//                             <div className={`ellipsis-menu ${selectedRow === index ? 'clicked' : ''}`} onClick={() => setSelectedRow(selectedRow === index ? null : index)}>
//                               <div className="dot"></div>
//                               <div className="dot"></div>
//                               <div className="dot"></div>
//                             </div>
//                             {selectedRow === index && (
//                               <div className="action-buttons">
//                                 <button onClick={() => handleEdit(data)}><div className="icon"><EditIcon/></div> Edit</button>
//                                 <button onClick={() => handleView(data)}><div className='icon'><VisibilityIcon/></div> View</button>
//                               </div>
//                             )}
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

//       {pdfUrl && showPdfViewer && (
//         <div className='pdf-viewer-overlay'>
//           <div className='pdf-viewer'>
//             <div className='pdf-viewer-header'>
//               <span className='pdf-viewer-close' onClick={handleClosePdfViewer}>X</span>
//             </div>
//             <iframe
//               src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
//               title="PDF Viewer"
//               // style={{ width: '100%', height: '100%' }}
//               preload="auto"
//         ></iframe>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProfilePage;

















// This is the working for upload success message in overlay



// import React, { useState, useEffect } from 'react';
// import './index.css';
// import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
// import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
// import EditIcon from '@mui/icons-material/Edit';
// import FileUploadIcon from '@mui/icons-material/FileUpload';



// const ProfilePage = () => {
//   const [showDataAnalytics, setShowDataAnalytics] = useState(false);
//   const [showDashboard, setShowDashboard] = useState(false);
//   const [profileData, setProfileData] = useState([]);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [showPdfViewer, setShowPdfViewer] = useState(false);
//   const [selectedRowData, setSelectedRowData] = useState(null);
//   const [showDetailsView, setShowDetailsView] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState(null);
//   const [viewersOpen, setViewersOpen] = useState(false);

//   const fieldMapping = {
//     'id' : 'S.No',
//     'Customer_FirstName': 'FirstName',
//     'Customer_Surname': 'Surname',
//     'Customer_Address': 'Address',
//     'Customer_State': 'State',
//     'Customer_Postcode': 'ZIP Code',
//     'Customer_Telephone_Number': 'Contact Number',
//     'Uploaded_On' : 'Uploaded On',
//     'Uploaded_By' : 'Uploaded By',
//     'Moderated_On' : 'Moderated On',
//     'Moderated_By' : 'Moderated By',
//     'Actions': ''
//   };

//   useEffect(() => {
//     if (showDataAnalytics) {
//       fetch('http://172.105.37.251:8000/POC/all_data/')
//         .then(response => response.json())
//         .then(data => setProfileData(data))
//         .catch(error => console.error('Error:', error));
//     }
//   }, [showDataAnalytics]);

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

//   const handleCloseDetailsView = () => {
//     setShowDetailsView(false);
//     setViewersOpen(false);
//   }

//   const handleClosePdfViewer = () => {
//     setShowPdfViewer(false);
//     setPdfUrl(null);
//     setViewersOpen(false);
//   }

//   const handleEditAndView = (data) => {
//     setSelectedRowData(data);
//     setShowDetailsView(true);
//     setPdfUrl(data.PAFORM_Link);
//     setShowPdfViewer(true);
//     setViewersOpen(true);
//   }

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       try {
//         setUploadStatus('uploading');

//         const formData = new FormData();
//         formData.append('pdf_file', file);

//         const response = await fetch('http://172.105.37.251:8000/POC/PdfUploadV2/', {
//           method: 'POST',
//           body: formData
//         });

//         const responseData = await response.json();
//         console.log('File uploaded successfully:', responseData);

//         setUploadStatus('success');

//         const updatedData = await fetch('http://172.105.37.251:8000/POC/all_data/');
//         const updatedDataJson = await updatedData.json();
//         setProfileData(updatedDataJson);

//         setTimeout(() => {
//           setUploadStatus(null);
//         }, 3000);

//       } catch (error) {
//         console.error('Error:', error);
//         setUploadStatus('error');
//       }
//     } else {
//       console.error('No file selected');
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
//         <div className={`profile_table_container ${isNavOpen ? 'nav-open' : ''}`}>

//             <div className="upload-container">
//               <label htmlFor="file-input" className="file-upload-label">
//                 <span className="upload-icon"><FileUploadIcon/></span> Upload New Document
//               </label>
//               <input type="file" id="file-input" accept=".pdf" onChange={handleFileChange} style={{ display: 'none' }} />
//             </div>

//             {uploadStatus && (
//               <div className='upload-status-overlay'>
//                 <div className='upload-status'>
//                   {uploadStatus === 'uploading' && <div className="uploading-message">Please wait...</div>}
//                   {uploadStatus === 'success' && <div className="success-message">File uploaded successfully!</div>}
//                   {uploadStatus === 'error' && <div className="error-message">Error uploading file. Please try again later.</div>}
//                 </div>
//               </div>
//             )}

//           <table className="profile_table">
//             <thead>
//               <tr>
//                 {Object.keys(fieldMapping).map(header => (
//                   <th key={header}>{fieldMapping[header]}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {profileData.map((data, index) => (
//                 <tr key={index}>
//                   {Object.keys(fieldMapping).map(header => {
//                     if (header === 'Actions') {
//                       return (
//                         <td key={header} className="actions-cell">
//                           <div className="action-container">
//                             <div className={`ellipsis-menu ${selectedRow === index ? 'clicked' : ''}`} onClick={() => setSelectedRow(selectedRow === index ? null : index)}>
//                               <div className="dot"></div>
//                               <div className="dot"></div>
//                               <div className="dot"></div>
//                             </div>
//                             {selectedRow === index && !viewersOpen && (
//                               <div className="action-buttons">
//                                 <div className="button-group">
//                                   <button onClick={() => handleEditAndView(data)}>
//                                     <div className="icon"><EditIcon /></div> Edit and View
//                                   </button>
//                                 </div>
//                               </div>
//                             )}
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

//       {pdfUrl && showPdfViewer && (
//         <div className='pdf-viewer-overlay'>
//           <div className='pdf-viewer'>
//             <div className='pdf-viewer-header'>
//               <span className='pdf-viewer-close' onClick={handleClosePdfViewer}>X</span>
//             </div>
//             <iframe
//               src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
//               title="PDF Viewer"
//               preload="auto"
//             ></iframe>
//           </div>
//         </div>
//       )}

//       {selectedRowData && showDetailsView && (
//         <div className="details-view-overlay">
//           <div className="details-view">
//             <div className="details-view-header">
//               <span className="details-view-close" onClick={handleCloseDetailsView}>X</span>
//             </div>
//             <div className="details-view-content">
//               <h1 align="center"> User Details</h1>
//               {Object.keys(selectedRowData).map((key, index) => (
//                 <div className="field" key={index}>
//                   <strong>{key}:</strong> {selectedRowData[key] !== null ? selectedRowData[key] : "null"}
//                 </div>
//               ))}
//             </div>
//           </div>
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
// import FileUploadIcon from '@mui/icons-material/FileUpload';
// import SearchIcon from '@mui/icons-material/Search';



// const ProfilePage = () => {
//   const [showDataAnalytics, setShowDataAnalytics] = useState(false);
//   const [showDashboard, setShowDashboard] = useState(false);
//   const [profileData, setProfileData] = useState([]);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [selectedRow] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [showPdfViewer, setShowPdfViewer] = useState(false);
//   const [selectedRowData, setSelectedRowData] = useState(null);
//   const [showDetailsView, setShowDetailsView] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState(null);
//   const [viewersOpen, setViewersOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
  

//   const fieldMapping = {
//     'id' : 'S.No',
//     'Customer_FirstName': 'FirstName',
//     'Customer_Surname': 'Surname',
//     'Customer_Address': 'Address',
//     'Customer_State': 'State',
//     'Customer_Postcode': 'ZIP Code',
//     'Customer_Telephone_Number': 'Contact Number',
//     'Uploaded_On' : 'Uploaded On',
//     'Uploaded_By' : 'Uploaded By',
//     'Moderated_On' : 'Moderated On',
//     'Moderated_By' : 'Moderated By',
//     'Actions': ''
//   };

//   useEffect(() => {
//     if (showDataAnalytics) {
//       fetch('http://172.105.37.251:8000/POC/all_data/')
//         .then(response => response.json())
//         .then(data => setProfileData(data))
//         .catch(error => console.error('Error:', error));
//     }
//   }, [showDataAnalytics]);

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

//   const handleCloseDetailsView = () => {
//     setShowDetailsView(false);
//     setViewersOpen(false);
//   }

//   const handleClosePdfViewer = () => {
//     setShowPdfViewer(false);
//     setPdfUrl(null);
//     setViewersOpen(false);
//   }

//   const handleEditAndView = (data) => {
//     setSelectedRowData(data);
//     setShowDetailsView(true);
//     setPdfUrl(data.PAFORM_Link);
//     setShowPdfViewer(true);
//     setViewersOpen(true);
//   }

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       try {
//         setUploadStatus('uploading');

//         const formData = new FormData();
//         formData.append('pdf_file', file);

//         const response = await fetch('http://172.105.37.251:8000/POC/PdfUploadV2/', {
//           method: 'POST',
//           body: formData
//         });

//         const responseData = await response.json();
//         console.log('File uploaded successfully:', responseData);

//         setUploadStatus('success');

//         const updatedData = await fetch('http://172.105.37.251:8000/POC/all_data/');
//         const updatedDataJson = await updatedData.json();
//         setProfileData(updatedDataJson);

//         setTimeout(() => {
//           setUploadStatus(null);
//         }, 3000);

//       } catch (error) {
//         console.error('Error:', error);
//         setUploadStatus('error');
//       }
//     } else {
//       console.error('No file selected');
//     }
//   }

  
//   const handleSearchClick = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

// const handleSearchInputChange = (e) => {
//   const query = e.target.value;

//   // Filter the profileData based on the search query
//   const filteredResults = profileData.filter(item => 
//     item.Customer_FirstName.toLowerCase().includes(query.toLowerCase())
//   );

//   // Combine the filtered results with the original data
//   const combinedResults = [...filteredResults, ...profileData];

//   setFilteredData(combinedResults);
// };




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
//         <div className={`profile_table_container ${isNavOpen ? 'nav-open' : ''}`}>


//               <div className='Dataanalystics'>
//                     Data Analytics <SearchIcon className='search-icon' onClick={handleSearchClick} />
//                     {isSearchOpen && (
//                       <input 
//                         type="text" 
//                         className="search-bar" 
//                         placeholder="Search..." 
//                         value={searchQuery}
//                         onChange={handleSearchInputChange}
//                       />
//                     )}
//                     {filteredData.map(item => (
//                     <div key={item.id}>{item.Customer_FirstName}</div>
//                   ))}
//               </div>


//             <div className="upload-container">
//               <label htmlFor="file-input" className="file-upload-label">
//                 <span className="upload-icon"><FileUploadIcon/></span> Upload New Document
//               </label>
//               <input type="file" id="file-input" accept=".pdf" onChange={handleFileChange} style={{ display: 'none' }} />
//             </div>

//             {uploadStatus && (
//               <div className='upload-status-overlay'>
//                 <div className='upload-status'>
//                   {uploadStatus === 'uploading' && <div className="uploading-message">Please wait...</div>}
//                   {uploadStatus === 'success' && <div className="success-message">File uploaded successfully!</div>}
//                   {uploadStatus === 'error' && <div className="error-message">Error uploading file. Please try again later.</div>}
//                 </div>
//               </div>
//             )}

//           <table className="profile_table">
//             <thead>
//               <tr>
//                 {Object.keys(fieldMapping).map(header => (
//                   <th key={header}>{fieldMapping[header]}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {profileData.map((data, index) => (
//                 <tr key={index}>
//                   {Object.keys(fieldMapping).map(header => {
//                     if (header === 'Actions') {
//                       return (
//                         <td key={header} className="actions-cell">
//                           <div className="action-container">
//                             <div className="icon" onClick={() => handleEditAndView(data)}>
//                               <EditIcon />
//                             </div>
//                             {selectedRow === index && !viewersOpen && (
//                               <div className="action-buttons">
//                                 <div className="button-group">
//                                   <button onClick={() => handleEditAndView(data)}>
//                                     <div className="icon"><EditIcon /></div> Edit and View
//                                   </button>
//                                 </div>
//                               </div>
//                             )}
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

//       {pdfUrl && showPdfViewer && (
//         <div className='pdf-viewer-overlay'>
//           <div className='pdf-viewer'>
//             <div className='pdf-viewer-header'>
//               <span className='pdf-viewer-close' onClick={handleClosePdfViewer}>X</span>
//             </div>
//             <iframe
//               src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
//               title="PDF Viewer"
//               preload="auto"
//             ></iframe>
//           </div>
//         </div>
//       )}

//       {selectedRowData && showDetailsView && (
//         <div className="details-view-overlay">
//           <div className="details-view">
//             <div className="details-view-header">
//               <span className="details-view-close" onClick={handleCloseDetailsView}>X</span>
//             </div>
//             <div className="details-view-content">
//               <h1 align="center"> User Details</h1>
//               {Object.keys(selectedRowData).map((key, index) => (
//                 <div className="field" key={index}>
//                   <strong>{key}:</strong> {selectedRowData[key] !== null ? selectedRowData[key] : "null"}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProfilePage;


























// This code is working for search bar also




// import React, { useState, useEffect } from 'react';
// import './index.css';
// import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
// import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
// import EditIcon from '@mui/icons-material/Edit';
// import FileUploadIcon from '@mui/icons-material/FileUpload';
// import SearchIcon from '@mui/icons-material/Search';

// const ProfilePage = () => {
//   const [showDataAnalytics, setShowDataAnalytics] = useState(false);
//   const [showDashboard, setShowDashboard] = useState(false);
//   const [profileData, setProfileData] = useState([]);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [selectedRow] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [showPdfViewer, setShowPdfViewer] = useState(false);
//   const [selectedRowData, setSelectedRowData] = useState(null);
//   const [showDetailsView, setShowDetailsView] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState(null);
//   const [viewersOpen, setViewersOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cachedData, setCachedData] = useState([]); // New state to cache the data
//   const [filteredData] = useState([]);





//   const fieldMapping = {
//     'id' : 'S.No',
//     'Customer_FirstName': 'FirstName',
//     'Customer_Surname': 'Surname',
//     'Customer_Address': 'Address',
//     'Customer_State': 'State',
//     'Customer_Postcode': 'ZIP Code',
//     'Customer_Telephone_Number': 'Contact Number',
//     'Uploaded_On' : 'Uploaded On',
//     'Uploaded_By' : 'Uploaded By',
//     'Moderated_On' : 'Moderated On',
//     'Moderated_By' : 'Moderated By',
//     'Actions': ''
//   };

//   useEffect(() => {
//     if (showDataAnalytics) {
//       fetch('http://172.105.37.251:8000/POC/all_data/')
//         .then(response => response.json())
//         .then(data => {
//           setProfileData(data);
//           setCachedData(data); // Cache the data when first fetched
//         })
//         .catch(error => console.error('Error:', error));
//     }
//   }, [showDataAnalytics]);

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

//   const handleCloseDetailsView = () => {
//     setShowDetailsView(false);
//     setViewersOpen(false);
//   }

//   const handleClosePdfViewer = () => {
//     setShowPdfViewer(false);
//     setPdfUrl(null);
//     setViewersOpen(false);
//   }

//   const handleEditAndView = (data) => {
//     setSelectedRowData(data);
//     setShowDetailsView(true);
//     setPdfUrl(data.PAFORM_Link);
//     setShowPdfViewer(true);
//     setViewersOpen(true);
//   }

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       try {
//         setUploadStatus('uploading');

//         const formData = new FormData();
//         formData.append('pdf_file', file);

//         const response = await fetch('http://172.105.37.251:8000/POC/PdfUploadV2/', {
//           method: 'POST',
//           body: formData
//         });

//         const responseData = await response.json();
//         console.log('File uploaded successfully:', responseData);

//         setUploadStatus('success');

//         const updatedData = await fetch('http://172.105.37.251:8000/POC/all_data/');
//         const updatedDataJson = await updatedData.json();
//         setProfileData(updatedDataJson);
//         setCachedData(updatedDataJson); // Update cached data as well

//         setTimeout(() => {
//           setUploadStatus(null);
//         }, 3000);

//       } catch (error) {
//         console.error('Error:', error);
//         setUploadStatus('error');
//       }
//     } else {
//       console.error('No file selected');
//     }
//   }

//   const handleSearchClick = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };


//   const handleSearchInputChange = (e) => {
//     const query = e.target.value.toLowerCase();

//     // If there is a search query, filter the data, otherwise show the full data
//     if (query) {
//       const filteredResults = cachedData.filter(item => 
//         item.Customer_FirstName.toLowerCase().includes(query)
//       );
//       setProfileData(filteredResults);
//     } else {
//       // If no search query, reset to show the full data
//       setProfileData(cachedData);
//     }

//     setSearchQuery(query); // Update the search query state
//   };





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
//         <div className={`profile_table_container ${isNavOpen ? 'nav-open' : ''}`}>

//           <div className='Dataanalystics'>
//                 Data Analytics <SearchIcon className='search-icon' onClick={handleSearchClick} />
//                 {isSearchOpen && (
//                   <input 
//                     type="text" 
//                     className="search-bar" 
//                     placeholder="Search  By  FirstName" 
//                     value={searchQuery}
//                     onChange={handleSearchInputChange}
//                   />
//                 )}
//                 {filteredData.map(item => (
//                 <div key={item.id}>{item.Customer_FirstName}</div>
//               ))}
//           </div>


//             <div className="upload-container">
//               <label htmlFor="file-input" className="file-upload-label">
//                 <span className="upload-icon"><FileUploadIcon/></span> Upload New Document
//               </label>
//               <input type="file" id="file-input" accept=".pdf" onChange={handleFileChange} style={{ display: 'none' }} />
//             </div>

//             {uploadStatus && (
//               <div className='upload-status-overlay'>
//                 <div className='upload-status'>
//                   {uploadStatus === 'uploading' && <div className="uploading-message">Please wait...</div>}
//                   {uploadStatus === 'success' && <div className="success-message">File uploaded successfully!</div>}
//                   {uploadStatus === 'error' && <div className="error-message">Error uploading file. Please try again later.</div>}
//                 </div>
//               </div>
//             )}

//           <table className="profile_table">
//             <thead>
//               <tr>
//                 {Object.keys(fieldMapping).map(header => (
//                   <th key={header}>{fieldMapping[header]}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
              
//               {profileData.map((data, index) => (
//                 <tr key={index}>
//                   {Object.keys(fieldMapping).map(header => {
//                     if (header === 'Actions') {
//                       return (
//                         <td key={header} className="actions-cell">
//                           <div className="action-container">
//                             <div className="icon" onClick={() => handleEditAndView(data)}>
//                               <EditIcon />
//                             </div>
//                             {selectedRow === index && !viewersOpen && (
//                               <div className="action-buttons">
//                                 <div className="button-group">
//                                   <button onClick={() => handleEditAndView(data)}>
//                                     <div className="icon"><EditIcon /></div> Edit and View
//                                   </button>
//                                 </div>
//                               </div>
//                             )}
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

//       {pdfUrl && showPdfViewer && (
//         <div className='pdf-viewer-overlay'>
//           <div className='pdf-viewer'>
//             <div className='pdf-viewer-header'>
//               <span className='pdf-viewer-close' onClick={handleClosePdfViewer}>X</span>
//             </div>
//             <iframe
//               src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
//               title="PDF Viewer"
//               preload="auto"
//             ></iframe>
//           </div>
//         </div>
//       )}

//       {selectedRowData && showDetailsView && (
//         <div className="details-view-overlay">
//           <div className="details-view">
//             <div className="details-view-header">
//               <span className="details-view-close" onClick={handleCloseDetailsView}>X</span>
//             </div>
//             <div className="details-view-content">
//               <h1 align="center"> User Details</h1>
//               {Object.keys(selectedRowData).map((key, index) => (
//                 <div className="field" key={index}>
//                   <strong>{key}:</strong> {selectedRowData[key] !== null ? selectedRowData[key] : "null"}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProfilePage;













// This is working if data is not their it will show the output as no data available with this name




// import React, { useState, useEffect } from 'react';
// import './index.css';
// import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
// import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
// import EditIcon from '@mui/icons-material/Edit';
// import FileUploadIcon from '@mui/icons-material/FileUpload';
// import SearchIcon from '@mui/icons-material/Search';

// const ProfilePage = () => {
//   const [showDataAnalytics, setShowDataAnalytics] = useState(false);
//   const [showDashboard, setShowDashboard] = useState(false);
//   const [profileData, setProfileData] = useState([]);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [selectedRow] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [showPdfViewer, setShowPdfViewer] = useState(false);
//   const [selectedRowData, setSelectedRowData] = useState(null);
//   const [showDetailsView, setShowDetailsView] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState(null);
//   const [viewersOpen, setViewersOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cachedData, setCachedData] = useState([]); // New state to cache the data

//   const fieldMapping = {
//     'id' : 'S.No',
//     'Customer_FirstName': 'FirstName',
//     'Customer_Surname': 'Surname',
//     'Customer_Address': 'Address',
//     'Customer_State': 'State',
//     'Customer_Postcode': 'ZIP Code',
//     'Customer_Telephone_Number': 'Contact Number',
//     'Uploaded_On' : 'Uploaded On',
//     'Uploaded_By' : 'Uploaded By',
//     'Moderated_On' : 'Moderated On',
//     'Moderated_By' : 'Moderated By',
//     'Actions': ''
//   };

//   useEffect(() => {
//     if (showDataAnalytics) {
//       fetch('http://172.105.37.251:8000/POC/all_data/')
//         .then(response => response.json())
//         .then(data => {
//           setProfileData(data);
//           setCachedData(data); // Cache the data when first fetched
//         })
//         .catch(error => console.error('Error:', error));
//     }
//   }, [showDataAnalytics]);

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

//   const handleCloseDetailsView = () => {
//     setShowDetailsView(false);
//     setViewersOpen(false);
//   }

//   const handleClosePdfViewer = () => {
//     setShowPdfViewer(false);
//     setPdfUrl(null);
//     setViewersOpen(false);
//   }

//   const handleEditAndView = (data) => {
//     setSelectedRowData(data);
//     setShowDetailsView(true);
//     setPdfUrl(data.PAFORM_Link);
//     setShowPdfViewer(true);
//     setViewersOpen(true);
//   }

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       try {
//         setUploadStatus('uploading');

//         const formData = new FormData();
//         formData.append('pdf_file', file);

//         const response = await fetch('http://172.105.37.251:8000/POC/PdfUploadV2/', {
//           method: 'POST',
//           body: formData
//         });

//         const responseData = await response.json();
//         console.log('File uploaded successfully:', responseData);

//         setUploadStatus('success');

//         const updatedData = await fetch('http://172.105.37.251:8000/POC/all_data/');
//         const updatedDataJson = await updatedData.json();
//         setProfileData(updatedDataJson);
//         setCachedData(updatedDataJson); // Update cached data as well

//         setTimeout(() => {
//           setUploadStatus(null);
//         }, 3000);

//       } catch (error) {
//         console.error('Error:', error);
//         setUploadStatus('error');
//       }
//     } else {
//       console.error('No file selected');
//     }
//   }

//   const handleSearchClick = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };


//   const handleSearchInputChange = (e) => {
//     const query = e.target.value.toLowerCase();

//     // If there is a search query, filter the data, otherwise show the full data
//     if (query) {
//       const filteredResults = cachedData.filter(item => 
//         item.Customer_FirstName.toLowerCase().includes(query)
//       );
//       setProfileData(filteredResults);
//     } else {
//       // If no search query, reset to show the full data
//       setProfileData(cachedData);
//     }

//     setSearchQuery(query); // Update the search query state
//   };

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
//         <div className={`profile_table_container ${isNavOpen ? 'nav-open' : ''}`}>

//           <div className='Dataanalystics'>
//                 Data Analytics <SearchIcon className='search-icon' onClick={handleSearchClick} />
//                 {isSearchOpen && (
//                   <input 
//                     type="text" 
//                     className="search-bar" 
//                     placeholder="Search  By  FirstName" 
//                     value={searchQuery}
//                     onChange={handleSearchInputChange}
//                   />
//                 )}
//           </div>

//           <div className="upload-container">
//             <label htmlFor="file-input" className="file-upload-label">
//               <span className="upload-icon"><FileUploadIcon/></span> Upload New Document
//             </label>
//             <input type="file" id="file-input" accept=".pdf" onChange={handleFileChange} style={{ display: 'none' }} />
//           </div>

//           {uploadStatus && (
//             <div className='upload-status-overlay'>
//               <div className='upload-status'>
//                 {uploadStatus === 'uploading' && <div className="uploading-message">Please wait...</div>}
//                 {uploadStatus === 'success' && <div className="success-message">File uploaded successfully!</div>}
//                 {uploadStatus === 'error' && <div className="error-message">Error uploading file. Please try again later.</div>}
//               </div>
//             </div>
//           )}

//           <table className="profile_table">
//             <thead>
//               <tr>
//                 {Object.keys(fieldMapping).map(header => (
//                   <th key={header}>{fieldMapping[header]}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {profileData.length > 0 ? (
//                 profileData.map((data, index) => (
//                   <tr key={index}>
//                     {Object.keys(fieldMapping).map(header => {
//                       if (header === 'Actions') {
//                         return (
//                           <td key={header} className="actions-cell">
//                             <div className="action-container">
//                               <div className="icon" onClick={() => handleEditAndView(data)}>
//                                 <EditIcon />
//                               </div>
//                               {selectedRow === index && !viewersOpen && (
//                                 <div className="action-buttons">
//                                   <div className="button-group">
//                                     <button onClick={() => handleEditAndView(data)}>
//                                       <div className="icon"><EditIcon /></div> Edit and View
//                                     </button>
//                                   </div>
//                                 </div>
//                               )}
//                             </div>
//                           </td>
//                         );
//                       } else {
//                         return <td key={header}>{data[header]}</td>;
//                       }
//                     })}
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={Object.keys(fieldMapping).length} className="no-data-message">
//                     No data available with this name.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {showDashboard && (
//         <div className="dashboard-content">
//           {/* Add content for the Dashboard here */}
//         </div>
//       )}

//       {pdfUrl && showPdfViewer && (
//         <div className='pdf-viewer-overlay'>
//           <div className='pdf-viewer'>
//             <div className='pdf-viewer-header'>
//               <span className='pdf-viewer-close' onClick={handleClosePdfViewer}>X</span>
//             </div>
//             <iframe
//               src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
//               title="PDF Viewer"
//               preload="auto"
//             ></iframe>
//           </div>
//         </div>
//       )}

//       {selectedRowData && showDetailsView && (
//         <div className="details-view-overlay">
//           <div className="details-view">
//             <div className="details-view-header">
//               <span className="details-view-close" onClick={handleCloseDetailsView}>X</span>
//             </div>
//             <div className="details-view-content">
//               <h1 align="center"> User Details</h1>
//               {Object.keys(selectedRowData).map((key, index) => (
//                 <div className="field" key={index}>
//                   <strong>{key}:</strong> {selectedRowData[key] !== null ? selectedRowData[key] : "null"}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProfilePage;






















// This is working for edit the details


// import React, { useState, useEffect } from 'react';
// import './index.css';
// import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
// import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
// import EditIcon from '@mui/icons-material/Edit';
// import FileUploadIcon from '@mui/icons-material/FileUpload';
// import SearchIcon from '@mui/icons-material/Search';

// const ProfilePage = () => {
//   const [showDataAnalytics, setShowDataAnalytics] = useState(false);
//   const [showDashboard, setShowDashboard] = useState(false);
//   const [profileData, setProfileData] = useState([]);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [selectedRow] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [showPdfViewer, setShowPdfViewer] = useState(false);
//   const [selectedRowData, setSelectedRowData] = useState(null);
//   const [showDetailsView, setShowDetailsView] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState(null);
//   const [viewersOpen, setViewersOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cachedData, setCachedData] = useState([]); 
//   const [updateSuccessMessage, setUpdateSuccessMessage] = useState(null);




//   const fieldMapping = {
    
//     'Customer_FirstName': 'FirstName',
//     'Customer_Surname': 'Surname',
//     'Customer_Address': 'Address',
//     'Customer_State': 'State',
//     'Customer_Postcode': 'ZIP Code',
//     'Customer_Telephone_Number': 'Contact Number',
//     'Uploaded_On' : 'Uploaded On',
//     'Uploaded_By' : 'Uploaded By',
//     'Moderated_On' : 'Moderated On',
//     'Moderated_By' : 'Moderated By',
//     'Actions': ''
//   };

//   useEffect(() => {
//     if (showDataAnalytics) {
//       fetch('http://172.105.37.251:8000/POC/all_data/')
//         .then(response => response.json())
//         .then(data => {
//           setProfileData(data);
//           setCachedData(data); // Cache the data when first fetched
//         })
//         .catch(error => console.error('Error:', error));
//     }
//   }, [showDataAnalytics]);

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

//   const handleCloseDetailsView = () => {
//     setShowDetailsView(false);
//     setViewersOpen(false);
//   }

//   const handleClosePdfViewer = () => {
//     setShowPdfViewer(false);
//     setPdfUrl(null);
//     setViewersOpen(false);
//   }

//   const handleEditAndView = (data) => {
//     setSelectedRowData(data);
//     setShowDetailsView(true);
//     setPdfUrl(data.PAFORM_Link);
//     setShowPdfViewer(true);
//     setViewersOpen(true);
//   }




//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://172.105.37.251:8000/POC/all_data/');
//       const data = await response.json();
//       setProfileData(data);
//       setCachedData(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };



//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       try {
//         setUploadStatus('uploading');

//         const formData = new FormData();
//         formData.append('pdf_file', file);

//         const response = await fetch('http://172.105.37.251:8000/POC/PdfUploadV2/', {
//           method: 'POST',
//           body: formData
//         });

//         const responseData = await response.json();
//         console.log('File uploaded successfully:', responseData);

//         setUploadStatus('success');

        
//         // Fetch the updated data
//         fetchData();


//         setTimeout(() => {
//           setUploadStatus(null);
//         }, 3000);

//       } catch (error) {
//         console.error('Error:', error);
//         setUploadStatus('error');
//       }
//     } else {
//       console.error('No file selected');
//     }
//   }

//   const handleSearchClick = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   const handleSearchInputChange = (e) => {
//     const query = e.target.value.toLowerCase();

//     // If there is a search query, filter the data, otherwise show the full data
//     if (query) {
//       const filteredResults = cachedData.filter(item => 
//         item.Customer_FirstName.toLowerCase().includes(query)
//       );
//       setProfileData(filteredResults);
//     } else {
//       // If no search query, reset to show the full data
//       setProfileData(cachedData);
//     }

//     setSearchQuery(query); // Update the search query state
//   };



//   const handleUpdateDetails = async () => {
//     try {
//       const response = await fetch(`http://172.105.37.251:8000/POC/UpdateUserDetails/${selectedRowData.id}/`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(selectedRowData),
//       });
  
//       if (response.ok) {
//         console.log('Details updated successfully');
//         setUpdateSuccessMessage('Details updated successfully'); // Set success message
//         setTimeout(() => {
//           setUpdateSuccessMessage(null); // Reset success message after a few seconds
//         }, 3000);

//         // Fetch the updated data
//         fetchData();

//       } else {
//         console.error('Error updating details:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };






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
//         <div className={`profile_table_container ${isNavOpen ? 'nav-open' : ''}`}>

//           <div className='Dataanalystics'>
//                 Data Analytics <SearchIcon className='search-icon' onClick={handleSearchClick} />
//                 {isSearchOpen && (
//                   <input 
//                     type="text" 
//                     className="search-bar" 
//                     placeholder="Search  By  FirstName" 
//                     value={searchQuery}
//                     onChange={handleSearchInputChange}
//                   />
//                 )}
//           </div>

//           <div className="upload-container">
//             <label htmlFor="file-input" className="file-upload-label">
//               <span className="upload-icon"><FileUploadIcon/></span> Upload New Document
//             </label>
//             <input type="file" id="file-input" accept=".pdf" onChange={handleFileChange} style={{ display: 'none' }} />
//           </div>

//           {uploadStatus && (
//             <div className='upload-status-overlay'>
//               <div className='upload-status'>
//                 {uploadStatus === 'uploading' && <div className="uploading-message">Please wait...</div>}
//                 {uploadStatus === 'success' && <div className="success-message">File uploaded successfully!</div>}
//                 {uploadStatus === 'error' && <div className="error-message">Error uploading file. Please try again later.</div>}
//               </div>
//             </div>
//           )}



//           {updateSuccessMessage && (
//             <div className="success-message">
//               {updateSuccessMessage}
//             </div>
//           )}


//           <table className="profile_table">
//             <thead>
//               <tr>
//                 {Object.keys(fieldMapping).map(header => (
//                   <th key={header}>{fieldMapping[header]}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {profileData.length > 0 ? (
//                 profileData.map((data, index) => (
//                   <tr key={index}>
//                     {Object.keys(fieldMapping).map(header => {
//                       if (header === 'Actions') {
//                         return (
//                           <td key={header} className="actions-cell">
//                             <div className="action-container">
//                               <div className="icon" onClick={() => handleEditAndView(data)}>
//                                 <EditIcon />
//                               </div>
//                               {selectedRow === index && !viewersOpen && (
//                                 <div className="action-buttons">
//                                   <div className="button-group">
//                                     <button onClick={() => handleEditAndView(data)}>
//                                       <div className="icon"><EditIcon /></div> Edit and View
//                                     </button>
//                                   </div>
//                                 </div>
//                               )}
//                             </div>
//                           </td>
//                         );
//                       } else {
//                         return <td key={header}>{data[header]}</td>;
//                       }
//                     })}
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={Object.keys(fieldMapping).length} className="no-data-message">
//                     No data available with this name.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {showDashboard && (
//         <div className="dashboard-content">
//           {/* Add content for the Dashboard here */}
//         </div>
//       )}

//       {pdfUrl && showPdfViewer && (
//         <div className='pdf-viewer-overlay'>
//           <div className='pdf-viewer'>
//             <div className='pdf-viewer-header'>
//               <span className='pdf-viewer-close' onClick={handleClosePdfViewer}>X</span>
//             </div>
//             <iframe
//               src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
//               title="PDF Viewer"
//               preload="auto"
//             ></iframe>
//           </div>
//         </div>
//       )}

//       {selectedRowData && showDetailsView && (
//         <div className="details-view-overlay">
//           <div className="details-view">
//             <div className="details-view-header">
//               <span className="details-view-close" onClick={handleCloseDetailsView}>X</span>
//             </div>
//             <div className="details-view-content">
//               <h1 align="center"> User Details</h1>
//               {Object.keys(selectedRowData).map((key, index) => (
//                 <div className="field" key={index}>
//                   <strong>{key}:</strong> 
//                   {key === 'id' 
//                     ? selectedRowData[key] 
//                     : (
//                       <input
//                         type="text"
//                         value={selectedRowData[key] !== null ? selectedRowData[key] : ''}
//                         onChange={(e) => {
//                           setSelectedRowData({
//                             ...selectedRowData,
//                             [key]: e.target.value,
//                           });
//                         }}
//                       />
//                     )
//                   }
//                 </div>
//               ))}
//               <button onClick={handleUpdateDetails} className='save_button'>Save</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProfilePage;





















// This code working perfectly



// import React, { useState, useEffect } from 'react';
// import './index.css';
// import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
// import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
// import EditIcon from '@mui/icons-material/Edit';
// import FileUploadIcon from '@mui/icons-material/FileUpload';
// import SearchIcon from '@mui/icons-material/Search';

// const ProfilePage = () => {
//   const [showDataAnalytics, setShowDataAnalytics] = useState(false);
//   const [showDashboard, setShowDashboard] = useState(false);
//   const [profileData, setProfileData] = useState([]);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [selectedRow] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [showPdfViewer, setShowPdfViewer] = useState(false);
//   const [selectedRowData, setSelectedRowData] = useState(null);
//   const [showDetailsView, setShowDetailsView] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState(null);
//   const [viewersOpen, setViewersOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cachedData, setCachedData] = useState([]); 
//   const [updateSuccessMessage, setUpdateSuccessMessage] = useState(null);


  
//   const labelMapping = {
//     Customer_Title: 'Title',
//     Customer_FirstName: 'First Name',
//     Customer_Surname: 'Surname',
//     Customer_Address: 'Address',
//     Customer_Postcode: 'Postcode',
//     Customer_Telephone_Number: 'Telephone Number',
//     Customer_Service_1: 'Service 1',
//     Customer_Service_Number_1: 'Service Number 1',
//     Customer_Service_2: 'Service 2',
//     Customer_Service_Number_2: 'Service Number 2',
//     Customer_Signature: 'Signature',
//     Customer_Signature_Date: 'Signature Date',
//     Declaration_Customer_Name: 'Declaration Customer Name',
//     Declaration_Customer_Address: 'Declaration Customer Address',
//     Declaration_Customer_Occupation: 'Declaration Customer Occupation',
//     Declarant_Signature: 'Declarant Signature',
//     Declaration_Location: 'Declaration Location',
//     Declaration_Date: 'Declaration Date',
//     Signature_Authorised_Witness: 'Signature Authorised Witness',
//     Name_Authorised_Witness: 'Name Authorised Witness',
//     Authorised_Witness_Role: 'Authorised Witness Role',
//     Witness_Address: 'Witness Address',
//     Witness_Postcode: 'Witness Postcode',
//     Representative_Title: 'Representative Title',
//     Representative_FirstName: 'Representative First Name',
//     Representative_Surname: 'Representative Surname',
//     Representative_Address: 'Representative Address',
//     Representative_Postcode: 'Representative Postcode',
//     Representative_Telephonenumber: 'Representative Telephone Number',
//     Customer_Privacy_Consent_Sign_Date: 'Privacy Consent Sign Date',
//     Customer_State: 'Customer State',
//     Witness_State: 'Witness State',
//     HCP_Name: 'HCP Name',
//     HCP_Signature_Date: 'HCP Signature Date',
//     HCP_Sign_here: 'HCP Sign Here',
//     HCP_TelephoneNumber: 'HCP Telephone Number',
//     HCP_Declaration_Name: 'HCP Declaration Name',
//     HCP_Postcode: 'HCP Postcode',
//     Customer_Medical_Condition: 'Customer Medical Condition',
//     HCP_Signature: 'HCP Signature',
//     HCP_State: 'HCP State',
//     Customer_Privacy_Consent_Sign: 'Privacy Consent Sign',
//     HCP_Declaration_Customer_Name: 'HCP Declaration Customer Name',
//     Customer_Position: 'Customer Position',
//     HCP_Address: 'HCP Address',
//     HCP_Title: 'HCP Title',
//     HCP_Stamp: 'HCP Stamp',
//     Uploaded_On: 'Uploaded On',
//     Updated_On: 'Updated On',
//     Moderated_On: 'Moderated On',
//     PAFORM_Link: 'PAFORM Link',
//     Uploaded_By: 'Uploaded By',
//     Updated_By: 'Updated By',
//     Moderated_By: 'Moderated By',
//     UOP_Status: 'UOP Status',
//     CRM_Status: 'CRM Status'
//   };


//   const fieldMapping = {
    
//     'Customer_FirstName': 'First Name',
//     'Customer_Surname': 'Surname',
//     'Customer_Address': 'Address',
//     'Customer_State': 'State',
//     'Customer_Postcode': 'ZIP Code',
//     'Customer_Telephone_Number': 'Contact Number',
//     'Uploaded_On' : 'Uploaded On',
//     'Uploaded_By' : 'Uploaded By',
//     'Moderated_On' : 'Moderated On',
//     'Moderated_By' : 'Moderated By',
//     'Actions': ''
//   };

//   useEffect(() => {
//     if (showDataAnalytics) {
//       fetch('http://172.105.37.251:8000/POC/all_data/')
//         .then(response => response.json())
//         .then(data => {
//           setProfileData(data);
//           setCachedData(data); // Cache the data when first fetched
//         })
//         .catch(error => console.error('Error:', error));
//     }
//   }, [showDataAnalytics]);

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

//   const handleCloseDetailsView = () => {
//     setShowDetailsView(false);
//     setViewersOpen(false);
//   }

//   const handleClosePdfViewer = () => {
//     setShowPdfViewer(false);
//     setPdfUrl(null);
//     setViewersOpen(false);
//   }

//   const handleEditAndView = (data) => {
//     setSelectedRowData(data);
//     setShowDetailsView(true);
//     setPdfUrl(data.PAFORM_Link);
//     setShowPdfViewer(true);
//     setViewersOpen(true);
//   }




//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://172.105.37.251:8000/POC/all_data/');
//       const data = await response.json();
//       setProfileData(data);
//       setCachedData(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };



//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       try {
//         setUploadStatus('uploading');

//         const formData = new FormData();
//         formData.append('pdf_file', file);

//         const response = await fetch('http://172.105.37.251:8000/POC/PdfUploadV2/', {
//           method: 'POST',
//           body: formData
//         });

//         const responseData = await response.json();
//         console.log('File uploaded successfully:', responseData);

//         setUploadStatus('success');

        
//         // Fetch the updated data
//         fetchData();


//         setTimeout(() => {
//           setUploadStatus(null);
//         }, 3000);

//       } catch (error) {
//         console.error('Error:', error);
//         setUploadStatus('error');
//       }
//     } else {
//       console.error('No file selected');
//     }
//   }

//   const handleSearchClick = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   const handleSearchInputChange = (e) => {
//     const query = e.target.value.toLowerCase();

//     // If there is a search query, filter the data, otherwise show the full data
//     if (query) {
//       const filteredResults = cachedData.filter(item => 
//         item.Customer_FirstName.toLowerCase().includes(query)
//       );
//       setProfileData(filteredResults);
//     } else {
//       // If no search query, reset to show the full data
//       setProfileData(cachedData);
//     }

//     setSearchQuery(query); // Update the search query state
//   };



//   const handleUpdateDetails = async () => {
//     try {
//       const response = await fetch(`http://172.105.37.251:8000/POC/UpdateUserDetails/${selectedRowData.id}/`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(selectedRowData),
//       });
  
//       if (response.ok) {
//         console.log('Details updated successfully');
//         setUpdateSuccessMessage('Details updated successfully'); // Set success message
//         setTimeout(() => {
//           setUpdateSuccessMessage(null); // Reset success message after a few seconds
//         }, 3000);

//         // Fetch the updated data
//         fetchData();

//       } else {
//         console.error('Error updating details:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };






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
//         <div className={`profile_table_container ${isNavOpen ? 'nav-open' : ''}`}>

//           <div className='Dataanalystics'>
//                 Data Analytics <SearchIcon className='search-icon' onClick={handleSearchClick} />
//                 {isSearchOpen && (
//                   <input 
//                     type="text" 
//                     className="search-bar" 
//                     placeholder="Search  By  FirstName" 
//                     value={searchQuery}
//                     onChange={handleSearchInputChange}
//                   />
//                 )}
//           </div>

//           <div className="upload-container">
//             <label htmlFor="file-input" className="file-upload-label">
//               <span className="upload-icon"><FileUploadIcon/></span> Upload New Document
//             </label>
//             <input type="file" id="file-input" accept=".pdf" onChange={handleFileChange} style={{ display: 'none' }} />
//           </div>

//           {uploadStatus && (
//             <div className='upload-status-overlay'>
//               <div className='upload-status'>
//                 {uploadStatus === 'uploading' && <div className="uploading-message">Please wait...</div>}
//                 {uploadStatus === 'success' && <div className="success-message">File uploaded successfully!</div>}
//                 {uploadStatus === 'error' && <div className="error-message">Error uploading file. Please try again later.</div>}
//               </div>
//             </div>
//           )}



//           {updateSuccessMessage && (
//             <div className="success-message">
//               {updateSuccessMessage}
//             </div>
//           )}


//           <table className="profile_table">
//             <thead>
//               <tr>
//                 <th>S.No</th>
//                 {Object.keys(fieldMapping).map(header => (
//                   <th key={header}>{fieldMapping[header]}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {profileData.length > 0 ? (
//                 profileData.map((data, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     {Object.keys(fieldMapping).map(header => {
//                       if (header === 'Actions') {
//                         return (
//                           <td key={header} className="actions-cell">
//                             <div className="action-container">
//                               <div className="icon" onClick={() => handleEditAndView(data)}>
//                                 <EditIcon />
//                               </div>
//                               {selectedRow === index && !viewersOpen && (
//                                 <div className="action-buttons">
//                                   <div className="button-group">
//                                     <button onClick={() => handleEditAndView(data)}>
//                                       <div className="icon"><EditIcon /></div> Edit and View
//                                     </button>
//                                   </div>
//                                 </div>
//                               )}
//                             </div>
//                           </td>
//                         );
//                       } else {
//                         return <td key={header}>{data[header]}</td>;
//                       }
//                     })}
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={Object.keys(fieldMapping).length} className="no-data-message">
//                     No data available with this name.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {showDashboard && (
//         <div className="dashboard-content">
//           {/* Add content for the Dashboard here */}
//         </div>
//       )}

//       {pdfUrl && showPdfViewer && (
//         <div className='pdf-viewer-overlay'>
//           <div className='pdf-viewer'>
//             <div className='pdf-viewer-header'>
//               <span className='pdf-viewer-close' onClick={handleClosePdfViewer}>X</span>
//             </div>
//             <iframe
//               src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
//               title="PDF Viewer"
//               preload="auto"
//             ></iframe>
//           </div>
//         </div>
//       )}

//       {selectedRowData && showDetailsView && (
//         <div className="details-view-overlay">
//           <div className="details-view">
//             <div className="details-view-header">
//               <span className="details-view-close" onClick={handleCloseDetailsView}>X</span>
//             </div>
//             <div className="details-view-content">
//               <h1 align="center"> User Details</h1>
//               {Object.keys(selectedRowData).map((key, index) => (
//                 <div className="field" key={index}>
//                   <strong>
//                     {labelMapping[key] ? labelMapping[key] : key}:
//                   </strong> 
//                   {key === 'id' 
//                     ? selectedRowData[key] 
//                     : (
//                       <input
//                         type="text"
//                         value={selectedRowData[key] !== null ? selectedRowData[key] : ''}
//                         onChange={(e) => {
//                           setSelectedRowData({
//                             ...selectedRowData,
//                             [key]: e.target.value,
//                           });
//                         }}
//                       />
//                     )
//                   }
//                 </div>
//               ))}
//               <button onClick={handleUpdateDetails} className='save_button'>Save</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProfilePage;













// This is the working


// import React, { useState, useEffect } from 'react';
// import './index.css';
// import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
// import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
// import EditIcon from '@mui/icons-material/Edit';
// import FileUploadIcon from '@mui/icons-material/FileUpload';
// import SearchIcon from '@mui/icons-material/Search';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { useHistory } from 'react-router-dom';

// const ProfilePage = () => {
//   const [showDataAnalytics, setShowDataAnalytics] = useState(false);
//   const [showDashboard, setShowDashboard] = useState(false);
//   const [profileData, setProfileData] = useState([]);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [selectedRow] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [showPdfViewer, setShowPdfViewer] = useState(false);
//   const [selectedRowData, setSelectedRowData] = useState(null);
//   const [showDetailsView, setShowDetailsView] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState(null);
//   const [viewersOpen, setViewersOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cachedData, setCachedData] = useState([]); 
//   const [updateSuccessMessage, setUpdateSuccessMessage] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 10;
//   const [sortBy, setSortBy] = useState('');
//   const sortOptions = [
//     { label: 'A to Z', value: 'az' },
//     { label: 'Z to A', value: 'za' },
//   ];

//   const history = useHistory();
  
//   const handleLogout = () => {
//     // Implement your logout logic here
//     // For example, redirect the user to the logout page
//     history.push('/');
//   }



  
//   const labelMapping = {
//     Customer_Title: 'Title',
//     Customer_FirstName: 'First Name',
//     Customer_Surname: 'Surname',
//     Customer_Address: 'Address',
//     Customer_Postcode: 'Postcode',
//     Customer_Telephone_Number: 'Telephone Number',
//     Customer_Service_1: 'Service 1',
//     Customer_Service_Number_1: 'Service Number 1',
//     Customer_Service_2: 'Service 2',
//     Customer_Service_Number_2: 'Service Number 2',
//     Customer_Signature: 'Signature',
//     Customer_Signature_Date: 'Signature Date',
//     Declaration_Customer_Name: 'Declaration Customer Name',
//     Declaration_Customer_Address: 'Declaration Customer Address',
//     Declaration_Customer_Occupation: 'Declaration Customer Occupation',
//     Declarant_Signature: 'Declarant Signature',
//     Declaration_Location: 'Declaration Location',
//     Declaration_Date: 'Declaration Date',
//     Signature_Authorised_Witness: 'Signature Authorised Witness',
//     Name_Authorised_Witness: 'Name Authorised Witness',
//     Authorised_Witness_Role: 'Authorised Witness Role',
//     Witness_Address: 'Witness Address',
//     Witness_Postcode: 'Witness Postcode',
//     Representative_Title: 'Representative Title',
//     Representative_FirstName: 'Representative First Name',
//     Representative_Surname: 'Representative Surname',
//     Representative_Address: 'Representative Address',
//     Representative_Postcode: 'Representative Postcode',
//     Representative_Telephonenumber: 'Representative Telephone Number',
//     Customer_Privacy_Consent_Sign_Date: 'Privacy Consent Sign Date',
//     Customer_State: 'Customer State',
//     Witness_State: 'Witness State',
//     HCP_Name: 'HCP Name',
//     HCP_Signature_Date: 'HCP Signature Date',
//     HCP_Sign_here: 'HCP Sign Here',
//     HCP_TelephoneNumber: 'HCP Telephone Number',
//     HCP_Declaration_Name: 'HCP Declaration Name',
//     HCP_Postcode: 'HCP Postcode',
//     Customer_Medical_Condition: 'Customer Medical Condition',
//     HCP_Signature: 'HCP Signature',
//     HCP_State: 'HCP State',
//     Customer_Privacy_Consent_Sign: 'Privacy Consent Sign',
//     HCP_Declaration_Customer_Name: 'HCP Declaration Customer Name',
//     Customer_Position: 'Customer Position',
//     HCP_Address: 'HCP Address',
//     HCP_Title: 'HCP Title',
//     HCP_Stamp: 'HCP Stamp',
//     Uploaded_On: 'Uploaded On',
//     Updated_On: 'Updated On',
//     Moderated_On: 'Moderated On',
//     PAFORM_Link: 'PAFORM Link',
//     Uploaded_By: 'Uploaded By',
//     Updated_By: 'Updated By',
//     Moderated_By: 'Moderated By',
//     UOP_Status: 'UOP Status',
//     CRM_Status: 'CRM Status'
//   };


//   const fieldMapping = {
    
//     'Customer_FirstName': 'First Name',
//     'Customer_Surname': 'Surname',
//     'Customer_Address': 'Address',
//     'Customer_State': 'State',
//     'Customer_Postcode': 'ZIP Code',
//     'Customer_Telephone_Number': 'Contact Number',
//     'Uploaded_On' : 'Uploaded On',
//     'Uploaded_By' : 'Uploaded By',
//     'Moderated_On' : 'Moderated On',
//     'Moderated_By' : 'Moderated By',
//     'Actions': ''
//   };

//   useEffect(() => {
//     if (showDataAnalytics) {
//       fetch('http://172.105.37.251:8000/POC/all_data/')
//         .then(response => response.json())
//         .then(data => {
//           setProfileData(data);
//           setCachedData(data); // Cache the data when first fetched
//         })
//         .catch(error => console.error('Error:', error));
//     }
//   }, [showDataAnalytics]);


//   const handleNextPage = () => {
//     if (currentPage < Math.ceil(profileData.length / pageSize)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const paginatedData = profileData.slice((currentPage - 1) * pageSize, currentPage * pageSize);



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

//   const handleCloseDetailsView = () => {
//     setShowDetailsView(false);
//     setViewersOpen(false);
//   }

//   const handleClosePdfViewer = () => {
//     setShowPdfViewer(false);
//     setPdfUrl(null);
//     setViewersOpen(false);
//   }

//   const handleEditAndView = (data) => {
//     setSelectedRowData(data);
//     setShowDetailsView(true);
//     setPdfUrl(data.PAFORM_Link);
//     setShowPdfViewer(true);
//     setViewersOpen(true);
//   }


//   const handleSortChange = (value) => {
//     setSortBy(value);
//   };

  
//   useEffect(() => {
//     if (sortBy === '') {
//       setProfileData(cachedData);
//       return;
//     }
  
//     setProfileData(prevProfileData => {
//       if (sortBy === 'az') {
//         return [...prevProfileData].sort((a, b) => a.Customer_FirstName.localeCompare(b.Customer_FirstName));
//       } else if (sortBy === 'za') {
//         return [...prevProfileData].sort((a, b) => b.Customer_FirstName.localeCompare(a.Customer_FirstName));
//       }
//       return prevProfileData;
//     });
//   }, [sortBy, cachedData]);


//   const fetchData = async () => {
//     try {
//       let url = 'http://172.105.37.251:8000/POC/all_data/';

//       // Add search query to the URL if it exists
//       if (searchQuery) {
//         url += `?search=${searchQuery}`;
//       }

//       const response = await fetch(url);
//       const data = await response.json();
//       setProfileData(data);
//       setCachedData(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };


//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       try {
//         setUploadStatus('uploading');

//         const formData = new FormData();
//         formData.append('pdf_file', file);

//         const response = await fetch('http://172.105.37.251:8000/POC/PdfUploadV2/', {
//           method: 'POST',
//           body: formData
//         });

//         const responseData = await response.json();
//         console.log('File uploaded successfully:', responseData);

//         setUploadStatus('success');

        
//         // Fetch the updated data
//         fetchData();


//         setTimeout(() => {
//           setUploadStatus(null);
//         }, 3000);

//       } catch (error) {
//         console.error('Error:', error);
//         setUploadStatus('error');
//       }
//     } else {
//       console.error('No file selected');
//     }
//   }

//   const handleSearchClick = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };


//   const handleSearchInputChange = (e) => {
//     const query = e.target.value.toLowerCase();
  
//     // If there is a search query, filter the data, otherwise show the full data
//     if (query) {
//       const filteredResults = cachedData.filter(item => 
//         item.Customer_FirstName.toLowerCase().includes(query)
//       );
//       setProfileData(filteredResults);
//     } else {
//       // If no search query, reset to show the full data
//       setProfileData(cachedData);
//     }
  
//     setSearchQuery(query); // Update the search query state
//   };



//   const handleUpdateDetails = async () => {
//     try {
//       const response = await fetch(`http://172.105.37.251:8000/POC/UpdateUserDetails/${selectedRowData.id}/`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(selectedRowData),
//       });
  
//       if (response.ok) {
//         console.log('Details updated successfully');
//         setUpdateSuccessMessage('Details updated successfully'); // Set success message
//         setTimeout(() => {
//           setUpdateSuccessMessage(null); // Reset success message after a few seconds
//         }, 3000);

//         // Fetch the updated data
//         fetchData();

//       } else {
//         console.error('Error updating details:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };






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
//         <div className={`profile_table_container ${isNavOpen ? 'nav-open' : ''}`}>

//           <div className='Dataanalystics'>
//                 Data Analytics <SearchIcon className='search-icon' onClick={handleSearchClick} />
//                 {isSearchOpen && (
//                   <input 
//                     type="text" 
//                     className="search-bar" 
//                     placeholder="Search  By  FirstName" 
//                     value={searchQuery}
//                     onChange={handleSearchInputChange}
//                   />
//                 )}
//           </div>


//           <div className="logout-button" onClick={handleLogout}>
//             <div>
//               <LogoutIcon fontSize="large" />
//             </div>
//             <div>Logout</div>
//           </div>


//           <div className="upload-container">
//             <label htmlFor="file-input" className="file-upload-label">
//               <span className="upload-icon"><FileUploadIcon/></span> Upload New Document
//             </label>
//             <input type="file" id="file-input" accept=".pdf" onChange={handleFileChange} style={{ display: 'none' }} />
//           </div>

//           {uploadStatus && (
//             <div className='upload-status-overlay'>
//               <div className='upload-status'>
//                 {uploadStatus === 'uploading' && <div className="uploading-message">Please wait...</div>}
//                 {uploadStatus === 'success' && <div className="success-message">File uploaded successfully!</div>}
//                 {uploadStatus === 'error' && <div className="error-message">Error uploading file. Please try again later.</div>}
//               </div>
//             </div>
//           )}



//         <select className="sort_dropdown" onChange={(e) => handleSortChange(e.target.value)} value={sortBy}>
//           <option value="">Sort By</option>
//           {sortOptions.map(option => (
//             <option key={option.value} value={option.value}>{option.label}</option>
//           ))}
//         </select>


//         <div className="pagination-controls">
//             <span onClick={handlePrevPage}>&lt;</span>
//             <span>{`${currentPage}/${Math.ceil(profileData.length / pageSize)}`}</span>
//             <span onClick={handleNextPage}>&gt;</span>
//           </div>

//           {updateSuccessMessage && (
//             <div className="success-message">
//               {updateSuccessMessage}
//             </div>
//           )}

//           <div className='showing-results'> Showing Results: {paginatedData.length} </div>
//           <div className='summary'> Summary </div>
          
//           <table className="profile_table">
//             <thead>
//               <tr>
//                 <th>S.No</th>
//                 {Object.keys(fieldMapping).map(header => (
//                   <th key={header}>{fieldMapping[header]}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//             {paginatedData.length > 0 ? (
//                 paginatedData.map((data, index) => (
//                   <tr key={index}>
//                     <td>{(currentPage - 1) * pageSize + index + 1}</td>
//                     {Object.keys(fieldMapping).map(header => {
//                       if (header === 'Actions') {
//                         return (
//                           <td key={header} className="actions-cell">
//                             <div className="action-container">
//                               <div className="icon" onClick={() => handleEditAndView(data)}>
//                                 <EditIcon />
//                               </div>
//                               {selectedRow === index && !viewersOpen && (
//                                 <div className="action-buttons">
//                                   <div className="button-group">
//                                     <button onClick={() => handleEditAndView(data)}>
//                                       <div className="icon"><EditIcon /></div> Edit and View
//                                     </button>
//                                   </div>
//                                 </div>
//                               )}
//                             </div>
//                           </td>
//                         );
//                       } else {
//                         return <td key={header}>{data[header]}</td>;
//                       }
//                     })}
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={Object.keys(fieldMapping).length} className="no-data-message">
//                     No data available with this name.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {showDashboard && (
//         <div className="dashboard-content">
//           {/* Add content for the Dashboard here */}
//         </div>
//       )}

//       {pdfUrl && showPdfViewer && (
//         <div className='pdf-viewer-overlay'>
//           <div className='pdf-viewer'>
//             <div className='pdf-viewer-header'>
//               <span className='pdf-viewer-close' onClick={handleClosePdfViewer}>X</span>
//             </div>
//             <iframe
//               src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
//               title="PDF Viewer"
//               preload="auto"
//             ></iframe>
//           </div>
//         </div>
//       )}

//       {selectedRowData && showDetailsView && (
//         <div className="details-view-overlay">
//           <div className="details-view">
//             <div className="details-view-header">
//               <span className="details-view-close" onClick={handleCloseDetailsView}>X</span>
//             </div>
//             <div className="details-view-content">
//               <h1 align="center"> User Details</h1>
//               {Object.keys(selectedRowData).map((key, index) => (
//                 <div className="field" key={index}>
//                   <strong>
//                     {labelMapping[key] ? labelMapping[key] : key}:
//                   </strong> 
//                   {key === 'id' 
//                     ? selectedRowData[key] 
//                     : (
//                       <input
//                         type="text"
//                         value={selectedRowData[key] !== null ? selectedRowData[key] : ''}
//                         onChange={(e) => {
//                           setSelectedRowData({
//                             ...selectedRowData,
//                             [key]: e.target.value,
//                           });
//                         }}
//                       />
//                     )
//                   }
//                 </div>
//               ))}
//               <button onClick={handleUpdateDetails} className='save_button'>Update</button>
//             </div>
//           </div>
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
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router-dom';

const ProfilePage = () => {
  const [showDataAnalytics, setShowDataAnalytics] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [selectedRow] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [showDetailsView, setShowDetailsView] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  // const [viewersOpen, setViewersOpen] = useState(false);
  const [isLoggedIn, ] = useState(false);
  const [setViewersOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cachedData, setCachedData] = useState([]); 
  const [updateSuccessMessage, setUpdateSuccessMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [sortBy, setSortBy] = useState('');
  const sortOptions = [
    { label: 'A to Z', value: 'az' },
    { label: 'Z to A', value: 'za' },
  ];

  const [setEditOverlayOpen] = useState(false);
  const history = useHistory();
  
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, redirect the user to the logout page
    history.push('/');
  }



  useEffect(() => {
    const userLoggedIn = true; // Replace with your authentication logic

    if (userLoggedIn) {
      history.push('/DataAnalytics');
    }
  }, [history]); 


  
  const labelMapping = {
    Customer_Title: 'Title',
    Customer_FirstName: 'First Name',
    Customer_Surname: 'Surname',
    Customer_Address: 'Address',
    Customer_Postcode: 'Postcode',
    Customer_Telephone_Number: 'Telephone Number',
    Customer_Service_1: 'Service 1',
    Customer_Service_Number_1: 'Service Number 1',
    Customer_Service_2: 'Service 2',
    Customer_Service_Number_2: 'Service Number 2',
    Customer_Signature: 'Signature',
    Customer_Signature_Date: 'Signature Date',
    Declaration_Customer_Name: 'Declaration Customer Name',
    Declaration_Customer_Address: 'Declaration Customer Address',
    Declaration_Customer_Occupation: 'Declaration Customer Occupation',
    Declarant_Signature: 'Declarant Signature',
    Declaration_Location: 'Declaration Location',
    Declaration_Date: 'Declaration Date',
    Signature_Authorised_Witness: 'Signature Authorised Witness',
    Name_Authorised_Witness: 'Name Authorised Witness',
    Authorised_Witness_Role: 'Authorised Witness Role',
    Witness_Address: 'Witness Address',
    Witness_Postcode: 'Witness Postcode',
    Representative_Title: 'Representative Title',
    Representative_FirstName: 'Representative First Name',
    Representative_Surname: 'Representative Surname',
    Representative_Address: 'Representative Address',
    Representative_Postcode: 'Representative Postcode',
    Representative_Telephonenumber: 'Representative Telephone Number',
    Customer_Privacy_Consent_Sign_Date: 'Privacy Consent Sign Date',
    Customer_State: 'Customer State',
    Witness_State: 'Witness State',
    HCP_Name: 'HCP Name',
    HCP_Signature_Date: 'HCP Signature Date',
    HCP_Sign_here: 'HCP Sign Here',
    HCP_TelephoneNumber: 'HCP Telephone Number',
    HCP_Declaration_Name: 'HCP Declaration Name',
    HCP_Postcode: 'HCP Postcode',
    Customer_Medical_Condition: 'Customer Medical Condition',
    HCP_Signature: 'HCP Signature',
    HCP_State: 'HCP State',
    Customer_Privacy_Consent_Sign: 'Privacy Consent Sign',
    HCP_Declaration_Customer_Name: 'HCP Declaration Customer Name',
    Customer_Position: 'Customer Position',
    HCP_Address: 'HCP Address',
    HCP_Title: 'HCP Title',
    HCP_Stamp: 'HCP Stamp',
    Uploaded_On: 'Uploaded On',
    Updated_On: 'Updated On',
    Moderated_On: 'Moderated On',
    PAFORM_Link: 'PAFORM Link',
    Uploaded_By: 'Uploaded By',
    Updated_By: 'Updated By',
    Moderated_By: 'Moderated By',
    UOP_Status: 'UOP Status',
    CRM_Status: 'CRM Status'
  };


  const fieldMapping = {
    
    'Customer_FirstName': 'First Name',
    'Customer_Surname': 'Surname',
    'Customer_Address': 'Address',
    'Customer_State': 'State',
    'Customer_Postcode': 'ZIP Code',
    'Customer_Telephone_Number': 'Contact Number',
    'Uploaded_On' : 'Uploaded On',
    'Uploaded_By' : 'Uploaded By',
    'Moderated_On' : 'Moderated On',
    'Moderated_By' : 'Moderated By',
    'Actions': ''
  };

  useEffect(() => {
    if (showDataAnalytics || isLoggedIn) {
      fetch('http://172.105.37.251:8000/POC/all_data/')
        .then(response => response.json())
        .then(data => {
          setProfileData(data);
          setCachedData(data);
        })
        .catch(error => console.error('Error:', error));
    }
  }, [showDataAnalytics, isLoggedIn]);


  const handleNextPage = () => {
    if (currentPage < Math.ceil(profileData.length / pageSize)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginatedData = profileData.slice((currentPage - 1) * pageSize, currentPage * pageSize);



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

  const handleCloseDetailsView = () => {
    setShowDetailsView(false);
    setViewersOpen(false);
    setEditOverlayOpen(false); // Set edit overlay closed
  }

  const handleClosePdfViewer = () => {
    setShowPdfViewer(false);
    setPdfUrl(null);
    setViewersOpen(false);
  }

  const handleEditAndView = (data) => {
    setSelectedRowData(data);
    setShowDetailsView(true);
    setPdfUrl(data.PAFORM_Link);
    setShowPdfViewer(true);
    setViewersOpen(true);
    setEditOverlayOpen(true); // Set edit overlay open
  }

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  
  useEffect(() => {
    if (sortBy === '') {
      setProfileData(cachedData);
      return;
    }
  
    setProfileData(prevProfileData => {
      if (sortBy === 'az') {
        return [...prevProfileData].sort((a, b) => a.Customer_FirstName.localeCompare(b.Customer_FirstName));
      } else if (sortBy === 'za') {
        return [...prevProfileData].sort((a, b) => b.Customer_FirstName.localeCompare(a.Customer_FirstName));
      }
      return prevProfileData;
    });
  }, [sortBy, cachedData]);


  

  const fetchData = async () => {
    try {
      let url = 'http://172.105.37.251:8000/POC/all_data/';
  
      // Add search query to the URL if it exists
      if (searchQuery) {
        url += `?search=${searchQuery}`;
      }
  
      const response = await fetch(url);
      const data = await response.json();
  
      // Format the date fields
      const formattedData = data.map(item => ({
        ...item,
        Uploaded_On: formatDate(item.Uploaded_On),
        Moderated_On: formatDate(item.Moderated_On),
      }));
  
      setProfileData(formattedData);
      setCachedData(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // Function to format dates from yyyy-mm-dd to dd-mm-yyyy
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', options).replace(',', ' ');
  };





  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        setUploadStatus('uploading');

        const formData = new FormData();
        formData.append('pdf_file', file);

        const response = await fetch('http://172.105.37.251:8000/POC/PdfUploadV2/', {
          method: 'POST',
          body: formData
        });

        const responseData = await response.json();
        console.log('File uploaded successfully:', responseData);

        setUploadStatus('success');

        
        // Fetch the updated data
        fetchData();


        setTimeout(() => {
          setUploadStatus(null);
        }, 3000);

      } catch (error) {
        console.error('Error:', error);
        setUploadStatus('error');
      }
    } else {
      console.error('No file selected');
    }
  }

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };


  const handleSearchInputChange = (e) => {
    const query = e.target.value.toLowerCase();
  
    // If there is a search query, filter the data, otherwise show the full data
    if (query) {
      const filteredResults = cachedData.filter(item => 
        item.Customer_FirstName.toLowerCase().includes(query)
      );
      setProfileData(filteredResults);
    } else {
      // If no search query, reset to show the full data
      setProfileData(cachedData);
    }
  
    setSearchQuery(query); // Update the search query state
  };



  const handleUpdateDetails = async () => {
    try {
      const response = await fetch(`http://172.105.37.251:8000/POC/UpdateUserDetails/${selectedRowData.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedRowData),
      });
  
      if (response.ok) {
        console.log('Details updated successfully');
        setUpdateSuccessMessage('Details updated successfully'); // Set success message
        setTimeout(() => {
          setUpdateSuccessMessage(null); // Reset success message after a few seconds
        }, 3000);

        // Fetch the updated data
        fetchData();

      } else {
        console.error('Error updating details:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };






  return (
    <div className={`profile ${isNavOpen ? '' : 'nav-closed'}`}>
      <nav className={`nav-container ${isNavOpen ? 'nav-open' : ''}${isNavOpen ? '' : 'white-icons'}`} onMouseEnter={handleNavMouseEnter} onMouseLeave={handleNavMouseLeave}>
        <img src="https://vivifyassets.s3.ap-south-1.amazonaws.com/UDP.png" alt="logo" className={`logo ${isNavOpen ? 'nav-open' : 'nav-closed'}`} />
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
        <div className={`profile_table_container ${isNavOpen ? 'nav-open' : ''}`}>

          <div className='Dataanalystics'>
                Data Analytics <SearchIcon className='search-icon' onClick={handleSearchClick} />
                {isSearchOpen && (
                  <input 
                    type="text" 
                    className="search-bar" 
                    placeholder="Search  By  FirstName" 
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                  />
                )}
          </div>


          <div className="logout-button" onClick={handleLogout}>
            <div>
              <LogoutIcon fontSize="large" />
            </div>
            <div>Logout</div>
          </div>


          <div className="upload-container">
            <label htmlFor="file-input" className="file-upload-label">
              <span className="upload-icon"><FileUploadIcon/></span> Upload New Document
            </label>
            <input type="file" id="file-input" accept=".pdf" onChange={handleFileChange} style={{ display: 'none' }} />
          </div>

          {uploadStatus && (
            <div className='upload-status-overlay'>
              <div className='upload-status'>
                {uploadStatus === 'uploading' && <div className="uploading-message">Please wait...</div>}
                {uploadStatus === 'success' && <div className="success-message">File uploaded successfully!</div>}
                {uploadStatus === 'error' && <div className="error-message">Error uploading file. Please try again later.</div>}
              </div>
            </div>
          )}



          {!showDetailsView && (
            <select className="sort_dropdown" onChange={(e) => handleSortChange(e.target.value)} value={sortBy}>
              <option value="">Sort By</option>
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          )}


        <div className="pagination-controls">
            <span onClick={handlePrevPage}>&lt;</span>
            <span>{`${currentPage}/${Math.ceil(profileData.length / pageSize)}`}</span>
            <span onClick={handleNextPage}>&gt;</span>
          </div>

          {updateSuccessMessage && (
            <div className="success-message">
              {updateSuccessMessage}
            </div>
          )}

          <div className='showing-results'> Showing Results: {paginatedData.length} </div>
          <div className='summary'> Summary </div>
          
          <table className="profile_table">
            <thead>
              <tr>
                <th>S.No</th>
                {Object.keys(fieldMapping).map(header => (
                  <th key={header}>{fieldMapping[header]}</th>
                ))}
              </tr>
            </thead>
            <tbody>
            {paginatedData.length > 0 ? (
                paginatedData.map((data, index) => (
                  <tr key={index}>
                    <td>{(currentPage - 1) * pageSize + index + 1}</td>
                    {Object.keys(fieldMapping).map(header => {
                      if (header === 'Actions') {
                        return (
                          <td key={header} className="actions-cell">
                            <div className="action-container">
                              <div className="icon" onClick={() => handleEditAndView(data)}>
                                <EditIcon />
                              </div>
                              {/* {selectedRow === index && !viewersOpen && (
                                // <div className="action-buttons">
                                //   <div className="button-group">
                                //     <button onClick={() => handleEditAndView(data)}>
                                //       <div className="icon"><EditIcon /></div> Edit and View
                                //     </button>
                                //   </div>
                                // </div>
                              )} */}
                            </div>
                          </td>
                        );
                      } else {
                        return <td key={header}>{header === 'Uploaded_On' || header === 'Moderated_On'? formatDate(data[header]): data[header]}
                      </td>
          
                      }
                    })}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={Object.keys(fieldMapping).length} className="no-data-message">
                    No data available with this name.
                  </td>
                </tr>
              )}
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
            <iframe
              src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
              title="PDF Viewer"
              preload="auto"
            ></iframe>
          </div>
        </div>
      )}

      {selectedRowData && showDetailsView && (
        <div className="details-view-overlay">
          <div className="details-view">
            <div className="details-view-header">
              <span className="details-view-close" onClick={handleCloseDetailsView}>X</span>
            </div>
            <div className="details-view-content">
              <h1 align="center"> User Details</h1>
              {Object.keys(selectedRowData).map((key, index) => (
                <div className="field" key={index}>
                  <strong>
                    {labelMapping[key] ? labelMapping[key] : key}:
                  </strong> 
                  {key === 'id' 
                    ? selectedRowData[key] 
                    : (
                      <input
                        type="text"
                        value={selectedRowData[key] !== null ? selectedRowData[key] : ''}
                        onChange={(e) => {
                          setSelectedRowData({
                            ...selectedRowData,
                            [key]: e.target.value,
                          });
                        }}
                      />
                    )
                  }
                </div>
              ))}
              <button onClick={handleUpdateDetails} className='save_button'>Update</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;







