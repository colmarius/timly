/* eslint-disable @typescript-eslint/no-var-requires */
const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts'); // TODO: check if actually needed
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
  [withTM, withBundleAnalyzer, withFonts, [withExpo, { projectRoot: __dirname + '/../..' }]],
  nextConfig,
);
