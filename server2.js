const express = require('express');
const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('donate', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

//test connection
// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

//create a user model
const T_Shirt = sequelize.define('T_Shirt', {
    // attributes
    band: {
        type: Sequelize.STRING,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING
            // allowNull defaults to true
    },
    size: {
        type: Sequelize.STRING

    }
}, {});
////////////////////
const pants = sequelize.define('pants', {
    // attributes
    band: {
        type: Sequelize.STRING,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING
            // allowNull defaults to true
    },
    size: {
        type: Sequelize.STRING

    }
}, {});
//////////////
const shoes = sequelize.define('shoes', {
    // attributes
    band: {
        type: Sequelize.STRING,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING
            // allowNull defaults to true
    },
    size: {
        type: Sequelize.STRING

    }
}, {});



//Synchronizing the model with the database for T_Shirt
T_Shirt.sync({ force: true }).then(() => {
    T_Shirt.create({
        band: 'polo',
        color: 'red',
        size: '15'
    })
});
//Synchronizing the model with the database for pants
pants.sync({ force: true }).then(() => {
    pants.create({
        band: 'CK',
        color: 'Yellow',
        size: '45'
    })
});

//Synchronizing the model with the database for shoe
pants.sync({ force: true }).then(() => {
    pants.create({
        band: 'Adidas',
        color: 'Blue',
        size: '10'
    })
});