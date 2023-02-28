const Manager = require('../lib/Manager');

test('creates a manager object inherited from Employee', () => {
    const manager = new Manager('Keenan', 1, 'Keenan@domain.com', '904-831-6646');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));

    console.log(`Manager Name: ${manager.name}`);
    console.log(`Manager ID: ${manager.id}`);
    console.log(`Manager E-mail: ${manager.email}`);
});

test('creates an office number', () => {
    const manager = new Manager('Keenan', 2, 'Keenan@domain.com', '904-831-6646');

    expect(manager.officeNumber).toEqual(expect.any(String));
    console.log(`Office Number: ${manager.officeNumber}`);
});

test('creates a role of manager', () => {
    const manager = new Manager('Keenan', 2, 'Keenan@domain.com', '904-831-6646');

    expect(manager.getRole()).toBe('Manager');
});