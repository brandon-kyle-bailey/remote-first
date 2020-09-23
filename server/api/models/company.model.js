const { mongo } = require("mongoose");
const { mongoose } = require("./database.models");

module.exports = mongoose => {
    const Company = mongoose.model(
        'Company',
        mongoose.Schema(
            {
                name: {type: String, required:true},
                email: {type: String, required:true},
                address: {type: String, required:true}
            },
            {timestamps: true}
        ));
    return Company;
};