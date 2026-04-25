import { T as jsxRuntimeExports } from "./worker-entry-BeJCrU6L.js";
import { m as motion } from "./router-B8cbCND_.js";
function Section({
  id,
  title,
  subtitle,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id, className: `max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 ${className}`, children: [
    title && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6 },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gradient-accent", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-2xl mx-auto", children: subtitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-5 h-1 w-24 bg-gradient-primary rounded-full glow-primary" })
        ]
      }
    ),
    children
  ] });
}
export {
  Section as S
};
