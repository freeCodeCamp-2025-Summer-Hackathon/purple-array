import JournalStyleCreateEdit from "../components/journal/JournalStyleCreateEdit";


const JournalCreatePage = () => {
    const handleCreate = () => {
        console.log('created')
    }
    return (
        <JournalStyleCreateEdit onSubmit={handleCreate} />
    );
};
export default JournalCreatePage;
