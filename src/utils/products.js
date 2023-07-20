const productos = [
    {
      id: 1,
      title: "Drácula",
      description: "Una novela de terror gótico que narra la historia del Conde Drácula y su intento de trasladarse desde Transilvania a Inglaterra para propagar la no muerte.",
      stock: 15,
      type: "Terror",
      imageProduct: {
        firtsImage: "https://images.cdn3.buscalibre.com/fit-in/360x360/f0/76/f076beed2e3bf6c86c65a6bb9e7792a1.jpg",
        secondImage: "https://images.cdn3.buscalibre.com/fit-in/360x360/f0/76/f076beed2e3bf6c86c65a6bb9e7792a1.jpg"
      },
      price: 280,
    },
    {
      id: 2,
      title: "El Señor de los Anillos",
      description: "Una épica historia de fantasía que sigue la lucha de diversos personajes por destruir un anillo mágico y evitar que caiga en manos del Señor Oscuro.",
      stock: 15,
      type: "Fantasía",
      imageProduct: {
        firtsImage: "https://images.cdn3.buscalibre.com/fit-in/360x360/54/49/5449ba87a3e457a22dd6d0972b5c261e.jpg",
        secondImage: "https://images.cdn3.buscalibre.com/fit-in/360x360/54/49/5449ba87a3e457a22dd6d0972b5c261e.jpg"
      },
      price: 450,
    },
    {
      id: 3,
      title: "La Chica del Tren",
      description: "Un thriller psicológico que sigue la vida de Rachel, quien se ve involucrada en un misterio relacionado con la desaparición de una mujer.",
      stock: 15,
      type: "Suspenso",
      imageProduct: {
        firtsImage: "https://images.cdn2.buscalibre.com/fit-in/360x360/a9/dd/a9dd9755bde59005eb4421bb1f061bcc.jpg",
        secondImage: "https://images.cdn2.buscalibre.com/fit-in/360x360/a9/dd/a9dd9755bde59005eb4421bb1f061bcc.jpg"
      },
      price: 320,
    },
    {
      id: 4,
      title: "El Resplandor",
      description: "Una novela de terror sobrenatural que sigue la historia de un hombre y su familia que se mudan a un hotel embrujado en Colorado para cuidarlo durante el invierno.",
      stock: 15,
      type: "Terror",
      imageProduct: {
        firtsImage: "https://images.cdn3.buscalibre.com/fit-in/360x360/49/66/49661480fa1f78034b80bae7ed020841.jpg",
        secondImage: "https://images.cdn3.buscalibre.com/fit-in/360x360/49/66/49661480fa1f78034b80bae7ed020841.jpg"
      },
      price: 290,
    },
    {
      id: 5,
      title: "Las Crónicas de Narnia",
      description: "Una serie de libros de fantasía que narran las aventuras de niños que descubren un mundo mágico a través de un ropero.",
      stock: 15,
      type: "Fantasía",
      imageProduct: {
        firtsImage: "https://images.cdn1.buscalibre.com/fit-in/360x360/3e/b7/3eb7fa1d683c5ef60c2e6cc56ce8d40d.jpg",
        secondImage: "https://images.cdn1.buscalibre.com/fit-in/360x360/3e/b7/3eb7fa1d683c5ef60c2e6cc56ce8d40d.jpg"
      },
      price: 180,
    },
    {
      id: 6,
      title: "Cementerio de Animales",
      description: "Un libro de terror que cuenta la historia de un cementerio maldito donde los animales resucitan después de ser enterrados.",
      stock: 15,
      type: "Terror",
      imageProduct: {
        firtsImage: "https://contentv2.tap-commerce.com/cover/large/9789877253740_1.jpg?id_com=1113",
        secondImage: "https://contentv2.tap-commerce.com/cover/large/9789877253740_1.jpg?id_com=1113"
      },
      price: 260,
    },
    {
      id: 7,
      title: "La Sombra del Viento",
      description: "Un libro de misterio ambientado en Barcelona que sigue la búsqueda de un joven para descubrir la verdad detrás de un libro misterioso.",
      stock: 15,
      type: "Misterio",
      imageProduct: {
        firtsImage: "https://images.cdn3.buscalibre.com/fit-in/360x360/97/a9/97a9e0ef37c3b33e9303147883d03372.jpg",
        secondImage: "https://images.cdn3.buscalibre.com/fit-in/360x360/97/a9/97a9e0ef37c3b33e9303147883d03372.jpg"
      },
      price: 320,
    },
    {
      id: 8,
      title: "Harry Potter y la Piedra Filosofal",
      description: "El primer libro de la serie de Harry Potter, que narra las aventuras de un joven mago mientras asiste a Hogwarts.",
      stock: 15,
      type: "Fantasía",
      imageProduct: {
        firtsImage: "https://images.cdn3.buscalibre.com/fit-in/360x360/ce/e6/cee6ef96dad70d3f599b953f0e50afc7.jpg",
        secondImage: "https://images.cdn3.buscalibre.com/fit-in/360x360/ce/e6/cee6ef96dad70d3f599b953f0e50afc7.jpg"
      },
      price: 210,
    },
    {
      id: 9,
      title: "Misery",
      description: "Un thriller psicológico que sigue la historia de un escritor capturado por su fan número uno.",
      stock: 15,
      type: "Suspenso",
      imageProduct: {
        firtsImage: "https://images.cdn1.buscalibre.com/fit-in/360x360/68/7a/687abb5bce5d48dd6d027ba3dd825952.jpg",
        secondImage: "https://images.cdn1.buscalibre.com/fit-in/360x360/68/7a/687abb5bce5d48dd6d027ba3dd825952.jpg"
      },
      price: 290,
    },
    {
      id: 10,
      title: "Dr. Jekyll y Mr. Hyde",
      description: "Una novela de terror que explora la dualidad del ser humano a través del Dr. Jekyll y su malvado alter ego, Mr. Hyde.",
      stock: 15,
      type: "Terror",
      imageProduct: {
        firtsImage: "https://images.cdn1.buscalibre.com/fit-in/360x360/77/eb/77eb96064009f3ca5d486911f7c1f1bb.jpg",
        secondImage: "https://images.cdn1.buscalibre.com/fit-in/360x360/77/eb/77eb96064009f3ca5d486911f7c1f1bb.jpg"
      },
      price: 180,
    },
    {
        id: 11,
        title: "El Hobbit",
        description: "Una emocionante aventura en la Tierra Media donde un hobbit se une a una compañía de enanos para recuperar un tesoro custodiado por un dragón.",
        stock: 20,
        type: "Aventura",
        imageProduct: {
          firtsImage: "https://images.cdn1.buscalibre.com/fit-in/360x360/45/44/4544aa9e50feca33c58b1d4646f34b2f.jpg",
          secondImage: "https://images.cdn1.buscalibre.com/fit-in/360x360/45/44/4544aa9e50feca33c58b1d4646f34b2f.jpg"
        },
        price: 350,
      },
      {
        id: 12,
        title: "La Isla del Tesoro",
        description: "Un joven se embarca en una peligrosa expedición a una isla en busca de un legendario tesoro pirata.",
        stock: 10,
        type: "Aventura",
        imageProduct: {
          firtsImage: "https://images.cdn3.buscalibre.com/fit-in/360x360/ab/25/ab257042248996457bbdb1f4e3b31c9b.jpg",
          secondImage: "https://images.cdn3.buscalibre.com/fit-in/360x360/ab/25/ab257042248996457bbdb1f4e3b31c9b.jpg"
        },
        price: 250,
      },
      {
        id: 13,
        title: "Las Aventuras de Tom Sawyer",
        description: "Las travesuras y aventuras de un niño llamado Tom Sawyer mientras crece en el Mississippi del siglo XIX.",
        stock: 15,
        type: "Aventura",
        imageProduct: {
          firtsImage: "https://images.cdn3.buscalibre.com/fit-in/360x360/bf/b6/bfb6e540f610e34ab0a3f6534557cb22.jpg",
          secondImage: "https://images.cdn3.buscalibre.com/fit-in/360x360/bf/b6/bfb6e540f610e34ab0a3f6534557cb22.jpg"
        },
        price: 220,
      }

    
  ];

export default productos;
