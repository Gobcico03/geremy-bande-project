import { _ as _sfc_main$1 } from './Drawer-CVnTLMc2.mjs';
import { _ as _sfc_main$2 } from './NuxtImg-BBe_p-R2.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-aeFFRLeD.mjs';
import { _ as __nuxt_component_2 } from './client-only-BTgv9BoC.mjs';
import { e as useAsyncData, q as queryContent } from './server.mjs';
import { withAsyncContext, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './MainNavigation-CqITBoqP.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: blogposts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("blogposts", () => {
      return queryContent("/blog").find();
    })), __temp = await __temp, __restore(), __temp);
    function formatDate(date) {
      const options = { year: "numeric", month: "long" };
      return new Date(date).toLocaleDateString(void 0, options);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Drawer = _sfc_main$1;
      const _component_NuxtImg = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="pr-5">`);
      _push(ssrRenderComponent(_component_Drawer, null, null, _parent));
      _push(`</div><main class="mx-auto max-w-4xl space-y-6 px-4 mb-20 mt-10"><div class="text-xl font-bold"> Blog </div><div class="masonry"><!--[-->`);
      ssrRenderList(unref(blogposts), (post) => {
        _push(`<div class="masonry-item"><div class="masonry-image">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: post.thumbnail,
          alt: "Post thumbnail",
          class: "w-full h-64 object-cover rounded-md mb-4",
          width: 750,
          height: 550
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: post._path,
          class: "block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="masonry-item-text p-4"${_scopeId}><h2 class="text-xl font-semibold mb-2"${_scopeId}>${ssrInterpolate(post.title)}</h2>`);
              if (post.description) {
                _push2(`<p class="text-gray-600 line-clamp-3"${_scopeId}>${ssrInterpolate(post.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
              if (post.date) {
                _push2(`<p class="text-xs opacity-50 hover:opacity-100"${_scopeId}>last updated on: ${ssrInterpolate(formatDate(post.date))} `);
                if (post.author) {
                  _push2(`<span class="text-xs"${_scopeId}>authored by: ${ssrInterpolate(post.author)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "masonry-item-text p-4" }, [
                  createVNode("h2", { class: "text-xl font-semibold mb-2" }, toDisplayString(post.title), 1),
                  post.description ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-gray-600 line-clamp-3"
                  }, toDisplayString(post.description), 1)) : createCommentVNode("", true),
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      post.tags ? (openBlock(), createBlock("article", {
                        key: 0,
                        class: "text-xs mt-2"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(post.tags, (item, index) => {
                          return openBlock(), createBlock("li", {
                            key: index,
                            class: "inline mr-2"
                          }, [
                            createVNode(_component_NuxtLink, {
                              to: `/tags/${item}`
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024),
                  post.date ? (openBlock(), createBlock("p", {
                    key: 1,
                    class: "text-xs opacity-50 hover:opacity-100"
                  }, [
                    createTextVNode("last updated on: " + toDisplayString(formatDate(post.date)) + " ", 1),
                    post.author ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-xs"
                    }, "authored by: " + toDisplayString(post.author), 1)) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CffkTfuN.mjs.map
