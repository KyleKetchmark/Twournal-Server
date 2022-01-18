// const Express = require('express')
// const router = require('express').Router()
// const {models} = require('../models')

// // router.get('/practice', (req, res) => {
// //     res.send('Practice Route is working!')
// // })

// // NEED to be logged in to access Twitter db
// router.post('/create', async (req, res) => {
//     const{username, tweetBody, datePublished} = req.body;
//     const{id} = req.user;
//     const newId = req.params.id;
//     const tweetEntry = {
//         username,
//         tweetBody,
//         datePublished,
//         userId: id,
//         twournalId: newId
//     } 
//     try{
//         const newTweet = await models.TweetModel.create(tweetEntry);
//         res.status(200).json(newTweet);
//     } catch (err) {
//         res.status(500).json({error: err});
//     }
// });

// // Find all Tweets for logged in user
// router.get('/:id', async (req, res) => {
//     const {id} = req.user;

//     try {
//         const results = await models.TweetModel.findAll({
//             where: {owner: id}
//         });
//         res.status(200).json(results);
//     } catch(err) {
//         res.status(500).json({error: err})
//     }
// });


// // router.put("/update/:mealId", async (req, res) => {
// //     const {foodName, protein, carbs, fats, kCal, mealCat} = req.body;
// //     const entryId = req.params.mealId;
// //     const userId = req.user.id;

// //     const query = {
// //         where: {
// //             id: entryId,
// //             owner: userId
// //         }
// //     };
// //     const updatedMeal = {
// //         foodName: foodName,
// //         protein: protein,
// //         carbs: carbs,
// //         fats: fats,
// //         kCal: kCal,
// //         mealCat: mealCat
// //     };

// //     try{
// //         const update = await TweetModel.update(updatedMeal, query);
// //         res.status(200).json(update);
// //     } catch(err) {
// //         res.status(500).json({error: err});
// //     }
// // });

// router.delete("/delete/:id", async (req, res) => {
//     const ownerId = req.user.id;
//     const tweetId = req.params.id;

//     try {
//         const query = {
//             where: {
//                 id: tweetId,
//                 owner: ownerId
//             }
//         };

//         await models.TweetModel.destroy(query)
//         res.status(200).json({message: "Twournal Entry Removed"});
//     }   catch(err) {
        // res.status(500).json({error: err})
//     }
// });

// module.exports = router;