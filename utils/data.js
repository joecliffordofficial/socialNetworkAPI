const users = [
    {
        username: 'Joseph Clifford',
        email: 'joe@cliff.com'
    }
]

const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman', 
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
];

const thoughts = [ 
    "I like cheese",
    "ice cream is amazing!",
    "coding is hard but fun",
    "spiderman is overrated",
    'star wars is the best movie franchise ever',
    'WWII was intense!',
    'another day another dollar',
    "I'm moving to mars with elon",
    'teslas are totally worth it',
    'the beatles are the best band ever created',
    'mac miller was the greatest artist of the 2000s'
];

// Random array item

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Random full name

const getRandomName = () => {
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`
};

// Generate random assignments for object

const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < array.length; i++) {
        results.push({
            thoughtName: getRandomArrItem(thoughts)
        })
        
    }
    return results;
};


module.exports = { getRandomName, getRandomThought };

