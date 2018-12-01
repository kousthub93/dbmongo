require('./db')();
const universityDao = require('./daos/university.dao.server');
const dataSet = require('../data/dataset').fullDataSet;

universityDao.populateDatabase();



/*universityDao.populateDatabase()
    .then(() => {

    });*/

// TEST1

//


