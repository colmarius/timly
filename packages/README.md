## Architecture

Project structure:

```
packages
├── app
├── mobile
└── web
```

### Root Project

- Don't add any package here that are needed by app, mobile or web

### App (Timly)

- Don't add any package here (needs more investigation)
- Add packages as peerDependencies, for now

### Mobile (expo client)

- Add all your React Native and universal packages here
- Publish to Expo with `yarn publish:production`

### Web (next.js client)

### Next.js

- Add your web-only packages here
- Deploy to Vercel with `yarn deploy` -- if it fails, make sure to configure your project correctly:
  go to your project settings on Vercel and set the "Framework Preset" to Next.js and the "Root Directory" to `packages/web`

## Credits

Project structure inspired from [axeldelafosse/expo-next-monorepo-example](https://github.com/axeldelafosse/expo-next-monorepo-example)
