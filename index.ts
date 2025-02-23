// type User = {
//     type: "user";
//     name: string;
//     age: number;
//     role: string;
// };

// type Admin = {
//     type: "admin";
//     name: string;
//     age: number;
//     role: string;
// };

// type Person = User | Admin;

// const persons: Person[] = [
//     { type: 'user', name: 'Uche', age: 30, role: 'Media' },
//     { type: 'admin', name: 'Franklin', age: 26, role: 'Teacher' },
//     { type: 'user', name: 'Timini', age: 33, role: 'Actor' },
//     { type: 'admin', name: 'Joan', age: 24, role: 'banker' },
// ];

// function filterPersons<T extends 'user' | 'admin'>(
//     persons: Person[],
//     personType: T,
//     criteria: Partial<Omit<T extends 'user' ? User : Admin, 'type'>>
// ): (T extends 'user' ? User : Admin)[] {
//     return persons
//         .filter((person): person is T extends 'user' ? User : Admin => 
//             person.type === personType
//         )
//         .filter(person => {
//             for (const [key, value] of Object.entries(criteria)) {
//                 if (person[key as keyof typeof person] !== value) {
//                     return false;
//                 }
//             }
//             return true;
//         });
// }


// const filteredUsers = filterPersons(persons, 'user', { name: 'Uche' });
// console.log(filteredUsers);

// const filteredAdmins = filterPersons(persons, 'admin', { age: 26 });
// console.log(filteredAdmins); 

type User = {
    type: "user";
    name: string;
    age: number;
    role: string;
};

type Admin = {
    type: "admin";
    name: string;
    age: number;
    role: string;
};

type Person = User | Admin;

const persons: Person[] = [
    { type: "user", name: "Uche", age: 30, role: "Media" },
    { type: "admin", name: "Franklin", age: 26, role: "Teacher" },
    { type: "user", name: "Timini", age: 33, role: "Actor" },
    { type: "admin", name: "Joan", age: 24, role: "Banker" },
];


type Criteria<T> = Partial<Omit<T, "type">>;

function filterPersons<T extends "user" | "admin">(
    personType: T,
    criteria: Criteria<T extends "user" ? User : Admin>
): (T extends "user" ? User : Admin)[] {
    return persons
        .filter((person): person is T extends "user" ? User : Admin => person.type === personType)
        .filter(person => {
            return Object.entries(criteria).every(([key, value]) => {
                return (person as any)[key] === value;
            });
        }) as (T extends "user" ? User : Admin)[];
}

const filteredUsers = filterPersons("user", { name: "Uche" });
console.log(filteredUsers);

const filteredAdmins = filterPersons("admin", { age: 26 });
console.log(filteredAdmins);
