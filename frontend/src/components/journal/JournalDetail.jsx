import { Link } from "react-router";
import { useState } from 'react';

import {formatDate} from "../../lib/utils"

const JournalDetail = () => {
    const [primaryPrompt, setPrimaryPrompt] = useState("");
    const [addPromptOne, setAddPromptOne] = useState("");
    const [addPromptTwo, setAddPromptTwo] = useState("");
    const [addPromptThree, setAddPromptThree] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

    }
  return (
    <div>
        <header>
            <span>
                {formatDate(new Date())}
            </span>
            <button>
                <Link to={""}>Delete?</Link>
            </button>
        </header>
        <h2>WORD</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Primary Prompt/Question:
                <input
                    type="text"
                    value={primaryPrompt}
                    onChange={(e) => setPrimaryPrompt(e.target.value)}
                />
            </label>
            <label>
                Additional Prompt 1:
                <input
                    type="text"
                    value={addPromptOne}
                    onChange={(e) => setAddPromptOne(e.target.value)}
                />
            </label>
            <label>
                Additional Prompt 2:
                <input
                    type="text"
                    value={addPromptTwo}
                    onChange={(e) => setAddPromptTwo(e.target.value)}
                />
            </label>
            <label>
                Additional Prompt 3:
                <input
                    type="text"
                    value={addPromptThree}
                    onChange={(e) => setAddPromptThree(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Save</button>
        </form>
    </div>
  )
}

export default JournalDetail