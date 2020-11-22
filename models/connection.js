var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://admin:mongopsw@portfolio-bdd.jiqpq.mongodb.net/portfolio?retryWrites=true&w=majority',
    options,
    function(err){
        console.log(err);
    }
)

var projectSchema = mongoose.Schema({
    title: String,
    type: String,
    year: Number,
    languages:[String],
    videoUrl: String,
    labelButton: String,
    codeUrl: String,
    coverUrl: String,
    description: String,
    skills:[String]
})

var projectModel = mongoose.model("projects", projectSchema);

module.exports = projectModel;

