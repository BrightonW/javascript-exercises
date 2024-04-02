const findTheOldest = function(people) {
    let oldest = 0, pos = 0, year = 2024
    for (let i = 0; i < people.length; i++){
        if (!people[i].yearOfDeath) people[i].yearOfDeath = year;

        let age = people[i].yearOfDeath - people[i].yearOfBirth
        if (age > oldest) pos = i, oldest = age;
    }
    return people[pos]
};

// Do not edit below this line
module.exports = findTheOldest;
