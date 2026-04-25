import { T as jsxRuntimeExports } from "./worker-entry-BeJCrU6L.js";
import { S as Section } from "./Section-B9uJm4Lq.js";
import { c as createLucideIcon, m as motion, Z as Zap } from "./router-B8cbCND_.js";
import { A as Award, S as ShieldCheck } from "./shield-check-DDcU9QlM.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const stats = [{
  icon: Award,
  num: "5+",
  label: "साल अनुभव"
}, {
  icon: Users,
  num: "1500+",
  label: "खुश ग्राहक"
}, {
  icon: ShieldCheck,
  num: "100%",
  label: "ओरिजिनल"
}, {
  icon: Zap,
  num: "221+",
  label: "प्रोडक्ट्स"
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "हमारे बारे में", subtitle: "भरोसा, गुणवत्ता और सेवा का संगम", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      x: -30
    }, whileInView: {
      opacity: 1,
      x: 0
    }, viewport: {
      once: true
    }, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-primary", children: "SparkX Electricals की कहानी" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "SparkX Electricals की शुरुआत Husenpur Musalman, Ambedkar Nagar से एक छोटे से सपने के साथ हुई — हर घर, दुकान और फैक्ट्री तक भरोसेमंद इलेक्ट्रिकल सॉल्यूशन पहुंचाना।" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
        "आज हम ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold", children: "TOOFAN, HAVELLS, CROMPTON, ANCHOR, LUMINOUS, FINOLEX" }),
        " जैसे टॉप ब्रांड्स के ऑथराइज़्ड डीलर हैं और 221+ प्रोडक्ट्स स्टॉक में रखते हैं।"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "हमारी टीम में प्रशिक्षित इलेक्ट्रीशियन शामिल हैं जो मोटर रिपेयर, हाउस वायरिंग, इंडस्ट्रियल इंस्टॉलेशन और इमरजेंसी सर्विस में विशेषज्ञ हैं।" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: stats.map((s, i) => {
      const Icon = s.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.9
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "glass-strong rounded-2xl p-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-8 h-8 text-primary mx-auto mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-black text-gradient-accent", children: s.num }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: s.label })
      ] }, s.label);
    }) })
  ] }) }) });
}
export {
  AboutPage as component
};
