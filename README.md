### Basic-typescript

## This is an introduction task  to strict typeing of javascript, types were utilized here and partial  utility was used to aid in the filtering of the Data/.

# Person Filter Utility
This utility provides a function to filter an array of Person objects (User or Admin) based on a specified personType and a criteria object. The criteria object allows filtering by properties of the User or Admin type, excluding the type property.

----
# Types
`User`
Represents a user with the following properties:

- type: "user" (literal type)

- name: string

- age: number

- role: string

`Admin`
Represents an admin with the following properties:

type: "admin" (literal type)

- name: string

- age: number

- role: string

  ----

# Function
`filterPersons`
Filters an array of `Person` objects based on the specified `personType` and `criteria`.

# Parameters
- `persons`: An array of `Person` objects to filter.

- `personType`: The type of person to filter (`"user"` or `"admin"`).

- `criteria`: A partial object of either `User` or `Admin` (excluding the type property) used to filter the results.

# Returns
- An array of filtered User or Admin objects, depending on the personType.
