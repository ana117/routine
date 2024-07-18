"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FC, useEffect, useState } from "react"
import stretchExercises from "./data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

const StretchStarting: FC = () => {
    const [currentExercise, setCurrentExercise] = useState(0);
    const [currentRepetition, setCurrentRepetition] = useState(0);
    const [isPaused, setIsPaused] = useState(true);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const exerciseCount = stretchExercises[currentExercise].repetitions[currentRepetition].count;
        setMinutes(Math.floor(exerciseCount / 60));
        setSeconds(exerciseCount % 60);
    }, [currentExercise, currentRepetition]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isPaused) {
                if (seconds === 0) {
                    if (minutes === 0) {
                        changeRepetition(currentRepetition + 1);
                        return;
                    }
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    setSeconds(seconds - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [isPaused, minutes, seconds]);

    const changeExercise = (index: number) => {
        setCurrentExercise(index);
        setIsPaused(true);
    };

    const changeRepetition = (index: number) => {
        setIsPaused(true);

        if (index >= stretchExercises[currentExercise].repetitions.length) {
            changeExercise(currentExercise + 1);
            return;
        } else {
            setCurrentRepetition(index);
        }
    }


    return (
      <div className="grow p-8 flex flex-col gap-16">
        <Card className="h-fit w-full bg-secondary">
            <CardHeader className="flex items-center">
                <CardTitle>
                    <div className="flex items-center justify-between gap-8 min-w-96">
                        <Button 
                            size="icon" 
                            onClick={() => changeExercise(currentExercise - 1)}
                            disabled={currentExercise === 0}
                        >
                            <ArrowLeft />
                        </Button>
                        <p>
                            {stretchExercises[currentExercise].name}
                        </p>
                        <Button 
                            size="icon" 
                            onClick={() => changeExercise(currentExercise + 1)}
                            disabled={currentExercise === stretchExercises.length - 1}
                        >
                            <ArrowRight />
                        </Button>
                    </div>
                </CardTitle>
                <CardDescription>
                    <p>
                        {currentExercise + 1} of {stretchExercises.length}
                    </p>
                </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center gap-4">
                <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-8">
                            <div className="text-6xl font-bold">
                                {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                            </div>
                            <div className="flex gap-4">
                                <Button onClick={() => setIsPaused(!isPaused)}>
                                    {isPaused ? (
                                        <>
                                            <Play className="h-5 w-5" />
                                            <span className="sr-only">Play</span>
                                        </>
                                    ) : (
                                        <>
                                            <Pause className="h-5 w-5" />
                                            <span className="sr-only">Pause</span>
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                        <div>
                            {stretchExercises[currentExercise].repetitions[currentRepetition].text}
                        </div>
                    </div>
                    
                    <div>
                        <ul className="list-disc ms-8">
                            {stretchExercises[currentExercise].steps.map((step, index) => (
                                <li key={`${stretchExercises[currentExercise].name}-${index}`}>
                                    {step}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card className="h-fit mx-auto">
            <CardHeader>
                <CardTitle>
                Starting to Stretch
                </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between gap-8">
                <div className="flex flex-col gap-2">
                    <p>
                        Do this program 2-3 times a week! It will take ~30 minutes. If you have time issues, you can switch between upper and lower body.
                    </p>
                    <div>
                        <p>
                            The stretching protocol is to be done in the following order. Try to go a little deeper each time after the bumping movements.
                        </p>
                        <ul className="list-disc ms-8">
                            <li>Do 10 small gentle bumping movements into the stretch</li>
                            <li>Hold the stretch for 10 seconds</li>
                            <li>Do 10 small gentle bumping movements into the stretch</li>
                            <li>Hold the stretch for 20 seconds</li>
                            <li>Do 10 small gentle bumping movements into the stretch</li>
                            <li>Hold the stretch for 30 seconds</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div>
                        <p>Upper Body</p>
                        <ul className="list-disc ms-8">
                            <li>Shoulder Backbend</li>
                            <li>Spine Backbend</li>
                            <li>Rear Hand Clasp</li>
                            <li>Lying Cross</li>
                            <li>Wrist-Biceps Stretch</li>
                        </ul>
                    </div>
                    <div>
                        <p>Lower Body</p>
                        <ul className="list-disc ms-8">
                            <li>One-Leg Pike</li>
                            <li>Kneeling Lunge</li>
                            <li>Pancake</li>
                            <li>Butterfly</li>
                            <li>Calf Stretch</li>
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    );
};

StretchStarting.displayName = "StretchStarting";
export default StretchStarting;
    