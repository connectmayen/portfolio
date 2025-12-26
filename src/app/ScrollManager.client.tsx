"use client";

import { useEffect } from "react";

export default function ScrollManager() {
  useEffect(() => {
    // Prevent browser from restoring previous scroll on reload/navigation
    try {
      if (typeof window !== "undefined" && "scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
    } catch (e) {
      // ignore
    }

    // Force scroll to top when this component mounts (page load / refresh)
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0 });
    }

    return () => {
      try {
        if (typeof window !== "undefined" && "scrollRestoration" in history) {
          history.scrollRestoration = "auto";
        }
      } catch (e) {
        // ignore
      }
    };
  }, []);

  return null;
}
