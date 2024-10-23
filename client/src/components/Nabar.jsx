import favicon from "../assets/favicon.svg";
import { useNavigate } from "react-router-dom";
import { MoveRight } from "lucide-react"; // Ensure you are importing from "lucide-react"

const Navbar = () => {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/')
  }
  const goToLogic = () => {
    navigate('/Logic')
  }
  return (
    <div className="flex justify-around items-center mt-6">
      <div className="flex items-center cursor-pointer" onClick={goToHome}>
        <img src={favicon} alt="logo" />
        <h1 className="sm:text-2xl text-[1rem]  p-2 font-bold">RemoverBg</h1>
      </div>
      <div className="flex items-center justify-center bg-slate-800 hover:bg-slate-50 hover:text-black transition text-slate-50 p-2 rounded-2xl cursor-pointer sm:h-11 h-auto" onClick={goToLogic}>
        <button type="button" className="sm:m-2 font-bold sm:mr-4 mr-2 sm:text-[1rem] text-xs">Try Now</button>
        <MoveRight size={25} strokeWidth={2.5} className=""/>
      </div>
    </div>
  );
};

export default Navbar;
