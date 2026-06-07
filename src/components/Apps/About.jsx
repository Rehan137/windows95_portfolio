import { useState } from "react";

const About = ({ isMaximized }) => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div
      className={`flex flex-col gap-[35px] px-5 sm:px-[70px] py-[30px] h-full overflow-y-auto ${
        isMaximized ? "pb-[100px] sm:pb-[50px]" : ""
      }`}
    >
      <div className="flex sm:flex-row flex-col sm:gap-10 items-center sm:items-start justify-start">
        <img
          src="/assets/profilePic.png"
          alt="profilePhoto"
          className="border-s-[2px] border-s-[#fafafa] border-t-[2px] border-t-[#fafafa] border-black border-[1px] w-[220px]"
        />
        <div className="flex flex-col sm:items-start items-center gap-1 mt-4 sm:mt-14">
          <h2
            className={`font-extrabold ${
              isMaximized ? "text-[40px]" : "text-[30px]"
            }`}
          >
            Rehan Malek
          </h2>
          <h2
            className={`font-extrabold ${
              isMaximized ? "text-[25px]" : "text-[16px]"
            }`}
          >
            Security Researcher & Penetration Tester
          </h2>
          <h4
            className={`text-red-700 ${
              isMaximized ? "text-[20px]" : "text-[16px]"
            }`}
          >
            📍 India.
          </h4>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 justify-center sm:justify-start">
        <img src="https://img.shields.io/badge/Kali_Linux-557C94?style=for-the-badge&logo=kalilinux&logoColor=white" alt="badge" />
        <img src="https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white" alt="badge" />
        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="badge" />
        <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="badge" />
        <img src="https://img.shields.io/badge/Metasploit-2596CD?style=for-the-badge&logoColor=white" alt="badge" />
        <img src="https://img.shields.io/badge/Wireshark-1679A7?style=for-the-badge&logo=wireshark&logoColor=white" alt="badge" />
        <img src="https://img.shields.io/badge/Burp_Suite-FF6633?style=for-the-badge&logoColor=white" alt="badge" />
        <img src="https://img.shields.io/badge/Nmap-004088?style=for-the-badge" alt="badge" />
        <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="badge" />
        <img src="https://img.shields.io/badge/TryHackMe-212C42?style=for-the-badge&logo=tryhackme&logoColor=white" alt="badge" />
         <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="badge" />
  <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="badge" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="badge" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="badge" />
  <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="badge" />
      </div>

      <div>
        <h4 className="font-bold pb-3">About Me</h4>
        <p className="before:ps-7">
          Hello, I am Rehan Malek, a cybersecurity enthusiast focused on
          offensive security, penetration testing, and exploit research. I have
          a passion for understanding how systems work and how to break them.
          {!seeMore && (
            <span
              className="text-blue-500 ps-2 cursor-pointer"
              onClick={() => setSeeMore(true)}
            >
              see more...
            </span>
          )}
        </p>

        {seeMore && (
          <div>
            <p className="pt-6">
              My journey into cybersecurity started with a deep curiosity about
              how things work under the hood. From mobile security research and
              Android lockscreen bypasses to designing hardware extensions for
              Flipper Zero and building RADIUS-based enterprise Wi-Fi security
              systems, I thrive on real-world offensive challenges.
            </p>
            <p className="pt-6">
              I actively sharpen my skills on TryHackMe and CTF platforms,
              constantly pushing into new areas like ICS/SCADA security,
              embedded systems, and custom C-based recon tooling. I believe
              the best breakthroughs come from hands-on experimentation and
              collaboration with driven individuals.
              <span
                className="text-blue-500 ps-1 cursor-pointer"
                onClick={() => setSeeMore(false)}
              >
                {" "}(hide)
              </span>
            </p>
          </div>
        )}

        <div className="flex justify-center">
          <a
            target="_blank"
            href="/assets/Resume/rehan_resume.pdf"
           
            className="flex mt-10 w-fit justify-center items-center gap-[5px] p-[5px] text-sm border-t-[#dfdfdf] border-e-[grey] border-b-[grey] border-s-[#dfdfdf] border-[2px] hover:border-e-[#dfdfdf] hover:border-s-[grey] hover:border-t-[grey] hover:border-b-[#dfdfdf] hover:bg-[#b5b5b5] transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;