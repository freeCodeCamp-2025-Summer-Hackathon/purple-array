import JournalPage from "./JournalPage";


const JournalCreatePage = () => {
    const handleCreate = () => {
        console.log('created')
    }
    return (
        <JournalPage onSubmit={handleCreate} />
    );
};
export default JournalCreatePage;
