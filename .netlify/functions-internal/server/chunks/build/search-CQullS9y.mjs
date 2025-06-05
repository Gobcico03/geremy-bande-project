import { _ as _sfc_main$1 } from './Drawer-CVnTLMc2.mjs';
import { _ as _export_sfc, s as _sfc_main$3 } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './MainNavigation-CqITBoqP.mjs';
import './nuxt-link-aeFFRLeD.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'minisearch';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'fs';
import 'path';
import './client-only-BTgv9BoC.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Drawer = _sfc_main$1;
  const _component_SearchBox = _sfc_main$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-screen" }, _attrs))}><div class="pr-5">`);
  _push(ssrRenderComponent(_component_Drawer, null, null, _parent));
  _push(`</div><div class="container mx-auto max-w-4xl space-y-6 pt-5"><h1 class="text-4xl font-bold"> Search </h1>`);
  _push(ssrRenderComponent(_component_SearchBox, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { search as default };
//# sourceMappingURL=search-CQullS9y.mjs.map
