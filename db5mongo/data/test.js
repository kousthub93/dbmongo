require('./db')();
const universityDao = require('./daos/university.dao.server');
const dataSet = require('../data/dataset').fullDataSet;

universityDao.truncateDatabase()
    .then(() => {
        universityDao.populateDatabase()
            .then(() => {

            })
    })



/*universityDao.populateDatabase()
    .then(() => {

    });*/

// TEST1

//


