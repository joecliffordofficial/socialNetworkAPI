const { Schema, model, Types } = require('mongoose');
const moment = require ('moment');

// Reaction Schema

const ReactionsSchema = new Schema({
    // Custom ID
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        reqired: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYY [at] hh:mm a')
    },
    toJSON: {
        getters: true
    }
});



// Thoughts Schema

const ThoughtsSchema = new Schema ({
    thoughtText: {
        type: String, 
        required: true, 
        minlength: 1, 
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,

        // Moment

        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYY [at] hh:mm a')
    },
    username: {
        type: String, 
        required: true
    },

    reactions: [ReactionsSchema],

    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// Reaction Counter

ThoughtsSchema.virtual('reationCount').get(function() {
    return this.reactions.length;
});

// Thoughts Model

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;