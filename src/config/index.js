// @flow

import cosmiconfig from 'cosmiconfig';
import glob from 'globby';
import path from 'path';

import createWebpackConfig from './webpack';
import createReportConfig from './report';

export type UserConfigType = {
  files?: string[],
  snapshotRoot?: string,
  buildPath?: string,
  assetPath?: string,
};

export type ConfigType = {
  [key: string]: any,
};

export default async function getConfig(): Promise<ConfigType> {
  const {config}: {config: UserConfigType} = await cosmiconfig('snapshots');
  const finalConfig = {...config};

  finalConfig.snapshotRoot = config.snapshotRoot || path.resolve('./snapshots');
  finalConfig.buildPath = config.buildPath || path.join(finalConfig.snapshotRoot, 'build');
  finalConfig.assetPath = config.assetPath || path.join(finalConfig.buildPath, 'assets');
  finalConfig.webpack = createWebpackConfig(finalConfig);
  finalConfig.report = createReportConfig(finalConfig);
  finalConfig.files = glob.sync(config.files || []);
  finalConfig.threshold = config.threshold == null ? 0 : config.threshold;
  finalConfig.record = config.record == null ? false : config.record;
  finalConfig.viewports = config.viewports || [{height: 400, width: 400}];

  return finalConfig;
}