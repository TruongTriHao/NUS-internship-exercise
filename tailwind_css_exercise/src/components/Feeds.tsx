import Card from "./Card";
import { Loader } from "lucide-react";
import Tabs from "./Tabs";

function Feeds() {
  return (
    <div className="flex flex-col bg-white ml-57 mt-22 shadow-lg max-w-254">
      <Tabs />
      <div className="grid md:grid-cols-1 lg:grid-cols-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Loader className="m-auto" size={72} color="gray" />
    </div>
  );
}

export default Feeds;
