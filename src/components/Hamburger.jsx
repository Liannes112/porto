import { IoMdMenu } from "react-icons/io";

const Hamburger = ({ onClick }) => {
  return (
    <div className="flex items-center py-5 md:hidden">
      <button 
      onClick={onClick}
      type="button"
      name="hamburger"
      className="cursor-pointer text-slate-900">
        <IoMdMenu className="text-textW text-3xl" />
      </button>
    </div>
    )
}

export default Hamburger