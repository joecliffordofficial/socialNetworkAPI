const { Schema, Types, model } = require('mongoose');
const { schema } = require('./Thought');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            required: true, 
            unique: true,
            match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, "Enter a valid Email"]
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'user'
        }]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

const User = model('user', userSchema);

userSchema.virtual('friendsCount').get(function() {
    return this.friends.length
});


module.exports = User;
