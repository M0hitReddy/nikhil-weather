import { Button } from "@/components/ui/button";
import prisma from "@/lib/dbConnect";
import Image from "next/image";

export default async function Home() {  
  // const data = await prisma.weatherData.findMany();
  const res  = await fetch(
    `api.openweathermap.org/data/2.5/forecast/daily?lat={17.366}&lon=${78.476}&cnt=${2}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`);
  const data = await res.json();
  // console.log(data);
  return (
    <>
      <div className="container py-20 flex justify-center items-center m-auto">
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </>
  );
}
