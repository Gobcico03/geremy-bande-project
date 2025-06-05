import _sfc_main$1 from './ContentQuery-BDMNK7Ki.mjs';
import { mergeProps, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
import { L as Layout5, a as Layout4, b as Layout3, c as Layout2, _ as _sfc_main$4 } from './Layout5-_kxLfx07.mjs';
import './server.mjs';
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

const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    function getLayoutComponent(layout) {
      switch (layout) {
        case "layout1":
          return _sfc_main$4;
        case "layout2":
          return Layout2;
        case "layout3":
          return Layout3;
        case "layout4":
          return Layout4;
        case "layout5":
          return Layout5;
        default:
          return null;
      }
    }
    function formatDate(date) {
      const options = { year: "numeric", month: "long" };
      return new Date(date).toLocaleDateString(void 0, options);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentQuery = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-20 animate-fade animate-once animate-delay-[500ms]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ContentQuery, {
        path: _ctx.$route.path,
        find: "one"
      }, {
        default: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(getLayoutComponent(data.layoutpage)), {
              data,
              formatDate
            }, null), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(getLayoutComponent(data.layoutpage)), {
                data,
                formatDate
              }, null, 8, ["data"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-CHdQ158j.mjs.map
