const Manager = require('../lib/Manager');
const manager = new Manager(
  'Managertest',
  1,
  'Managertest@gmail.com',
  2,
  'Manager'
);

test('Information for constructor object', () => {
  expect(manager.name).toBe('Managertest');
  expect(manager.id).toBe(1);
  expect(manager.email).toBe('Managertest@gmail.com');
  expect(manager.officeNumber).toBe(2);
});

test('Information from getName method', () => {
  expect(manager.getName()).toBe('Managertest');
});

test('Information from getId method', () => {
  expect(manager.getId()).toBe(1);
});

test('Information from getemail method', () => {
  expect(manager.getEmail()).toBe('Managertest@gmail.com');
});

test('Information from getofficeNumber method', () => {
  expect(manager.getOfficeNumber()).toBe(2);
});

test('Information from getrole method', () => {
  expect(manager.getRole()).toBe('Manager');
});
