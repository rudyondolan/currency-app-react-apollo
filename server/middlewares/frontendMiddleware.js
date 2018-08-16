import addProdMiddlewares from './addProdMiddlewares';
import webpackConfig from '../../internals/webpack/webpack.dev.babel';
import addDevMiddlewares from './addDevMiddlewares';

/**
 * Front-end middleware
 */
export default function(app, options) {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    addProdMiddlewares(app, options);
  } else {
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
}
