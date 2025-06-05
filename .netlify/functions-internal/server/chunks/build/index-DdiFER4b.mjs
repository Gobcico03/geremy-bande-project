import { _ as _sfc_main$1 } from './Drawer-CVnTLMc2.mjs';
import { f as useRouter } from './server.mjs';
import { ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const homepageSettings = ref(null);
    ref(null);
    const isLoading = ref(true);
    const hasError = ref(false);
    const displayedTitle = ref("");
    const displayedSubtitle = ref("");
    const displayedCopyright = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Drawer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (isLoading.value) {
        _push(`<div class="flex items-center justify-center h-screen"><p>Loading...</p></div>`);
      } else if (hasError.value) {
        _push(`<div class="flex items-center justify-center h-screen"><p>Error loading settings. Please try again later.</p></div>`);
      } else {
        _push(`<div class="h-screen relative"><div class="relative h-full"><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ backgroundImage: ((_a = homepageSettings.value) == null ? void 0 : _a.thumbnail) ? `url(${homepageSettings.value.thumbnail})` : "" })}"></div><div class="absolute inset-0 bg-black opacity-30"></div><div class="relative z-10 pr-5">`);
        _push(ssrRenderComponent(_component_Drawer, null, null, _parent));
        _push(`</div><div class="info flex flex-col items-center justify-center h-screen relative"><div class="container text-left p-1 lg:p-20"><div class="container opacity-80 animate-fade animate-once animate-delay-[100ms] text-white"><div class="relative"><div class="blur-text montserrat-bold text-6xl font-bold">${ssrInterpolate(displayedTitle.value)}</div><div class="text-6xl font-bold border-r-4 border-white pr-2 animate-blink">${ssrInterpolate(displayedTitle.value)}</div></div><div class="relative mt-4"><div class="blur-text text-2xl font-semibold">${ssrInterpolate(displayedSubtitle.value)}</div><div class="text-2xl font-semibold">${ssrInterpolate(displayedSubtitle.value)}</div></div><div class="relative mt-4"><div class="blur-text font-light">${ssrInterpolate(displayedCopyright.value)}</div><div class="font-light">${ssrInterpolate(displayedCopyright.value)}</div></div></div></div></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DdiFER4b.mjs.map
