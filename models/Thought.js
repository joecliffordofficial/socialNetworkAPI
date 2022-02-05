const { Schema, Types, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        username: {
            type: String,
            required: true,
            ref: 'user'
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

const Thought = model('thought', thoughtSchema);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})


module.exports = Thought;