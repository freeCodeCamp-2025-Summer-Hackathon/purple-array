import User from '../models/User.js';

function buildJournalEntry(input) {
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
    // date and word shouldn't change; all other fields can be updated
    journal.response = input.response || journal.response;
    journal.optionalPrompt1 = input.optionalPrompt1 || journal.optionalPrompt1;
    journal.response1 = input.response1 || journal.response1;
    journal.optionalPrompt2 = input.optionalPrompt2 || journal.optionalPrompt2;
    journal.response2 = input.response2 || journal.response2;
    journal.optionalPrompt3 = input.optionalPrompt3 || journal.optionalPrompt3;
    journal.response3 = input.response3 || journal.response3;
    return journal;
    // TODO
}

export async function writeJournal(req, res) {
    try {
        const user = await User.findById(req.id, 'coins journal rewards');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const journalIndex = user.journal.findIndex(
            (entry) => entry.date == req.body.date
        );

        if (journalIndex == -1) {
            // Entry does NOT exist
            const newEntry = buildJournalEntry(req.body);
            if (!newEntry)
                res.status(400).json({
                    message: 'Date/Word/Response missing',
                    success: false,
                });
            User.findOneAndUpdate(
                { _id: user.id },
                { $push: { journal: newEntry } }
            ).exec();
            res.status(201).json(newEntry);
        } else {
            // Entry does exist
            const updatedEntry = editJournalEntry(
                user.journal[journalIndex],
                req.body
            );
            console.log(user.journal[journalIndex]._id);
            User.findOneAndUpdate(
                { _id: user.id, 'journal._id': user.journal[journalIndex]._id },
                { $set: { 'journal.$': updatedEntry } }
            ).exec();
            res.status(200).json(updatedEntry);
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
