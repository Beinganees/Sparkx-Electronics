import { T as jsxRuntimeExports } from "./worker-entry-BX9aAf9D.js";
import { S as Section } from "./Section-C27feaxi.js";
import { W as Wrench, L as Lightbulb, B as Battery, S as Sun, a as Wind } from "./wrench-4w3uvXzN.js";
import { c as createLucideIcon, P as Phone, m as motion } from "./router-Cl7ewKuU.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M12 16h.01", key: "1drbdi" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }],
  [
    "path",
    {
      d: "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",
      key: "1iv0i2"
    }
  ],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
];
const Factory = createLucideIcon("factory", __iconNode$1);
const __iconNode = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
];
const House = createLucideIcon("house", __iconNode);
const services = [{
  icon: Wrench,
  title: "मोटर/पंखा रिपेयर",
  desc: "TOOFAN, HAVELLS, CROMPTON आदि की विशेषज्ञ मरम्मत। बेयरिंग, कॉइल, कैपेसिटर रिप्लेसमेंट।",
  points: ["सीलिंग फैन", "टेबल फैन", "एग्जॉस्ट फैन", "वॉटर पंप मोटर"]
}, {
  icon: House,
  title: "हाउस वायरिंग",
  desc: "नई या पुरानी वायरिंग, MCB बॉक्स, अर्थिंग और लोड कैलकुलेशन।",
  points: ["कंसील्ड वायरिंग", "ओपन वायरिंग", "MCB / DB", "अर्थिंग"]
}, {
  icon: Factory,
  title: "इंडस्ट्रियल वायरिंग",
  desc: "फैक्ट्री, शॉप, गोदाम और पैनल बोर्ड वायरिंग।",
  points: ["3-Phase वायरिंग", "पैनल बोर्ड", "केबल ट्रे", "हैवी ड्यूटी"]
}, {
  icon: Lightbulb,
  title: "लाइटिंग सॉल्यूशन",
  desc: "LED, स्मार्ट लाइट, डेकोरेटिव झूमर इंस्टॉलेशन।",
  points: ["LED पैनल", "स्ट्रीट लाइट", "डेकोरेटिव", "स्मार्ट लाइट"]
}, {
  icon: Battery,
  title: "इन्वर्टर सर्विस",
  desc: "इन्वर्टर इंस्टॉलेशन, बैटरी रिप्लेसमेंट और मेंटेनेंस।",
  points: ["इन्वर्टर सेटअप", "बैटरी सर्विस", "टर्मिनल क्लीनिंग", "वारंटी सपोर्ट"]
}, {
  icon: Sun,
  title: "सोलर पैनल",
  desc: "ऑन-ग्रिड और ऑफ-ग्रिड सोलर सॉल्यूशन।",
  points: ["सोलर पैनल फिटिंग", "इन्वर्टर सेट", "बैटरी बैकअप", "मेंटेनेंस"]
}, {
  icon: Wind,
  title: "एग्जॉस्ट फैन",
  desc: "किचन, बाथरूम और फैक्ट्री के लिए वेंटिलेशन।",
  points: ["किचन फैन", "बाथरूम फैन", "इंडस्ट्रियल", "साइलेंट मॉडल"]
}, {
  icon: Phone,
  title: "इमरजेंसी सर्विस",
  desc: "24/7 इमरजेंसी कॉल पर तुरंत सर्विस।",
  points: ["शॉर्ट सर्किट", "फ्यूज ब्लो", "नो पावर", "ट्रिप MCB"]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "🔌 हमारी सेवाएं", subtitle: "घर, ऑफिस और इंडस्ट्री — हर ज़रूरत का सॉल्यूशन", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((s, i) => {
    const Icon = s.icon;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-50px"
    }, transition: {
      delay: i % 3 * 0.1
    }, whileHover: {
      y: -8
    }, className: "glass-strong rounded-3xl p-6 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center glow-primary mb-4 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-primary mb-2", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: s.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: s.points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary", children: p }, p)) })
    ] }, s.title);
  }) }) }) });
}
export {
  ServicesPage as component
};
