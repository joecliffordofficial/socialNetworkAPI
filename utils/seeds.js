const connection = require('../config/connection')
const { User, Thought } = require('../models')


// Connect to mongodb
connection.once('open', async () => {
    // Deletes entries in collection
    await User.deleteMany({})
    await Thought.deleteMany({})

    // Populate user collection

    const users = [
        {
            username: 'Kevin',
            email: 'kev@kev.com'
        },
        {
            username: 'Joseph',
            email: 'joseph@joseph.com'
        }
    ]


    const thoughts = [
        {
            thoughtText: 'I havent slept for four days! I think I might be dead',
            username: 'Joseph'
        },
        {
            thoughtText: 'I am dead, at least I think I am',
            username: 'Kevin'
        }
    ]


    await User.collection.insertMany(users)

    await Thought.collection.insertMany(thoughts)


    console.table(users)
    console.table(thoughts)
    process.exit()
})