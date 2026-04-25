import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-BeJCrU6L.js";
import { S as Section } from "./Section-B9uJm4Lq.js";
import { a as productCategories, t as totalProducts } from "./products-BbPuHTvO.js";
import { c as createLucideIcon, m as motion, Z as Zap } from "./router-B8cbCND_.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./wrench-PecM8k5x.js";
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
function CatalogPage() {
  const [q, setQ] = reactExports.useState("");
  const filtered = reactExports.useMemo(() => {
    if (!q.trim()) return productCategories;
    const term = q.toLowerCase();
    return productCategories.map((c) => ({
      ...c,
      items: c.items.filter((i) => i.toLowerCase().includes(term))
    })).filter((c) => c.items.length > 0);
  }, [q]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "📋 पूरी प्रोडक्ट सूची", subtitle: `${totalProducts}+ प्रोडक्ट्स — सभी कैटेगरी एक जगह`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-xl mx-auto mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "प्रोडक्ट खोजें... जैसे 'LED बल्ब', 'MCB'", value: q, onChange: (e) => setQ(e.target.value), className: "w-full pl-12 pr-4 py-3.5 rounded-full glass-strong border-primary/30 focus:border-primary outline-none text-foreground placeholder:text-muted-foreground" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: filtered.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-50px"
    }, transition: {
      delay: i % 4 * 0.05
    }, className: "glass-strong rounded-2xl p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-accent border-b-2 border-primary pb-2 mb-4 inline-block", children: cat.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5", children: cat.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-muted-foreground py-1 border-b border-dashed border-border/30 hover:text-primary transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3 text-primary shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
      ] }, item)) })
    ] }, cat.title)) }),
    filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-muted-foreground py-16", children: "कोई रिज़ल्ट नहीं मिला। कृपया दूसरा कीवर्ड आज़माएं।" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-block px-8 py-4 rounded-2xl glass-strong border-dashed border-primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl text-accent", style: {
        textShadow: "0 0 20px var(--primary-glow)"
      }, children: [
        "⚡ कुल ",
        totalProducts,
        "+ प्रोडक्ट्स ⚡"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: "सभी ब्रांड • वारंटी के साथ" })
    ] }) })
  ] }) });
}
export {
  CatalogPage as component
};
