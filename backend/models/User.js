let mongoose = require('mongoose');
let bcrypt = require('bcrypt-nodejs');

let userSchema = new mongoose.Schema({

    // user type
    user_type: {
        type: Number,
        required: true
    },

    // name field
    name: {
        type: String,
        required: true
    },

    // username field
    username: {
        type: String,
        required: true
    },

    // password field
    password: {
        type: String,
        required: true
    },

    // email field
    email: {
        type: String,
        required: true
    },

    // image field
    image: {
        type: String,
        required: false
    },

    // status field
    status: {
        type: Number,
        default: 1
    },

    // created_at fields
    created_at: {
        type: Date,
        default: new Date()
    },

    // updated_at field
    updated_at: {
        type: Date,
        default: new Date()
    }
});

// genertaing hash for the password entered
userSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

// checking if the password is valid
userSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

let User = mongoose.model('User', userSchema);
exports.User = User;
