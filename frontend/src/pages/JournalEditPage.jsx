import JournalStyleCreateEdit from "../components/journal/JournalStyleCreateEdit";

const JournalEditPage = () => {
  const existingEntry = {
    primaryPrompt: "",
    addPromptOne: "Existing prompt 1",
    addPromptTwo: "Existing prompt 2",
    addPromptThree: "Existing prompt 3",
  };
  const onSubmit = () => {
    console.log("submitted");
  };
  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div>
      <JournalStyleCreateEdit
        initialData={existingEntry}
        onSubmit={onSubmit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default JournalEditPage;
