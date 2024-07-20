"use client"

import { FC } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import Link from "next/link";

const Home: FC = () => {
    return (
      <div className="grow p-8 flex">
        <Card className="cursor-pointer max-w-1/3 h-fit hover:bg-slate-100/10 hover:scale-105 duration-500">
          <Link href="/stretch/starting">
          <CardHeader>
            <CardTitle>
              Starting to Stretch
            </CardTitle>
          </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <p>
                Full-body program for beginners from r/flexibility
              </p>
              <div className="flex flex-col lg:flex-row justify-between gap-2">
                <div>
                  <p>Upper Body</p>
                  <ul className="list-disc list-inside">
                    <li>Shoulder Backbend</li>
                    <li>Spine Backbend</li>
                    <li>Rear Hand Clasp</li>
                    <li>Lying Cross</li>
                    <li>Wrist-Biceps Stretch</li>
                  </ul>
                </div>
                <div>
                  <p>Lower Body</p>
                  <ul className="list-disc list-inside">
                    <li>One-Leg Pike</li>
                    <li>Kneeling Lunge</li>
                    <li>Pancake</li>
                    <li>Butterfly</li>
                    <li>Calf Stretch</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Link>
        </Card>
      </div>
    );
};

Home.displayName = "Home";
export default Home;
    