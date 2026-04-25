import { T as jsxRuntimeExports } from "./worker-entry-BX9aAf9D.js";
import { c as createLucideIcon, m as motion, a as MapPin } from "./router-Cl7ewKuU.js";
import { W as Wrench } from "./wrench-4w3uvXzN.js";
const __iconNode$1 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode);
function ProductCard({ product, index }) {
  const Icon = product.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.5, delay: index % 3 * 0.1 },
      whileHover: { y: -8 },
      className: "glass-strong rounded-3xl overflow-hidden flex flex-col group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "h-44 relative flex items-center justify-center overflow-hidden",
            style: { background: product.bg },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30 bg-grid", style: {
                backgroundImage: "linear-gradient(var(--primary-glow) 1px, transparent 1px), linear-gradient(90deg, var(--primary-glow) 1px, transparent 1px)",
                backgroundSize: "20px 20px"
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  whileHover: { scale: 1.15, rotate: 8 },
                  transition: { type: "spring", stiffness: 300 },
                  className: "relative w-24 h-24 rounded-2xl flex items-center justify-center",
                  style: {
                    background: `radial-gradient(circle, ${product.brandColor}, transparent 70%)`
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-14 h-14 text-foreground drop-shadow-[0_0_15px_var(--primary-glow)]", strokeWidth: 1.4 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "absolute top-3 right-3 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full text-white",
                  style: { background: product.brandColor },
                  children: product.brand
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-accent text-accent-foreground", children: product.price })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex-1 flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-accent text-xl border-b-2 border-primary pb-2", children: product.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold", children: "उपयोग: " }),
              product.use
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold", children: "कैसे उपयोग: " }),
              product.howTo
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary font-semibold flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "w-4 h-4" }),
              " इंस्टॉलेशन:"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 pl-1", children: product.steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-muted-foreground text-[13px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-accent shrink-0 mt-1" }),
              s
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto p-3 rounded-xl bg-secondary/10 border-l-4 border-secondary text-sm text-muted-foreground", children: [
            "🔧 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90", children: "सर्विसिंग: " }),
            product.service
          ] })
        ] })
      ]
    }
  );
}
export {
  ProductCard as P
};
