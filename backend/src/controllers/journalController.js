import User from '../models/User.js';

const POINT_MULTIPLIER = 1;

function buildJournalEntry(input) {
    //TODO: finish validation
    let newEntry = {};
    // date: String, // year-month-date, e.g. 2025-07-05
    if (typeof input.date === 'undefined' || input.date === '') return null;
    newEntry.date = input.date;
    // word: String,
    if (typeof input.word === 'undefined' || input.word === '') return null;
    newEntry.word = input.word;
    // response: String,
    if (typeof input.response === 'undefined' || input.response === '')
        return null;
    newEntry.response = input.response;
    // optionalPrompt1: String,
    newEntry.optionalPrompt1 = input.optionalPrompt1 || '';
    // response1: String,
    newEntry.response1 = input.response1 || '';
    // optionalPrompt2: String,
    newEntry.optionalPrompt2 = input.optionalPrompt2 || '';
    // response2: String,
    newEntry.response2 = input.response2 || '';
    // optionalPrompt3: String,
    newEntry.optionalPrompt3 = input.optionalPrompt3 || '';
    // response3: String,
    newEntry.response3 = input.response3 || '';
    return newEntry;
}

function editJournalEntry(journal, input) {
    //TODO: finish validation
    // date and word shouldn't change; all other fields can be updated
    if (typeof input.response == 'string') {
        journal.response = input.response;
    }
    if (typeof input.optionalPrompt1 == 'string') {
        journal.optionalPrompt1 = input.optionalPrompt1;
    }
    if (typeof input.response1 == 'string') {
        journal.response1 = input.response1;
    }
    if (typeof input.optionalPrompt2 == 'string') {
        journal.optionalPrompt2 = input.optionalPrompt2;
    }
    if (typeof input.response2 == 'string') {
        journal.response2 = input.response2;
    }
    if (typeof input.optionalPrompt3 == 'string') {
        journal.optionalPrompt3 = input.optionalPrompt3;
    }
    if (typeof input.response3 == 'string') {
        journal.response3 = input.response3;
    }
    return journal;
}

function calculatePoints(journal) {
    let points = 0;
    if (journal.response) points += 1;
    if (journal.optionalPrompt1 && journal.response1) points += 1;
    if (journal.optionalPrompt2 && journal.response2) points += 1;
    if (journal.optionalPrompt3 && journal.response3) points += 1;
    return points;
}

export async function writeJournal(req, res) {
    try {
        // TODO: validate date, determine whether requested journal entry is in current month (User) or previous (Journal)
        const user = await User.findById(req.id, 'coins journal rewards');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // determine whether the date is in the journal array
        const journalIndex = user.journal.findIndex(
            (entry) => entry.date == req.body.date
        );

        // Entry does NOT exist
        if (journalIndex == -1) {
            const newEntry = buildJournalEntry(req.body); // input validation will be handled here
            if (!newEntry)
                res.status(400).json({
                    message: 'Date/Word/Response missing',
                    success: false,
                });

            const points = calculatePoints(newEntry);

            /* Add new journal entry to end of journal; add new reward entry to end of rewards; update coins
             * Return updated journal and coins
             */
            let newJournalAndCoins = await User.findOneAndUpdate(
                { _id: user.id },
                {
                    $push: {
                        journal: newEntry,
                        rewards: {
                            date: req.body.date,
                            reward: points,
                        },
                    },
                    $set: { coins: user.coins + points * POINT_MULTIPLIER },
                },
                {
                    new: true,
                    select: 'journal coins',
                }
            ).exec();

            res.status(201).json(newJournalAndCoins);
        }

        // Entry does exist
        else {
            const updatedEntry = editJournalEntry(
                user.journal[journalIndex],
                req.body
            );

            // get the current max points for the day, index of journal entry and reward entry should be the same
            const points = Math.max(
                calculatePoints(updatedEntry),
                user.rewards[journalIndex].reward
            );
            const coins = Math.max(
                0,
                (points - user.rewards[journalIndex].reward) * POINT_MULTIPLIER
            );

            let newJournal = await User.findOneAndUpdate(
                { _id: user.id, 'journal._id': user.journal[journalIndex]._id },
                { $set: { 'journal.$': updatedEntry } },
                { new: true, select: 'journal -_id' }
            ).exec();

            let newReward = await User.findOneAndUpdate(
                { _id: user.id, 'rewards._id': user.rewards[journalIndex]._id }, // index should be same for rewards
                { $set: { 'rewards.$.reward': points } },
                { new: true, select: 'rewards -_id' }
            ).exec();

            let newCoins = await User.findOneAndUpdate(
                { _id: user.id },
                { $set: { coins: user.coins + coins } },
                { new: true, select: 'coins -_id' }
            );

            res.status(200).json({
                journal: newJournal.journal,
                rewards: newReward.rewards,
                coins: newCoins.coins,
            });
        }
    } catch (error) {
        console.error('Error in writeJournal controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function getJournal(req, res) {
    try {
        const journal = await User.findById(req.id, 'journal -_id'); // returns only journal field, removes _id
        if (!journal)
            return res.status(404).json({ message: 'Journal not found' });
        res.status(200).json(journal);
    } catch (error) {
        console.error('Error in getJournal controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function deleteJournal(req, res) {
    try {
        // STRETCH: Also check previous Journals if entry not found

        const { settings, journal } = await User.findById(
            req.id,
            'settings journal -_id'
        );
        if (!settings.timezone || !journal) {
            return res.status(404).json({
                message: 'Journal or timezone not found',
                success: false,
            });
        }

        // TODO: Check timezone and prevent deletion of current day's entry

        // Currently assumes that the entry is either in the User's journal or doesn't exist
        const updatedJournal = await User.findByIdAndUpdate(
            { _id: req.id },
            { $pull: { journal: { date: req.params.yearMonthDay } } },
            { new: true, select: 'journal -_id' }
        ).exec();

        res.status(200).json({ updatedJournal });
    } catch (error) {
        console.error('Error in deleteJournal controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
