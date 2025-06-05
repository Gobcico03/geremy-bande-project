import { _ as __nuxt_component_0 } from './nuxt-link-aeFFRLeD.mjs';
import { e as useAsyncData, q as queryContent } from './server.mjs';
import { ref, withAsyncContext, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "MainNavigation",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const folders = ref([]);
    [__temp, __restore] = withAsyncContext(() => useAsyncData("folders", () => queryContent("/").sort({ numbernavigation: 1 }).find())), __temp = await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><!--[-->`);
      ssrRenderList(folders.value, (post) => {
        _push(`<ul>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: post._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<li class=""${_scopeId}>${ssrInterpolate(post.title)}</li>`);
            } else {
              return [
                createVNode("li", { class: "" }, toDisplayString(post.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</ul>`);
      });
      _push(`<!--]--><hr></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/MainNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=MainNavigation-ClPXfOiC.mjs.map
