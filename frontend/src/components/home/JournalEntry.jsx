import { Link } from "react-router";
import {formatDate} from "../../lib/utils"

const JournalEntry = () => {
    
  return (
    <div>
        <header>
            <span>
                {formatDate(new Date())};
            </span>
            <button>
                <Link to={""}>Edit</Link>
            </button>
        </header>
        <br />
        <h1>Word of the Day</h1>
        <br />
        <div>
            <h2>Primary Prompt/Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia modi reprehenderit optio, iste possimus cupiditate accusamus tenetur cumque fugit tempora voluptas illum ex est! Incidunt exercitationem quis molestias magnam qui!</p>
            <br />
            <h2>Additional Prompts</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero excepturi cum incidunt optio iusto nemo, eius praesentium in est fuga facilis totam cupiditate iste vitae. Architecto porro quos similique doloremque.</p>
        </div>
    </div>
  )
}

export default JournalEntry