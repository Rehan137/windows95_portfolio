const Resume = ({ isMaximized }) => {
  return (
    <div className={`w-full h-full flex flex-col`}>
      <div className="flex gap-2 p-1 border-b border-gray-300 bg-[#d4d0c8]">
        <a
          href="/assets/Resume/rehan_resume.pdf"
          download
          className="flex items-center gap-1 px-2 py-1 text-sm border-t-[#dfdfdf] border-e-[grey] border-b-[grey] border-s-[#dfdfdf] border-[2px] hover:bg-[#b5b5b5] cursor-pointer"
        >
          📄 Download
        </a>
        <a
          href="/assets/Resume/rehan_resume.pdf"
          target="_blank"
          className="flex items-center gap-1 px-2 py-1 text-sm border-t-[#dfdfdf] border-e-[grey] border-b-[grey] border-s-[#dfdfdf] border-[2px] hover:bg-[#b5b5b5] cursor-pointer"
        >
          🔗 Open In New Tab
        </a>
      </div>
      <iframe
        src="/assets/Resume/rehan_resume.pdf"
        className="w-full h-full"
        title="Resume"
      />
    </div>
  );
};

export default Resume;