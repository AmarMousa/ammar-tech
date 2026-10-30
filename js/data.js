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
      "images/placeholder.svg"
    ]
  },
  {
    "id": "laptop-301",
    "name": "HP ProBook 640 G2",
    "brand": "HP",
    "price": 11200,
    "variants": [],
    "available": true,
    "quick": {
      "cpu": "Intel Core i5-6400U",
      "ram": "8GB DDR4",
      "storage": "256GB M.2 SSD",
      "gpu": "Intel HD Graphics 520",
      "screen": "14 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-6400U"
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
        "value": "Intel HD Graphics 520"
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
      "اختيار اقتصادي ممتاز للطلبة وأول لاب",
      "SSD سريع في الإقلاع وفتح البرامج",
      "مناسب للأوفيس والنت والمحاضرات الأونلاين",
      "خامة HP ProBook متينة وتستحمل الاستخدام اليومي"
    ],
    "description": "لاب عملي وخفيف للمذاكرة والشغل المكتبي بأقل تكلفة. هارد SSD بيخلي الويندوز يفتح في ثواني، وحجمه 14 بوصة سهل تشيله في الشنطة كل يوم.",
    "images": [
      "images/laptops/laptop-301-1.jpg",
      "images/laptops/laptop-301-2.jpg",
      "images/laptops/laptop-301-3.jpg"
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
      "images/placeholder.svg"
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
      "images/placeholder.svg"
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
      "images/placeholder.svg"
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
      "images/placeholder.svg"
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
      "cpu": "Intel Core i5-8350U",
      "ram": "8GB DDR4",
      "storage": "256GB NVMe SSD",
      "gpu": "Intel UHD Graphics 620",
      "screen": "14 بوصة"
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
        "value": "256GB NVMe SSD"
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
      "معالج i5 جيل ثامن بـ 4 أنوية",
      "هارد NVMe أسرع من الـ SSD العادي",
      "مناسب للشغل المكتبي والدراسة وتعدد المهام",
      "تصميم Latitude العملي المعروف بالاعتمادية"
    ],
    "description": "Dell Latitude من فئة البيزنس بمعالج جيل ثامن رباعي الأنوية. سريع ومستقر في الشغل اليومي ووزنه مناسب للتنقل.",
    "images": [
      "images/laptops/laptop-265-1.jpg",
      "images/laptops/laptop-265-2.jpg",
      "images/laptops/laptop-265-3.jpg",
      "images/laptops/laptop-265-4.jpg",
      "images/laptops/laptop-265-5.jpg"
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
    "id": "laptop-379",
    "name": "HP ProBook 650 G3",
    "brand": "HP",
    "price": 13500,
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
      "images/placeholder.svg"
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
      "images/placeholder.svg"
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
      "images/placeholder.svg"
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
      "images/placeholder.svg"
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
      "images/placeholder.svg"
    ]
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
      "images/placeholder.svg"
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
      "images/placeholder.svg"
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
      "images/placeholder.svg"
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
      "cpu": "AMD Ryzen 5 Pro 5650U",
      "ram": "8GB DDR4",
      "storage": "256GB NVMe SSD",
      "gpu": "AMD Radeon Graphics",
      "screen": "15.6 بوصة"
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
        "value": "256GB NVMe SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "AMD Radeon Graphics"
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
      "معالج Ryzen 5 Pro بـ 6 أنوية",
      "كارت Radeon مدمج قوي",
      "شاشة 15.6 بوصة",
      "بودي EliteBook المعدن"
    ],
    "description": "معالج Ryzen 5 Pro بـ 6 أنوية و12 ثريد في EliteBook بشاشة 15.6 بوصة. أداء قوي في تعدد المهام مع بطارية كويسة.",
    "images": [
      "images/laptops/laptop-281-1.jpg",
      "images/laptops/laptop-281-2.jpg",
      "images/laptops/laptop-281-3.jpg"
    ]
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
      "images/placeholder.svg"
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
      "images/placeholder.svg"
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
      "images/placeholder.svg"
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
      "images/placeholder.svg"
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
      "ram": "16GB DDR4",
      "storage": "512GB M.2 SSD",
      "gpu": "NVIDIA Quadro M2000M 4GB",
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
        "value": "512GB M.2 SSD"
      },
      {
        "label": "كارت الشاشة",
        "value": "NVIDIA Quadro M2000M 4GB"
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
      "images/placeholder.svg"
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
      "images/placeholder.svg"
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
      "cpu": "Intel Core i5-11500H",
      "ram": "16GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "Intel UHD Graphics",
      "screen": "15.6 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i5-11500H"
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
      "معالج i5 جيل 11 فئة H بـ 6 أنوية",
      "رامات 16 جيجا وهارد NVMe 512",
      "بودي Precision بمعايير محطات العمل",
      "مناسب للبرمجة والتحليل والشغل التقيل"
    ],
    "description": "Dell Precision حديث بمعالج H من الجيل الحادي عشر بـ 6 أنوية ورامات 16 جيجا. أداء عالي وثابت للشغل الاحترافي وتعدد المهام.",
    "images": [
      "images/laptops/laptop-381-1.jpg",
      "images/laptops/laptop-381-2.jpg",
      "images/laptops/laptop-381-3.jpg",
      "images/laptops/laptop-381-4.jpg",
      "images/laptops/laptop-381-5.jpg"
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
      "images/placeholder.svg"
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
      "images/placeholder.svg"
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
      "images/placeholder.svg"
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
      "images/placeholder.svg"
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
      "cpu": "Intel Core i7-10850H",
      "ram": "32GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA Quadro T2000 4GB",
      "screen": "15.6 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Core i7-10850H"
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
        "value": "NVIDIA Quadro T2000 4GB"
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
      "كارت NVIDIA Quadro T2000 بـ 4 جيجا",
      "معالج i7 جيل 10 بـ 6 أنوية",
      "متاح برامات 16 أو 32 جيجا",
      "تصميم نحيف وبودي ألمونيوم"
    ],
    "description": "Precision 5550 نحيف وأنيق جداً بمعالج i7 بـ 6 أنوية وكارت NVIDIA Quadro T2000. قوة ورك ستيشن في شكل لاب خفيف.",
    "images": [
      "images/laptops/laptop-296-1.webp",
      "images/laptops/laptop-296-2.webp",
      "images/laptops/laptop-296-3.webp",
      "images/laptops/laptop-296-4.webp",
      "images/laptops/laptop-296-5.webp"
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
      "images/placeholder.svg"
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
      "cpu": "Intel Xeon W-10855M",
      "ram": "16GB DDR4",
      "storage": "512GB NVMe SSD",
      "gpu": "NVIDIA Quadro RTX 3000 6GB",
      "screen": "15.6 بوصة"
    },
    "specs": [
      {
        "label": "المعالج",
        "value": "Intel Xeon W-10855M"
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
        "value": "NVIDIA Quadro RTX 3000 6GB"
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
      "كارت Quadro RTX 3000 بـ 6 جيجا",
      "معالج Xeon W بـ 6 أنوية حتى 5.1 جيجاهرتز",
      "مناسب للريندر والـ 3ds Max والمونتاج",
      "هارد NVMe سريع 512"
    ],
    "description": "ورك ستيشن احترافي بمعالج Xeon وكارت NVIDIA Quadro RTX 3000 بـ 6 جيجا. مناسب للريندر والمونتاج والتصميم ثلاثي الأبعاد.",
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
      "رامات DDR5 متاحة لحد 64 جيجا",
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
