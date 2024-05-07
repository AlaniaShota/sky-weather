import { BsFillSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";

export const DarkMode = ({
  darkMode,
  toggle,
}: {
  darkMode: boolean;
  toggle: () => void;
}) => {
  return (
    <div onClick={toggle} className="toggler-content">
      {darkMode ? (
        <span className="dark-mode-icon">
          <BsFillSunFill color="#FFC436" />
        </span>
      ) : (
        <span className="dark-mode-icon">
          <IoMdMoon color="#000" className="moon"/>
        </span>
      )}
    </div>
  );
};
