const Express = require('express')
const router = require('express').Router()
const {TwournalModel} = require('../models')

router.get('/practice', (req, res) => {
    res.send('Practice Route is working!')
})

router.post('/create', async (req, res) => {
    const{title, body, date, twitterAct} = req.body;
    const{id} = req.user;
    const twournalEntry = {
        title,
        body,
        date,
        twitterAct,
        owner: id,
    } 

    try{
        const newTwournal = await TwournalModel.create(twournalEntry);
        res.status(200).json(newTwournal);
    } catch (err) {
        res.status(500).json({error: err});
    }
});

// Find all twournals for logged in user via my Twounrals
router.get('/:id', async (req, res) => {
    const {id} = req.params

    try {
        const results = await TwournalModel.findAll({
            where: {owner: id}
        });
        res.status(200).json(results);
    } catch(err) {
        res.status(500).json({error: err})
    }
});


router.put("/update/:twournalId", async (req, res) => {
    const{title, body, date, twitterAct} = req.body;
    const entryId = req.params.twournalId;
    const userId = req.user.id;

    const query = {
        where: {
            id: entryId,
            owner: userId
        }
    };
    const updatedTwournal = {
        title: title,
        body: body,
        date: date,
        twitterAct: twitterAct,
        owner: id,
    } 

    try{
        const update = await TwournalModel.update(updatedTwournal, query);
        res.status(200).json(update);
    } catch(err) {
        res.status(500).json({error: err});
    }
});

router.delete("/delete/:id", async (req, res) => {
    const ownerId = req.user.id;
    const twournalId = req.params.id;

    try {
        const query = {
            where: {
                id: twournalId,
                owner: ownerId
            }
        };

        await TwournalModel.destroy(query)
        res.status(200).json({message: "Twournal Entry Removed"});
    }   catch(err) {
        res.status(500).json({error: err})
    }
});

module.exports = router;