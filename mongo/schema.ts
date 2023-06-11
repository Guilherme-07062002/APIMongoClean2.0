import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String
});

export const userModel = mongoose.model('Users', userSchema)