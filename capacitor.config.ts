import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'noas.weather.app',
  appName: 'noas-weather-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
