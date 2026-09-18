
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 672, hash: '28981b5467e4a5a03b5a6fa632e294de13d67109873c87d1164209543d8824bc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 948, hash: '32ea8a04ab79c2bc1274140e2711fc4745fb1587c308315191093ab6211dacbd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9601, hash: '0397434dd12197dfd7f29feaa4ee65b0fc5ac4db86b45eabd1fa6614a515204e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4O73SRUF.css': {size: 112, hash: 'INXs/ijOs3M', text: () => import('./assets-chunks/styles-4O73SRUF_css.mjs').then(m => m.default)}
  },
};
