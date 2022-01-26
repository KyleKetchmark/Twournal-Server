const Express = require('express');
const {models} = require('../models');
const router = require('express').Router()

router.post('/create', async (req, res) => {
    const { title, body, date, twitterAct, tweetId} = req.body;
    try {
        await models.TwournalModel.create({
            title: title,
            body: body,
            date: date,
            twitterAct: twitterAct,
            tweetId: tweetId,
            userId: req.user.id // need to check if right
        })
        .then(
            twournal => {
                res.status(201).json({
                    twournal: twournal,
                    message: 'Twournal Created'
                })
            }
        )
    } catch (err) {
        res.status(500).json({error: `Failed to create post: ${err}`});
    }
});

// Get all associate user twournals and tweets
router.get('/getusers', async (req, res) => {
const{admin} = req.user;
if(admin === true) {
    //create button on frontend
        try {
            await models.UserModel.findAll({
                include: [
                    {
                        model: models.TwournalModel
                    }
                ]
            })
            .then(
                users => {
                    res.status(200).json({
                        users: users
                    });
                }
            )
        } catch (err) {
            res.status(500).json({
                error: `Failed to retrieve users: ${err}`
            })
        }
    } else {
        return `You need admin status`
    }
})
// Find all twournals for logged in user via my Twounrals
router.get('/', async (req, res) => {
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
router.put("/update/:twournalId", async (req, res) => {
    const { title, body, date, twitterAct, tweetId } = req.body;
    const twournalId = req.body.id;

    const query = {
        where: {
            id: twournalId,
            userId: req.user.id
        }
    };
    const updatedTwournal = {
        title: title,
        body: body,
        date: date,
        twitterAct: twitterAct,
        tweetId: tweetId,
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

    try {
        const query = {
            where: {
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