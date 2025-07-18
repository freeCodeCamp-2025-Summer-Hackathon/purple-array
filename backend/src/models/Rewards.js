import mongoose from 'mongoose';

const rewardsSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    yearMonth: {
        // format of year-month YYYY-MM
        type: String,
        required: true,
    },
    rewardEntries: {
        type: [],
    },
});

const Reward = mongoose.model('Reward', rewardsSchema);

export default Reward;
