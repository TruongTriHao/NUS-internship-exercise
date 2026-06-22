import Card from "./Card";
import { LoaderCircle } from "lucide-react";
import Tabs from "./Tabs";

function Feeds() {
  return (
    <div className="flex flex-col bg-white ml-57 mt-22 shadow-lg max-w-254">
      <Tabs />
      <div className="grid grid-cols-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <LoaderCircle className="animate-spin m-auto" size={72} />
    </div>
  );
}

export default Feeds;
