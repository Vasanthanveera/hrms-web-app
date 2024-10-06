// Handle login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === 'admin@sara' && password === 'Admin@sara') {
      window.location.href = 'admin-dashboard.html';  // Redirect to admin dashboard
    } else if (email.endsWith('tl@sara') && password !== '') {
      window.location.href = 'team-leader-dashboard.html';  // Redirect to team leader dashboard
    } else {
      alert('Invalid login credentials');
    }
  });
  