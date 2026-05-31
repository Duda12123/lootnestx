export interface Product {
  slug: string
  title: string
  tagline: string
  tagline_zh?: string
  description: string
  description_zh?: string
  price: string
  image: string
  video?: string
  category: string
  buyUrl: string
  rating: number
  pros: string[]
  pros_zh?: string[]
  cons: string[]
  cons_zh?: string[]
  verdict: string
  verdict_zh?: string
  date: string
  featured?: boolean
}

const placeholderImg = (name: string) =>
  `https://placehold.co/600x400/1a1a1a/f59e0b?text=${encodeURIComponent(name)}`

export const products: Product[] = [
  {
    slug: "self-stirring-mug",
    title: "Self-Stirring Mug",
    tagline: "The mug that mixes itself",
    tagline_zh: "会自己搅拌的杯子 ☕",
    description:
      "This innovative self-stirring mug takes the hassle out of your morning routine. With a built-in magnetic stirrer and USB-C rechargeable battery, just press a button and watch it create the perfect vortex in seconds. Perfect for instant coffee, hot chocolate, protein shakes, and more. The 14oz capacity and double-wall insulation keep your drink hot while the exterior stays cool to the touch.",
    description_zh:
      "这款创新的自搅拌杯让你的早晨不再手忙脚乱。内置磁力搅拌器，USB-C 充电，只需按一下按钮，几秒钟就能搅出完美漩涡。冲咖啡、热巧克力、蛋白粉——全都不在话下。14盎司容量，双层隔热设计，饮品保温，杯身不烫手。",
    price: "$24.99",
    image: placeholderImg("Self-Stirring+Mug"),
    category: "Kitchen",
    buyUrl: "https://amazon.com/dp/example1",
    rating: 4.3,
    pros: [
      "USB-C rechargeable, lasts 2 weeks per charge",
      "Double-wall insulation keeps drinks hot",
      "Super easy to clean, just rinse and go",
      "Magnetic stirrer is whisper-quiet",
    ],
    pros_zh: [
      "USB-C 充电，一次充电用两周",
      "双层隔热，饮品持久保温",
      "清洗超简单，冲一冲就好",
      "磁力搅拌几乎静音",
    ],
    cons: [
      "Not dishwasher safe",
      "Slightly heavier than a regular mug",
    ],
    cons_zh: [
      "不能放洗碗机",
      "比普通杯子稍重",
    ],
    verdict:
      "A genuinely useful gadget that actually delivers on its promise. If you're tired of stirring your drinks, this is a no-brainer at this price point.",
    verdict_zh:
      "一个真正实用的小工具，说到做到。如果你厌倦了手动搅拌，这个价格入手完全不亏。",
    date: "2026-05-28",
    featured: true,
  },
  {
    slug: "magnetic-pickup-tool",
    title: "360° Magnetic Pickup Tool",
    tagline: "Never drop a screw again",
    tagline_zh: "螺丝掉哪儿都能找到 🧲",
    description:
      "This flexible magnetic pickup tool with a 360° rotating head makes retrieving dropped screws, bolts, and metal parts a breeze. The LED light on the tip illuminates dark corners, and the extendable shaft reaches up to 24 inches. The strong neodymium magnet holds up to 5 lbs, and the non-slip grip makes it comfortable for extended use.",
    description_zh:
      "这款柔性磁力捡拾工具，360° 旋转头，捡螺丝、螺母、金属零件轻而易举。顶端自带 LED 灯，照亮黑暗角落，伸缩杆最长可达 24 英寸。强力钕磁铁，最大吸力 5 磅，防滑握把，长时间使用也舒适。",
    price: "$15.99",
    image: placeholderImg("Magnetic+Pickup"),
    category: "Tools",
    buyUrl: "https://amazon.com/dp/example2",
    rating: 4.7,
    pros: [
      "Incredibly strong magnet, holds 5 lbs",
      "LED light is surprisingly bright",
      "Flexible shaft gets into tight spaces",
      "Great value for the price",
    ],
    pros_zh: [
      "磁铁超强，能吸住 5 磅重物",
      "LED 灯出奇地亮",
      "柔性杆能伸进狭窄缝隙",
      "这个价格性价比极高",
    ],
    cons: [
      "LED battery not replaceable",
      "Plastic body feels a bit cheap",
    ],
    cons_zh: [
      "LED 电池不可更换",
      "塑料机身手感一般",
    ],
    verdict:
      "One of those tools you didn't know you needed until you have it. The LED and flexible shaft make it way more useful than a plain magnetic stick.",
    verdict_zh:
      "这就是那种「拥有了才知道多好用」的工具。LED 灯 + 柔性杆，比普通磁力棒实用太多了。",
    date: "2026-05-26",
    featured: true,
  },
  {
    slug: "portable-blender",
    title: "Portable Blender Bottle",
    tagline: "Fresh smoothies anywhere",
    tagline_zh: "随时随地，鲜榨随行 🥤",
    description:
      "Take your smoothie game on the road with this portable blender bottle. The powerful 200W motor crushes ice and frozen fruit with ease, while the 20oz BPA-free Tritan bottle doubles as your drinking vessel. USB-C rechargeable with a 4000mAh battery that handles 15+ blends per charge. The leak-proof lid and carry strap make it perfect for the gym, office, or travel.",
    description_zh:
      "带上这款便携搅拌杯，走到哪儿都能喝上鲜榨果饮。200W 强力电机，碎冰打冻果都不在话下。20 盎司 BPA 免费 Tritan 杯身，喝完不用换杯。USB-C 充电，4000mAh 电池，一次充电能打 15 杯以上。防漏盖 + 便携挂绳，健身房、办公室、旅行全能打。",
    price: "$29.99",
    image: placeholderImg("Portable+Blender"),
    category: "Kitchen",
    buyUrl: "https://amazon.com/dp/example3",
    rating: 4.5,
    pros: [
      "Powerful enough to crush ice",
      "15+ blends per charge",
      "BPA-free Tritan plastic",
      "One-button operation, dead simple",
    ],
    pros_zh: [
      "动力够猛，碎冰没问题",
      "一次充电能打 15 杯以上",
      "BPA 免费 Tritan 材质",
      "一键操作，简单到不行",
    ],
    cons: [
      "Takes 3-4 hours to fully charge",
      "Can be loud with hard ingredients",
    ],
    cons_zh: [
      "充满电需要 3-4 小时",
      "打硬物时声音有点大",
    ],
    verdict:
      "A solid portable blender that actually has enough power for real smoothies. The battery life is impressive and it's genuinely portable, not just 'technically portable'.",
    verdict_zh:
      "一款真正有劲的便携搅拌杯，不是那种「 technically 便携」的凑数货。续航也给力，值得入手。",
    date: "2026-05-24",
  },
  {
    slug: "led-strip-lights",
    title: "Govee RGBIC LED Strip",
    tagline: "Your room, reimagined",
    tagline_zh: "你的房间，焕然一新 🌈",
    description:
      "These Govee RGBIC LED strip lights took TikTok by storm, and for good reason. Unlike basic RGB strips, RGBIC technology lets you display multiple colors simultaneously along a single strip for stunning segmented effects. With 16 million colors, music sync, and app control, these lights transform any room into an immersive experience. Includes 32.8ft of lights with a strong adhesive backing.",
    description_zh:
      "Govee 这款 RGBIC 灯带在 TikTok 上爆火，不是没有原因的。和普通 RGB 灯带不同，RGBIC 技术让一条灯带能同时显示多种颜色，分段效果惊艳。1600 万色可选，音乐律动模式，手机 App 控制，瞬间把房间变成沉浸式空间。含 10 米灯带，背胶超牢，贴墙不走位。",
    price: "$19.99",
    image: placeholderImg("LED+Strip+Lights"),
    category: "Smart Home",
    buyUrl: "https://amazon.com/dp/example4",
    rating: 4.6,
    pros: [
      "Multiple colors on one strip (RGBIC tech)",
      "Music sync mode is a party essential",
      "App control is intuitive and responsive",
      "Adhesive backing actually stays put",
    ],
    pros_zh: [
      "一条灯带显示多色（RGBIC 技术）",
      "音乐律动模式，派对神器",
      "App 控制直观，响应快",
      "背胶真的很牢，不会掉",
    ],
    cons: [
      "Cannot be cut and reconnected like basic strips",
      "App requires account registration",
    ],
    cons_zh: [
      "不能像普通灯带那样剪断重接",
      "App 需要注册账号",
    ],
    verdict:
      "The RGBIC technology is a game-changer. Being able to run multiple colors on a single strip creates effects that basic RGB strips simply can't match. A must-have for content creators and anyone who wants their room to look amazing.",
    verdict_zh:
      "RGBIC 技术是真正的游戏规则改变者。一条灯带同时跑多色，效果是普通 RGB 灯带完全比不了的。内容创作者和所有想让房间变酷的人，闭眼入。",
    date: "2026-05-22",
    featured: true,
  },
  {
    slug: "mini-projector",
    title: "Kodak Mini Projector",
    tagline: "Cinema in your pocket",
    tagline_zh: "口袋里的电影院 🎬",
    description:
      "This palm-sized Kodak projector delivers a surprisingly sharp 1080p image up to 100 inches. With HDMI and USB inputs, built-in speaker, and a 2-hour battery, it's perfect for movie nights, presentations, or gaming sessions anywhere. The LED light source lasts 30,000 hours and the keystone correction ensures a perfectly rectangular image even at an angle.",
    description_zh:
      "这台巴掌大的柯达投影仪，能投出令人惊喜的 1080p 清晰画面，最大 100 英寸。HDMI + USB 接口，内置扬声器，2 小时续航电池，看电影、做演示、打游戏，随时随地。LED 光源寿命 30000 小时，梯形校正功能，侧投也能出方正画面。",
    price: "$89.99",
    image: placeholderImg("Mini+Projector"),
    category: "Tech",
    buyUrl: "https://amazon.com/dp/example5",
    rating: 4.1,
    pros: [
      "Truly pocket-sized and portable",
      "2-hour built-in battery",
      "30,000-hour LED lifespan",
      "Decent built-in speaker",
    ],
    pros_zh: [
      "真正巴掌大小，随身携带无压力",
      "内置电池，续航 2 小时",
      "LED 光源，寿命 30000 小时",
      "内置扬声器效果还可以",
    ],
    cons: [
      "Only 100 ANSI lumens, needs dark room",
      "No Bluetooth audio output",
      "Fan noise is noticeable in quiet scenes",
    ],
    cons_zh: [
      "只有 100 ANSI 流明，需要暗室",
      "没有蓝牙音频输出",
      "安静场景下风扇噪音有点明显",
    ],
    verdict:
      "For the size and price, it's impressive. Just know its limits - this is for dark-room viewing, not replacing your living room TV. Perfect for bedroom movie nights and camping trips.",
    verdict_zh:
      "这个尺寸和价格，已经很惊艳了。只要认清它的定位——暗室观看，不是用来取代客厅电视的。卧室电影夜和露营旅行，完美。",
    date: "2026-05-20",
  },
  {
    slug: "smart-wallet-tracker",
    title: "Smart Wallet with AirTag",
    tagline: "You'll never lose your wallet again",
    tagline_zh: "钱包再也不会弄丢了 📱",
    description:
      "This sleek RFID-blocking wallet features a dedicated AirTag slot so you can track it with Find My. Made from genuine leather with a minimalist design, it holds 6-8 cards plus cash. The AirTag fits flush without adding bulk, and the precision finding feature on newer iPhones guides you right to it. RFID blocking protects your cards from wireless skimming.",
    description_zh:
      "这款简约皮质钱包内置专属 AirTag 卡槽，配合 Find My 精准定位，再也不怕弄丢钱包。头层真皮材质，极简设计，能放 6-8 张卡片 + 现金。AirTag 嵌入后不凸不鼓，新一代 iPhone 的精准查找功能直接带你找到它。RFID 屏蔽功能，防止卡片信息被无线盗刷。",
    price: "$34.99",
    image: placeholderImg("Smart+Wallet"),
    category: "Everyday Carry",
    buyUrl: "https://amazon.com/dp/example6",
    rating: 4.4,
    pros: [
      "Built-in AirTag slot is perfectly designed",
      "Genuine leather, premium feel",
      "RFID blocking for security",
      "Slim profile despite AirTag integration",
    ],
    pros_zh: [
      "AirTag 卡槽设计完美，嵌入不凸出",
      "头层真皮，手感高级",
      "RFID 屏蔽，防盗刷",
      "虽然有 AirTag，但依然轻薄",
    ],
    cons: [
      "AirTag sold separately",
      "Limited to 6-8 cards",
      "Leather needs occasional conditioning",
    ],
    cons_zh: [
      "AirTag 需单独购买",
      "最多放 6-8 张卡片",
      "真皮需要偶尔保养",
    ],
    verdict:
      "If you're already in the Apple ecosystem, this wallet is a no-brainer. The AirTag integration is seamless and the leather quality punches above its price point.",
    verdict_zh:
      "如果你已经在用 iPhone，这款钱包闭眼入。AirTag 整合得天衣无缝，皮质也比这个价位的好不少。",
    date: "2026-05-18",
  },
]

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  // Convert kebab-case slug to Title Case category name for matching
  const normalized = category.replace(/-/g, " ")
  return products.filter((p) => p.category.toLowerCase() === normalized.toLowerCase())
}

export function getCategories(): string[] {
  return [...new Set(products.map((p) => p.category))]
}

// Helper: get localized string
export function localStr(
  product: Product,
  field: "tagline" | "description" | "verdict",
  locale: string
): string {
  if (locale === "zh") {
    const zh = product[`${field}_zh` as keyof Product] as string | undefined
    if (zh) return zh
  }
  return product[field]
}

export function localArr(
  product: Product,
  field: "pros" | "cons",
  locale: string
): string[] {
  if (locale === "zh") {
    const zh = product[`${field}_zh` as keyof Product] as string[] | undefined
    if (zh) return zh
  }
  return product[field]
}