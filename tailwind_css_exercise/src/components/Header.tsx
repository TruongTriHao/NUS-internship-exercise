function Header() {
  return (
    <div className="grid grid-cols-[15%_61%_12%_12%] items-center fixed top-0 left-0 right-0 bg-indigo-800">
      <div className="text-white font-bold text-right text-xl p-2">Fotobook</div>
      <input
        className="bg-white text-black placeholder:text-stone-300 px-5 py-1.5 m-1.5 rounded-xs w-85"
        type="search"
        placeholder="Search Photo / Album"
      ></input>
      <div className="flex items-center gap-2">
        <div className="text-indigo-800 bg-white rounded-full p-2 font-bold text-left">
          HN
        </div>
        <div className="text-white text-left">Hieu Nguyen</div>
      </div>
      <button className="text-white hover:text-indigo-300 active:text-indigo-400 text-left">
        Logout
      </button>
    </div>
  );
}

export default Header;
