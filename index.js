var persons = [
    { type: 'user', name: 'Uche', age: 30, role: 'Media' },
    { type: 'admin', name: 'Franklin', age: 26, role: 'Teacher' },
    { type: 'user', name: 'Timini', age: 33, role: 'Actor' },
    { type: 'admin', name: 'Joan', age: 24, role: 'banker' },
];
function filterPersons(persons, personType, criteria) {
    return persons
        .filter(function (person) {
        return person.type === personType;
    })
        .filter(function (person) {
        for (var _i = 0, _a = Object.entries(criteria); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (person[key] !== value) {
                return false;
            }
        }
        return true;
    });
}
// Example usage:
var filteredUsers = filterPersons(persons, 'user', { name: 'Uche' });
console.log(filteredUsers); // [{ type: 'user', name: 'Uche', age: 30, role: 'Media' }]
var filteredAdmins = filterPersons(persons, 'admin', { age: 26 });
console.log(filteredAdmins); // [{ type: 'admin', name: 'Franklin', age: 26, role: 'Teacher' }]
