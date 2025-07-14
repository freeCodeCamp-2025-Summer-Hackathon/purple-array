import React from 'react';
import { CalendarFold } from "lucide-react";
import { Link } from "react-router-dom";

const JournalCard = ({ date, word }) => {
  return (
    <Link to={`${date}`} className="flex flex-1 basis-1/3 m-1 min-w-fit p-6 bg-base-100 rounded-md hover:bg-base-300 transition">
      <div className="flex justify-between w-full">
        <div className="flex gap-3 items-center">
          <CalendarFold className="text-primary" strokeWidth={1} />
          <span>{date}</span>
        </div>
        <div>{word || "Placeholder"}</div>
      </div>
    </Link>
  );
};

export default JournalCard;
