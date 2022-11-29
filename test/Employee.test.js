const Employee = require('../lib/Employee');
const employee = new Employee(
  'TestEmployee',
  1,
  'testing@gmail.com',
  'Engineer'
);

test('Information from getName method making sure its a string', () => {
  expect(employee.getName()).toBe('TestEmployee');
});

test('Information from getId method', () => {
  expect(employee.getId()).toBe(1);
});

test('Information from getEmail method', () => {
  expect(employee.getEmail()).toBe('testing@gmail.com');
});
