import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,

    age: {
        type: Number,
        validate: {
            validator: v => v > 18,
            message: props => `Age less than 18 are not allowed. You age is ${props.value}.`
        }
    },

    // email: String -> if you need to validate - use object instead of just type 
    email: {
        type: String,
        required: true,
        lowercase: true,
        match: /.+\@.+\..+/,
    },

    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },

    updatedAt: {
        type: Date,
        default: () => Date.now()
    },

    bestFriend: mongoose.SchemaTypes.ObjectId,

    hobbies: [String],

    address: {
        houseNumber: String,
        street: String,
        city: String,
        Country: String
    }
});

export default mongoose.model("person", userSchema);