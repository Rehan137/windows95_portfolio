import AppScreen from "./AppScreen";
import Icon from "./UI/Icon";
import { Menu } from "../content/menu";
import Taskbar from "./Taskbar";

const Desktop = () => {
  return (
    <>
      <div className="w-screen h-screen bg-transparent">
        <div
          className="w-screen h-screen flex justify-center items-center -z-10 flex-col overflow-hidden"
          style={{
            backgroundImage: "url('/assets/wallpaper.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col gap-7 sm:gap-6 absolute justify-start z-10 top-[3%] left-[4%] sm:left-[2%]">
            {Menu.map((menu, i) => {
              return <Icon key={i} menu={menu} />;
            })}
          </div>
          <AppScreen />
        </div>
      </div>
      <Taskbar />
    </>
  );
};

export default Desktop;