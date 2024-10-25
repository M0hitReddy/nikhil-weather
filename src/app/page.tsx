"use client"
import { Button } from "@/components/ui/button";
import prisma from "@/lib/dbConnect";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chart } from "./components/ChartDemo";

export default function Home() {
  // const data = await prisma.weatherData.findMany();

  // console.log(data);
  return (
    <>
      <div className="container py-20 flex justify-center items-center m-auto w-full flex-col">
        <Card className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
          <CardHeader>
            <CardTitle>City</CardTitle>
            <CardDescription>Select a city for weather detals</CardDescription>
          </CardHeader>
          <CardContent className=" flex justify-center">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="kolkata">Kolkata</SelectItem>
                <SelectItem value="hyderabad">Hederabad</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
          <CardFooter className="mr-9 w-full flex justify-end">
            <Button className="w-full">Get Weather</Button>
          </CardFooter>
        </Card>
        {/* <Chart /> */}
      </div>
    </>
  );
}
