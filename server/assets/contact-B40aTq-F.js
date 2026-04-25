import { T as jsxRuntimeExports } from "./worker-entry-BeJCrU6L.js";
import { S as Section } from "./Section-B9uJm4Lq.js";
import { c as createLucideIcon, P as Phone, M as MessageCircle, C as Camera, a as MapPin, m as motion } from "./router-B8cbCND_.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
const contacts = [{
  icon: Phone,
  label: "फ़ोन",
  value: "9120795494",
  href: "tel:9120795494"
}, {
  icon: MessageCircle,
  label: "WhatsApp",
  value: "9120795494",
  href: "https://wa.me/919120795494"
}, {
  icon: Camera,
  label: "इंस्टाग्राम",
  value: "sparkx_electronics",
  href: "https://instagram.com/sparkx_electronics"
}, {
  icon: MapPin,
  label: "पता",
  value: "Husenpur Musalman, Post Shajana, Hamjapur, Allapur, Ambedkar Nagar, Uttar Pradesh - 224181"
}, {
  icon: Clock,
  label: "समय",
  value: "सोम-रवि • सुबह 8 बजे - रात 9 बजे"
}];
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "📞 संपर्क करें", subtitle: "हम आपकी सेवा में हाजिर हैं", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      contacts.map((c, i) => {
        const Icon = c.icon;
        const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: -20
        }, whileInView: {
          opacity: 1,
          x: 0
        }, transition: {
          delay: i * 0.08
        }, className: "flex items-start gap-4 p-5 glass-strong rounded-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-primary font-semibold", children: c.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: c.value })
          ] })
        ] }, c.label);
        return c.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: c.href, target: "_blank", rel: "noopener noreferrer", children: inner }, c.label) : inner;
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden border mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: "https://www.google.com/maps?q=Husenpur%20Musalman%20Post%20Shajana%20Hamjapur%20Allapur%20Ambedkar%20Nagar%20Uttar%20Pradesh%20224181&output=embed", width: "100%", height: "250", style: {
        border: 0
      }, loading: "lazy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.google.com/maps?q=Husenpur%20Musalman%20Post%20Shajana%20Hamjapur%20Allapur%20Ambedkar%20Nagar%20Uttar%20Pradesh%20224181", target: "_blank", rel: "noopener noreferrer", className: "text-blue-500 text-sm underline", children: "📍 Google Maps में खोलें" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, className: "glass-strong rounded-3xl p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl text-accent", children: "मैसेज भेजें" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs", children: "आपका नाम" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "mt-1 w-full px-4 py-3 rounded-xl border", placeholder: "राम कुमार" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs", children: "फ़ोन नंबर" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", className: "mt-1 w-full px-4 py-3 rounded-xl border", placeholder: "9876543210" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs", children: "कैसी सर्विस चाहिए?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, className: "mt-1 w-full px-4 py-3 rounded-xl border", placeholder: "जैसे: फैन रिपेयर..." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
        window.open("https://wa.me/919120795494", "_blank");
      }, className: "w-full py-3 rounded-xl bg-green-600 text-white flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
        " भेजें"
      ] })
    ] })
  ] }) }) });
}
export {
  ContactPage as component
};
