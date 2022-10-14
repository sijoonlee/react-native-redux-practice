## how I created this starter
1. sudo npm install -g expo-cli
2. expo init starter
    - choose blank
3. expo install react-redux @reduxjs/toolkit react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens react-native-web react-navigation react-navigation-stack @react-native-community/masked-view
4. npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
5. npm i nativewind
6. npm i --save-dev tailwindcss // nativewind needs this as peer dep
7. npx tailwindcss init // create tailwind.config.ts
## need to install ngrok to use tunnel in expo
sudo npm i -g @expo/ngrok@^4.1.0