
import room2 from "./images/details-2.jpeg";
import room3 from "./images/details-3.jpeg";
import room4 from "./images/details-4.jpeg";
import img1 from "./images/room-1.jpeg";
import img2 from "./images/room-2.jpeg";
import img3 from "./images/room-3.jpeg";
import img6 from "./images/room-6.jpeg";
import img7 from "./images/room-7.jpeg";
import img8 from "./images/room-8.jpeg";
import img9 from "./images/room-9.jpeg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Depto Oncativo 1 / Cba Capital",
      slug: "Depto Oncativo 1",
      type: "double",
      price: 600,
      size: 38,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: true,
      description:
        "Depto Oncativo 1, está ubicado sobre la calle Oncativo 1551, depto equipado con cocina y baño privado.",
      extras: [
        "Excelente ubicación muy cerca de la terminal y del centro de cba.",
        "Articulos para el baño, jabón y shampoo",
        "Ropa blanca",
        "Seguridad las 24 hs.",
        "Baño privado",
        "Internet",
        "Cama Simples o doble"
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Depto Oncativo 2 / Cba Capital",
      slug: "Depto Oncativo 2",
      type: "double",
      price: 600,
      size: 38,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Depto ubicado en calle Oncativo 1551. depto 2",
      extras: [
        "Aire acondicionado frio/calor",
        "camas simple o cama doble",
        "Baño privado",
        "seguridad las 24 hs.",
        "Ropa blanca y limpieza diaria.",
        "Internet",
        "Articulos para el baño, jabones y shampoo"
      ],
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "Depto Oncativo 3 / Cba Capital",
      slug: "Depto Oncativo 3",
      type: "double",
      price: 600,
      size: 38,
      capacity: [1,2],
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Depto ubicado en calle Oncativo 1551. depto 3, con todas las comodidades para que disfrutes de Córdoba.",
      extras: [
        "Baño privado",
        "a 20 cuadras del centro y la terminal de colectivos",
        "Articulos para el baño, jabones y shampoo",
        "Ropa blanca y limpieza diaria",
        "Seguridad las 24 hs",
        "Internet",
        "Camas confortables"
      ],
      images: [
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "doble standard / H. La porteña",
      slug: "doble-standard",
      type: "double",
      price: 1800,
      size: 100,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Habitación doble con baño privado en hostería la porteña",
      extras: [
        "2 camas simples o 1 cama doble",
        "Baño privado",
        "Acceso a comedor con tv y al río",
        "Ropa blanca",
        "camas confortables",
        "Internet",
        "cochera"
      ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "triple standard / H. La Porteña",
      slug: "double-basic",
      type: "triple",
      price: 2700,
      size: 250,
      capacity: 3,
      pets: true,
      breakfast: true,
      featured: false,
      description:
        "Hab. triple en Hostería La Porteña.",
      extras: [
        "Cuenta con una cama doble y una cama simple",
        "Ropa blanca y art. para el baño como jabones y shampoo",
        "cochera",
        "Internet",
        "Acceso al río y a los asadores",
        "Acceso a heladera comunitaria para todas las piezas",
        "Camas confortables"
      ],
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "Cuadruple Standar / H. La Porteña",
      slug: "family-economy",
      type: "family",
      price: 3600,
      size: 500,
      capacity: 4,
      pets: true,
      breakfast: true,
      featured: false,
      description:
        "Hab. cuadruple en Hostería La Porteña, cuenta con una cama doble y dos camas simples",
      extras: [
        "Ropa blanca y art. para el baño, jabones y shampoo,",
        "Ropa blanca y limpieza diaria,",
        "Cochera,",
        "Acceso al río y asadores.",
        "Seguridad las 24 hs.",
        "Internet",
        "Camas confortables"
      ],
      images: [
        {
          fields: {
            file: {
              url: img9
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "Cabaña Elvira / Río Ceballos",
      slug: "Cabaña Elvira",
      type: "cuadruple",
      price: 2100,
      size: 500,
      capacity: 4,
      pets: true,
      breakfast: false,
      featured: true,
      description:
        "Hermosa cabaña equipada con jacuzzi, pileta al aire libre, quincho, asador, predio gigante, aceptamos mascotas",
      extras: [
        "Ropa Blanca incluida",
        "Toallas de baño suaves y de gran tamaño",
        "Articulos de baño, jabón y shampoo",
        "Heladera, cocina equipada",
        "Seguridad y protección adecuada",
        "cochera",
        "Asador y quincho"
      ],
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  }
];
