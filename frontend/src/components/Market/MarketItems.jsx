import Navbar from "../generic/Navbar";
import { useState, useEffect } from "react";

function MarketItems() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/marketDummyData.json')
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error loading JSON:', err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {items.map(item => (
                <div key={item._id.$oid} className="rounded-2xl flex items-center justify-center p-4 text-center border">
                    < div>
                        <h1><b> {item.name}</b></h1>
                        <p>{item.description}</p>
                        <p> ${item.cost.$numberInt}</p>
                    </div>

                    {item.tags.map(tag => (
                        <p key={`${item._id.$oid}-${tag}`} className="border rounded mx-2 flex flex-col">  {tag} </p> //this to whatever you need it to be
                    ))}

                </div>
            ))
            }
        </div >
    )
}
export default MarketItems;