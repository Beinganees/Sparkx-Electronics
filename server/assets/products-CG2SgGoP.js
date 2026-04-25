import { T as jsxRuntimeExports } from "./worker-entry-BX9aAf9D.js";
import { S as Section } from "./Section-C27feaxi.js";
import { P as ProductCard } from "./ProductCard-BA73jsCI.js";
import { p as productCards } from "./products-gRi2lDfT.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-Cl7ewKuU.js";
import "./wrench-4w3uvXzN.js";
function ProductsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "🃏 प्रोडक्ट कार्ड्स", subtitle: "हर कार्ड में फोटो, उपयोग, इंस्टॉलेशन स्टेप्स और सर्विसिंग गाइड", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: productCards.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }, p.id)) }) }) });
}
export {
  ProductsPage as component
};
