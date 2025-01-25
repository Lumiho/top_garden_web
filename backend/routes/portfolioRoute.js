const express = require('express');
const router = express.Router();
//'../Media/irrigationImg.png'

const portfolio = [
    {
        id: 1,
        category: 'Landscaping',
        description: 'Beautiful landscaping projects to transform your outdoor spaces.',
        image: '../Media/pruning.jpeg', // Replace with actual images
    },
    {
        id: 2,
        category: 'Sod & Irrigation Installation',
        description: 'FIX DESCRIPTION ////Efficient irrigation systems for healthy gardens.',
        image: '../Media/irrigationImg.png', // Replace with actual images
    },
    {
        id: 3,
        category: 'Turf Repair & System Troubleshooting',
        description: ' DESCRIPTION',
        image: '../Media/irrigationImg.png', // Replace with actual images
    },
    {
        id: 4,
        category: 'Lawn Care, Yard Clean-Ups',
        description: 'Premium lawn care services for lush, green grass.',
        image: 'https://via.placeholder.com/300x200', // Replace with actual images
    },
    {
        id: 5,
        category: 'Junk/Trash/Debris Removal',
        description: 'DESCRIPTION',
        image: 'https://via.placeholder.com/300x200', // Replace with actual images
    },
    {
        id: 6,
        category: 'High-End Gardening',
        description: 'DESCRITPIONS',
        image: 'https://via.placeholder.com/300x200', // Replace with actual images
    },
];

router.get('/', (req, res) => {
    console.log('Portfolio route hit')
    res.json(portfolio);
});

module.exports = router;