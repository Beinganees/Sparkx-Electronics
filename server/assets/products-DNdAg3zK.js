import { T as jsxRuntimeExports } from "./worker-entry-BeJCrU6L.js";
import { S as Section } from "./Section-B9uJm4Lq.js";
import { P as ProductCard } from "./ProductCard-B7G9p8nj.js";
import { p as productCards } from "./products-BbPuHTvO.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-B8cbCND_.js";
import "./wrench-PecM8k5x.js";
function ProductsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "🃏 प्रोडक्ट कार्ड्स", subtitle: "हर कार्ड में फोटो, उपयोग, इंस्टॉलेशन स्टेप्स और सर्विसिंग गाइड", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: productCards.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }, p.id)) }) }) });
}
export {
  ProductsPage as component
};
