import room1 from "./images/details-1.jpeg";
import room2 from "./images/details-2.jpeg";
import room3 from "./images/details-3.jpeg";
import room4 from "./images/details-4.jpeg";
import room5 from "./images/details-5.jpeg";
import room6 from "./images/details-6.jpeg";
import room7 from "./images/details-7.jpeg";
import room8 from "./images/details-8.jpeg";
import room9 from "./images/details-9.jpeg";
import room10 from "./images/details-10.jpeg";
import room11 from "./images/details-11.jpeg";
import room12 from "./images/details-12.jpeg";
import room13 from "./images/details-13.jpeg";
import room14 from "./images/details-14.jpeg";
import room15 from "./images/details-15.jpeg";
import room16 from "./images/details-16.jpeg";
import room17 from "./images/details-17.jpeg";
import room18 from "./images/details-18.jpeg";
import room19 from "./images/details-19.jpeg";
import room20 from "./images/details-20.jpeg";
import room21 from "./images/details-21.jpeg";

import img1 from "./images/room-1.jpeg";
import img2 from "./images/room-2.jpeg";
import img3 from "./images/room-3.jpeg";
import img4 from "./images/room-4.jpeg";
import img5 from "./images/room-5.jpeg";
import img6 from "./images/room-6.jpeg";
import img7 from "./images/room-7.jpeg";







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
              url: room1
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
              url: room4
            }
          }
        },
        {
          fields: {
            file: {
              url: room5
            }
          }
        },
        {
          fields: {
            file: {
              url: room6
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
      capacity: 2,
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
              url: room7
            }
          }
        },
        {
          fields: {
            file: {
              url: room8
            }
          }
        },
        {
          fields: {
            file: {
              url: room9
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
              url: img4
            }
          }
        },
        {
          fields: {
            file: {
              url: room10
            }
          }
        },
        {
          fields: {
            file: {
              url: room11
            }
          }
        },
        {
          fields: {
            file: {
              url: room12
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
              url: room13
            }
          }
        },
        {
          fields: {
            file: {
              url: room14
            }
          }
        },
        {
          fields: {
            file: {
              url: room15
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
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: room16
            }
          }
        },
        {
          fields: {
            file: {
              url: room17
            }
          }
        },
        {
          fields: {
            file: {
              url: room18
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
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: room19
            }
          }
        },
        {
          fields: {
            file: {
              url: room20
            }
          }
        },
        {
          fields: {
            file: {
              url: room21
            }
          }
        }
      ]
    }
  }
];
