const mongoose = require("mongoose");
const { Schema, model, connect } = require("mongoose");

connect('put-mongoDB-URI-HERE', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    // Change your schema if this is the schema you don't want to console log
    const loginSchema = new Schema({
        username: { type: String },
        password: { type: String }
    });
    
    const login = model("Login", loginSchema);
    
    const fL1 = await login.count();
    
    console.log(`Login length: ${fL1}`);

    await mongoose.connection.close();
    process.exit();
}).catch((error) => {
    console.log(error);
});
