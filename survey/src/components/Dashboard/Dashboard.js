// src/Dashboard.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdDateRange } from "react-icons/md";
import './Dashboard.css'; // Import the CSS file
import { FaMale, FaFemale, FaTransgenderAlt } from 'react-icons/fa';
import { ProgressBar } from 'react-bootstrap';
import SectionHeader from '../Sectionheader/Sectionheader';
import axios from 'axios';
import CountUp from 'react-countup';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  registerables
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

// Registering components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);
ChartJS.register(...registerables);

const Dashboard = ({ user }) => {


  const data2 = {
    labels: ['10th', '11th', '12th', 'Graduate', 'Post Graduate'],
    datasets: [
      {
        data: [10, 15, 25, 20, 10, 10, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const data3 = {
    labels: ['General', 'OBC', 'SC', 'ST'],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const data4 = {
    labels: ['Agra', 'Basti', 'Lucknow', 'Faizabad'],
    datasets: [
      {
        data: [25, 25, 25, 25],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const data5 = {
    labels: ['Azmer', 'Muradabad', 'Jerman'],
    datasets: [
      {
        data: [33, 33, 34],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const currentDate = new Date().toLocaleDateString(undefined, options);

  // const capitalizeFirstLetter = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // };

  const text = 'Total Surveys Completed';
  const [totalSurveys, setTotalSurveys] = useState(0);
  const [genderCounts, setGenderCounts] = useState({
    male: 0,
    female: 0,
    transgender: 0
  });
  const [ageGroupGenderCounts, setAgeGroupGenderCounts] = useState({});
  const [disabilityGenderCounts, setDisabilityGenderCounts] = useState({});
  const [disabilityAgeGroupCounts, setDisabilityAgeGroupCounts] = useState({});

  const [loading, setLoading] = useState(true);


  const [barData, setBarData] = useState({
    labels: [
      '0 to 6',
      '7 to 14',
      '15 to 20',
      '21 to 30',
      '31 to 40',
      '41 to 60',
      '61 to 70',
      '71 & above',
    ],
    label1: [
      '0-6 Year',
      '7-14 Year',
      '15-20 Year',
      '21-30 Year',
      '31-40 Year',
      '41-60 Year',
      '61-70 Year',
      '70&above Year',
    ],

    datasets: [
      {
        label: 'Female',
        backgroundColor: '#f4a261',
        borderColor: '#f4a261',
        borderWidth: 1,
        hoverBackgroundColor: '#e76f51',
        hoverBorderColor: '#e76f51',
        data: [], // This will be updated
      },
      {
        label: 'Male',
        backgroundColor: '#2a9d8f',
        borderColor: '#2a9d8f',
        borderWidth: 1,
        hoverBackgroundColor: '#264653',
        hoverBorderColor: '#264653',
        data: [], // This will be updated
      },
      {
        label: 'Transgender',
        backgroundColor: '#2a93f5',
        borderColor: '#2a9d8f',
        borderWidth: 1,
        hoverBackgroundColor: '#264653',
        hoverBorderColor: '#264653',
        data: [], // This will be updated
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/survey_form');
        if (response.data) {
          const { total, genderCounts, ageGroupGenderCounts, disabilityGenderCounts, disabilityAgeGroupCounts } = response.data;
          setTotalSurveys(total);
          setGenderCounts(genderCounts);
          setAgeGroupGenderCounts(ageGroupGenderCounts);
          setDisabilityGenderCounts(disabilityGenderCounts);
          setDisabilityAgeGroupCounts(disabilityAgeGroupCounts);

          // Prepare data for bar chart
          const femaleData = [];
          const maleData = [];
          const transgenderData = [];
          const labels = [];

          Object.keys(ageGroupGenderCounts).forEach(ageGroup => {
            const groupData = ageGroupGenderCounts[ageGroup] || { female: 0, male: 0, transgender: 0 };
            labels.push(ageGroup);
            femaleData.push(groupData.female);
            maleData.push(groupData.male);
            transgenderData.push(groupData.transgender);
          });

          setBarData(prevBarData => ({
            ...prevBarData,
            labels: labels,
            datasets: [
              { ...prevBarData.datasets[0], data: femaleData },
              { ...prevBarData.datasets[1], data: maleData },
              { ...prevBarData.datasets[2], data: transgenderData },
            ],
          }));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  // Table 1
  const ageGroups = [
    '0-6 Year',
    '7-14 Year',
    '15-20 Year',
    '21-30 Year',
    '31-40 Year',
    '41-60 Year',
    '61-70 Year',
    '70&above Year',
  ];

  const getCountsForAgeGroup = (ageGroup) => {
    return ageGroupGenderCounts[ageGroup] || { male: 0, female: 0, transgender: 0 };
  };


  // Table 2. , Table 3.
  const disabilityTypes = [
    'Locomotor Disability',
    'Visual Disability',
    'Hearing Disability',
    'Speech & Language Disability',
    'Mental Retardation/Intellectual Disability',
    'Mental Illness',
    'Other Disabilities',
    'Multiple Disabilities',
  ];

  // Tabel 2 logic
  const getCountsFordisabilityType = (disabilityType) => {
    return disabilityGenderCounts[disabilityType] || { male: 0, female: 0, transgender: 0 };
  };

  // Table 3 logic
  const getCountsAgeGroupdisabilityType = (disabilityType) => {
    return disabilityAgeGroupCounts[disabilityType] || { year1: 0, year2: 0, year3: 0, year4: 0, year5: 0, year6: 0, year7: 0, year8: 0 };
  };

  const removeDisabilityWord = (type) => {
    return type.replace(/Disability$/, '').trim();
  };

  const total1 = genderCounts.male + genderCounts.female + genderCounts.transgender;

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Persons',
        },
      },
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Age Group',
        },
      },
    },
  };
  const totall = disabilityTypes.reduce((sum, disabilityType) => {
    const counts = getCountsAgeGroupdisabilityType(disabilityType);
    return sum + counts.year1 + counts.year2 + counts.year3 + counts.year4 + counts.year5 + counts.year6 + counts.year7 + counts.year8;
  }, 0);



  //  Graph 2

  // Step 1: Calculate totals for each disability type
  const totals = disabilityTypes.map((disabilityType) => {
    const counts = getCountsFordisabilityType(disabilityType);
    const total = (((counts.male + counts.female + counts.transgender) / totalSurveys) * 100).toFixed(2);
    return total;
  });

  // Step 2: Update the categoryData's data array with calculated totals
  const categoryData = {
    labels: [
      'Locomotor', 'Visual', 'Hearing', 'Speech & Language',
      'Mental Retardation/Intellectual', 'Mental Illness',
      'Other Disabilities', 'Multiple Disabilities',
    ],
    datasets: [
      {
        label: 'PwDs',
        backgroundColor: [
          '#264653', '#2a9d8f', '#e9c46a', '#f4a261',
          '#e76f51', '#bc6c25', '#dda15e', '#606c38'
        ],
        borderColor: [
          '#264653', '#2a9d8f', '#e9c46a', '#f4a261',
          '#e76f51', '#bc6c25', '#dda15e', '#606c38'
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          '#3d5a80', '#98c1d9', '#ee6c4d', '#293241',
          '#d90429', '#8d99ae', '#2b2d42', '#a8dadc'
        ],
        hoverBorderColor: [
          '#3d5a80', '#98c1d9', '#ee6c4d', '#293241',
          '#d90429', '#8d99ae', '#2b2d42', '#a8dadc'
        ],
        data: totals, // Assign calculated totals here
      },
    ],
  };

  const categoryOptions = {
    scales: {
      x: {
        beginAtZero: true,
        // title: {
        //   display: true,
        //   text: 'Disability Types',
        // },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + '%'; // Add percentage sign to y-axis ticks
          },
        },
        title: {
          display: true,
          text: 'PwDs Percentage(%)',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.raw + '%'; // Add percentage sign to tooltip values
          },
        },
      },
    },
  };



  //  Graph 3 

  const updatedDatasets = disabilityTypes.map((disabilityType) => {
    const counts = getCountsAgeGroupdisabilityType(disabilityType);
    return {
      label: removeDisabilityWord(disabilityType),
      backgroundColor: getBackgroundColorForDisabilityType(disabilityType),
      data: [
        counts.year1,
        counts.year2,
        counts.year3,
        counts.year4,
        counts.year5,
        counts.year6,
        counts.year7,
        counts.year8
      ],
    };
  });

  // Step 2: Update the ageGroupData's datasets array
  const ageGroupData = {
    labels: [
      '0 to 6', '7 to 14', '15 to 20', '21 to 30', '31 to 40', '41 to 60', '61 to 70', '71 & above'
    ],
    datasets: updatedDatasets,
  };

  // Example options for the chart (customize as needed)
  const ageGroupOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Persons',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Age Groups',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };
  // Function to get the color for each disability type
  function getBackgroundColorForDisabilityType(disabilityType) {
    switch (disabilityType) {
      case 'Locomotor Disability':
        return '#000000';
      case 'Visual Disability':
        return '#2a9d8f';
      case 'Hearing Disability':
        return '#e9c46a';
      case 'Speech & Language Disability':
        return '#f4a261';
      case 'Mental Retardation/Intellectual Disability':
        return '#e76f51';
      case 'Mental Illness':
        return '#bc6c25';
      case 'Other Disabilities':
        return '#dda15e';
      case 'Multiple Disabilities':
        return '#606c38';
      default:
        return '#000000'; // Default color
    }
  }

  // Animation in progress bar

  const [femaleProgress, setFemaleProgress] = useState(0);
  const [maleProgress, setMaleProgress] = useState(0);
  const [transgenderProgress, setTransgenderProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setFemaleProgress((genderCounts.female / total1) * 100);
      setMaleProgress((genderCounts.male / total1) * 100);
      setTransgenderProgress((genderCounts.transgender / total1) * 100);
    }, 500); // Optional delay to make the animation smoother
  }, [genderCounts, total1]);



  return (

    <div className="container mt-4">
      <div className="card my-4 p-3 rounded-3 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <div className="row g-0 align-items-center">
          <div className="col-md-8 col-sm-12">
            <h3 className="welcome-message text-center" style={{ color: "#000325", fontFamily: 'Libre Franklin, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              {/* Welcome, {capitalizeFirstLetter(user.Username)}! */}
              Survey of Person with Disabilities Dashboard
            </h3>
            <p className="system-status text-center px-7" style={{ fontWeight: '500' }}>This page showcases the dashboard presenting overview of disability survey. It includes total number of surveys, demographics factors such as gender, age group, disability categories etc.</p>
          </div>
          <div className="col-md-4 col-sm-12 text-md-end text-sm-start">
            <p className="current-date d-flex align-items-center justify-content-md-end justify-content-sm-start">
              <MdDateRange className="me-2" size={23} />
              {currentDate}
            </p>
          </div>
        </div>
      </div>

      <SectionHeader title="Survey Overview" /> {/* Add this line to include the section header */}

      <div className="survey-info-container">
        <div className="survey-info-content">
          <h5 className="survey-text">{text}</h5>
          <span className="survey-count">
            <CountUp end={totalSurveys} duration={1.5} />+
          </span>
        </div>
      </div>


      <div className='card my-3 pt-6 ' style={{ backgroundColor: '#F2F0EC' }}>
        <h2 className="text-center mb-4 fw-bold fs-3" >Gender Distribution</h2>
        <div className="row justify-content-center align-items-stretch">

          {/* Female Section */}
          <div className="col-lg-3 col-md-4 col-sm-6 text-center mb-4">
            <div className="p-4 border rounded shadow-sm bg-light h-100 d-flex flex-column align-items-center justify-content-center">
              <FaFemale size={80} color="#36A2EB" />
              <h3 className="mt-3"><CountUp end={genderCounts.female} duration={1.5} /></h3>
              <p className="text-muted">{((genderCounts.female / total1) * 100).toFixed(1)}%</p>
            </div>
          </div>

          {/* Middle Section */}
          <div className="col-lg-4 col-md-6 text-center mb-4">
            <div className="p-4 border rounded shadow-sm bg-white h-100 d-flex flex-column justify-content-center">
              <h5 className="mb-3">Gender Breakdown</h5>
              <ProgressBar className="premium-animated-progress">
                <ProgressBar variant="info" now={femaleProgress} key={1} style={{ animationDuration: `${femaleProgress / 100 + 1}s` }} />
                <ProgressBar variant="danger" now={maleProgress} key={2} style={{ animationDuration: `${maleProgress / 100 + 1}s` }} />
                <ProgressBar variant="warning" now={transgenderProgress} key={3} style={{ animationDuration: `${transgenderProgress / 100 + 1}s` }} />
              </ProgressBar>
              <div className="d-flex justify-content-around mt-3">
                <div>
                  <strong>Female</strong>
                  <p className="mb-0">{genderCounts.female}</p>
                </div>
                <div>
                  <strong>Male</strong>
                  <p className="mb-0">{genderCounts.male}</p>
                </div>
                <div>
                  <strong>Transgender</strong>
                  <p className="mb-0">{genderCounts.transgender}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Male Section */}
          <div className="col-lg-3 col-md-4 col-sm-6 text-center mb-4">
            <div className="p-4 border rounded shadow-sm bg-light h-100 d-flex flex-column align-items-center justify-content-center">
              <FaMale size={80} color="#FF6384" />
              <h3 className="mt-3"><CountUp end={genderCounts.male} duration={1.5} /></h3>
              <p className="text-muted">{((genderCounts.male / total1) * 100).toFixed(1)}%</p>
            </div>
          </div>

          {/* Transgender Section */}
          <div className="col-lg-3 col-md-4 col-sm-6 text-center mb-4">
            <div className="p-4 border rounded shadow-sm bg-light h-100 d-flex flex-column align-items-center justify-content-center">
              <FaTransgenderAlt size={80} color="#FFCE56" />
              <h3 className="mt-3"><CountUp end={genderCounts.transgender} duration={1.5} /></h3>
              <p className="text-muted">{((genderCounts.transgender / total1) * 100).toFixed(1)}%</p>
            </div>
          </div>

        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Education Level</h5>
              <Pie data={data2} />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Category Distribution</h5>
              <Pie data={data3} />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">District Distribution</h5>
              <Pie data={data4} />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Taluka Distribution</h5>
              <Pie data={data5} />
            </div>
          </div>
        </div>

      </div>

      <div className='row' style={{ paddingTop: '10px', marginLeft: '0.5px', marginRight: '05px', backgroundColor: '#d5e3e3', border: '2px solid #dee2e6' }}>
        <SectionHeader title="Age Group-wise Gender Distribution of the PwDs" />
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (

          <div className="col-lg-6 col-md-6 py-2">
            <div className="card bg-slate-950">
              <div className="card-body1">
                <h5 className="text-center mt-3">Age Group-wise PwDs</h5>
                <Bar data={barData} options={barOptions} />
              </div>
            </div>
          </div>
        )}




        <div className="col-lg-6 col-md-6 py-2">
          <div style={{ height: '335px', overflowY: 'auto', borderRadius: '7px', backgroundColor: "white" }}>
            <table className="table table-bordered table-hover table-sm text-center" style={{ borderCollapse: 'collapse', width: '100%', borderRadius: '10px' }}>
              <thead className="table-primary" style={{ position: 'sticky', top: 0, zIndex: 2 }}>
                <tr>
                  <th rowSpan="2" style={{ verticalAlign: 'middle' }}>Sr. No.</th>
                  <th rowSpan="2" style={{ verticalAlign: 'middle' }}>Age Group</th>
                  <th colSpan="4">Gender</th>
                </tr>
                <tr>
                  <th>Female</th>
                  <th>Male</th>
                  <th>Transgender</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {ageGroups.map((ageGroup, index) => {
                  const counts = getCountsForAgeGroup(ageGroup);
                  const total = counts.male + counts.female + counts.transgender;
                  const percentage = total > 0 ? ((total / totalSurveys) * 100).toFixed(2) : '0.00';

                  return (
                    <tr key={index}>
                      <td>{index + 1}.</td>
                      <td>{ageGroup}</td>
                      <td>{counts.female}</td>
                      <td>{counts.male}</td>
                      <td>{counts.transgender}</td>
                      <td>{total}<br />({percentage}%)</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="fw-bold">
                  <td colSpan="2">Total (including Sr. No. 8)</td>
                  <td>
                    {ageGroups.reduce((sum, ageGroup) => sum + getCountsForAgeGroup(ageGroup).female, 0)}
                  </td>
                  <td>
                    {ageGroups.reduce((sum, ageGroup) => sum + getCountsForAgeGroup(ageGroup).male, 0)}
                  </td>
                  <td>
                    {ageGroups.reduce((sum, ageGroup) => sum + getCountsForAgeGroup(ageGroup).transgender, 0)}
                  </td>
                  <td>
                    {ageGroups.reduce((sum, ageGroup) => {
                      const counts = getCountsForAgeGroup(ageGroup);
                      return sum + counts.male + counts.female + counts.transgender;
                    }, 0)}
                    <br />(100 %)
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>



      <div className='row' style={{ paddingTop: '10px', marginLeft: '0.5px', marginRight: '05px', backgroundColor: '#d5e3e3', border: '2px solid #dee2e6' }}>
        {/* <div className='row justify-center fw-semibold fs-4 '>Gender-wise categorized PwDs</div> */}
        <SectionHeader title="Gender-wise categorized PwDs" />
        <div className="col-lg-6 col-md-6 py-2">
          <div className="card">
            <div className="card-body1">
              <h5 className="text-center mt-3">Category-wise PwDs</h5>
              <Bar data={categoryData} options={categoryOptions} />
            </div>
          </div>
        </div>


        <div className="col-lg-6 col-md-6 py-2">
          <div style={{ height: '335px', overflowY: 'auto', borderRadius: '7px', border: '1px solid #dee2e6', backgroundColor: "white" }}> {/* Set height, enable vertical scrolling, and add border */}
            <table className="table table-bordered table-hover table-sm text-center" style={{ borderCollapse: 'collapse', width: '100%' }}>
              <thead className="table-primary" style={{ position: 'sticky', top: 0, zIndex: 2, borderBottom: '2px solid #dee2e6' }}> {/* Sticky header with background color */}
                <tr>
                  <th rowSpan="2" style={{ verticalAlign: 'middle' }}>Sr. No.</th>
                  <th rowSpan="2" style={{ verticalAlign: 'middle' }}>Disability Category</th>
                  <th colSpan="4">Gender</th>
                </tr>
                <tr>
                  <th>Female</th>
                  <th>Male</th>
                  <th>Transgender</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {disabilityTypes.map((disabilityType, index) => {
                  const counts = getCountsFordisabilityType(disabilityType);
                  const total = counts.male + counts.female + counts.transgender;
                  const percentage = total > 0 ? ((total / totalSurveys) * 100).toFixed(2) : '0.00';

                  return (
                    <tr key={index}>
                      <td>{index + 1}.</td>
                      <td>{removeDisabilityWord(disabilityType)}</td>
                      <td>{counts.female}</td>
                      <td>{counts.male}</td>
                      <td>{counts.transgender}</td>
                      <td>{total} <br />({percentage}%)</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <div className='row' style={{ paddingTop: '10px', marginLeft: '0.5px', marginRight: '05px', backgroundColor: '#d5e3e3', border: '2px solid #dee2e6' }}>
        {/* <div className='row justify-center fw-semibold fs-4 '> Age Group-wise categorized PwDs</div> */}
        <SectionHeader title="Age Group-wise categorized PwDs" />
        <div className="col-lg-6 col-md-6 py-2">
          <div className="card">
            <div className="card-body1">
              <h5 className="text-center mt-3">Age Group-wise Disability Categories</h5>
              <Bar data={ageGroupData} options={ageGroupOptions} />
            </div>
          </div>
        </div>


        <div className="col-lg-6 col-md-6 py-2">
          <div style={{ height: '335px', overflowY: 'auto', borderRadius: '7px', border: '1px solid #dee2e6', backgroundColor: "white" }}> {/* Set height, enable vertical scrolling, and add border */}
            <table className="table-responsive table-bordered text-center table-hover table-sm" style={{ borderCollapse: 'collapse', width: '100%' }}>
              <thead style={{ position: 'sticky', top: 0, zIndex: 2, backgroundColor: '#CFE2FF', border: '1px solid #999999' }}> {/* Sticky header with background color */}
                <tr>
                  <th rowSpan="2" style={{ verticalAlign: 'middle' }}>Disability Category</th>
                  <th colSpan="8" className="text-center">Age Groups (in yrs)</th>
                </tr>
                <tr>
                  <th className="min-width-th">0-6</th>
                  <th className="min-width-th">7-14</th>
                  <th className="min-width-th">15-20</th>
                  <th className="min-width-th">21-30</th>
                  <th className="min-width-th">31-40</th>
                  <th className="min-width-th">41-60</th>
                  <th className="min-width-th">61-70</th>
                  <th className="min-width-th">71 & above</th>
                </tr>
              </thead>
              <tbody>
                {disabilityTypes.map((disabilityType, index) => {
                  const counts = getCountsAgeGroupdisabilityType(disabilityType);
                  return (
                    <tr key={index}>
                      {/* <td>{index + 1}.</td> */}
                      <td>{removeDisabilityWord(disabilityType)}</td>
                      <td>{counts.year1}</td>
                      <td>{counts.year2}</td>
                      <td>{counts.year3}</td>
                      <td>{counts.year4}</td>
                      <td>{counts.year5}</td>
                      <td>{counts.year6}</td>
                      <td>{counts.year7}</td>
                      <td>{counts.year8}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="fw-bold">
                  <td>Total</td>
                  <td>
                    {disabilityTypes.reduce((sum, disabilityTypes) => sum + getCountsAgeGroupdisabilityType(disabilityTypes).year1, 0)}
                  </td>
                  <td>
                    {disabilityTypes.reduce((sum, disabilityTypes) => sum + getCountsAgeGroupdisabilityType(disabilityTypes).year2, 0)}
                  </td>
                  <td>
                    {disabilityTypes.reduce((sum, disabilityTypes) => sum + getCountsAgeGroupdisabilityType(disabilityTypes).year3, 0)}
                  </td>
                  <td>
                    {disabilityTypes.reduce((sum, disabilityTypes) => sum + getCountsAgeGroupdisabilityType(disabilityTypes).year4, 0)}
                  </td>
                  <td>
                    {disabilityTypes.reduce((sum, disabilityTypes) => sum + getCountsAgeGroupdisabilityType(disabilityTypes).year5, 0)}
                  </td>
                  <td>
                    {disabilityTypes.reduce((sum, disabilityTypes) => sum + getCountsAgeGroupdisabilityType(disabilityTypes).year6, 0)}
                  </td>
                  <td>
                    {disabilityTypes.reduce((sum, disabilityTypes) => sum + getCountsAgeGroupdisabilityType(disabilityTypes).year7, 0)}
                  </td>
                  <td>
                    {disabilityTypes.reduce((sum, disabilityTypes) => sum + getCountsAgeGroupdisabilityType(disabilityTypes).year8, 0)}
                  </td>
                </tr>
                <tr className="fw-bold">
                  <td>
                    % out of total {totall} PwDs
                  </td>
                  <td>
                    {((disabilityTypes.reduce((sum, disabilityType) => sum + getCountsAgeGroupdisabilityType(disabilityType).year1, 0) / totall) * 100).toFixed(2)}%
                  </td>
                  <td>
                    {((disabilityTypes.reduce((sum, disabilityType) => sum + getCountsAgeGroupdisabilityType(disabilityType).year2, 0) / totall) * 100).toFixed(2)}%
                  </td>
                  <td>
                    {((disabilityTypes.reduce((sum, disabilityType) => sum + getCountsAgeGroupdisabilityType(disabilityType).year3, 0) / totall) * 100).toFixed(2)}%
                  </td>
                  <td>
                    {((disabilityTypes.reduce((sum, disabilityType) => sum + getCountsAgeGroupdisabilityType(disabilityType).year4, 0) / totall) * 100).toFixed(2)}%
                  </td>
                  <td>
                    {((disabilityTypes.reduce((sum, disabilityType) => sum + getCountsAgeGroupdisabilityType(disabilityType).year5, 0) / totall) * 100).toFixed(2)}%
                  </td>
                  <td>
                    {((disabilityTypes.reduce((sum, disabilityType) => sum + getCountsAgeGroupdisabilityType(disabilityType).year6, 0) / totall) * 100).toFixed(2)}%
                  </td>
                  <td>
                    {((disabilityTypes.reduce((sum, disabilityType) => sum + getCountsAgeGroupdisabilityType(disabilityType).year7, 0) / totall) * 100).toFixed(2)}%
                  </td>
                  <td>
                    {((disabilityTypes.reduce((sum, disabilityType) => sum + getCountsAgeGroupdisabilityType(disabilityType).year8, 0) / totall) * 100).toFixed(2)}%
                  </td>
                </tr>

              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Dashboard;
