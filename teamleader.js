function createUser() {
    const username = prompt('Enter username (must end with @sara)');
    const password = prompt('Enter password');
    const designation = prompt('Enter user designation');
    const sheetUrl = prompt('Enter sheet URL');
    alert(`User created with username: ${username}`);
  }
  
  function modifyUser() {
    const username = prompt('Enter username to modify');
    alert(`User ${username} modified`);
  }
  
  function deleteUser() {
    const username = prompt('Enter username to delete');
    alert(`User ${username} deleted`);
  }
  
  function checkStaffWorks() {
    window.open('https://docs.google.com/spreadsheets/d/1rF90cYx3MrENZ21Okodi2EVYRCIrFNcgyIrmZim_JoE/edit?gid=269531874#gid=269531874', '_blank');
  }
  
  function openCRM() {
    window.open('https://manage.wix.com/dashboard/bf8cff25-963b-4004-b384-3a7e2a1e56ff/home?referralInfo=sidebar', '_blank');
  }
  
  function updateDailyWorks() {
    window.open('https://forms.wix.com/r/7243823598014562873', '_blank');
  }
  
  function audit() {
    window.open('https://forms.wix.com/r/7243490065991598202', '_blank');
  }
  
  function eod() {
    window.open('https://forms.wix.com/r/7243493734644449582', '_blank');
  }
  