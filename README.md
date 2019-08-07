# Native Base Seed App in React Native

This is a conversation of NativeBase-Seed app from Native Base. To manage Login. AsyncStorage is used. 


## Dependencies of this project:

```python
react: 16.8.3
react-native: 0.59.8
native-base: ^2.12.1
react-native-community/async-storage: ^1.4.2
react-native-gesture-handler: ^1.2.2
react-navigation: ^3.11.0
react-redux: ^7.0.3
redux: ^4.0.1
```

## Login Screen

Simple Login functionality is applied to the Screen. Login data is managed using Redux-Store. AsyncStorage is used to check whether the user is login already or not.

![Login Screen](https://github.com/purvangvasani/react-native-NativeBaseSeed/blob/master/src/Screenshots/LoginScreen.png?raw=true)

## Home Screen

After Login successfully, the user is redirected to the Home Screen. Here, the list of data is displayed which on clicked, navigates to the blank screen with the navigation props. React Navigation is used for the moving between the screens.

![Home Screen](https://github.com/purvangvasani/react-native-NativeBaseSeed/blob/master/src/Screenshots/HomeScreen.png?raw=true)


## Blank Screen

The blank screen is used for displaying the data passed from the home screen. Using props, data is displayed on the title of the screen. When the props are not available then Blank screen is displayed.
 

![Blank Screen](https://github.com/purvangvasani/react-native-NativeBaseSeed/blob/master/src/Screenshots/HomeListRouteToBlank.png?raw=true)
