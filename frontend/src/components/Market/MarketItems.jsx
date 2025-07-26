import useProducts from "../../util/hooks/useProducts.js";
import useInventory from "../../util/hooks/useInventory.js";
import usePurchase from "../../util/hooks/usePurchase.js";
import useCoins from "../../util/hooks/useCoins.js";
import { toast } from "react-hot-toast";
import { CircleDollarSign } from "lucide-react";
import MarketEmpty from "./MarketEmpty.jsx";

function MarketItems() {
  const { products, isLoading } = useProducts();
  const { inventory } = useInventory();
  const { purchaseItem, error } = usePurchase();
  const { coins } = useCoins();

  const handlePurchase = async (item) => {
    if (item.cost > coins) {
      toast.error("Not enough coins for this purchase!");
    } else {
      if (window.confirm(`Buy ${item.name} for ${item.cost} coins?`)) {
        try {
          await purchaseItem(item._id);
          toast.success(`Your have successfully purchased ${item.name}`);
          // after successful purchase reload page
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } catch (error) {
          toast.error("Purchase Failed");
        }
      }
    }
  };

  if (isLoading || !inventory) {
    return <p className="text-center py-10">Loading market items...</p>;
  }

  const marketItems = products.filter((product) => {
    return !product.tags.some((tag) => inventory[tag]?.includes(product.name));
  });

  return (
    <>
      <div className="px-4 pt-10">
        <div className="inline-flex items-center gap-2 text-md tracking-wide uppercase text-primary font-semibold bg-primary/10 px-3 py-1 rounded-md ml-5">
          <div className="flex gap-2">
            <p>Your coins: </p>
            <div className="flex">
              <CircleDollarSign
                className="text-violet-950 fill-yellow-500 size-6"
                strokeWidth={1}
              />
              {coins && `${coins}`}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 px-4 pt-10">
          {!isLoading && marketItems.length === 0 ? (
            <MarketEmpty />
          ) : (
            marketItems
              .sort((a, b) => {
                return a.cost - b.cost;
              })
              .map((item) => (
                <div
                  key={item._id}
                  className="card bg-base-100 border border-base-200 shadow-sm transition duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-base-200"
                >
                  <figure>
                    <img
                      src={`assets/${item.tags[0]}/${encodeURIComponent(
                        item.name.toLowerCase().replace(/\s+/g, "-")
                      )}.png`}
                      alt={item.name}
                      className="w-full h-48 object-cover object-top"
                    />
                  </figure>

                  <div className="card-body text-center">
                    <h2 className="card-title justify-center text-primary">
                      {item.name}
                    </h2>
                    <p className="text-sm text-base-content/70">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-evenly font-semibold text-base-content">
                      <div className="flex items-center justify-center">
                        <CircleDollarSign
                          className="text-violet-950 fill-yellow-500 size-7 pr-1"
                          strokeWidth={1}
                        />
                        {item.cost}
                      </div>
                      {item.tags.map((tag) => (
                        <span
                          key={`${item._id}-${tag}`}
                          className="badge badge-outline"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mt-3">
                      <button
                        className="btn btn-outline btn-primary btn-sm btn-wide"
                        onClick={() => handlePurchase(item)}
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </>
  );
}
export default MarketItems;
