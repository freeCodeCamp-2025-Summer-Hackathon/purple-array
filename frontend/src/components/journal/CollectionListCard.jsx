import { Link } from 'react-router';
import { CalendarFold } from 'lucide-react';

const CollectionListCard = (props) => {
	return (
		<Link
			to={props.to}
			className="flex flex-1 basis-1/3 m-1 min-w-fit p-6 bg-base-100 rounded-md opacity-80 hover:scale-[1.03] hover:opacity-100 transition-all ease-in-out duration-500"
		>
			<div className="flex justify-between w-full">
				<div className="flex gap-3">
					<CalendarFold className="text-primary" strokeWidth={1} /> {props.date}
				</div>
				<div className="text-base font-medium text-primary  bg-primary/10 px-3 py-1 rounded-md ">
					{props.word}
				</div>
			</div>
		</Link>
	);
};

export default CollectionListCard;
