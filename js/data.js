// Laptop catalogue (prices already include the store markup)
const LAPTOPS = [
  {
    "id": "gl-05",
    "name": "HP ProBook 650 G2",
    "brand": "HP",
    "price": 9000,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i5-6300U",
      "ram": "8GB DDR4",
      "storage": "128GB SSD + 500GB HDD",
      "gpu": "Intel HD Graphics 520",
      "screen": "15.6 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-6300U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "128GB SSD + 500GB HDD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel HD Graphics 520"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "أوفر سعر في المتجر",
      "SSD للويندوز وهارد 500 للملفات",
      "شاشة كبيرة 15.6 بوصة",
      "مناسب للأوفيس والمحاضرات الأونلاين"
    ],
    "description": "أرخص لاب عندنا، مناسب جداً للأوفيس والمذاكرة والنت. شاشة 15.6 بوصة ومساحة تخزين كبيرة.",
    "images": [
      "images/laptops/pb650g2-1.jpg",
      "images/laptops/pb650g2-2.jpg"
    ]
  },
  {
    "id": "gl-15",
    "name": "Dell Latitude 5490",
    "brand": "Dell",
    "price": 11800,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-8650U",
      "ram": "8GB DDR4",
      "storage": "256GB SSD",
      "gpu": "Intel UHD Graphics 620",
      "screen": "14 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-8650U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel UHD Graphics 620"
      },
      {
        "label": "الشاشة",
        "value": "14 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج i7 جيل 8 بـ 4 أنوية",
      "سعر اقتصادي",
      "شاشة 14 بوصة",
      "خامة Latitude متينة"
    ],
    "description": "Core i7 بأقل سعر. Latitude 14 بوصة عملي ومتين للشغل والمذاكرة.",
    "images": [
      "images/laptops/lat5490-1.jpg"
    ]
  },
  {
    "id": "gl-21",
    "name": "Dell Latitude 5570",
    "brand": "Dell",
    "price": 11950,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-6820HQ",
      "ram": "8GB DDR4",
      "storage": "256GB SSD",
      "gpu": "AMD Radeon R7 2GB",
      "screen": "15.6 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-6820HQ"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "AMD Radeon R7 2GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "كارت شاشة منفصل Radeon R7 بـ 2 جيجا",
      "معالج i7 HQ رباعي الأنوية",
      "شاشة 15.6 بوصة",
      "سعر اقتصادي جداً"
    ],
    "description": "معالج i7 HQ وكارت شاشة منفصل 2 جيجا بأقل سعر. مناسب لبداية البرامج الهندسية والجرافيك الخفيف.",
    "images": [
      "images/laptops/lat5570-1.jpg"
    ]
  },
  {
    "id": "gl-20",
    "name": "Dell Latitude 5500",
    "brand": "Dell",
    "price": 12850,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-8650U",
      "ram": "8GB DDR4",
      "storage": "256GB SSD",
      "gpu": "Intel UHD Graphics 620",
      "screen": "15.6 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-8650U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel UHD Graphics 620"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج i7 جيل 8 بـ 4 أنوية",
      "شاشة 15.6 بوصة",
      "كيبورد كامل",
      "سعر اقتصادي"
    ],
    "description": "Core i7 بشاشة 15.6 بوصة بسعر قليل. مناسب للشغل المكتبي والمذاكرة.",
    "images": [
      "images/laptops/lat5500-1.jpg"
    ]
  },
  {
    "id": "gl-08",
    "name": "HP EliteBook 845 G7 (Ryzen 5)",
    "brand": "HP",
    "price": 12950,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "AMD Ryzen 5 Pro 4650U",
      "ram": "8GB DDR4",
      "storage": "256GB SSD",
      "gpu": "AMD Radeon Graphics",
      "screen": "14 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "AMD Ryzen 5 Pro 4650U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "AMD Radeon Graphics"
      },
      {
        "label": "الشاشة",
        "value": "14 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج Ryzen 5 Pro بـ 6 أنوية",
      "سعر ممتاز لأداء قوي",
      "شاشة 14 بوصة FHD",
      "بودي معدن خفيف"
    ],
    "description": "معالج Ryzen 5 بـ 6 أنوية في EliteBook خفيف بسعر ممتاز. من أحسن الاختيارات في فئته للطلبة.",
    "images": [
      "images/laptops/eb845g7-1.jpg",
      "images/laptops/eb845g7-2.jpg"
    ]
  },
  {
    "id": "gl-16",
    "name": "Dell Latitude 5420",
    "brand": "Dell",
    "price": 13150,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i5-1135G7",
      "ram": "8GB DDR4",
      "storage": "256GB SSD",
      "gpu": "Intel Iris Xe Graphics",
      "screen": "14 بوصة FHD لمس"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-1135G7"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel Iris Xe Graphics"
      },
      {
        "label": "الشاشة",
        "value": "14 بوصة FHD لمس"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج i5 جيل 11",
      "شاشة 14 بوصة تاتش",
      "كارت Iris Xe",
      "سعر ممتاز لجهاز جيل 11"
    ],
    "description": "Latitude بمعالج جيل 11 وشاشة لمس 14 بوصة. حديث وسريع وسعره ممتاز.",
    "images": [
      "images/placeholder.svg"
    ]
  },
  {
    "id": "gl-11",
    "name": "HP EliteBook 845 G8",
    "brand": "HP",
    "price": 13950,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "AMD Ryzen 5 Pro 5650U",
      "ram": "8GB DDR4",
      "storage": "256GB SSD",
      "gpu": "AMD Radeon Graphics",
      "screen": "14 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "AMD Ryzen 5 Pro 5650U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "AMD Radeon Graphics"
      },
      {
        "label": "الشاشة",
        "value": "14 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج Ryzen 5 Pro بـ 6 أنوية",
      "شاشة 14 بوصة FHD",
      "SSD سريع",
      "بودي معدن خفيف"
    ],
    "description": "EliteBook بمعالج Ryzen 5 Pro 5650U بـ 6 أنوية. أداء سريع وبطارية كويسة في تصميم معدن أنيق.",
    "images": [
      "images/laptops/eb845g7-1.jpg",
      "images/laptops/eb845g7-2.jpg"
    ]
  },
  {
    "id": "gl-17",
    "name": "Dell Latitude 5290 2-in-1",
    "brand": "Dell",
    "price": 13950,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7 (جيل 8)",
      "ram": "16GB DDR4",
      "storage": "256GB SSD",
      "gpu": "Intel UHD Graphics 620",
      "screen": "12.3 بوصة FHD لمس"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7 (جيل 8)"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel UHD Graphics 620"
      },
      {
        "label": "الشاشة",
        "value": "12.3 بوصة FHD لمس"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "تابلت بكيبورد بيتفك",
      "شاشة 12.3 بوصة تاتش",
      "معالج i7 ورامات 16 جيجا",
      "مناسب للمذاكرة والتنقل"
    ],
    "description": "تابلت ولاب 2 في 1 بكيبورد بيتفك ومعالج Core i7 ورامات 16 جيجا. صغير جداً وسهل في أي مكان.",
    "images": [
      "images/laptops/lat5290-1.jpg",
      "images/laptops/lat5290-2.jpg",
      "images/laptops/lat5290-3.jpg"
    ]
  },
  {
    "id": "laptop-379",
    "name": "HP ProBook 650 G3",
    "brand": "HP",
    "price": 14000,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i5-7400U",
      "ram": "8GB DDR4",
      "storage": "256GB SSD",
      "gpu": "Intel HD Graphics 520",
      "screen": "15.6 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-7400U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel HD Graphics 520"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "شاشة 15.6 بوصة واسعة ومريحة",
      "SSD لسرعة في التشغيل والاستجابة",
      "مناسب للمكاتب والطلبة والشغل على الإكسل",
      "كيبورد كامل بأرقام جانبية"
    ],
    "description": "شاشة كبيرة 15.6 بوصة مريحة للعين في الشغل الطويل، مع أداء ثابت للمهام اليومية. اختيار كويس لو بتدور على شاشة واسعة بسعر معقول.",
    "images": [
      "images/laptops/laptop-379-1.jpg",
      "images/laptops/laptop-379-2.jpg",
      "images/laptops/laptop-379-3.jpg",
      "images/laptops/laptop-379-4.jpg"
    ]
  },
  {
    "id": "laptop-395",
    "name": "HP EliteBook 840 G4",
    "brand": "HP",
    "price": 14000,
    "variants": [],
    "available": true,
    "features": [
      "شاشة 14 بوصة FHD IPS",
      "بودي ألمونيوم خفيف",
      "هارد NVMe سريع",
      "سعر اقتصادي"
    ],
    "description": "EliteBook 840 بشاشة 14 بوصة FHD IPS وبودي معدن خفيف. اختيار عملي واقتصادي للشغل والمذاكرة.",
    "images": [
      "images/laptops/eb840g4-1.jpg"
    ],
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-7300U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel HD Graphics 620"
      },
      {
        "label": "الشاشة",
        "value": "14 بوصة FHD IPS"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "quick": {
      "cpu": "Intel Core i5-7300U",
      "ram": "8GB DDR4",
      "storage": "256GB NVMe SSD",
      "gpu": "Intel HD Graphics 620",
      "screen": "14 بوصة FHD IPS"
    }
  },
  {
    "id": "pb-440g8",
    "name": "HP ProBook 440 G8",
    "brand": "HP",
    "price": 14500,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i5-1135G7",
      "ram": "16GB DDR4",
      "storage": "256GB SSD",
      "gpu": "Intel Iris Xe Graphics",
      "screen": "14 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-1135G7"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel Iris Xe Graphics"
      },
      {
        "label": "الشاشة",
        "value": "14 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج i5 جيل 11 بـ 4 أنوية و8 ثريد",
      "رامات 16 جيجا لتعدد مهام براحة",
      "كارت Iris Xe أقوى من الكروت المدمجة القديمة",
      "بودي فضي خفيف وشاشة 14 بوصة FHD"
    ],
    "description": "ProBook حديث بمعالج جيل 11 ورامات 16 جيجا. سريع وخفيف ومناسب للمذاكرة والشغل المكتبي والبرمجة بسعر مناسب.",
    "images": [
      "images/laptops/pb440g8-1.jpg",
      "images/laptops/pb440g8-2.jpg",
      "images/laptops/pb440g8-3.jpg",
      "images/laptops/pb440g8-4.jpg"
    ]
  },
  {
    "id": "laptop-394",
    "name": "Dell XPS 13 9360",
    "brand": "Dell",
    "price": 14500,
    "variants": [],
    "available": true,
    "features": [
      "تصميم فاخر بحواف رفيعة",
      "خفيف جداً حوالي 1.2 كيلو",
      "شاشة 13.3 بوصة FHD",
      "مثالي للتنقل والمذاكرة"
    ],
    "description": "XPS 13 الأنيق بحواف شاشة رفيعة جداً ووزن خفيف. من أشهر اللابات الصغيرة الفاخرة من Dell.",
    "images": [
      "images/laptops/xps9360-1.jpg",
      "images/laptops/xps9360-2.jpg"
    ],
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-7200U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel HD Graphics 620"
      },
      {
        "label": "الشاشة",
        "value": "13.3 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "quick": {
      "cpu": "Intel Core i5-7200U",
      "ram": "8GB DDR4",
      "storage": "256GB NVMe SSD",
      "gpu": "Intel HD Graphics 620",
      "screen": "13.3 بوصة FHD"
    }
  },
  {
    "id": "gl-09",
    "name": "HP EliteBook 830 x360 G6",
    "brand": "HP",
    "price": 14550,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i5-8250U",
      "ram": "8GB DDR4",
      "storage": "256GB SSD",
      "gpu": "Intel UHD Graphics 620",
      "screen": "13.3 بوصة FHD لمس"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-8250U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel UHD Graphics 620"
      },
      {
        "label": "الشاشة",
        "value": "13.3 بوصة FHD لمس"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "يتقلب 360 درجة ويستخدم كتابلت",
      "شاشة 13.3 بوصة تاتش",
      "معالج i5 جيل 8 بـ 4 أنوية",
      "خفيف وسهل الحمل"
    ],
    "description": "لاب وتابلت 2 في 1 بيتقلب 360 درجة بشاشة لمس. صغير وخفيف ومناسب للمذاكرة والتنقل.",
    "images": [
      "images/laptops/eb830x360g6-1.jpg"
    ]
  },
  {
    "id": "gl-10",
    "name": "HP EliteBook 755 G5",
    "brand": "HP",
    "price": 14550,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "AMD Ryzen 7 Pro 2700U",
      "ram": "8GB DDR4",
      "storage": "256GB SSD",
      "gpu": "AMD Radeon Vega 10",
      "screen": "15.6 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "AMD Ryzen 7 Pro 2700U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "AMD Radeon Vega 10"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج Ryzen 7 Pro بـ 4 أنوية",
      "كارت Radeon Vega 10",
      "شاشة 15.6 بوصة FHD",
      "كيبورد كامل"
    ],
    "description": "EliteBook بشاشة 15.6 بوصة ومعالج Ryzen 7 وكارت Vega 10. مناسب للشغل والتصميم الخفيف.",
    "images": [
      "images/laptops/eb755g5-1.jpg",
      "images/laptops/eb755g5-2.jpg"
    ]
  },
  {
    "id": "gl-19",
    "name": "Dell Latitude 5510 (i5)",
    "brand": "Dell",
    "price": 14550,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i5-10210U",
      "ram": "8GB DDR4",
      "storage": "256GB SSD",
      "gpu": "Intel UHD Graphics 620",
      "screen": "15.6 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-10210U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel UHD Graphics 620"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج i5 جيل 10 بـ 4 أنوية",
      "كيبورد كامل بأرقام جانبية",
      "شاشة 15.6 بوصة",
      "سعر مناسب"
    ],
    "description": "Latitude 15.6 بوصة بكيبورد كامل ومعالج جيل 10. أرخص اختيار لشاشة كبيرة وجهاز حديث.",
    "images": [
      "images/laptops/laptop-323-1.jpg",
      "images/laptops/laptop-323-2.jpg",
      "images/laptops/laptop-323-3.jpg",
      "images/laptops/laptop-323-4.jpg",
      "images/laptops/laptop-323-5.jpg"
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
      "ram": "8GB DDR4",
      "storage": "256GB NVMe SSD",
      "gpu": "Intel Iris Xe Graphics",
      "screen": "14 بوصة لمس"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-1135G7"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel Iris Xe Graphics"
      },
      {
        "label": "الشاشة",
        "value": "14 بوصة لمس"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج i5 جيل 11 حديث",
      "شاشة 14 بوصة تاتش",
      "كارت Iris Xe يشغل مونتاج خفيف وألعاب بسيطة",
      "وزن خفيف مناسب للتنقل اليومي"
    ],
    "description": "لاب حديث بمعالج جيل حادي عشر وشاشة لمس، خفيف جداً وسهل في الحمل. كارت Iris Xe بيدي أداء أحسن بكتير من الكروت المدمجة القديمة.",
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
      "cpu": "Intel Core i5-6440HQ",
      "ram": "8GB DDR4",
      "storage": "256GB SSD",
      "gpu": "Intel HD Graphics 530",
      "screen": "15.6 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-6440HQ"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel HD Graphics 530"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج HQ رباعي الأنوية من فئة الأداء العالي",
      "بودي ZBook متين بمعايير محطات العمل",
      "شاشة 15.6 بوصة",
      "مناسب لبرامج الهندسة الخفيفة والبرمجة"
    ],
    "description": "ورك ستيشن HP ZBook بهيكل قوي ومعالج HQ رباعي الأنوية. بداية كويسة لطلبة الهندسة والبرامج اللي محتاجة معالج قوي بسعر مناسب.",
    "images": [
      "images/laptops/laptop-300-1.jpg",
      "images/laptops/laptop-300-2.jpg",
      "images/laptops/laptop-300-3.jpg",
      "images/laptops/laptop-300-4.jpg",
      "images/laptops/laptop-300-5.jpg"
    ]
  },
  {
    "id": "laptop-264",
    "name": "Dell Latitude 5480",
    "brand": "Dell",
    "price": 15000,
    "variants": [],
    "available": true,
    "features": [
      "معالج Core i7 جيل 7",
      "شاشة 14 بوصة",
      "SSD سريع",
      "خامة Latitude متينة"
    ],
    "description": "Latitude 14 بوصة بمعالج Core i7. متين وعملي للشغل المكتبي اليومي.",
    "images": [
      "images/laptops/lat5480-1.jpg"
    ],
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7 (جيل 7)"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB M.2 SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel HD Graphics 620"
      },
      {
        "label": "الشاشة",
        "value": "14 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "quick": {
      "cpu": "Intel Core i7 (جيل 7)",
      "ram": "8GB DDR4",
      "storage": "256GB M.2 SSD",
      "gpu": "Intel HD Graphics 620",
      "screen": "14 بوصة"
    }
  },
  {
    "id": "laptop-369",
    "name": "Dell Latitude 5590",
    "brand": "Dell",
    "price": 15500,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i5-8350U",
      "ram": "8GB DDR4",
      "storage": "256GB M.2 SSD",
      "gpu": "Intel UHD Graphics 620",
      "screen": "15.6 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-8350U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB M.2 SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel UHD Graphics 620"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج i5 جيل ثامن بـ 4 أنوية",
      "شاشة كبيرة مناسبة للشغل والمذاكرة",
      "SSD سريع في كل حاجة",
      "كيبورد كامل مريح في الكتابة الكتير"
    ],
    "description": "Latitude بشاشة 15.6 بوصة ومعالج جيل ثامن رباعي الأنوية. توازن حلو بين الأداء والسعر والشاشة الكبيرة.",
    "images": [
      "images/laptops/laptop-369-1.jpg",
      "images/laptops/laptop-369-2.jpg",
      "images/laptops/laptop-369-3.jpg",
      "images/laptops/laptop-369-4.jpg",
      "images/laptops/laptop-369-5.jpg"
    ]
  },
  {
    "id": "laptop-337",
    "name": "Dell Latitude 5591",
    "brand": "Dell",
    "price": 16500,
    "variants": [],
    "available": true,
    "features": [
      "شاشة 15.6 بوصة",
      "هارد NVMe سريع",
      "كيبورد كامل بأرقام جانبية",
      "خامة Latitude متينة"
    ],
    "description": "Latitude 15.6 بوصة بمعالج جيل 8 وهارد NVMe. شاشة كبيرة وأداء مريح للشغل اليومي.",
    "images": [
      "images/laptops/laptop-369-1.jpg",
      "images/laptops/laptop-369-2.jpg",
      "images/laptops/laptop-369-3.jpg",
      "images/laptops/laptop-369-4.jpg",
      "images/laptops/laptop-369-5.jpg"
    ],
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5 (جيل 8)"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel UHD Graphics 620"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "quick": {
      "cpu": "Intel Core i5 (جيل 8)",
      "ram": "8GB DDR4",
      "storage": "256GB NVMe SSD",
      "gpu": "Intel UHD Graphics 620",
      "screen": "15.6 بوصة"
    }
  },
  {
    "id": "gl-12",
    "name": "HP EliteBook 845 G7 (Ryzen 7)",
    "brand": "HP",
    "price": 16950,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "AMD Ryzen 7 Pro 4750U",
      "ram": "16GB DDR4",
      "storage": "256GB SSD",
      "gpu": "AMD Radeon Graphics",
      "screen": "14 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "AMD Ryzen 7 Pro 4750U"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "AMD Radeon Graphics"
      },
      {
        "label": "الشاشة",
        "value": "14 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج Ryzen 7 Pro بـ 8 أنوية",
      "رامات 16 جيجا",
      "شاشة 14 بوصة FHD",
      "ممتاز لتعدد المهام والبرمجة"
    ],
    "description": "Ryzen 7 Pro بـ 8 أنوية و16 ثريد مع رامات 16 جيجا. قوة كبيرة في لاب 14 بوصة خفيف.",
    "images": [
      "images/laptops/eb845g7-1.jpg",
      "images/laptops/eb845g7-2.jpg"
    ]
  },
  {
    "id": "laptop-385",
    "name": "HP ProBook 650 G5 (i5)",
    "brand": "HP",
    "price": 17500,
    "variants": [],
    "available": true,
    "features": [
      "معالج i5 جيل 8 بـ 4 أنوية",
      "شاشة 15.6 بوصة",
      "هارد NVMe سريع",
      "كيبورد كامل"
    ],
    "description": "ProBook 650 G5 بمعالج i5 جيل 8 بـ 4 أنوية وشاشة 15.6 بوصة. عملي ومتين للشغل المكتبي.",
    "images": [
      "images/laptops/pb650g5-1.jpg",
      "images/laptops/pb650g5-2.jpg",
      "images/laptops/pb650g5-3.jpg"
    ],
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-8665U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel UHD Graphics 620"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "quick": {
      "cpu": "Intel Core i5-8665U",
      "ram": "8GB DDR4",
      "storage": "256GB NVMe SSD",
      "gpu": "Intel UHD Graphics 620",
      "screen": "15.6 بوصة"
    }
  },
  {
    "id": "gl-03",
    "name": "HP EliteBook 845 G9",
    "brand": "HP",
    "price": 17550,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "AMD Ryzen 5 Pro 6650U",
      "ram": "8GB DDR5",
      "storage": "256GB SSD",
      "gpu": "AMD Radeon 660M",
      "screen": "14 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "AMD Ryzen 5 Pro 6650U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR5"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "AMD Radeon 660M"
      },
      {
        "label": "الشاشة",
        "value": "14 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج Ryzen 5 Pro بـ 6 أنوية",
      "رامات DDR5",
      "كارت Radeon 660M مدمج قوي",
      "شاشة 14 بوصة 100% sRGB"
    ],
    "description": "EliteBook حديث بمعالج Ryzen 5 Pro ورامات DDR5 وكارت Radeon 660M. أداء ممتاز للشغل والدراسة في جسم خفيف.",
    "images": [
      "images/laptops/eb845g9-1.jpg",
      "images/laptops/eb845g9-2.jpg"
    ]
  },
  {
    "id": "gl-13",
    "name": "Dell Precision 3560",
    "brand": "Dell",
    "price": 17550,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i5-1135G7",
      "ram": "16GB DDR4",
      "storage": "256GB SSD",
      "gpu": "Intel Iris Xe Graphics",
      "screen": "15.6 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-1135G7"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel Iris Xe Graphics"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج i5 جيل 11",
      "رامات 16 جيجا",
      "كارت Iris Xe",
      "شاشة 15.6 بوصة FHD"
    ],
    "description": "Precision بمعالج جيل 11 ورامات 16 جيجا وشاشة 15.6 بوصة. سريع وعملي للشغل اليومي والمكتبي التقيل.",
    "images": [
      "images/laptops/prec3560-1.jpg"
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
      "ram": "16GB DDR4",
      "storage": "256GB NVMe SSD",
      "gpu": "Intel UHD Graphics 620",
      "screen": "13.3 بوصة لمس"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-8265U"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel UHD Graphics 620"
      },
      {
        "label": "الشاشة",
        "value": "13.3 بوصة لمس"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "تصميم x360 يتقلب ويستخدم كتابلت",
      "رامات 16 جيجا لتعدد مهام براحة",
      "شاشة 13.3 بوصة تاتش",
      "بودي معدن أنيق وخفيف"
    ],
    "description": "EliteBook x360 بيتقلب 360 درجة ويتحول لتابلت، بشاشة لمس ورامات 16 جيجا. أناقة وخفة مع أداء مريح لتعدد المهام.",
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
      "ram": "8GB DDR4",
      "storage": "256GB NVMe SSD",
      "gpu": "Intel Iris Xe Graphics",
      "screen": "14 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-1145G7"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel Iris Xe Graphics"
      },
      {
        "label": "الشاشة",
        "value": "14 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج i5 جيل 11 بدعم vPro",
      "هارد NVMe سريع",
      "كارت Iris Xe",
      "تصميم EliteBook المعدن الخفيف"
    ],
    "description": "EliteBook حديث بمعالج جيل حادي عشر وتصميم معدن أنيق. سريع جداً في الشغل اليومي والاجتماعات الأونلاين.",
    "images": [
      "images/laptops/laptop-360-1.jpg",
      "images/laptops/laptop-360-2.jpg",
      "images/laptops/laptop-360-3.jpg",
      "images/laptops/laptop-360-4.jpg",
      "images/laptops/laptop-360-5.jpg"
    ]
  },
  {
    "id": "laptop-384",
    "name": "HP ProBook 650 G5 (i7)",
    "brand": "HP",
    "price": 18500,
    "variants": [],
    "available": true,
    "features": [
      "معالج i7 جيل 8 بـ 4 أنوية",
      "شاشة 15.6 بوصة",
      "هارد NVMe سريع",
      "كيبورد كامل"
    ],
    "description": "ProBook 650 G5 بمعالج Core i7 جيل 8 وشاشة 15.6 بوصة. أداء أعلى لتعدد المهام والبرامج الأتقل.",
    "images": [
      "images/laptops/pb650g5-1.jpg",
      "images/laptops/pb650g5-2.jpg",
      "images/laptops/pb650g5-3.jpg"
    ],
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-8665U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel UHD Graphics 620"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "quick": {
      "cpu": "Intel Core i7-8665U",
      "ram": "8GB DDR4",
      "storage": "256GB NVMe SSD",
      "gpu": "Intel UHD Graphics 620",
      "screen": "15.6 بوصة"
    }
  },
  {
    "id": "laptop-378",
    "name": "Dell Latitude 5320",
    "brand": "Dell",
    "price": 19000,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i5-1145G7",
      "ram": "8GB DDR4",
      "storage": "256GB NVMe SSD",
      "gpu": "Intel Iris Xe Graphics",
      "screen": "13.3 بوصة لمس"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-1145G7"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel Iris Xe Graphics"
      },
      {
        "label": "الشاشة",
        "value": "13.3 بوصة لمس"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج i5 جيل 11 بدعم vPro",
      "شاشة 13.3 بوصة تاتش",
      "حجم صغير ووزن خفيف جداً",
      "كارت Iris Xe لأداء رسومي أفضل"
    ],
    "description": "لاب صغير 13.3 بوصة بشاشة لمس ومعالج جيل حادي عشر. مثالي لو بتتنقل كتير ومحتاج جهاز سريع وخفيف.",
    "images": [
      "images/laptops/laptop-378-1.jpg",
      "images/laptops/laptop-378-2.jpg",
      "images/laptops/laptop-378-3.jpg",
      "images/laptops/laptop-378-4.jpg",
      "images/laptops/laptop-378-5.jpg"
    ]
  },
  {
    "id": "gl-02",
    "name": "HP EliteBook 845 G10",
    "brand": "HP",
    "price": 19950,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "AMD Ryzen 5 Pro 7540U",
      "ram": "8GB DDR5",
      "storage": "256GB SSD",
      "gpu": "AMD Radeon 740M",
      "screen": "14 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "AMD Ryzen 5 Pro 7540U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR5"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "AMD Radeon 740M"
      },
      {
        "label": "الشاشة",
        "value": "14 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج Ryzen 5 Pro بـ 6 أنوية",
      "رامات DDR5 الأحدث",
      "شاشة 14 بوصة 100% sRGB",
      "بصمة وتصميم معدن خفيف"
    ],
    "description": "أحدث EliteBook عندنا بمعالج Ryzen 5 Pro 7540U ورامات DDR5. سريع وخفيف وشاشته ألوانها دقيقة 100% sRGB.",
    "images": [
      "images/laptops/eb845g10-1.jpg",
      "images/laptops/eb845g10-2.jpg",
      "images/laptops/eb845g10-3.jpg"
    ]
  },
  {
    "id": "laptop-396",
    "name": "HP ZBook 15 G3 (i7 + FirePro)",
    "brand": "HP",
    "price": 20000,
    "variants": [],
    "available": true,
    "features": [
      "كارت شاشة منفصل AMD FirePro بـ 2 جيجا",
      "معالج i7 HQ رباعي الأنوية",
      "رامات 16 جيجا وهارد 512",
      "مناسب للأوتوكاد والبرامج الهندسية"
    ],
    "description": "ZBook 15 G3 بمعالج i7 HQ وكارت AMD FirePro منفصل ورامات 16 جيجا. ورك ستيشن اقتصادي للبرامج الهندسية.",
    "images": [
      "images/laptops/laptop-300-1.jpg",
      "images/laptops/laptop-300-2.jpg",
      "images/laptops/laptop-300-3.jpg",
      "images/laptops/laptop-300-4.jpg",
      "images/laptops/laptop-300-5.jpg"
    ],
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-6820HQ"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "AMD FirePro W5170M 2GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD IPS"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "quick": {
      "cpu": "Intel Core i7-6820HQ",
      "ram": "16GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "AMD FirePro W5170M 2GB",
      "screen": "15.6 بوصة FHD IPS"
    }
  },
  {
    "id": "gl-14",
    "name": "HP Elite x2 1013 G8",
    "brand": "HP",
    "price": 20550,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i5-1135G7",
      "ram": "16GB DDR4",
      "storage": "256GB SSD",
      "gpu": "Intel Iris Xe Graphics",
      "screen": "13 بوصة FHD لمس"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-1135G7"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel Iris Xe Graphics"
      },
      {
        "label": "الشاشة",
        "value": "13 بوصة FHD لمس"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "تابلت بكيبورد بيتفك ويتركب",
      "شاشة لمس FHD",
      "معالج i5 جيل 11 ورامات 16 جيجا",
      "خفيف جداً للتنقل"
    ],
    "description": "تابلت ولاب 2 في 1 بكيبورد بيتفك. شاشة لمس ومعالج جيل 11 ورامات 16 جيجا.",
    "images": [
      "images/laptops/elitex2g8-1.jpg",
      "images/laptops/elitex2g8-2.jpg"
    ]
  },
  {
    "id": "gl-25",
    "name": "Dell Precision 7530",
    "brand": "Dell",
    "price": 20950,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-8850H",
      "ram": "16GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA Quadro P1000 4GB",
      "screen": "15.6 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-8850H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA Quadro P1000 4GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "كارت NVIDIA Quadro P1000 بـ 4 جيجا",
      "معالج i7 بـ 6 أنوية",
      "هارد NVMe 512",
      "سعر اقتصادي لورك ستيشن"
    ],
    "description": "من أرخص الورك ستيشن بكارت منفصل: i7 بـ 6 أنوية وNVIDIA P1000. بداية ممتازة لطلبة الهندسة.",
    "images": [
      "images/laptops/prec7540-1.jpg",
      "images/laptops/prec7540-2.jpg"
    ]
  },
  {
    "id": "gl-26",
    "name": "HP ZBook 15 G5",
    "brand": "HP",
    "price": 20950,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-8850H",
      "ram": "16GB DDR4",
      "storage": "128GB SSD + 500GB HDD",
      "gpu": "NVIDIA Quadro P1000 4GB",
      "screen": "15.6 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-8850H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "128GB SSD + 500GB HDD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA Quadro P1000 4GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "كارت NVIDIA Quadro P1000 بـ 4 جيجا",
      "معالج i7 بـ 6 أنوية",
      "SSD للويندوز وهارد 500 للملفات",
      "مناسب للأوتوكاد والريفيت"
    ],
    "description": "ZBook 15 بمعالج i7 بـ 6 أنوية وكارت NVIDIA P1000 ومساحة تخزين كبيرة. ورك ستيشن عملي بسعر مناسب.",
    "images": [
      "images/laptops/zbook15g5g6-1.jpg",
      "images/laptops/zbook15g5g6-2.jpg",
      "images/laptops/zbook15g5g6-3.jpg"
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
      "cpu": "Intel Core i7-10810U",
      "ram": "8GB DDR4",
      "storage": "256GB NVMe SSD",
      "gpu": "Intel UHD Graphics",
      "screen": "15.6 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-10810U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج i7 جيل 10 بـ 6 أنوية",
      "شاشة 15.6 بوصة",
      "هارد NVMe سريع",
      "مناسب للبرمجة والشغل على ملفات كبيرة"
    ],
    "description": "Latitude بمعالج Core i7 جيل عاشر بـ 6 أنوية وشاشة 15.6 بوصة. قوة i7 بسعر معقول للشغل المكتبي التقيل.",
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
      "ram": "16GB DDR4",
      "storage": "512GB SSD",
      "gpu": "NVIDIA Quadro M2200 4GB",
      "screen": "15.6 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-6820HQ"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA Quadro M2200 4GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "كارت NVIDIA Quadro M2200 بـ 4 جيجا",
      "معالج i7 HQ رباعي الأنوية",
      "رامات 16 جيجا وهارد 512",
      "مناسب للأوتوكاد والـ 3D والبرامج الهندسية"
    ],
    "description": "ورك ستيشن Dell Precision بكارت NVIDIA Quadro 4 جيجا ورامات 16. مناسب للأوتوكاد والريفيت والبرامج الهندسية بسعر قليل.",
    "images": [
      "images/laptops/laptop-346-1.jpg",
      "images/laptops/laptop-346-2.jpg",
      "images/laptops/laptop-346-3.jpg",
      "images/laptops/laptop-346-4.jpg",
      "images/laptops/laptop-346-5.jpg"
    ]
  },
  {
    "id": "laptop-387",
    "name": "Dell Latitude 5500 (i7 + Radeon Pro)",
    "brand": "Dell",
    "price": 21000,
    "variants": [],
    "available": true,
    "features": [
      "كارت شاشة منفصل Radeon Pro بـ 2 جيجا",
      "معالج i7 جيل 8",
      "شاشة 15.6 بوصة FHD",
      "كيبورد كامل"
    ],
    "description": "Latitude 5500 بمعالج i7 وكارت AMD Radeon Pro منفصل. مناسب للشغل والجرافيك الخفيف.",
    "images": [
      "images/laptops/lat5500-1.jpg"
    ],
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-8665U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "AMD Radeon Pro WX 2100 2GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "quick": {
      "cpu": "Intel Core i7-8665U",
      "ram": "8GB DDR4",
      "storage": "256GB NVMe SSD",
      "gpu": "AMD Radeon Pro WX 2100 2GB",
      "screen": "15.6 بوصة FHD"
    }
  },
  {
    "id": "laptop-388",
    "name": "Dell Latitude 5410",
    "brand": "Dell",
    "price": 21000,
    "variants": [],
    "available": true,
    "features": [
      "كارت شاشة منفصل Radeon RX 640 بـ 2 جيجا",
      "معالج i7 جيل 10 بـ 4 أنوية",
      "شاشة 14 بوصة FHD",
      "حجم مناسب للتنقل"
    ],
    "description": "Latitude 14 بوصة بمعالج i7 جيل 10 وكارت شاشة منفصل Radeon RX 640. صغير وقوي في نفس الوقت.",
    "images": [
      "images/laptops/lat5410-1.jpg"
    ],
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-10610U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "AMD Radeon RX 640 2GB"
      },
      {
        "label": "الشاشة",
        "value": "14 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "quick": {
      "cpu": "Intel Core i7-10610U",
      "ram": "8GB DDR4",
      "storage": "256GB NVMe SSD",
      "gpu": "AMD Radeon RX 640 2GB",
      "screen": "14 بوصة FHD"
    }
  },
  {
    "id": "laptop-386",
    "name": "HP 14-cf",
    "brand": "HP",
    "price": 21500,
    "variants": [],
    "available": true,
    "features": [
      "معالج i5 جيل 10 بـ 4 أنوية",
      "كارت شاشة منفصل AMD Radeon",
      "شاشة 14 بوصة FHD",
      "خفيف وسهل الحمل"
    ],
    "description": "لاب HP خفيف 14 بوصة بمعالج i5 جيل 10 وكارت AMD Radeon منفصل. مناسب للمذاكرة والاستخدام اليومي.",
    "images": [
      "images/laptops/hp14cf-1.jpg",
      "images/laptops/hp14cf-2.jpg"
    ],
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-10210U"
      },
      {
        "label": "الرامات",
        "value": "8GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "AMD Radeon 2GB"
      },
      {
        "label": "الشاشة",
        "value": "14 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "quick": {
      "cpu": "Intel Core i5-10210U",
      "ram": "8GB DDR4",
      "storage": "256GB NVMe SSD",
      "gpu": "AMD Radeon 2GB",
      "screen": "14 بوصة FHD"
    }
  },
  {
    "id": "gl-18",
    "name": "Dell Precision 5530",
    "brand": "Dell",
    "price": 21950,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-8850H",
      "ram": "16GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA Quadro P1000 4GB",
      "screen": "15.6 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-8850H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA Quadro P1000 4GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "تصميم نحيف شبه XPS",
      "كارت NVIDIA Quadro P1000 بـ 4 جيجا",
      "معالج i7 بـ 6 أنوية",
      "هارد NVMe 512"
    ],
    "description": "Precision 5530 نحيف بتصميم شبه XPS ومعالج i7 بـ 6 أنوية وكارت NVIDIA P1000. أقل سعر لورك ستيشن بالشكل ده.",
    "images": [
      "images/laptops/prec5530-1.jpg"
    ]
  },
  {
    "id": "gl-01",
    "name": "HP ZBook 15 G6",
    "brand": "HP",
    "price": 22550,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-9850H",
      "ram": "16GB DDR4",
      "storage": "128GB SSD + 500GB HDD",
      "gpu": "NVIDIA Quadro T1000 4GB",
      "screen": "15.6 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-9850H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "128GB SSD + 500GB HDD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA Quadro T1000 4GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "كارت NVIDIA Quadro T1000 بـ 4 جيجا",
      "معالج i7 جيل 9 بـ 6 أنوية",
      "SSD للويندوز وهارد 500 للملفات",
      "مناسب للأوتوكاد والريفيت والـ SketchUp"
    ],
    "description": "ورك ستيشن ZBook بمعالج i7 جيل تاسع بـ 6 أنوية وكارت NVIDIA Quadro T1000. اختيار قوي لطلبة الهندسة والعمارة.",
    "images": [
      "images/laptops/zbook15g5g6-1.jpg",
      "images/laptops/zbook15g5g6-2.jpg",
      "images/laptops/zbook15g5g6-3.jpg"
    ]
  },
  {
    "id": "laptop-278",
    "name": "HP ZBook 15 G3 (i7 + Quadro)",
    "brand": "HP",
    "price": 23500,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-6820HQ",
      "ram": "16GB DDR4",
      "storage": "512GB M.2 SSD",
      "gpu": "NVIDIA Quadro M2000M 4GB",
      "screen": "15.6 بوصة لمس"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-6820HQ"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB M.2 SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA Quadro M2000M 4GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة لمس"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "كارت NVIDIA Quadro M2000M بـ 4 جيجا",
      "معالج i7 HQ رباعي الأنوية",
      "رامات 16 جيجا وهارد 512",
      "مناسب للأوتوكاد والريفيت والـ SketchUp"
    ],
    "description": "ZBook 15 بمعالج i7 وكارت NVIDIA Quadro 4 جيجا ورامات 16. ورك ستيشن قوي لطلبة العمارة والهندسة.",
    "images": [
      "images/laptops/laptop-278-1.jpg",
      "images/laptops/laptop-278-2.jpg"
    ]
  },
  {
    "id": "gl-24",
    "name": "Dell Precision 7540",
    "brand": "Dell",
    "price": 23550,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-9750H",
      "ram": "16GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA Quadro T1000 4GB",
      "screen": "15.6 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-9750H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA Quadro T1000 4GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "كارت NVIDIA Quadro T1000 بـ 4 جيجا",
      "معالج i7 جيل 9 بـ 6 أنوية",
      "هارد NVMe 512",
      "بودي Precision متين"
    ],
    "description": "ورك ستيشن Precision بمعالج i7 جيل 9 بـ 6 أنوية وكارت NVIDIA T1000. قوي ومتين للشغل الهندسي.",
    "images": [
      "images/laptops/prec7540-1.jpg",
      "images/laptops/prec7540-2.jpg"
    ]
  },
  {
    "id": "gl-27",
    "name": "Dell Precision 7550 (i7 + T1000)",
    "brand": "Dell",
    "price": 25950,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-10850H",
      "ram": "16GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA Quadro T1000 4GB",
      "screen": "15.6 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-10850H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA Quadro T1000 4GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "كارت NVIDIA Quadro T1000 بـ 4 جيجا",
      "معالج i7 جيل 10 بـ 6 أنوية",
      "هارد NVMe 512",
      "مناسب للبرامج الهندسية والمونتاج"
    ],
    "description": "Precision 7550 بمعالج i7 جيل 10 بـ 6 أنوية وكارت NVIDIA T1000. ورك ستيشن قوي بسعر أقل من نسخة الـ Xeon.",
    "images": [
      "images/laptops/laptop-293-1.jpg",
      "images/laptops/laptop-293-2.jpg",
      "images/laptops/laptop-293-3.jpg",
      "images/laptops/laptop-293-4.jpg",
      "images/laptops/laptop-293-5.jpg"
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
      "ram": "16GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "Intel UHD Graphics",
      "screen": "15.6 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Xeon W-11955M"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج Xeon W بـ 8 أنوية و16 ثريد",
      "رامات 16 جيجا وهارد NVMe 512",
      "ثبات عالي للشغل المتواصل",
      "مناسب للمحاكاة والبرمجة والحسابات التقيلة"
    ],
    "description": "Precision بمعالج Intel Xeon بـ 8 أنوية، من أقوى المعالجات في اللابات. مصمم للشغل الاحترافي اللي محتاج ثبات تام لساعات طويلة.",
    "images": [
      "images/laptops/laptop-380-1.jpg",
      "images/laptops/laptop-380-2.jpg",
      "images/laptops/laptop-380-3.jpg",
      "images/laptops/laptop-380-4.jpg",
      "images/laptops/laptop-380-5.jpg"
    ]
  },
  {
    "id": "gl-23",
    "name": "Dell Precision 5550 (16GB)",
    "brand": "Dell",
    "price": 27850,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-10850H",
      "ram": "16GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA T1000 4GB Max-Q",
      "screen": "15.6 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-10850H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA T1000 4GB Max-Q"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "تصميم نحيف شبه الماك بوك",
      "كارت NVIDIA T1000 بـ 4 جيجا",
      "معالج i7 جيل 10 بـ 6 أنوية",
      "هارد NVMe 512"
    ],
    "description": "Precision 5550 النحيف بمعالج i7 بـ 6 أنوية وكارت NVIDIA T1000. ورك ستيشن خفيف بتصميم أنيق.",
    "images": [
      "images/laptops/laptop-296-1.webp",
      "images/laptops/laptop-296-2.webp",
      "images/laptops/laptop-296-3.webp",
      "images/laptops/laptop-296-4.webp",
      "images/laptops/laptop-296-5.webp"
    ]
  },
  {
    "id": "gl-04",
    "name": "Dell Precision 7560 (i7 + T1200)",
    "brand": "Dell",
    "price": 28350,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-11850H",
      "ram": "16GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA Quadro T1200 4GB",
      "screen": "15.6 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-11850H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA Quadro T1200 4GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج i7 جيل 11 بـ 8 أنوية",
      "كارت NVIDIA Quadro T1200 بـ 4 جيجا",
      "هارد NVMe سريع 512",
      "مناسب للبرامج الهندسية والمونتاج"
    ],
    "description": "Precision 7560 بمعالج i7 جيل 11 بـ 8 أنوية وكارت NVIDIA T1200. ورك ستيشن حديث بسعر مناسب جداً.",
    "images": [
      "images/laptops/laptop-381-1.jpg",
      "images/laptops/laptop-381-2.jpg",
      "images/laptops/laptop-381-3.jpg",
      "images/laptops/laptop-381-4.jpg",
      "images/laptops/laptop-381-5.jpg"
    ]
  },
  {
    "id": "gl-29",
    "name": "HP ZBook Fury 15 G7",
    "brand": "HP",
    "price": 28350,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-10850H",
      "ram": "16GB DDR4",
      "storage": "256GB SSD + 500GB HDD",
      "gpu": "NVIDIA Quadro T1000 4GB",
      "screen": "15.6 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-10850H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD + 500GB HDD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA Quadro T1000 4GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "بودي Fury القوي",
      "كارت NVIDIA Quadro T1000 بـ 4 جيجا",
      "معالج i7 جيل 10 بـ 6 أنوية",
      "SSD وهارد 500 للملفات"
    ],
    "description": "ZBook Fury من أقوى أجهزة HP الورك ستيشن، بمعالج i7 بـ 6 أنوية وكارت NVIDIA T1000.",
    "images": [
      "images/laptops/zbfuryg7-1.jpg",
      "images/laptops/zbfuryg7-2.jpg",
      "images/laptops/zbfuryg7-3.jpg"
    ]
  },
  {
    "id": "gl-07",
    "name": "HP ZBook Power G7",
    "brand": "HP",
    "price": 29550,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i9-10885H",
      "ram": "16GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA Quadro T1000 4GB",
      "screen": "15.6 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i9-10885H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA Quadro T1000 4GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج Core i9 جيل 10 بـ 8 أنوية",
      "كارت NVIDIA Quadro T1000 بـ 4 جيجا",
      "هارد NVMe سريع 512",
      "مناسب للريندر والبرامج الهندسية"
    ],
    "description": "ZBook بمعالج Core i9 بـ 8 أنوية وكارت NVIDIA T1000. أداء عالي جداً للبرامج التقيلة بسعر معقول.",
    "images": [
      "images/laptops/zbpowerg7-1.jpg",
      "images/laptops/zbpowerg7-2.jpg"
    ]
  },
  {
    "id": "gl-22",
    "name": "Dell Precision 5560",
    "brand": "Dell",
    "price": 31850,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-11850H",
      "ram": "16GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA T1200 4GB Max-Q",
      "screen": "15.6 بوصة 4K لمس"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-11850H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA T1200 4GB Max-Q"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة 4K لمس"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "شاشة 15.6 بوصة 4K تاتش",
      "معالج i7 جيل 11 بـ 8 أنوية",
      "كارت NVIDIA T1200 بـ 4 جيجا",
      "تصميم نحيف أنيق"
    ],
    "description": "Precision 5560 بتصميم نحيف شبه الماك بوك وشاشة 4K تاتش. معالج i7 بـ 8 أنوية وكارت NVIDIA T1200.",
    "images": [
      "images/laptops/prec5560-1.jpg",
      "images/laptops/prec5560-2.jpg",
      "images/laptops/prec5560-3.jpg"
    ]
  },
  {
    "id": "gl-06",
    "name": "HP ZBook Studio G8",
    "brand": "HP",
    "price": 31950,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-11850H",
      "ram": "32GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA Quadro T1200 4GB",
      "screen": "15.6 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-11850H"
      },
      {
        "label": "الرامات",
        "value": "32GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA Quadro T1200 4GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "تصميم ألترا سليم خفيف",
      "رامات 32 جيجا",
      "كارت NVIDIA Quadro T1200 بـ 4 جيجا",
      "معالج i7 جيل 11 بـ 8 أنوية"
    ],
    "description": "ZBook Studio نحيف جداً بمعالج i7 جيل 11 بـ 8 أنوية ورامات 32 جيجا. قوة ورك ستيشن في شكل ألترا سليم.",
    "images": [
      "images/laptops/zbstudiog8-1.jpg",
      "images/laptops/zbstudiog8-2.jpg",
      "images/laptops/zbstudiog8-3.jpg"
    ]
  },
  {
    "id": "laptop-293",
    "name": "Dell Precision 7550 (i5 + T1000)",
    "brand": "Dell",
    "price": 32000,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i5-10400H",
      "ram": "16GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA Quadro T1000 4GB",
      "screen": "15.6 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-10400H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA Quadro T1000 4GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "كارت NVIDIA Quadro T1000 بـ 4 جيجا",
      "معالج i5 جيل 10 فئة H بـ 4 أنوية",
      "رامات 16 جيجا وهارد NVMe 512",
      "مناسب للأوتوكاد والريفيت والمونتاج"
    ],
    "description": "Precision 7550 بمعالج i5 جيل 10 فئة H وكارت NVIDIA T1000 بـ 4 جيجا. ورك ستيشن قوي ومتين بسعر أقل.",
    "images": [
      "images/laptops/laptop-293-1.jpg",
      "images/laptops/laptop-293-2.jpg",
      "images/laptops/laptop-293-3.jpg",
      "images/laptops/laptop-293-4.jpg",
      "images/laptops/laptop-293-5.jpg"
    ]
  },
  {
    "id": "gl-28",
    "name": "HP ZBook Fury 15 G8",
    "brand": "HP",
    "price": 34950,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-11850H",
      "ram": "16GB DDR4",
      "storage": "256GB SSD + 500GB HDD",
      "gpu": "NVIDIA RTX A3000 6GB",
      "screen": "15.6 بوصة FHD"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-11850H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "256GB SSD + 500GB HDD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA RTX A3000 6GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "كارت NVIDIA RTX A3000 بـ 6 جيجا",
      "معالج i7 جيل 11 بـ 8 أنوية",
      "SSD وهارد 500 للملفات",
      "للريندر والـ 3ds Max والمونتاج"
    ],
    "description": "ZBook Fury بكارت NVIDIA RTX A3000 بـ 6 جيجا ومعالج i7 جيل 11 بـ 8 أنوية. أداء احترافي للريندر والـ 3D.",
    "images": [
      "images/laptops/zbfuryg7-1.jpg",
      "images/laptops/zbfuryg7-2.jpg",
      "images/laptops/zbfuryg7-3.jpg"
    ]
  },
  {
    "id": "laptop-296",
    "name": "Dell Precision 5550 4K Touch",
    "brand": "Dell",
    "price": 36000,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i7-10850H",
      "ram": "16GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA Quadro T2000 4GB",
      "screen": "15.6 بوصة 4K لمس"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-10850H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA Quadro T2000 4GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة 4K لمس"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "شاشة 15.6 بوصة 4K تاتش",
      "كارت NVIDIA Quadro T2000 بـ 4 جيجا",
      "معالج i7 جيل 10 بـ 6 أنوية",
      "تصميم نحيف وبودي ألمونيوم"
    ],
    "description": "Precision 5550 نحيف وأنيق بشاشة 4K تاتش ومعالج i7 بـ 6 أنوية وكارت NVIDIA Quadro T2000. قوة ورك ستيشن في شكل لاب خفيف.",
    "images": [
      "images/laptops/laptop-296-1.webp",
      "images/laptops/laptop-296-2.webp",
      "images/laptops/laptop-296-3.webp",
      "images/laptops/laptop-296-4.webp",
      "images/laptops/laptop-296-5.webp"
    ]
  },
  {
    "id": "laptop-389",
    "name": "Dell Precision 7760",
    "brand": "Dell",
    "price": 36000,
    "variants": [],
    "available": true,
    "features": [
      "شاشة كبيرة 17.3 بوصة",
      "معالج i7 جيل 11 بـ 8 أنوية",
      "كارت NVIDIA T1200 بـ 4 جيجا",
      "هارد NVMe 512"
    ],
    "description": "ورك ستيشن بشاشة كبيرة 17.3 بوصة ومعالج i7 جيل 11 بـ 8 أنوية وكارت NVIDIA T1200. مثالي للشغل الهندسي على شاشة واسعة.",
    "images": [
      "images/laptops/prec7760-1.jpg"
    ],
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-11850H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA T1200 4GB"
      },
      {
        "label": "الشاشة",
        "value": "17.3 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "quick": {
      "cpu": "Intel Core i7-11850H",
      "ram": "16GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA T1200 4GB",
      "screen": "17.3 بوصة FHD"
    }
  },
  {
    "id": "laptop-298",
    "name": "HP ZBook Fury 15 G7 i9",
    "brand": "HP",
    "price": 48000,
    "variants": [],
    "available": true,
    "features": [
      "كارت Quadro RTX 4000 بـ 8 جيجا",
      "معالج Core i9 بـ 8 أنوية",
      "هارد NVMe 512",
      "للريندر والـ 3D والمونتاج"
    ],
    "description": "ZBook Fury بمعالج Core i9 بـ 8 أنوية وكارت NVIDIA Quadro RTX 4000 بـ 8 جيجا. أداء احترافي للريندر والمونتاج.",
    "images": [
      "images/laptops/zbfuryg7-1.jpg",
      "images/laptops/zbfuryg7-2.jpg",
      "images/laptops/zbfuryg7-3.jpg"
    ],
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i9-10885H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA Quadro RTX 4000 8GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "quick": {
      "cpu": "Intel Core i9-10885H",
      "ram": "16GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA Quadro RTX 4000 8GB",
      "screen": "15.6 بوصة"
    }
  },
  {
    "id": "laptop-348",
    "name": "HP ZBook Fury 15 G8 i9",
    "brand": "HP",
    "price": 52000,
    "variants": [],
    "available": true,
    "features": [
      "كارت NVIDIA RTX A4000 بـ 8 جيجا",
      "معالج Core i9 جيل 11 بـ 8 أنوية",
      "هارد NVMe 512",
      "للريندر التقيل والـ AI"
    ],
    "description": "ZBook Fury بمعالج Core i9 جيل 11 وكارت NVIDIA RTX A4000 بـ 8 جيجا. من أقوى الورك ستيشن 15 بوصة.",
    "images": [
      "images/laptops/zbfuryg7-1.jpg",
      "images/laptops/zbfuryg7-2.jpg",
      "images/laptops/zbfuryg7-3.jpg"
    ],
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i9-11950H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR4"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA RTX A4000 8GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "quick": {
      "cpu": "Intel Core i9-11950H",
      "ram": "16GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA RTX A4000 8GB",
      "screen": "15.6 بوصة FHD"
    }
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
      "cpu": "Intel Core i7-12700H",
      "ram": "16GB DDR5",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA RTX A2000 8GB",
      "screen": "15.6 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-12700H"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR5"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA RTX A2000 8GB"
      },
      {
        "label": "الشاشة",
        "value": "15.6 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج i7 جيل 12 بـ 14 نواة",
      "كارت NVIDIA RTX A2000 بـ 8 جيجا",
      "رامات DDR5 الأحدث، متاح 16 أو 32 جيجا",
      "مناسب للريندر والمونتاج 4K والذكاء الاصطناعي"
    ],
    "description": "ZBook حديث بمعالج i7 جيل 12 بـ 14 نواة ورامات DDR5 وكارت NVIDIA RTX A2000 بـ 8 جيجا. أداء عالي جداً لصناع المحتوى والمهندسين.",
    "images": [
      "images/laptops/laptop-354-1.jpg",
      "images/laptops/laptop-354-2.jpg",
      "images/laptops/laptop-354-3.jpg",
      "images/laptops/laptop-354-4.jpg",
      "images/laptops/laptop-354-5.jpg"
    ]
  },
  {
    "id": "laptop-392",
    "name": "Dell Precision 7670 (i7)",
    "brand": "Dell",
    "price": 54000,
    "variants": [],
    "available": true,
    "features": [
      "معالج i7 جيل 12 فئة HX",
      "رامات 32 جيجا DDR5",
      "كارت NVIDIA RTX A1000 بـ 4 جيجا",
      "شاشة 16 بوصة"
    ],
    "description": "Precision 7670 بمعالج i7 جيل 12 فئة HX ورامات 32 جيجا DDR5. ورك ستيشن حديث جداً بشاشة 16 بوصة.",
    "images": [
      "images/laptops/prec7670-1.jpg"
    ],
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-12850HX"
      },
      {
        "label": "الرامات",
        "value": "32GB DDR5"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA RTX A1000 4GB"
      },
      {
        "label": "الشاشة",
        "value": "16 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "quick": {
      "cpu": "Intel Core i7-12850HX",
      "ram": "32GB DDR5",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA RTX A1000 4GB",
      "screen": "16 بوصة"
    }
  },
  {
    "id": "laptop-393",
    "name": "Dell Precision 7670 i9",
    "brand": "Dell",
    "price": 62000,
    "variants": [],
    "available": true,
    "features": [
      "معالج Core i9 جيل 12 بـ 16 نواة",
      "كارت NVIDIA RTX A2000 بـ 8 جيجا",
      "رامات DDR5",
      "شاشة 16 بوصة"
    ],
    "description": "Precision 7670 بمعالج Core i9 بـ 16 نواة وكارت NVIDIA RTX A2000 بـ 8 جيجا. قوة عالية جداً للمحترفين.",
    "images": [
      "images/laptops/prec7670-1.jpg"
    ],
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i9-12950HX"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR5"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA RTX A2000 8GB"
      },
      {
        "label": "الشاشة",
        "value": "16 بوصة FHD"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "quick": {
      "cpu": "Intel Core i9-12950HX",
      "ram": "16GB DDR5",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA RTX A2000 8GB",
      "screen": "16 بوصة FHD"
    }
  },
  {
    "id": "laptop-299",
    "name": "HP ZBook Fury 16 G9",
    "brand": "HP",
    "price": 78000,
    "variants": [
      {
        "title": "N.V/512 / 16 DDR5",
        "price": 78000,
        "available": true
      },
      {
        "title": "N.V/512 / 32 DDR5",
        "price": 94000,
        "available": true
      }
    ],
    "available": true,
    "quick": {
      "cpu": "Intel Core i9-12950HX",
      "ram": "16GB DDR5",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA RTX A4500 16GB",
      "screen": "16 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i9-12950HX"
      },
      {
        "label": "الرامات",
        "value": "16GB DDR5"
      },
      {
        "label": "التخزين",
        "value": "512GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA RTX A4500 16GB"
      },
      {
        "label": "الشاشة",
        "value": "16 بوصة"
      },
      {
        "label": "الكاميرا",
        "value": "مدمجة"
      }
    ],
    "features": [
      "معالج i9 جيل 12 بـ 16 نواة",
      "كارت NVIDIA RTX A4500 بـ 16 جيجا",
      "رامات DDR5 متاحة 16 أو 32 جيجا",
      "للريندر التقيل والـ AI والمحاكاة الهندسية"
    ],
    "description": "أقوى جهاز عندنا: معالج Core i9 بـ 16 نواة وكارت NVIDIA RTX A4500 بـ 16 جيجا وشاشة 16 بوصة. ورك ستيشن مفيش حاجة تقف قدامه.",
    "images": [
      "images/laptops/laptop-299-1.jpg",
      "images/laptops/laptop-299-2.jpg",
      "images/laptops/laptop-299-3.jpg",
      "images/laptops/laptop-299-4.jpg",
      "images/laptops/laptop-299-5.jpg"
    ]
  }
];
