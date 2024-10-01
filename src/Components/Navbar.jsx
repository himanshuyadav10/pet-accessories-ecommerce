import { Search } from "./";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-littlepaws-orange text-white h-[60px]">
        {/* left */}
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <img className="h-[35px] w-[100px]" src="../images/lpaws.jpg" />
          </Link>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-xs xl:test-base font-bold"> India</div>
          </div>
        </div>

        {/* middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>

        {/* right */}
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, Sign in</div>
            <div className="text-xs xl:test-base font-bold">
              Acounts & Lists
            </div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-xs xl:test-base font-bold"> & Orders</div>
          </div>
          <Link to={"/checkout"}>
            <div className="flex pr-3 pl-3">
              <ShoppingCartIcon className="h-[48px]" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-white">
                  {cart}
                </div>
              </div>
              <div className="mt-7 text-xs xl:test-sm">Cart</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex bg-littlepaws-y text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
        <div>Today's deal</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Card</div>
        <div>Sell</div>
      </div>
    </header>
  );
};
export default Navbar;