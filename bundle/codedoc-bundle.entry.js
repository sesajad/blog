import { getRenderer } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/content/theme.ts';installTheme();
import { countCards } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/coding-blog-plugin/dist/es5/components/article-card/count-cards.js';countCards();
import { zoomOnFormula } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/formula/zoom-on-formula.js';zoomOnFormula();
import { codeSelection } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { Author } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/coding-blog-plugin/dist/es5/components/author/index.js';
import { ToCToggle } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { ArticleCard } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/coding-blog-plugin/dist/es5/components/article-card/index.js';
import { ToCPrevNext } from '/home/runner/work/sesajad.coding.blog/sesajad.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';

const components = {
  'ylYa/4ufj9QlJdFvnn+Y6w==': Author,
  '56wK23hnpB5qisWh57QS+Q==': ToCToggle,
  '3BUwzqQzsN9L9NjFnOzTSQ==': DarkModeSwitch,
  'hHqXMJQoCuKATcWej33b0w==': ConfigTransport,
  'EMlmcn/xVVO5Qa9s2cgAVQ==': ArticleCard,
  'a6U4bugN6opEJttUjNv9wQ==': ToCPrevNext
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}