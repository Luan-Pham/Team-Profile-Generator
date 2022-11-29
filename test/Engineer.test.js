const Engineer = require('../lib/Engineer');
const engineer = new Engineer(
  'Luan',
  123,
  'testengineer@gmail.com',
  'github.com/Luan-Pham'
);

test('Information for constructor object', () => {
  expect(engineer.name).toBe('Luan');
  expect(engineer.id).toBe(123);
  expect(engineer.email).toBe('testengineer@gmail.com');
  expect(engineer.github).toBe('github.com/Luan-Pham');
});

test('Information from getName method', () => {
  expect(engineer.getName()).toBe('Luan');
});

test('Information from getId method', () => {
  expect(engineer.getId()).toEqual(123);
});

test('Information from getemail method', () => {
  expect(engineer.getEmail()).toEqual('testengineer@gmail.com');
});

test('Information from github method', () => {
  expect(engineer.getGithub()).toEqual('github.com/Luan-Pham');
});
