const Express = require('express')
const router = require('express').Router()
const {TweetTbl} = require('../models')

// router.get('/practice', (req, res) => {
//     res.send('Practice Route is working!')
// })

router.post('/create', async (req, res) => {
    const{username, tweetBody, datePublished} = req.body;
    const{id} = req.user;
    const tweetEntry = {
        username,
        tweetBody,
        datePublished,
        owner: id,
    } 
    try{
        const newTweet = await TweetTbl.create(tweetEntry);
        res.status(200).json(newTweet);
    } catch (err) {
        res.status(500).json({error: err});
    }
});

// Find all Tweets for logged in user
router.get('/:id', async (req, res) => {
    const {id} = req.params

    try {
        const results = await TweetTbl.findAll({
            where: {owner: id}
        });
        res.status(200).json(results);
    } catch(err) {
        res.status(500).json({error: err})
    }
});


// router.put("/update/:mealId", async (req, res) => {
//     const {foodName, protein, carbs, fats, kCal, mealCat} = req.body;
//     const entryId = req.params.mealId;
//     const userId = req.user.id;

//     const query = {
//         where: {
//             id: entryId,
//             owner: userId
//         }
//     };
//     const updatedMeal = {
//         foodName: foodName,
//         protein: protein,
//         carbs: carbs,
//         fats: fats,
//         kCal: kCal,
//         mealCat: mealCat
//     };

//     try{
//         const update = await MealModel.update(updatedMeal, query);
//         res.status(200).json(update);
//     } catch(err) {
//         res.status(500).json({error: err});
//     }
// });

router.delete("/delete/:id", async (req, res) => {
    const ownerId = req.user.id;
    const tweetId = req.params.id;

    try {
        const query = {
            where: {
                id: tweetId,
                owner: ownerId
            }
        };

        await TweetTbl.destroy(query)
        res.status(200).json({message: "Twournal Entry Removed"});
    }   catch(err) {
        res.status(500).json({error: err})
    }
});

module.exports = router;