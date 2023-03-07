// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateCards = require('./src/generatePage');

// Prompt user to add manager
const addManager = async (teamArray) => {
  console.log(`
==================
Add a Team Manager
==================
  `);

  const managerData = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the team manager?',
      validate: managerName => {
        if (managerName) {
          return true;
        } else {
          console.log('Please enter a name!');
        }
      },
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the team manager's ID number.",
      validate: managerId => {
        if (managerId) {
          return true;
        } else {
          console.log('Please enter a valid ID number!');
        }
      },
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the e-mail address of the team manager.',
      validate: managerEmail => {
        if (managerEmail) {
          return true;
        } else {
          console.log('Please enter an e-mail address!');
        }
      },
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter the team manager's office number.",
      validate: managerOfficeNumber => {
        if (managerOfficeNumber) {
          return true;
        } else {
          console.log('Please enter a valid number!');
        }
      },
    },
  ]);

  const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
  teamArray.push(manager);
};

// Prompt user to add an employee
const addEmployee = async (teamArray) => {
  console.log(`
=================
Add a Team Member
=================
  `);

  const employeeData = await inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Would you like to add a team member?',
      choices: ['Engineer', 'Intern', 'Please Finish Building Team'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the employee?',
      when: choice => choice.role !== 'Please Finish Building Team',
      validate: employeeName => {
        if (employeeName) {
          return true;
        } else {
          console.log('Please enter a name!');
        }
      },
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the employee's ID number.",
      when: choice => choice.role !== 'Please Finish Building Team',
      validate: employeeId => {
        if (employeeId) {
          return true;
        } else {
          console.log('Please enter a valid ID number!');
        }
      },
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the e-mail address of the employee.',
      when: choice => choice.role !== 'Please Finish Building Team',
      validate: employeeEmail => {
        if (employeeEmail) {
          return true;
        } else {
          console.log('Please enter an e-mail address!');
        }
      },
    },
    {
      type: 'input',
      name: 'github',
      message: "Please enter the employee's GitHub username.",
      when: choice => choice.role === 'Engineer',
      validate: engineerGithub => {
      if (engineerGithub) {
      return true;
      } else {
      console.log('Please enter a valid GitHub username!');
      }
      },
      },
      {
      type: 'input',
      name: 'school',
      message: "Please enter the intern's school name.",
      when: choice => choice.role === 'Intern',
      validate: internSchool => {
      if (internSchool) {
      return true;
      } else {
      console.log('Please enter a valid school name!');
      }
      },
      },
      ]);
      
      if (employeeData.role === 'Engineer') {
      const engineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github);
      teamArray.push(engineer);
      } else if (employeeData.role === 'Intern') {
      const intern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school);
      teamArray.push(intern);
      } else {
      // Generate HTML file
      const pageHTML = generateCards(teamArray);
      fs.writeFile('./dist/index.html', pageHTML, err => {
      if (err) throw err;
      console.log('Team page created! Check out index.html in the dist directory to see it!');
      });
      }
      };
      
      // Create function to initialize the app
      const init = async () => {
      const teamArray = [];
      await addManager(teamArray);
      let finished = false;
      while (!finished) {
      await addEmployee(teamArray);
      }
      };
      
      // Call function to initialize the app
      init();