import { _ as __nuxt_component_2 } from './client-only-BTgv9BoC.mjs';
import { mergeProps, useSSRContext, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$4 = {
  __name: "Layout1",
  __ssrInlineRender: true,
  props: ["data", "formatDate"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout1" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Layout1.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Layout2",
  __ssrInlineRender: true,
  props: ["data", "formatDate"],
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout2" }, _attrs))} data-v-a420b63d>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Layout2.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Layout2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a420b63d"]]);
const _sfc_main$2 = {
  __name: "Layout3",
  __ssrInlineRender: true,
  props: ["data", "formatDate"],
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout2" }, _attrs))} data-v-c4a5c57a>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Layout3.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Layout3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c4a5c57a"]]);
const _sfc_main$1 = {
  __name: "Layout4",
  __ssrInlineRender: true,
  props: ["data", "formatDate"],
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout4" }, _attrs))} data-v-be30fee7>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Layout4.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Layout4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-be30fee7"]]);
const _sfc_main = {
  __name: "Layout5",
  __ssrInlineRender: true,
  props: ["data", "formatDate"],
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout5" }, _attrs))} data-v-0bd4e363>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Layout5.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Layout5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0bd4e363"]]);

export { Layout5 as L, _sfc_main$4 as _, Layout4 as a, Layout3 as b, Layout2 as c };
//# sourceMappingURL=Layout5-_kxLfx07.mjs.map
