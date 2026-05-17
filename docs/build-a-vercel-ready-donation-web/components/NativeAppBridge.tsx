"use client";

import { useEffect } from "react";

export function NativeAppBridge() {
  useEffect(() => {
    let removeListener: (() => void) | undefined;

    async function setupNativeBackButton() {
      const [{ App }, { Capacitor }] = await Promise.all([
        import("@capacitor/app"),
        import("@capacitor/core")
      ]);

      if (!Capacitor.isNativePlatform()) return;

      const listener = await App.addListener("backButton", ({ canGoBack }) => {
        if (canGoBack) {
          window.history.back();
          return;
        }

        App.exitApp();
      });

      removeListener = () => listener.remove();
    }

    setupNativeBackButton().catch(() => {
      // The web app should still build and run normally when Capacitor is unavailable.
    });

    return () => {
      removeListener?.();
    };
  }, []);

  return null;
}
