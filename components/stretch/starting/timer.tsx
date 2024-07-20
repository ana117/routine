import { Button } from "@/components/ui/button";
import { Repetition } from "@/models/stretch";
import { Play, Pause } from "lucide-react";
import { FC, useEffect, useState } from "react";

interface TimerProps {
    repetition: Repetition;
    autoplay: boolean;
    onTimerEnd: () => void;
}

const Timer: FC<TimerProps> = ({ repetition, autoplay, onTimerEnd }) => {
    const [isPaused, setIsPaused] = useState(!autoplay);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setMinutes(Math.floor(repetition.count / 60));
        setSeconds(repetition.count % 60);
        
        if (!autoplay) {
            setIsPaused(true);
        }
    }, [repetition, autoplay]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isPaused) {
                if (seconds === 0) {
                    if (minutes === 0) {
                        onTimerEnd();
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [isPaused, minutes, seconds]);

    return (
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
    );
}

Timer.displayName = "Timer";
export default Timer;
