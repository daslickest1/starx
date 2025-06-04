import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const workouts = ["Upper Push", "Lower Body", "Upper Pull", "Full Body", "Rest"];

export default function WeeklyWorkoutPlanner() {
  const [plan, setPlan] = useState({});

  const updatePlan = (day, workout) => {
    setPlan({ ...plan, [day]: workout });
  };

  return (
    <div className="grid gap-4 p-4">
      <h2 className="text-xl font-bold">📆 Weekly Workout Planner</h2>
      {days.map((day) => (
        <Card key={day}>
          <CardContent className="flex justify-between items-center">
            <span className="font-semibold">{day}</span>
            <div className="flex space-x-2">
              {workouts.map((w) => (
                <Button
                  key={w}
                  variant={plan[day] === w ? "default" : "outline"}
                  onClick={() => updatePlan(day, w)}
                >
                  {w}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
