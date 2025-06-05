import { _ as _sfc_main$3 } from './Drawer-CVnTLMc2.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, resolveComponent, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_2 } from './client-only-BTgv9BoC.mjs';
import { Chart, Title, Tooltip, Legend, ArcElement } from 'chart.js';
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
import './MainNavigation-CqITBoqP.mjs';
import './nuxt-link-aeFFRLeD.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AllbooksTagChart",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(Title, Tooltip, Legend, ArcElement);
    ref([]);
    ref("All");
    ref({});
    ref({
      labels: [],
      datasets: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-10" }, _attrs))}><p class="text-xl font-bold mt-10 pb-5">Categories on items:</p>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Charts/AllbooksTagChart.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AllbooksArticlesTagTable",
  __ssrInlineRender: true,
  setup(__props) {
    const folderDetails = ref([]);
    const totalArticleCount = ref(0);
    const totalUniqueTagsCount = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-auto mb-10" }, _attrs))}><p class="text-xl font-bold opacity-90 pb-5">Items, categories and tags</p><table class="min-w-full divide-y divide-gray-300 table-transparent"><thead class="mb-20 opacity-40"><tr><th class="py-2 text-left text-xs font-medium">Type</th><th class="py-2 text-left text-xs font-medium">Nr of items</th><th class="py-2 text-left text-xs font-medium">Nr of tags</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(folderDetails.value, (folder) => {
        _push(`<tr><td class="py-2 whitespace-nowrap text-sm font-medium">`);
        _push(ssrRenderComponent(_component_router_link, {
          to: folder.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(folder.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(folder.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td><td class="py-2 whitespace-nowrap text-sm">${ssrInterpolate(folder.articleCount)}</td><td class="py-2 whitespace-nowrap text-sm">${ssrInterpolate(folder.uniqueTagsCount)}</td></tr>`);
      });
      _push(`<!--]--><tr class="opacity-40"><td class="py-2 whitespace-nowrap text-sm font-bold">Total</td><td class="py-2 whitespace-nowrap text-sm font-bold">${ssrInterpolate(totalArticleCount.value)}</td><td class="py-2 whitespace-nowrap text-sm font-bold">${ssrInterpolate(totalUniqueTagsCount.value)}</td></tr></tbody></table></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Charts/AllbooksArticlesTagTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "dash",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Drawer = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="pr-5">`);
      _push(ssrRenderComponent(_component_Drawer, null, null, _parent));
      _push(`</div><div class="container"><div><h1 class="text-3xl md:text-3xl lg:text-6xl lg:mb-10 font-bold"> Dashboard</h1></div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dash.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dash-FYboJVFT.mjs.map
