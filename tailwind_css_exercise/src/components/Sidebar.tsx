function Sidebar() {
  return (
    <div className="flex flex-col fixed top-12 min-w-57 h-screen">
      <div className="flex flex-col gap-2 mt-10 ml-[30%]">
        <a className="text-indigo-800 font-bold" href="#">
          Feeds
        </a>
        <a className="text-neutral-400 font-bold" href="#">
          Discover
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
