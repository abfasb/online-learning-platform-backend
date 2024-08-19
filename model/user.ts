const mongoose = require('mongoose');

const fieldChoiceSchema = mongoose.model({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        default: () => new mongoose.Schema.ObjectId 
    },
    fieldChoice: {
        type: String,
        required: true
    }
})

const UserSchema = mongoose.Schema({
    auth0Id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: false
    },
    fieldChoices: [fieldChoiceSchema]
})

const User = mongoose.model("User", UserSchema);

export default User;