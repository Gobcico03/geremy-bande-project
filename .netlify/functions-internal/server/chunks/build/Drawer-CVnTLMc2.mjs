import { k as useFetch, l as useState, _ as _export_sfc } from './server.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, withCtx, createVNode, withAsyncContext, mergeProps, openBlock, createBlock } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import _sfc_main$6 from './MainNavigation-CqITBoqP.mjs';
import { _ as __nuxt_component_2$1 } from './client-only-BTgv9BoC.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-aeFFRLeD.mjs';

const _sfc_main$5 = {
  __name: "Titleblock",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const settings = ref({});
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useFetch("/_data/settings.json", "$LwW1mh7zhR")), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      settings.value = data.value;
    } else if (error.value) {
      console.error("Error loading settings:", error.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "opacity-80 animate-fade animate-once animate-delay-[100ms]" }, _attrs))}><div class="text-2xl font-bold">${ssrInterpolate(settings.value.site_title)}</div><div class="text-sm opacity-80">${ssrInterpolate(settings.value.site_subtitle)}</div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Titleblock.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Navigations",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const navigations = ref({});
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useFetch("/_data/menus.json", "$VVIWgAXYip")), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      navigations.value = data.value;
    } else if (error.value) {
      console.error("Error loading navigations:", error.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "opacity-80 animate-fade animate-once animate-delay-[10ms] pt-5" }, _attrs))}>`);
      if (navigations.value.mainmenu.mainavigation_on_off) {
        _push(`<div><div class="animate-fade animate-once animate-delay-[150ms]">`);
        _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigations.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ColorMode",
  __ssrInlineRender: true,
  setup(__props) {
    useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e10a4902>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ColorMode.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e10a4902"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ColorMode = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-7f3b1687><div class="footer text-xs mt-5" data-v-7f3b1687><div class="flex" data-v-7f3b1687><div class="flex basis-11/12" data-v-7f3b1687>`);
  _push(ssrRenderComponent(_component_ColorMode, null, null, _parent));
  _push(`</div><div class="flex basis-1/12" data-v-7f3b1687><div class="flex-1 basis-5/12 pr-1" data-v-7f3b1687>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" data-v-7f3b1687${_scopeId}><path fill="currentColor" d="M5.692 19V9.946L2.604 12.25L2 11.458L12 4l4.346 3.223V5h1.885v3.639l3.788 2.819l-.603.792l-3.089-2.304V19h-5.096v-5.23h-2.462V19zm1-1H9.77v-5.23h4.462V18h3.096V9.21L12 5.256L6.692 9.21zm3.5-7.994h3.616q0-.704-.542-1.159q-.543-.455-1.266-.455t-1.265.453t-.543 1.16M9.77 18v-5.23h4.462V18v-5.23H9.769z" data-v-7f3b1687${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "2em",
            height: "2em",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              fill: "currentColor",
              d: "M5.692 19V9.946L2.604 12.25L2 11.458L12 4l4.346 3.223V5h1.885v3.639l3.788 2.819l-.603.792l-3.089-2.304V19h-5.096v-5.23h-2.462V19zm1-1H9.77v-5.23h4.462V18h3.096V9.21L12 5.256L6.692 9.21zm3.5-7.994h3.616q0-.704-.542-1.159q-.543-.455-1.266-.455t-1.265.453t-.543 1.16M9.77 18v-5.23h4.462V18v-5.23H9.769z"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex-1 basis-5/12 pr-1" data-v-7f3b1687>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/search" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" data-v-7f3b1687${_scopeId}><path fill="currentColor" d="M9.539 15.23q-2.398 0-4.065-1.666Q3.808 11.899 3.808 9.5t1.666-4.065T9.539 3.77t4.064 1.666T15.269 9.5q0 1.042-.369 2.017t-.97 1.668l5.909 5.907q.14.14.15.345q.009.203-.15.363q-.16.16-.354.16t-.354-.16l-5.908-5.908q-.75.639-1.725.989t-1.96.35m0-1q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361T12.9 6.14T9.54 4.77q-1.991 0-3.361 1.37T4.808 9.5t1.37 3.36t3.36 1.37" data-v-7f3b1687${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "2em",
            height: "2em",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              fill: "currentColor",
              d: "M9.539 15.23q-2.398 0-4.065-1.666Q3.808 11.899 3.808 9.5t1.666-4.065T9.539 3.77t4.064 1.666T15.269 9.5q0 1.042-.369 2.017t-.97 1.668l5.909 5.907q.14.14.15.345q.009.203-.15.363q-.16.16-.354.16t-.354-.16l-5.908-5.908q-.75.639-1.725.989t-1.96.35m0-1q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361T12.9 6.14T9.54 4.77q-1.991 0-3.361 1.37T4.808 9.5t1.37 3.36t3.36 1.37"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex-1 basis-5/12 pr-1 text-right" data-v-7f3b1687>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://github.com/bureaupixel/",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256" data-v-7f3b1687${_scopeId}><path fill="currentColor" d="M203.94 76.16A55.73 55.73 0 0 0 199.46 30a4 4 0 0 0-3.46-2a55.78 55.78 0 0 0-46 24h-28a55.78 55.78 0 0 0-46-24a4 4 0 0 0-3.46 2a55.73 55.73 0 0 0-4.48 46.16A53.8 53.8 0 0 0 60 104v8a52.06 52.06 0 0 0 52 52h1.41A36 36 0 0 0 100 192v12H72a28 28 0 0 1-28-28a36 36 0 0 0-36-36a4 4 0 0 0 0 8a28 28 0 0 1 28 28a36 36 0 0 0 36 36h28v20a4 4 0 0 0 8 0v-40a28 28 0 0 1 56 0v40a4 4 0 0 0 8 0v-40a36 36 0 0 0-13.41-28H160a52.06 52.06 0 0 0 52-52v-8a53.8 53.8 0 0 0-8.06-27.84M204 112a44.05 44.05 0 0 1-44 44h-48a44.05 44.05 0 0 1-44-44v-8a45.76 45.76 0 0 1 7.71-24.89a4 4 0 0 0 .53-3.84a47.82 47.82 0 0 1 2.1-39.21a47.8 47.8 0 0 1 38.12 22.1a4 4 0 0 0 3.37 1.84h32.34a4 4 0 0 0 3.37-1.84a47.8 47.8 0 0 1 38.12-22.1a47.82 47.82 0 0 1 2.1 39.21a4 4 0 0 0 .53 3.83A45.85 45.85 0 0 1 204 104Z" data-v-7f3b1687${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "2em",
            height: "2em",
            viewBox: "0 0 256 256"
          }, [
            createVNode("path", {
              fill: "currentColor",
              d: "M203.94 76.16A55.73 55.73 0 0 0 199.46 30a4 4 0 0 0-3.46-2a55.78 55.78 0 0 0-46 24h-28a55.78 55.78 0 0 0-46-24a4 4 0 0 0-3.46 2a55.73 55.73 0 0 0-4.48 46.16A53.8 53.8 0 0 0 60 104v8a52.06 52.06 0 0 0 52 52h1.41A36 36 0 0 0 100 192v12H72a28 28 0 0 1-28-28a36 36 0 0 0-36-36a4 4 0 0 0 0 8a28 28 0 0 1 28 28a36 36 0 0 0 36 36h28v20a4 4 0 0 0 8 0v-40a28 28 0 0 1 56 0v40a4 4 0 0 0 8 0v-40a36 36 0 0 0-13.41-28H160a52.06 52.06 0 0 0 52-52v-8a53.8 53.8 0 0 0-8.06-27.84M204 112a44.05 44.05 0 0 1-44 44h-48a44.05 44.05 0 0 1-44-44v-8a45.76 45.76 0 0 1 7.71-24.89a4 4 0 0 0 .53-3.84a47.82 47.82 0 0 1 2.1-39.21a47.8 47.8 0 0 1 38.12 22.1a4 4 0 0 0 3.37 1.84h32.34a4 4 0 0 0 3.37-1.84a47.8 47.8 0 0 1 38.12-22.1a47.82 47.82 0 0 1 2.1 39.21a4 4 0 0 0 .53 3.83A45.85 45.85 0 0 1 204 104Z"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex-1 basis-5/12 pr-1" data-v-7f3b1687>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/dash" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" data-v-7f3b1687${_scopeId}><path fill="currentColor" d="M3.135 17.442q-.171-.17-.171-.365t.17-.365l5.307-5.306q.459-.46 1.136-.46t1.137.46l2.401 2.402q.193.192.462.183q.27-.01.442-.222l6.208-7.128q.14-.172.338-.172q.197 0 .362.147q.14.14.153.325q.012.186-.128.351l-6.206 7.166q-.46.534-1.155.562q-.697.028-1.206-.482l-2.366-2.365Q9.846 12 9.577 12t-.442.173l-5.27 5.27q-.151.151-.355.16t-.375-.16" data-v-7f3b1687${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "2em",
            height: "2em",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              fill: "currentColor",
              d: "M3.135 17.442q-.171-.17-.171-.365t.17-.365l5.307-5.306q.459-.46 1.136-.46t1.137.46l2.401 2.402q.193.192.462.183q.27-.01.442-.222l6.208-7.128q.14-.172.338-.172q.197 0 .362.147q.14.14.153.325q.012.186-.128.351l-6.206 7.166q-.46.534-1.155.562q-.697.028-1.206-.482l-2.366-2.365Q9.846 12 9.577 12t-.442.173l-5.27 5.27q-.151.151-.355.16t-.375-.16"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex-1 basis-5/12 pr-1 text-right" data-v-7f3b1687>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/admin",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" data-v-7f3b1687${_scopeId}><path fill="currentColor" d="M12 14.98q.214 0 .357-.142t.143-.357t-.143-.357t-.357-.143t-.357.143t-.143.357t.143.357t.357.143M12 13q.214 0 .357-.143t.143-.357V9q0-.213-.143-.357T12 8.5t-.357.143T11.5 9v3.5q0 .214.143.357T12 13m-1.04 8q-.349 0-.605-.229q-.257-.229-.319-.571l-.263-2.092q-.479-.145-1.036-.454q-.556-.31-.947-.664l-1.915.824q-.317.14-.644.03t-.504-.415L3.648 15.57q-.177-.305-.104-.638t.348-.546l1.672-1.25q-.045-.272-.073-.559q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626l-1.672-1.25q-.275-.213-.338-.555t.113-.648l1.06-1.8q.177-.287.504-.406t.644.021l1.896.804q.448-.373.97-.673q.52-.3 1.013-.464l.283-2.092q.061-.342.318-.571T10.96 3h2.08q.349 0 .605.229q.257.229.319.571l.263 2.112q.575.202 1.016.463t.909.654l1.992-.804q.318-.14.645-.021t.503.406l1.06 1.819q.177.306.104.638t-.348.547L18.36 10.92q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l1.69 1.27q.275.213.358.546t-.094.638l-1.066 1.839q-.176.306-.513.415q-.337.11-.654-.03l-1.923-.824q-.467.393-.94.673t-.985.445l-.264 2.111q-.061.342-.318.571t-.605.23zm.04-1h1.956l.369-2.708q.756-.2 1.36-.549q.606-.349 1.232-.956l2.495 1.063l.994-1.7l-2.189-1.644q.125-.427.166-.786q.04-.358.04-.72q0-.38-.04-.72t-.166-.747l2.227-1.683l-.994-1.7l-2.552 1.07q-.454-.499-1.193-.935q-.74-.435-1.4-.577L13 4h-1.994l-.312 2.689q-.756.161-1.39.52q-.633.358-1.26.985L5.55 7.15l-.994 1.7l2.169 1.62q-.125.336-.175.73t-.05.82q0 .38.05.755t.156.73l-2.15 1.645l.994 1.7l2.475-1.05q.589.594 1.222.953q.634.359 1.428.559zm1-8" data-v-7f3b1687${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "2em",
            height: "2em",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              fill: "currentColor",
              d: "M12 14.98q.214 0 .357-.142t.143-.357t-.143-.357t-.357-.143t-.357.143t-.143.357t.143.357t.357.143M12 13q.214 0 .357-.143t.143-.357V9q0-.213-.143-.357T12 8.5t-.357.143T11.5 9v3.5q0 .214.143.357T12 13m-1.04 8q-.349 0-.605-.229q-.257-.229-.319-.571l-.263-2.092q-.479-.145-1.036-.454q-.556-.31-.947-.664l-1.915.824q-.317.14-.644.03t-.504-.415L3.648 15.57q-.177-.305-.104-.638t.348-.546l1.672-1.25q-.045-.272-.073-.559q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626l-1.672-1.25q-.275-.213-.338-.555t.113-.648l1.06-1.8q.177-.287.504-.406t.644.021l1.896.804q.448-.373.97-.673q.52-.3 1.013-.464l.283-2.092q.061-.342.318-.571T10.96 3h2.08q.349 0 .605.229q.257.229.319.571l.263 2.112q.575.202 1.016.463t.909.654l1.992-.804q.318-.14.645-.021t.503.406l1.06 1.819q.177.306.104.638t-.348.547L18.36 10.92q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l1.69 1.27q.275.213.358.546t-.094.638l-1.066 1.839q-.176.306-.513.415q-.337.11-.654-.03l-1.923-.824q-.467.393-.94.673t-.985.445l-.264 2.111q-.061.342-.318.571t-.605.23zm.04-1h1.956l.369-2.708q.756-.2 1.36-.549q.606-.349 1.232-.956l2.495 1.063l.994-1.7l-2.189-1.644q.125-.427.166-.786q.04-.358.04-.72q0-.38-.04-.72t-.166-.747l2.227-1.683l-.994-1.7l-2.552 1.07q-.454-.499-1.193-.935q-.74-.435-1.4-.577L13 4h-1.994l-.312 2.689q-.756.161-1.39.52q-.633.358-1.26.985L5.55 7.15l-.994 1.7l2.169 1.62q-.125.336-.175.73t-.05.82q0 .38.05.755t.156.73l-2.15 1.645l.994 1.7l2.475-1.05q.589.594 1.222.953q.634.359 1.428.559zm1-8"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7f3b1687"]]);
const _sfc_main$1 = {
  __name: "utilNav",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const settings = ref({});
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useFetch("/_data/settings.json", "$5t0TeSz6sC")), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      settings.value = data.value;
    } else if (error.value) {
      console.error("Error loading settings:", error.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "opacity-50 animate-fade animate-once animate-delay-[100ms]" }, _attrs))}><div class="text-xs mb-3">${ssrInterpolate(settings.value.copyright)}</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/utilNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Drawer",
  __ssrInlineRender: true,
  setup(__props) {
    const drawer = ref(false);
    ref("ltr");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_drawer = resolveComponent("el-drawer");
      const _component_Titleblock = _sfc_main$5;
      const _component_Navigations = _sfc_main$4;
      const _component_Footer = __nuxt_component_2;
      const _component_UtilNav = _sfc_main$1;
      _push(`<!--[--><div class="flex animate-fade animate-once animate-delay-[500ms]"><div class="flex-auto w-1 pt-3"></div><div class="flex-row pt-5 justify-end"><button style="${ssrRenderStyle({ "margin-left": "16px" })}" class="bg-white dark:bg-slate-900 bg-opacity-20 hover:bg-opacity-90 dark:bg-opacity-10"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z"></path></svg></button></div></div>`);
      _push(ssrRenderComponent(_component_el_drawer, {
        modelValue: drawer.value,
        "onUpdate:modelValue": ($event) => drawer.value = $event,
        class: "drawer min-w-fit max-w-screen",
        direction: "rtl",
        "custom-class": "fixed-drawer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Titleblock, null, null, _parent2, _scopeId));
            _push2(`</div><div class="flex-1 overflow-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Navigations, null, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-auto footer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UtilNav, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col h-full" }, [
                createVNode("div", null, [
                  createVNode(_component_Titleblock)
                ]),
                createVNode("div", { class: "flex-1 overflow-auto" }, [
                  createVNode(_component_Navigations)
                ]),
                createVNode("div", { class: "mt-auto footer" }, [
                  createVNode(_component_Footer),
                  createVNode(_component_UtilNav)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Drawer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Drawer-CVnTLMc2.mjs.map
