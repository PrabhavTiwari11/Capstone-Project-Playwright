function generateEmail() {
  return `prabhav${Date.now()}@test.com`;
}

function generateUser() {
  return {
    firstName: 'Prabhav',
    lastName: 'Tiwari',
    email: generateEmail(),
    password: 'Password123'
  };
}

module.exports = {
  generateEmail,
  generateUser
};