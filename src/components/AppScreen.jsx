import { useContext } from "react";
import AppScreenFrame from "./UI/AppScreenFrame";
import { Menu } from "../content/menu";
import AppContext from "../context/AppContext";
import About from "./Apps/About";
import Mail from "./Apps/Mail";
import Projects from "./Apps/Projects";
import Resume from "./Apps/Resume";

const AppScreen = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      {state.Biography.open && (
        <AppScreenFrame
          appInfo={Menu[0]}
          className=""
          isActive={state.Biography.top}
          isMaximized={state.Biography.fullscreen}
          isMinimized={state.Biography.minimize}
        >
          <About isMaximized={state.Biography.fullscreen} />
        </AppScreenFrame>
      )}
      {state.Projects.open && (
        <AppScreenFrame
          appInfo={Menu[1]}
          className=""
          isActive={state.Projects.top}
          isMaximized={state.Projects.fullscreen}
          isMinimized={state.Projects.minimize}
        >
          <Projects isMaximized={state.Projects.fullscreen} />
        </AppScreenFrame>
      )}
      {state.Mail.open && (
        <AppScreenFrame
          appInfo={Menu[2]}
          className=""
          isActive={state.Mail.top}
          isMaximized={state.Mail.fullscreen}
          isMinimized={state.Mail.minimize}
        >
          <Mail isMaximized={state.Mail.fullscreen} />
        </AppScreenFrame>
      )}
      {state.Resume && state.Resume.open && (
  <AppScreenFrame
    appInfo={Menu[3]}
    className=""
    isActive={state.Resume.top}
    isMaximized={state.Resume.fullscreen}
    isMinimized={state.Resume.minimize}
  >
    <Resume isMaximized={state.Resume.fullscreen} />
  </AppScreenFrame>
)}
    </>
  );
};

export default AppScreen;