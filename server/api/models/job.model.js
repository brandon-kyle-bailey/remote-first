const { mongo } = require("mongoose");
const { mongoose } = require("./database.models");

module.exports = mongoose => {
    const Job = mongoose.model(
        'Job',
        mongoose.Schema(
            {
                imgUrl: {type: String, required:true},
                position: {type: String, required:true},
                company: {type: String, required:true},
                description: {type: String, required:true},
                salary: {type: Number, required:true},
                tags: [{type: String, required:true}],
                location: {type: String, required:true},
            },
            {timestamps: true}
        ));
    return Job;
};