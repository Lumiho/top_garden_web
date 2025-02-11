const express = require('express');
const router = express.Router();

const reviews = [
    {
        id: 1,
        name: 'Grant & Laurie Jones',
        description: 'Landscaping and Lighting, October 2024',
        review: 'It went very well. The guys were curtious, efficient and extremely hard working.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Sally Verdin',
        description: 'Landscaping, May 2023',
        review: 'It went well. Job was completed as per the contract. Mr. Zavala and his crew were prompt, polite and overall I was pleased with their work.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Barbara Hempstead',
        description: 'Lawn & Yard Work, Lawn Irrigation, December 2022',
        review: 'So appreciate the help this commpany gave repairing our sprinklers! Love spending time in our yard after they have made it so beautiful.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Lubnar Khan',
        description: 'Lawn & Yard Work',
        review: 'David recently started maintaining our lawn and it looks great. He does quality work and is fairly priced.',
        rating: 5,
    },
    {
        id: 5,
        name: 'Cynthia King',
        description: 'Lawn Irrigation, November 2022',
        review: 'David was very quick to respond. He was professional and got the job done quickly. He came prepared with everything that was needed. I will definitely come back again.',
        rating: 5,
    },
    {
        id: 6,
        name: 'Silvia Fry',
        description: 'Lawn & Yard Work, November 2022',
        review: 'Very professional. Good at estimates, following on what was agreed upon. Consistent, proffesional and great communication skills. Very accommodating and attentive to details. Very happy with the service so far. It has been 3 months and my yard finally looks great. I have 1 acre and David is really good at caring for the entire property. I really recommend his service.',
        rating: 5,
    },
    {
        id: 7,
        name: 'John Murphy',
        description: 'Sprinkler Replacement, October 2022',
        review: 'David go to my house on time, was a professional. He explained everything that he would do and gave a reasonable price to get the work done. And for his good customer service I also consider him doing all my maintenance of my whole yard because of it. If you need any work done to your yard, I highly suggest him. Thank you for solving all my yard issues David and appreciate the professionalism.',
        rating: 5,
    },
    {
        id: 8,
        name: 'Terri Vanderheiden',
        description: 'Lawn Service, October 2022',
        review: 'I highly recommend this business they are all very nice and do a great job when they come every week.',
        rating: 5,
    },
    {
        id: 9,
        name: 'Jacquie Cunningham',
        description: 'Landscaping & Yard Maintenance, October 2022',
        review: 'David and his team are amazing! I never have to worry, they are consistent, respectful, and always do a great job. David has helped me repair sprinklers and has gone out of his way to fix my fountain for me. I highly recommend his services.',
        rating: 5,
    },
    {
        id: 10,
        name: 'Bill Jeffery',
        description: 'Landscaping, October 2022',
        review: 'David has performed landscaping service for us for over a year and we are completely satisfied with everything he has done on our 3.5+ acre property. His work has ranged from routing (mowing, weeding, soil ammendments, and cleanup) to more extensive and creative (building raised beds, installing extensive drip irrigation systems, planting about 50 stone fruit and citrus trees) and he always exceeds our expectations. He works quickly but at a high level of quality and always leaves the worksite neat and clean. He follows instructions well but also does the same high quality work when he is working independently with little/no supervision. He has our commplete trust and confidence and receives our highest endorsement.',
        rating: 5,
    },
];
// Get reviews
router.get('/', (req, res) => {
    console.log('Reviews route hit')
    res.json(reviews);
});

module.exports = router;