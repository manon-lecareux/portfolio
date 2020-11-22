var express = require('express');
var router = express.Router();

var projectsFiltered;
var projectDetails;

/* INIT MONGO DB */
var projectModel = require('../models/connection');

/* GET home page. */
router.get('/', async function(req, res, next) {
  projectsFiltered = await projectModel.find();
  res.render('index',{projectsFiltered});
});

/* GET filters project */
router.get('/projects', async function(req, res, next) {
  var filter = req.query.filter;
  var resultFiltered = await projectModel.find({languages:filter});
  var allProjects = await projectModel.find();

  if (filter != "all"){
    projectsFiltered = resultFiltered;
  } else {
    projectsFiltered = allProjects;
  }

  res.json(projectsFiltered);

});

/* GET modal details */
router.get('/details', async function(req, res, next) {
  var searchId = req.query.idProject;

  projectDetails = await projectModel.find({_id:searchId});
  
  res.json(projectDetails);
});


module.exports = router;
