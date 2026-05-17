const appUrl = process.env.CAPACITOR_SERVER_URL ?? "https://adventist-giving-v2.vercel.app";

const config = {
  appId: "ph.adventist.luzon.giving",
  appName: "Adventist Giving Luzon",
  webDir: "public",
  server: {
    url: appUrl,
    cleartext: false
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      backgroundColor: "#0A1F44",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true
    }
  }
} as const;

export default config;
