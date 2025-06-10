"use client";

import { Wifi, WifiOff } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      setIsOnline(navigator.onLine);

      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);

      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }
  }, []);

  return (
    <div className={cn("flex items-center gap-2 text-sm font-medium", isOnline ? "text-green-600" : "text-accent-foreground dark:text-accent")}>
      {isOnline ? (
        <>
          <Wifi size={18} />
          <span>Online</span>
        </>
      ) : (
        <>
          <WifiOff size={18} />
          <span>Offline</span>
        </>
      )}
    </div>
  );
}
