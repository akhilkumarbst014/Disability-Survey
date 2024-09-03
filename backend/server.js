const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

// SignUp User
app.post('/api/register', (req, res) => {
  const { Username, Password, Mobile } = req.body;

  const sql = 'INSERT INTO register (Username, Password, Mobile) VALUES (?, ?, ?)';
  db.query(sql, [Username, Password, Mobile], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({ message: 'User Signup successfully' });
  });
});

// Get user signup details
app.get('/api/register', (req, res) => {
  const sql = 'SELECT * FROM register';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send(results);
  });
});

// Get user signup details by id
app.get('/api/register/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM register WHERE id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('No user found.');
    }
    res.status(200).send(results[0]);
  });
});

// Submit survey form
app.post('/api/survey_form', (req, res) => {
  const {
    name, fatherName, motherName, gender, maritalStatus, category, dob, ageGroup,
    area, houseNo, villageOrCity, taluka, district, mobileNo, pinCode,
    eduQualification, physicalHandicapped, disabilityType, boardTypeDisability,
    disabilityPercentage, disabilityCertificate, helpReceived, careGiver, otherCareGiver
  } = req.body;

  const sql = `
    INSERT INTO survey_form (
      name, fatherName, motherName, gender, maritalStatus, category, dob, ageGroup,
      area, houseNo, villageOrCity, taluka, district, mobileNo, pinCode,
      eduQualification, physicalHandicapped, disabilityType, boardTypeDisability,
      disabilityPercentage, disabilityCertificate, helpReceived, careGiver, otherCareGiver
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [
    name, fatherName, motherName, gender, maritalStatus, category, dob, ageGroup,
    area, houseNo, villageOrCity, taluka, district, mobileNo, pinCode,
    eduQualification, physicalHandicapped, disabilityType, boardTypeDisability,
    disabilityPercentage, disabilityCertificate, helpReceived, careGiver, otherCareGiver
  ], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({ message: 'Survey form submitted successfully' });
  });
});

// Get all survey forms, gender counts, and gender counts by age group
app.get('/api/survey_form', (req, res) => {
  // Query to get all survey forms
  const sql1 = 'SELECT * FROM survey_form ORDER BY id';

  // Query to get gender counts
  const sql2 = `
    SELECT gender, COUNT(*) AS count
    FROM survey_form
    GROUP BY gender
  `;

  // Query to get gender counts based on age group
  const sql3 = `
    SELECT ageGroup, gender, COUNT(*) AS count
    FROM survey_form
    GROUP BY ageGroup, gender
  `;

  // Query to get gender counts based on disability type
  const sql4 = `
    SELECT disabilityType, gender, COUNT(*) AS count
    FROM survey_form
    GROUP BY disabilityType, gender
  `;

  const sql5 = `
    SELECT disabilityType, ageGroup, COUNT(*) AS count
    FROM survey_form
    GROUP BY disabilityType, ageGroup
  `;


  // Execute all queries in parallel
  db.query(sql1, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }

    db.query(sql2, (err, countResults) => {
      if (err) {
        return res.status(500).send(err);
      }

      db.query(sql3, (err, ageGroupResults) => {
        if (err) {
          return res.status(500).send(err);
        }

        db.query(sql4, (err, disabilityResults) => {
          if (err) {
            return res.status(500).send(err);
          }

          db.query(sql5, (err, disabilityAgeGroup) => {
            if (err) {
              return res.status(500).send(err);
            }

            // Prepare gender counts
            const genderCounts = {
              male: 0,
              female: 0,
              transgender: 0
            };

            countResults.forEach(row => {
              if (row.gender.toLowerCase() === 'male') {
                genderCounts.male = row.count;
              } else if (row.gender.toLowerCase() === 'female') {
                genderCounts.female = row.count;
              } else if (row.gender.toLowerCase() === 'transgender') {
                genderCounts.transgender = row.count;
              }
            });

            // Prepare age group gender counts
            const ageGroupGenderCounts = {};

            ageGroupResults.forEach(row => {
              const { ageGroup, gender, count } = row;

              if (!ageGroupGenderCounts[ageGroup]) {
                ageGroupGenderCounts[ageGroup] = {
                  male: 0,
                  female: 0,
                  transgender: 0
                };
              }

              if (gender.toLowerCase() === 'male') {
                ageGroupGenderCounts[ageGroup].male = count;
              } else if (gender.toLowerCase() === 'female') {
                ageGroupGenderCounts[ageGroup].female = count;
              } else if (gender.toLowerCase() === 'transgender') {
                ageGroupGenderCounts[ageGroup].transgender = count;
              }
            });

            // Prepare disability category gender counts
            const disabilityGenderCounts = {};

            disabilityResults.forEach(row => {
              const { disabilityType, gender, count } = row;

              if (!disabilityGenderCounts[disabilityType]) {
                disabilityGenderCounts[disabilityType] = {
                  male: 0,
                  female: 0,
                  transgender: 0
                };
              }

              if (gender.toLowerCase() === 'male') {
                disabilityGenderCounts[disabilityType].male = count;
              } else if (gender.toLowerCase() === 'female') {
                disabilityGenderCounts[disabilityType].female = count;
              } else if (gender.toLowerCase() === 'transgender') {
                disabilityGenderCounts[disabilityType].transgender = count;
              }
            });

            // Prepare disability category gender counts
            const disabilityAgeGroupCounts = {};

            disabilityAgeGroup.forEach(row => {
              const { disabilityType, ageGroup, count } = row;

              if (!disabilityAgeGroupCounts[disabilityType]) {
                disabilityAgeGroupCounts[disabilityType] = {
                  year1: 0,
                  year2: 0,
                  year3: 0,
                  year4: 0,
                  year5: 0,
                  year6: 0,
                  year7: 0,
                  year8: 0
                };
              }

              if (ageGroup === '0-6 Year') {
                disabilityAgeGroupCounts[disabilityType].year1 = count;
              } else if (ageGroup === '7-14 Year') {
                disabilityAgeGroupCounts[disabilityType].year2 = count;
              } else if (ageGroup === '15-20 Year') {
                disabilityAgeGroupCounts[disabilityType].year3 = count;
              } else if (ageGroup === '21-30 Year') {
                disabilityAgeGroupCounts[disabilityType].year4 = count;
              } else if (ageGroup === '31-40 Year') {
                disabilityAgeGroupCounts[disabilityType].year5 = count;
              } else if (ageGroup === '41-60 Year') {
                disabilityAgeGroupCounts[disabilityType].year6 = count;
              } else if (ageGroup === '61-70 Year') {
                disabilityAgeGroupCounts[disabilityType].year7 = count;
              } else if (ageGroup === '70&above Year') {
                disabilityAgeGroupCounts[disabilityType].year8 = count;
              }
            });

            // Send the combined response
            res.status(200).json({
              total: results.length,
              genderCounts: genderCounts,
              ageGroupGenderCounts: ageGroupGenderCounts,
              disabilityGenderCounts: disabilityGenderCounts,
              disabilityAgeGroupCounts: disabilityAgeGroupCounts
            });
          });
        });
      });
    });
  });
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});