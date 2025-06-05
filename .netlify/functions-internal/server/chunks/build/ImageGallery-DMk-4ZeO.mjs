import { _ as __nuxt_component_2 } from './client-only-BTgv9BoC.mjs';
import { _ as _export_sfc, i as useRoute, e as useAsyncData, q as queryContent } from './server.mjs';
import { withAsyncContext, ref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "ImageGallery",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const actualPath = route.path.replace(/\/$/, "");
    [__temp, __restore] = withAsyncContext(() => useAsyncData(
      "post",
      () => queryContent(actualPath).findOne()
    )), __temp = await __temp, __restore();
    ref([]);
    ref(false);
    ref({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/ImageGallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ImageGallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-29009ac9"]]);

export { ImageGallery as default };
//# sourceMappingURL=ImageGallery-DMk-4ZeO.mjs.map
