import { e as useAsyncData, q as queryContent } from './server.mjs';
import { ref, withAsyncContext, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "BlogNavigation",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const groupedBlogFiles = ref({});
    const { data } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("contentBlogFiles", async () => {
      const content = await queryContent("/blog").sort({ date: 1 }).limit(5).find();
      return content;
    })), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      data.value.forEach((file) => {
        const folder = file._dir || "Uncategorized";
        if (!groupedBlogFiles.value[folder]) {
          groupedBlogFiles.value[folder] = [];
        }
        groupedBlogFiles.value[folder].push(file);
      });
    }
    function formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(void 0, options);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(groupedBlogFiles.value, (files, folder) => {
        _push(`<div><ul><!--[-->`);
        ssrRenderList(files, (file, index) => {
          _push(`<li class="pb-3"><a${ssrRenderAttr("href", file._path)}>${ssrInterpolate(file.title || file._path)} `);
          if (file.date) {
            _push(`<p class="text-xs opacity-50 hover:opacity-100">last updated on: ${ssrInterpolate(formatDate(file.date))} `);
            if (file.author) {
              _push(`<span class="text-xs">authored by: ${ssrInterpolate(file.author)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/navs/BlogNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=BlogNavigation-Do091KxT.mjs.map
