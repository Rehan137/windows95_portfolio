import React, { useContext } from "react";
import { motion } from "framer-motion";
import AppContext from "../../context/AppContext";
import { isMobileDevice } from "../../util/IsMobileDevice";

const Icon = ({ menu }) => {
  const { state, openApp } = useContext(AppContext);

  const handleOpen = () => {
    if (state[menu.name] && state[menu.name].open !== true) {
      openApp(menu.name);
    }
  };

  return (
    <motion.div
      aria-label={menu.name}
      tabIndex="-1"
      className={`flex flex-col items-center z-10 focus-within:bg-[rgba(50,94,160,0.56)]
                ${menu.name === "Projects" && "gap-[10px]"}`}
      drag={isMobileDevice ? false : true}
      dragMomentum={false}
      dragElastic={0.1}
      onDoubleClick={handleOpen}
      onTouchStart={handleOpen}
    >
      <img
        src={menu.path}
        alt={menu.name + "Icon"}
        className={menu.deskIconSize}
        draggable="false"
      />
      <span className="text-[13px] text-white">{menu.name}</span>
    </motion.div>
  );
};

export default Icon;