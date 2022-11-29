const Intern = require('../lib/Intern');
const intern = new Intern('Intern', 2, 'Intern@gmail.com', 'UCB');

test('Information for constructor object', () => {
  expect(intern.name).toBe('Intern');
  expect(intern.id).toBe(2);
  expect(intern.email).toBe('Intern@gmail.com');
  expect(intern.school).toBe('UCB');
});

test('Information from getName method', () => {
  expect(intern.getName()).toBe('Intern');
});

test('Information from getId method', () => {
  expect(intern.getId()).toBe(2);
});

test('Information from getemail method', () => {
  expect(intern.getEmail()).toBe('Intern@gmail.com');
});

test('Information from school method', () => {
  expect(intern.getSchool()).toBe('UCB');
});
