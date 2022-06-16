# React Native Application

This project aims to be a strong foundation for react-native applications. 
It provides a clear and organized structure, core dependencies, and boilerplate to jumpstart development.

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-native-config](https://github.com/luggit/react-native-config) to manage envionments.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-calendar](https://github.com/stefalda/ReactNativeLocalization) for string localization.

## Usage

In the current state of this project, it should give you no issues at all, just run the script, delete your node modules and you should be good to go.

Keep in mind that this library can cause trouble if you are renaming a project that uses `Pods` on the iOS side.

After that you should proceed as with any javascript project:

- Go to your project's root folder and run `npm install`.
- Run  `expo start --web` , `expo run:ios` or `expo run:android` to start your application!

Note: Please read the Setup environments section that is below in this file for more information about the execution scripts.


## Expo Step Up Environment

Go to this url for environment step up (https://reactnative.dev/docs/environment-setup). 
