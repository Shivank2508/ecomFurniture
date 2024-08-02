import BestSellers from "@/components/BestSellers";
import { OurCollections } from "@/components/OurCollections";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <Slider />
      <OurCollections />
      <BestSellers />
    </>

  );
}
