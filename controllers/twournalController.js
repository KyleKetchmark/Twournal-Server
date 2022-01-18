const Express = require('express');
const {models} = require('../models');
const router = require('express').Router()
// const { TwournalModel } = require('../models');
// const { UserModel } = require('../models/userModel');

// router.get('/practice', (req, res) => {
//     res.send('Practice Route is working!')
// })

router.post('/create', async (req, res) => {
    const { title, body, date, twitterAct, tweetId} = req.body;
    const { id } = req.user;
    try {
    const newTwournal = await models.TwournalModel.create({
        title,
        body,
        date,
        twitterAct,
        tweetId,
        userId: id // need to check if right
    })
        res.status(200).json({
            newTwournal: newTwournal,
            message: 'post created'
        });
    } catch (err) {
        res.status(500).json({error: `Failed to create post: ${err}`});
    }
});

//Get all associate user twournals and tweets
// const{admin} = models.UserModel;
// if(admin === true) {
//     //create button on frontend
//     router.get('/userinfo', async (req, res) => {
//         try {
//             await models.UserModel.findAll({
//                 include: [
//                     {
//                         model: models.TwournalModel,
//                         include: [
//                             {
//                                 model: models.TweetModel
//                             }
//                         ]
//                     }
//                 ]
//             })
//                 .then(
//                     users => {
//                         res.status(200).json({
//                             users: users
//                         });
//                     }
//                 )
//         } catch (err) {
//             res.status(500).json({
//                 error: `Failed to retrieve users: ${err}`
//             })
//         }
//     })
//   }

// Find all twournals for logged in user via my Twounrals
router.get('/:id', async (req, res) => {
    const { id } = req.user;
    try {
        const results = await models.TwournalModel.findAll({
            where: { userId: id }
        });
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err })
    }
});

// Twounral Put Route needs fixing
router.put("/update/:entryId", async (req, res) => {
    const { title, body, date, twitterAct } = req.body;
    const entryId = req.params.id;
    const { id } = req.user;

    const query = {
        where: {
            twournalId: entryId,
            userId: id
        }
    };
    const updatedTwournal = {
        title: title,
        body: body,
        date: date,
        twitterAct: twitterAct,
        userId: id
    }

    try {
        const update = await models.TwournalModel.update(updatedTwournal, query);
        res.status(200).json(update);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.delete("/delete/:id", async (req, res) => {
    const userId = req.user.id;
    const twounralId = req.params.id;

    try {
        const query = {
            where: {
                twounralId: twounralId,
                userId: userId
            }
        };

        await models.TwournalModel.destroy(query)
        res.status(200).json({ message: "Twournal Entry Removed" });
    } catch (err) {
        res.status(500).json({ error: err })
    }
});

module.exports = router;