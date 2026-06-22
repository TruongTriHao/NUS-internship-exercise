import { Heart } from "lucide-react";

function Card() {
  return (
    <div className="flex m-3.5 bg-stone-50 rounded-sm shadow-lg">
      <img
        src="../../image.jpg"
        className="w-68.5 h-68.5 object-cover rounded-sm"
      ></img>
      <div className="flex flex-col justify-between m-2">
        <div className="flex items-center gap-2">
          <div className="text-white text-xs bg-indigo-800 rounded-full p-2 font-bold">
            HN
          </div>
          <div className="text-indigo-800 text-xs">Hieu Nguyen</div>
        </div>
        <div className="font-bold mt-2 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </div>
        <div className="mt-2 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum, quod, quia, voluptates quibusdam voluptatibus quas
        </div>
        <div className="flex justify-between mt-9">
          <div className="flex">
            <Heart size={12} color="#3730A3" fill="#3730A3" strokeWidth={1} />
            <div className="text-slate-300 text-xs">123</div>
          </div>
          <div className="text-zinc-300 text-xs">4:56pm 01/04/2018</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
