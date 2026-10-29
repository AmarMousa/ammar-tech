// Laptop catalogue (prices already include the store markup)
const LAPTOPS = [
  {
    "id": "laptop-301",
    "name": "HP ProBook 640 G2",
    "brand": "HP",
    "price": 11200,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "intel core i5-6400u",
      "ram": "8g ddr4 2400",
      "storage": "ssd 256 m.2",
      "gpu": "intel hd 520",
      "screen": "14.0 Led"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "intel core i5-6400u"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "8g ddr4 2400"
      },
      {
        "label": "التخزين",
        "value": "ssd 256 m.2"
      },
      {
        "label": "كارت الشاشة",
        "value": "intel hd 520"
      },
      {
        "label": "مقاس الشاشة",
        "value": "14.0 Led"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      }
    ],
    "features": [
      "معالج Intel Core i5 يقدم أداءً مستقرًا وموثوقًا في تشغيل البرامج اليومية.",
      "وحدة تخزين SSD M.2 تضمن سرعة فائقة في إقلاع النظام وفتح الملفات.",
      "ذاكرة عشوائية DDR4 بحجم 8 جيجابايت لتعدد مهام سلس وتصفح مريح.",
      "حجم شاشة 14 بوصة عملي يوفر توازنًا ممتازًا بين سهولة الحمل ووضوح العرض.",
      "كاميرا مدمجة تسهل حضور الاجتماعات الافتراضية والدروس عبر الإنترنت."
    ],
    "description": "يجمع لابتوب HP ProBook 640 G2 بين الأداء العملي والاعتمادية العالية لإنجاز مهامك اليومية بكفاءة وسلاسة. بفضل تصميمه المدمج وسرعة استجابته، يعد خيارًا مثاليًا للطلاب ورواد الأعمال الذين يحتاجون إلى جهاز يعتمد عليه في العمل المكتبي والدراسة والتنقل المستمر.",
    "images": [
      "images/laptops/laptop-301-1.jpg",
      "images/laptops/laptop-301-2.jpg",
      "images/laptops/laptop-301-3.jpg"
    ]
  },
  {
    "id": "laptop-265",
    "name": "Dell 5400",
    "brand": "Dell",
    "price": 13000,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "INTEL CORE I5-8350U",
      "ram": "8 DDR4",
      "storage": "N.V/256",
      "gpu": "INTEL 620",
      "screen": "14.0 Led"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "INTEL CORE I5-8350U"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "8 DDR4"
      },
      {
        "label": "التخزين",
        "value": "N.V/256"
      },
      {
        "label": "كارت الشاشة",
        "value": "INTEL 620"
      },
      {
        "label": "مقاس الشاشة",
        "value": "14.0 Led"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      },
      {
        "label": "قارئ الأقراص (DVD)",
        "value": "NO DVD"
      }
    ],
    "features": [
      "معالج Intel Core i5 يوفر أداءً سلساً ومستقراً للمهام اليومية وإدارة الأعمال",
      "وحدة تخزين سريعة لتقليل وقت التشغيل وفتح البرامج والملفات بكفاءة عالية",
      "ذاكرة عشوائية تدعم تعدد المهام وتشغيل التطبيقات المكتبية بسلاسة تامة",
      "شاشة بحجم 14 بوصة مدمجة ومريحة للعمل والتنقل المستمر",
      "كاميرا مدمجة تسهل حضور الاجتماعات الافتراضية والدروس عبر الإنترنت"
    ],
    "description": "يعد لابتوب ديل 5400 خياراً عملياً وموثوقاً يجمع بين كفاءة الأداء وسهولة التنقل لإنجاز مهامك اليومية بسلاسة. تم تصميمه ليناسب بيئات العمل والدراسة بفضل استجابته السريعة وتصميمه المدمج الذي يسهل حمله في أي مكان. يمنحك تجربة استخدام مريحة ومتوازنة تلبي متطلبات التصفح المتقدم والأعمال المكتبية بكل ثقة.",
    "images": [
      "images/laptops/laptop-265-1.jpg",
      "images/laptops/laptop-265-2.jpg",
      "images/laptops/laptop-265-3.jpg",
      "images/laptops/laptop-265-4.jpg",
      "images/laptops/laptop-265-5.jpg"
    ]
  },
  {
    "id": "laptop-379",
    "name": "HP ProBook 650 G3",
    "brand": "HP",
    "price": 13500,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i5-7400U",
      "ram": "8 DDR4",
      "storage": "ssd 256g",
      "gpu": "Intel HD Graphics 520",
      "screen": "15.6 Led"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-7400U"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "8 DDR4"
      },
      {
        "label": "التخزين",
        "value": "ssd 256g"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel HD Graphics 520"
      },
      {
        "label": "مقاس الشاشة",
        "value": "15.6 Led"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      }
    ],
    "features": [
      "معالج Intel Core i5 وسرعة استجابة فائقة بفضل وحدة التخزين SSD لفتح الملفات والتطبيقات في ثوانٍ معدودة.",
      "ذاكرة عشوائية DDR4 بحجم 8 جيجابايت لتعدد مهام سلس والتنقل بسهولة بين البرامج وصفحات الويب.",
      "شاشة LED واسعة مقاس 15.6 بوصة لعرض مريح للبيانات وجداول العمل دون إجهاد للعين.",
      "كاميرا مدمجة تسهل حضور الاجتماعات الافتراضية ومتابعة المحاضرات والدروس عبر الإنترنت."
    ],
    "description": "يعد لابتوب HP ProBook 650 G3 خيارًا عمليًا وموثوقًا لإنجاز المهام اليومية والعمل المكتبي بكل سلاسة، بفضل المعالج المتوازن وسرعة استجابة وحدات التخزين الحديثة. يمنحك تصميمه المتين وشاشته الواسعة تجربة مريحة في متابعة أعمالك وعقد الاجتماعات الافتراضية بوضوح تام، مما يجعله مثاليًا للشركات والطلاب على حد سواء.",
    "images": [
      "images/laptops/laptop-379-1.jpg",
      "images/laptops/laptop-379-2.jpg",
      "images/laptops/laptop-379-3.jpg",
      "images/laptops/laptop-379-4.jpg"
    ]
  },
  {
    "id": "laptop-369",
    "name": "Dell Latitude 5590",
    "brand": "Dell",
    "price": 14500,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Core i5-8350U",
      "ram": "8 DDR4",
      "storage": "ssd 256 m.2",
      "gpu": "intel hd 620",
      "screen": "15.6 Led"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Core i5-8350U"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "8 DDR4"
      },
      {
        "label": "التخزين",
        "value": "ssd 256 m.2"
      },
      {
        "label": "كارت الشاشة",
        "value": "intel hd 620"
      },
      {
        "label": "مقاس الشاشة",
        "value": "15.6 Led"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      }
    ],
    "features": [
      "معالج Core i5 من الجيل الثامن لإنجاز مهام العمل والتعليم بكفاءة واستقرار.",
      "وحدة تخزين SSD سريعة تمنحك إقلاعًا خاطفًا للنظام وسرعة في فتح الملفات.",
      "ذاكرة عشوائية DDR4 بحجم 8 جيجابايت لتعدد مهام سلس وتصفح مريح.",
      "شاشة واسعة مقاس 15.6 بوصة بدقة Full HD تمنحك مساحة رؤية مريحة أثناء العمل الطويل.",
      "كاميرا مدمجة مثالية لحضور الاجتماعات الافتراضية ومتابعة المحاضرات عن بُعد."
    ],
    "description": "يجمع لابتوب Dell Latitude 5590 بين الأداء العملي والاعتمادية الفائقة لتلبية احتياجات العمل اليومي والدراسة بسلاسة. بفضل معالج إنتل القوي وسرعة التخزين الحديثة، يضمن لك الجهاز استجابة سريعة وتجربة استخدام مريحة مع شاشته الكبيرة التي تعرض التفاصيل بوضوح.",
    "images": [
      "images/laptops/laptop-369-1.jpg",
      "images/laptops/laptop-369-2.jpg",
      "images/laptops/laptop-369-3.jpg",
      "images/laptops/laptop-369-4.jpg",
      "images/laptops/laptop-369-5.jpg"
    ]
  },
  {
    "id": "laptop-355",
    "name": "Dynabook Portégé X40-J",
    "brand": "Dynabook",
    "price": 14800,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i5-1135G7",
      "ram": "8 DDR4",
      "storage": "256GB PCIe NVMe SSD",
      "gpu": "Intel Iris Xe Graphics",
      "screen": "14.0 Led"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-1135G7"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "8 DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB PCIe NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel Iris Xe Graphics"
      },
      {
        "label": "مقاس الشاشة",
        "value": "14.0 Led"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      },
      {
        "label": "نوع الجهاز",
        "value": "tuch"
      }
    ],
    "features": [
      "أداء قوي وسلس لإنجاز المهام المتعددة بفضل معالج Intel Core i5 من الجيل الحادي عشر.",
      "شاشة لمس بدقة FHD مقاس 14 بوصة تمنحك تحكمًا تفاعليًا ورؤية واضحة ومريحة.",
      "سرعة فائقة في تشغيل النظام والبرامج مع وحدة التخزين السريعة PCIe NVMe SSD.",
      "رسوميات مدمجة متطورة Intel Iris Xe لتجربة عرض بصرية ممتازة ومحتوى ترفيهي سلس.",
      "كاميرا مدمجة تسهل عليك حضور الاجتماعات والمحاضرات عبر الإنترنت بوضوح."
    ],
    "description": "",
    "images": [
      "images/laptops/laptop-355-1.jpg",
      "images/laptops/laptop-355-2.jpg",
      "images/laptops/laptop-355-3.jpg",
      "images/laptops/laptop-355-4.jpg"
    ]
  },
  {
    "id": "laptop-300",
    "name": "HP ZBook 15 G3",
    "brand": "HP",
    "price": 15000,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "intel core i5-6440 hq",
      "ram": "8g ddr4-2400",
      "storage": "256 ssd",
      "screen": "15.6 Led"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "intel core i5-6440 hq"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "8g ddr4-2400"
      },
      {
        "label": "التخزين",
        "value": "256 ssd"
      },
      {
        "label": "مقاس الشاشة",
        "value": "15.6 Led"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      },
      {
        "label": "قارئ الأقراص (DVD)",
        "value": "NO DVD"
      },
      {
        "label": "نوع الجهاز",
        "value": "work station"
      }
    ],
    "features": [
      "معالج Intel Core i5 من الفئة HQ يمنحك أداءً قويًا ومستقرًا لتطبيقات العمل الشاقة.",
      "وحدة تخزين SSD M.2 فائقة السرعة تضمن إقلاع النظام وتشغيل البرامج في ثوانٍ.",
      "ذاكرة عشوائية DDR4 بحجم 8 جيجابايت تتيح إنجاز عدة مهام في وقت واحد بسلاسة.",
      "شاشة واسعة 15.6 بوصة تمنحك رؤية تفصيلية ومريحة أثناء العمل والمشاهدة.",
      "كاميرا مدمجة تسهل حضور الاجتماعات الافتراضية ومكالمات الفيديو بوضوح."
    ],
    "description": "يجمع لابتوب ورك ستيشن HP ZBook 15 G3 بين القوة والاعتمادية لإنجاز المهام الهندسية والمكتبية المتقدمة بكفاءة عالية. صُمم هذا الجهاز ليمنحك تجربة استخدام سلسة بفضل المعالج عالي الأداء ووحدة التخزين السريعة. كما تتيح لك شاشته الواسعة مساحة عرض واضحة ومريحة لجميع ساعات العمل الطويلة.",
    "images": [
      "images/laptops/laptop-300-1.jpg",
      "images/laptops/laptop-300-2.jpg",
      "images/laptops/laptop-300-3.jpg",
      "images/laptops/laptop-300-4.jpg",
      "images/laptops/laptop-300-5.jpg"
    ]
  },
  {
    "id": "laptop-378",
    "name": "Dell Latitude 5320",
    "brand": "Dell",
    "price": 18000,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel® Core™ i5-1145G7",
      "ram": "8 DDR4",
      "storage": "ssd 256 n.v",
      "gpu": "Intel® Iris® Xe Graphics",
      "screen": "13.3 tuch"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel® Core™ i5-1145G7"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "8 DDR4"
      },
      {
        "label": "التخزين",
        "value": "ssd 256 n.v"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel® Iris® Xe Graphics"
      },
      {
        "label": "مقاس الشاشة",
        "value": "13.3 tuch"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      },
      {
        "label": "نوع الجهاز",
        "value": "tuch"
      }
    ],
    "features": [
      "شاشة لمس بدقة Full HD تمنحك تحكمًا مرنًا وسهولة في التنقل والعرض.",
      "معالج Intel Core i5 من الجيل الحادي عشر يضمن أداءً قويًا ومستقرًا للأعمال اليومية.",
      "وحدة تخزين SSD سريعة تتيح إقلاع النظام وتشغيل البرامج في ثوانٍ معدودة.",
      "حجم مدمج 13.3 بوصة يسهل حمله والتنقل به للمحترفين والطلاب.",
      "كاميرا مدمجة تدعم إجراء الاجتماعات والمكالمات المرئية بوضوح."
    ],
    "description": "",
    "images": [
      "images/laptops/laptop-378-1.jpg",
      "images/laptops/laptop-378-2.jpg",
      "images/laptops/laptop-378-3.jpg",
      "images/laptops/laptop-378-4.jpg",
      "images/laptops/laptop-378-5.jpg"
    ]
  },
  {
    "id": "laptop-351",
    "name": "HP EliteBook x360 1030 G4",
    "brand": "HP",
    "price": 18000,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i5-8265U",
      "ram": "16 DDR4",
      "storage": "256GB PCIe NVMe SSD",
      "gpu": "Intel UHD Graphics 620",
      "screen": "13.3 tuch"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-8265U"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "16 DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB PCIe NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel UHD Graphics 620"
      },
      {
        "label": "مقاس الشاشة",
        "value": "13.3 tuch"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      },
      {
        "label": "نوع الجهاز",
        "value": "tuch"
      }
    ],
    "features": [
      "شاشة لمس بدقة FHD وحجم 13.3 بوصة تمنحك تحكمًا تفاعليًا مباشرًا ورؤية واضحة من زوايا واسعة.",
      "ذاكرة رام 16 جيجابايت لتعدد مهام سلس والتنقل بحرية بين التطبيقات المفتوحة بدون بطء.",
      "وحدة تخزين SSD فائقة السرعة تضمن إقلاع النظام وتشغيل البرامج في ثوانٍ معدودة.",
      "تصميم نحيف وخفيف مع كاميرا مدمجة يجعله مثاليًا للاجتماعات عن بُعد والعمل أثناء التنقل."
    ],
    "description": "يجمع لابتوب HP EliteBook x360 1030 G4 بين الأناقة والإنتاجية العالية في تصميم مدمج بشاشة لمس عملية وسريعة الاستجابة. يقدم الجهاز أداءً سلسًا وموثوقًا لإنجاز مهام العمل اليومية والدراسة بفضل ذاكرته الكبيرة ووحدة التخزين فائقة السرعة. يُعد الرفيق المثالي لرواد الأعمال والطلاب كثيري التنقل الباحثين عن سهولة الحمل مع كفاءة التشغيل.",
    "images": [
      "images/laptops/laptop-351-1.jpg",
      "images/laptops/laptop-351-2.jpg",
      "images/laptops/laptop-351-3.jpg",
      "images/laptops/laptop-351-4.jpg",
      "images/laptops/laptop-351-5.jpg"
    ]
  },
  {
    "id": "laptop-360",
    "name": "HP EliteBook 840 G8",
    "brand": "HP",
    "price": 18500,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i5-1145G7",
      "ram": "8 DDR4",
      "storage": "ssd 256 n.v",
      "gpu": "Intel Iris Xe",
      "screen": "14.0 Led"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-1145G7"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "8 DDR4"
      },
      {
        "label": "التخزين",
        "value": "ssd 256 n.v"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel Iris Xe"
      },
      {
        "label": "مقاس الشاشة",
        "value": "14.0 Led"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      }
    ],
    "features": [
      "أداء قوي وسلس في تصفح الويب وتطبيقات العمل المكتبية اليومية.",
      "سرعة فائقة في تشغيل النظام ونقل الملفات بفضل وحدة التخزين السريعة.",
      "شاشة مقاس 14 بوصة بدقة عالية توفر تجربة مشاهدة واضحة ومريحة لساعات العمل الطويلة.",
      "كاميرا مدمجة تسهل حضور الاجتماعات الافتراضية والتواصل في التعليم عن بُعد."
    ],
    "description": "يعد لابتوب HP 840 G8 خيارًا مثاليًا للمحترفين والطلاب بفضل تصميمه العملي وسرعة استجابته للمهام اليومية. يجمع الجهاز بين الأداء السلس وشاشة واضحة ومريحة للعين، مما يجعله رفيقك الموثوق لإنجاز أعمالك المكتبية وحضور الاجتماعات عبر الإنترنت بكل سهولة.",
    "images": [
      "images/laptops/laptop-360-1.jpg",
      "images/laptops/laptop-360-2.jpg",
      "images/laptops/laptop-360-3.jpg",
      "images/laptops/laptop-360-4.jpg",
      "images/laptops/laptop-360-5.jpg"
    ]
  },
  {
    "id": "laptop-281",
    "name": "HP EliteBook 855 G8",
    "brand": "HP",
    "price": 20500,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "AMD Ryzen5 Pro 5650U",
      "ram": "8 DDR4",
      "storage": "N.V/256",
      "gpu": "AMD Radeon Graphics",
      "screen": "15.6 Led"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "AMD Ryzen5 Pro 5650U"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "8 DDR4"
      },
      {
        "label": "التخزين",
        "value": "N.V/256"
      },
      {
        "label": "كارت الشاشة",
        "value": "AMD Radeon Graphics"
      },
      {
        "label": "مقاس الشاشة",
        "value": "15.6 Led"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      },
      {
        "label": "قارئ الأقراص (DVD)",
        "value": "NO DVD"
      }
    ],
    "features": [
      "معالج أعمال قوي يوفر سرعة استجابة فائقة وكفاءة عالية في التعامل مع البرامج المختلفة.",
      "وحدة تخزين سريعة تسهم في تشغيل النظام وفتح الملفات دون أي تأخير ملحوظ.",
      "شاشة بمقاس مريح تتيح مساحة عمل واسعة للإنتاجية ومشاهدة المحتوى بوضوح.",
      "كاميرا مدمجة تسهل حضور الاجتماعات الافتراضية والتواصل عبر الإنترنت باحترافية."
    ],
    "description": "",
    "images": [
      "images/laptops/laptop-281-1.jpg",
      "images/laptops/laptop-281-2.jpg",
      "images/laptops/laptop-281-3.jpg"
    ]
  },
  {
    "id": "laptop-323",
    "name": "Dell Latitude 5510",
    "brand": "Dell",
    "price": 21000,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-10810u",
      "ram": "8 DDR4",
      "storage": "ssd 256 n.v",
      "gpu": "intel uhd-graphics",
      "screen": "15.6 Led"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-10810u"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "8 DDR4"
      },
      {
        "label": "التخزين",
        "value": "ssd 256 n.v"
      },
      {
        "label": "كارت الشاشة",
        "value": "intel uhd-graphics"
      },
      {
        "label": "مقاس الشاشة",
        "value": "15.6 Led"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      }
    ],
    "features": [
      "معالج Intel Core i7 يمنحك سرعة فائقة في معالجة البيانات وإنجاز المهام اليومية.",
      "وحدة تخزين NVMe SSD سريعة تضمن إقلاع النظام وتشغيل البرامج في ثوانٍ معدودة.",
      "شاشة واسعة مقاس 15.6 بوصة بدقة عالية توفر تجربة مشاهدة مريحة للمستندات والمحتوى.",
      "كاميرا مدمجة تسهل حضور الاجتماعات الافتراضية والتواصل عبر الإنترنت بوضوح."
    ],
    "description": "يجمع لابتوب Dell Latitude 5510 بين الأداء العملي والاعتمادية الفائقة لتلبية احتياجاتك اليومية في العمل والدراسة بكل سلاسة. يأتي الجهاز بشاشة واسعة ومريحة للعين مع سرعة استجابة ممتازة بفضل وحدة التخزين السريعة والمعالج القوي، مما يجعله خيارًا مثاليًا لإنجاز المهام المكتبية وإدارة الأعمال بكفاءة.",
    "images": [
      "images/laptops/laptop-323-1.jpg",
      "images/laptops/laptop-323-2.jpg",
      "images/laptops/laptop-323-3.jpg",
      "images/laptops/laptop-323-4.jpg",
      "images/laptops/laptop-323-5.jpg"
    ]
  },
  {
    "id": "laptop-346",
    "name": "Dell Precision 7510",
    "brand": "Dell",
    "price": 21000,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-6820HQ",
      "ram": "16 DDR4",
      "storage": "ssd 512",
      "gpu": "NVIDIA Quadro M2200 4g",
      "screen": "15.6 Led"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-6820HQ"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "16 DDR4"
      },
      {
        "label": "التخزين",
        "value": "ssd 512"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA Quadro M2200 4g"
      },
      {
        "label": "مقاس الشاشة",
        "value": "15.6 Led"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      },
      {
        "label": "نوع الجهاز",
        "value": "work station"
      }
    ],
    "features": [
      "معالج قوي يوفر أداءً سريعاً ومستقراً مع البرامج الثقيلة",
      "كارت شاشة مخصص يدعم برامج التصميم الهندسي والجرافيك بكفاءة",
      "ذاكرة رام سريعة تتيح تعدد المهام وتشغيل برامج متعددة بسلاسة",
      "وحدة تخزين سريعة تسهم في تشغيل النظام والبرامج في ثوانٍ",
      "شاشة واضحة بدقة فائقة توفر مساحة عرض مريحة للعمل الطويل"
    ],
    "description": "",
    "images": [
      "images/laptops/laptop-346-1.jpg",
      "images/laptops/laptop-346-2.jpg",
      "images/laptops/laptop-346-3.jpg",
      "images/laptops/laptop-346-4.jpg",
      "images/laptops/laptop-346-5.jpg"
    ]
  },
  {
    "id": "laptop-278",
    "name": "HP ZBook 15 G3 (i7 + Quadro)",
    "brand": "HP",
    "price": 22000,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-6820HQ",
      "gpu": "NVIDIA Quadro M2000M 4GB",
      "storage": "m.2/ 512",
      "ram": "16 DDR4",
      "screen": "15.6 Led"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-6820HQ"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel HD 520 + NVIDIA Quadro M2000M 4GB"
      },
      {
        "label": "التخزين",
        "value": "m.2/ 512"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "16 DDR4"
      },
      {
        "label": "مقاس الشاشة",
        "value": "15.6 Led"
      }
    ],
    "features": [],
    "description": "",
    "images": [
      "images/laptops/laptop-278-1.jpg",
      "images/laptops/laptop-278-2.jpg"
    ]
  },
  {
    "id": "laptop-381",
    "name": "Dell Precision 7560",
    "brand": "Dell",
    "price": 25000,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "i5-11500H",
      "ram": "16 DDR4",
      "storage": "ssd 512 n.v",
      "gpu": "Intel UHD Graphics,",
      "screen": "15.6 Led"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "i5-11500H"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "16 DDR4"
      },
      {
        "label": "التخزين",
        "value": "ssd 512 n.v"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel UHD Graphics,"
      },
      {
        "label": "مقاس الشاشة",
        "value": "15.6 Led"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      },
      {
        "label": "نوع الجهاز",
        "value": "work station"
      }
    ],
    "features": [
      "معالج قوي من الفئة المتقدمة لإنجاز المهام المكتبية والهندسية بسرعة",
      "ذاكرة عشوائية واسعة تتيح تشغيل عدة تطبيقات في وقت واحد دون بطء",
      "وحدة تخزين سريعة تسهم في تشغيل النظام والبرامج في ثوانٍ معدودة",
      "شاشة واسعة تمنحك مساحة عمل مريحة وتفاصيل بصرية واضحة",
      "كاميرا مدمجة جاهزة لإجراء الاجتماعات المرئية ومكالمات العمل"
    ],
    "description": "يقدم لابتوب ديل محطة عمل متكاملة مصممة لإنجاز المهام الاحترافية بكفاءة وثبات عاليين. بفضل المعالج القوي والذاكرة السريعة، ستحصل على تجربة سلسة في معالجة البيانات وإدارة مختلف مشاريع العمل اليومية. تصميمه المتين وشاشته المريحة يجعلان منه خيارًا مثاليًا للشركات ورواد الأعمال الباحثين عن اعتمادية استثنائية.",
    "images": [
      "images/laptops/laptop-381-1.jpg",
      "images/laptops/laptop-381-2.jpg",
      "images/laptops/laptop-381-3.jpg",
      "images/laptops/laptop-381-4.jpg",
      "images/laptops/laptop-381-5.jpg"
    ]
  },
  {
    "id": "laptop-380",
    "name": "Dell Precision 7560 Xeon",
    "brand": "Dell",
    "price": 26000,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Xeon W-11955M",
      "ram": "16 DDR4",
      "storage": "ssd 512 n.v",
      "gpu": "Intel UHD Graphics",
      "screen": "15.6 Led"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Xeon W-11955M"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "16 DDR4"
      },
      {
        "label": "التخزين",
        "value": "ssd 512 n.v"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "مقاس الشاشة",
        "value": "15.6 Led"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      },
      {
        "label": "نوع الجهاز",
        "value": "work station"
      }
    ],
    "features": [
      "معالج قوي من فئة محطات العمل لإنجاز المهام المتعددة بكفاءة",
      "ذاكرة رام سريعة تتيح تشغيل عدة برامج معًا دون بطء",
      "وحدة تخزين سريعة جدًا لتحميل النظام ونقل الملفات في ثوانٍ",
      "شاشة واسعة بتقنية مقاومة التوهج لتجربة رؤية مريحة أثناء العمل",
      "كاميرا مدمجة جاهزة لحضور الاجتماعات والدروس عبر الإنترنت بوضوح"
    ],
    "description": "",
    "images": [
      "images/laptops/laptop-380-1.jpg",
      "images/laptops/laptop-380-2.jpg",
      "images/laptops/laptop-380-3.jpg",
      "images/laptops/laptop-380-4.jpg",
      "images/laptops/laptop-380-5.jpg"
    ]
  },
  {
    "id": "laptop-296",
    "name": "Dell Precision 5550",
    "brand": "Dell",
    "price": 33000,
    "variants": [
      {
        "title": "N.V/512 / 16 DDR4",
        "price": 33000,
        "available": true
      },
      {
        "title": "N.V/512 / 32 DDR4",
        "price": 37000,
        "available": true
      }
    ],
    "available": true,
    "quick": {
      "cpu": "core i7-10850h",
      "ram": "32 DDR4",
      "storage": "N.V/512",
      "gpu": "NVIDIA QUADRO T2000 4G",
      "screen": "15.6 Led"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "core i7-10850h"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "32 DDR4"
      },
      {
        "label": "التخزين",
        "value": "N.V/512"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA QUADRO T2000 4G"
      },
      {
        "label": "مقاس الشاشة",
        "value": "15.6 Led"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      },
      {
        "label": "قارئ الأقراص (DVD)",
        "value": "NO DVD"
      },
      {
        "label": "نوع الجهاز",
        "value": "work station"
      }
    ],
    "features": [
      "معالج قوي يوفر أداءً فائقًا لمعالجة المهام البرمجية والتصميمية الثقيلة.",
      "سعة رامات ضخمة تمنحك حرية تشغيل البرامج المتعددة والتبديل بينها بسرعة.",
      "كارت شاشة احترافي مخصص لتشغيل برامج الرندر والمونتاج والأعمال الهندسية.",
      "وحدة تخزين سريعة تسهم في إقلاع النظام وتشغيل الملفات الكبيرة في ثوانٍ.",
      "شاشة بمساحة مريحة وتفاصيل واضحة لتعزيز إنتاجيتك في العمل اليومي."
    ],
    "description": "",
    "images": [
      "images/laptops/laptop-296-1.webp",
      "images/laptops/laptop-296-2.webp",
      "images/laptops/laptop-296-3.webp",
      "images/laptops/laptop-296-4.webp",
      "images/laptops/laptop-296-5.webp"
    ]
  },
  {
    "id": "laptop-293",
    "name": "Dell Precision 7550",
    "brand": "Dell",
    "price": 36000,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Xeon W-10855M (6 Cores, 12MB Cache, up to 5.10 GHz)",
      "ram": "16 DDR4",
      "storage": "N.V/512",
      "gpu": "NVIDIA QUDRO RTX 3000 6G",
      "screen": "15.6 Led"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Xeon W-10855M (6 Cores, 12MB Cache, up to 5.10 GHz)"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "16 DDR4"
      },
      {
        "label": "التخزين",
        "value": "N.V/512"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA QUDRO RTX 3000 6G"
      },
      {
        "label": "مقاس الشاشة",
        "value": "15.6 Led"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      },
      {
        "label": "قارئ الأقراص (DVD)",
        "value": "NO DVD"
      },
      {
        "label": "نوع الجهاز",
        "value": "work station"
      }
    ],
    "features": [
      "معالج Xeon فئة محطات العمل لإنجاز الحسابات المعقدة والمهام الشاقة بثبات تام",
      "بطاقة رسوميات كوادرو احترافية متخصصة لبرامج الهندسة والتصميم ثلاثي الأبعاد والرندر",
      "وحدة تخزين سريعة تسهم في تشغيل النظام ونقل الملفات الضخمة في ثوانٍ",
      "ذاكرة عشوائية مخصصة لتعدد المهام وسلاسة العمل على أكثر من تطبيق في وقت واحد"
    ],
    "description": "",
    "images": [
      "images/laptops/laptop-293-1.jpg",
      "images/laptops/laptop-293-2.jpg",
      "images/laptops/laptop-293-3.jpg",
      "images/laptops/laptop-293-4.jpg",
      "images/laptops/laptop-293-5.jpg"
    ]
  },
  {
    "id": "laptop-354",
    "name": "HP ZBook Power G9",
    "brand": "HP",
    "price": 54000,
    "variants": [
      {
        "title": "ssd 512 n.v / 16 DDR5",
        "price": 54000,
        "available": true
      },
      {
        "title": "ssd 512 n.v / 32 ddr5",
        "price": 66000,
        "available": true
      }
    ],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-12700H (up to 4.7 GHz, 14 cores)",
      "ram": "16 DDR5",
      "storage": "ssd 512 n.v",
      "gpu": "NVIDIA RTX A2000 (8 GB GDDR6)",
      "screen": "15.6 Led"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-12700H (up to 4.7 GHz, 14 cores)"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "16 DDR5"
      },
      {
        "label": "التخزين",
        "value": "ssd 512 n.v"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA RTX A2000 (8 GB GDDR6)"
      },
      {
        "label": "مقاس الشاشة",
        "value": "15.6 Led"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      },
      {
        "label": "نوع الجهاز",
        "value": "work station"
      }
    ],
    "features": [
      "معالج قوي متعدد الأنوية لإنجاز المهام الهندسية والبرمجية المعقدة بسلاسة.",
      "كارت شاشة احترافي مخصص لتطبيقات التصميم والنمذجة ثلاثية الأبعاد والمونتاج.",
      "ذاكرة وصول عشوائي سريعة تدعم تعدد المهام وتشغيل البرامج الثقيلة بكفاءة.",
      "وحدة تخزين سريعة تسهم في تشغيل النظام والملفات الضخمة بدون تأخير."
    ],
    "description": "",
    "images": [
      "images/laptops/laptop-354-1.jpg",
      "images/laptops/laptop-354-2.jpg",
      "images/laptops/laptop-354-3.jpg",
      "images/laptops/laptop-354-4.jpg",
      "images/laptops/laptop-354-5.jpg"
    ]
  },
  {
    "id": "laptop-299",
    "name": "HP ZBook Fury 16 G9",
    "brand": "HP",
    "price": 82000,
    "variants": [
      {
        "title": "N.V/512 / 16 DDR5",
        "price": 82000,
        "available": true
      },
      {
        "title": "N.V/512 / 32 ddr5",
        "price": 94000,
        "available": true
      },
      {
        "title": "N.V/512 / 48 ddr5",
        "price": 94000,
        "available": false
      },
      {
        "title": "N.V/512 / 64 ddr5",
        "price": 102000,
        "available": false
      }
    ],
    "available": true,
    "quick": {
      "cpu": "intel core i.9-12950hx",
      "ram": "16 DDR5",
      "storage": "N.V/512",
      "gpu": "intel hd graphics, nvidia rtx a4500 16g",
      "screen": "16 Led"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "intel core i.9-12950hx"
      },
      {
        "label": "الرامات (الذاكرة)",
        "value": "16 DDR5"
      },
      {
        "label": "التخزين",
        "value": "N.V/512"
      },
      {
        "label": "كارت الشاشة",
        "value": "intel hd graphics, nvidia rtx a4500 16g"
      },
      {
        "label": "مقاس الشاشة",
        "value": "16 Led"
      },
      {
        "label": "الكاميرا",
        "value": "CAM"
      },
      {
        "label": "قارئ الأقراص (DVD)",
        "value": "NO DVD"
      },
      {
        "label": "نوع الجهاز",
        "value": "work station"
      }
    ],
    "features": [
      "أداء استثنائي في الرندرة والتصميم ثلاثي الأبعاد بفضل كارت الشاشة المتخصص RTX A4500",
      "معالجة فائقة السرعة للمهام البرمجية والهندسية المعقدة مع معالج Core i9 المتقدم",
      "سرعة استجابة هائلة وإقلاع فوري للنظام والبرامج مع وحدة التخزين NVMe السريعة",
      "مساحة عرض رحبة على شاشة 16 بوصة لتفاصيل أدق أثناء التصميم والعمل المتواصل"
    ],
    "description": "",
    "images": [
      "images/laptops/laptop-299-1.jpg",
      "images/laptops/laptop-299-2.jpg",
      "images/laptops/laptop-299-3.jpg",
      "images/laptops/laptop-299-4.jpg",
      "images/laptops/laptop-299-5.jpg"
    ]
  }
];
