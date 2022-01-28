/* eslint-disable @typescript-eslint/no-var-requires */
const { withExpo } = require('@expo/next-adapter');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withTM = require('next-transpile-modules')([
  '@timly/app',
  '@gorhom/bottom-sheet',
  '@gorhom/portal',
  'dripsy',
  '@dripsy/core',
]);

const nextConfig = {};

module.exports = withPlugins(
  [
    withTM,
    withFonts,
    withImages,
    withBundleAnalyzer,
    [withExpo, { projectRoot: __dirname + '/../..' }],
  ],
  nextConfig,
);
