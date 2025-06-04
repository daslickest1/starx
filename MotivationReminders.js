import { useEffect, useState } from "react";
import { Bell } from "lucide-react";

const messages = [
  "Crush today. One step closer.",
  "You're not tired. You're transforming.",
  "Meal prepped? Mind set? GO.",
  "Discipline beats motivation. Show up.",
  "Hydrate, dominate, repeat.",
  "Don't skip. Don't quit. Don't doubt."
];

export default function MotivationReminders() {
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setMessage(messages[randomIndex]);
    }, 1000 * 60 * 60 * 3);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-purple-100 rounded-xl shadow-md flex items-center space-x-2">
      <Bell className="w-5 h-5" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
