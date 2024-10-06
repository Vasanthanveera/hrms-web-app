function createUser() {
    const username = prompt('Enter username (must end with tl@sara)');
    const password = prompt('Enter password');
    const designation = prompt('Enter user designation');
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
  