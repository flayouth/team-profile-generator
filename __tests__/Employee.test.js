const Employee = require('../lib/Employee');


test('creates an employee object', () => {
    const employee = new Employee('Keenan', 1, 'Keenan@domain.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

    console.log(`Employee Name: ${employee.name}`);
    console.log(`Employee ID: ${employee.id}`);
    console.log(`Employee E-mail: ${employee.email}`);
});

test('gets employee name', () => {
    const employee = new Employee('Keenan', 1, 'Keenan@domain.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Employee('Keenan', 1, 'Keenan@domain.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Keenan', 1, 'Keenan@domain.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('creates a role of employee', () => {
    const employee = new Employee('Keenan', 1, 'Keenan@domain.com');

    expect(employee.getRole()).toBe('Employee');
}); 