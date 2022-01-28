# @timly/mobile

This is the mobile application for Timly (time tally) tracker app. It is an [expo.dev] react-native application that runs on iOS and Android.

[expo.dev]: https://docs.expo.dev/

# Expo

You'll find included:

- Expo SDK 43 (with Hermes on iOS and Android)
- TypeScript
- Reanimated
- React Native for Web
- React Native Bottom Sheet
- React Native Paper
- Dripsy

And ready-to-use (small configuration required):

- Expo Application Services
- Custom Development Client
- Sentry

## Development

> Native

Expo entrypoint: `packages/mobile/App.tsx`

`cd packages/mobile`

`yarn start:mobile` to start iOS and Android app with Expo

Demo: https://expo.dev/@username/example?release-channel=production

Pro tip: build and launch a custom development client with `SCHEME=com.timly.name yarn run:ios -d` (replace `name` with your first name)

## Notes on adding packages

Still need to figure out how to add packages used by mobile, web and app.
