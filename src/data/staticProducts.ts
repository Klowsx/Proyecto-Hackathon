import { StaticImageData } from "next/image";
import producto1 from "@/app/assets/images/producto1.jpg";
import producto2 from "@/app/assets/images/producto2.jpg";
import producto3 from "@/app/assets/images/producto3.jpg";
import producto4 from "@/app/assets/images/producto4.jpg";
import producto5 from "@/app/assets/images/producto5.jpg";
import producto6 from "@/app/assets/images/producto6.jpg";
import producto7 from "@/app/assets/images/producto7.jpg";
import producto8 from "@/app/assets/images/producto8.jpg";
import producto9 from "@/app/assets/images/producto9.jpg";
import producto10 from "@/app/assets/images/producto10.jpg";
import producto11 from "@/app/assets/images/producto11.jpg";
import producto12 from "@/app/assets/images/producto12.jpg";
import producto13 from "@/app/assets/images/producto13.jpg";
import producto14 from "@/app/assets/images/producto14.jpg";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: StaticImageData; // Mantén el tipo como string para la URL
  category: string;
}

// Definir los productos estáticos
const staticProducts: Product[] = [
  {
    id: 1,
    title: "Vajilla para café",
    description:
      "Vajilla de arcilla para café, elaborada y pintada a mano, vidriada. Seis puestos. Incluye lechera, azucarera, jarra para café, tazas y platos bajo taza.",
    price: 100.0,
    image: producto1, // Ruta de la imagen en la carpeta public
    category: "Vajillas",
  },
  {
    id: 2,
    title: "Tazas para café",
    description: "Tazas para café, de arcilla vidriada, pintadas a mano, estilo greco.",
    price: 10.0,
    //tazaCafe
    image: producto2,
    category: "Vajillas",
  },
  {
    id: 3,
    title: "Mecedora",
    description:
      "Mecedora, elaborada a mano en madera de cedro amargo y cuero cruzado. Solamente por pedidos. Precio señalado para compras al contado.",
    price: 168.0,
    image: producto3,
    category: "Muebles",
  },
  {
    id: 4,
    title: "2 mecedoras",
    description:
      "Mecedora, elaborada a mano en madera de cedro amargo y cuero. Tallada y personalizada.",
    price: 195.0,
    image: producto4,
    category: "Muebles",
  },
  {
    id: 5,
    title: "Sombrero pintao",
    description:
      "Mecedora, elaborada a mano en madera de cedro amargo y cuero. Tallada y personalizada.",
    price: 230.0,
    image: producto5,
    category: "Accesorios",
  },
  {
    id: 6,
    title: "Adorno de bambú tipo castillo",
    description:
      "Madera de bambú. Técnica mixta y baño de resina para protección. Medida: 29 cm. De alto por 9 cm. De ancho",
    price: 18.5,
    image: producto6,
    category: "Adornos",
  },
  {
    id: 7,
    title: "Adorno de bambú tucanes",
    description:
      "Secciones de bambú, con tucanes, pintados a mano alzada 19 cm. De alto 9 de ancho",
    price: 10.0,
    image: producto7,
    category: "Adornos",
  },
  {
    id: 8,
    title: "Adorno de bambú flores",
    description: "Secciones de bambú, con flores de papo. 19 cm. De alto por 10 cm. De ancho",
    price: 15.0,
    image: producto8,
    category: "Adornos",
  },
  {
    id: 9,
    title: "Azucarera",
    description: "Pieza de arcilla vidriada. Pintada a mano. Estilo greco.",
    price: 8.5,
    image: producto9,
    category: "Vajillas",
  },
  {
    id: 10,
    title: "Sombrero Ocueño",
    description: "Sombrero Ocueño. Talla 22.5. Solo por pedidos",
    price: 125.0,
    image: producto10,
    category: "Accesorios",
  },
  {
    id: 11,
    title: "Cutarra",
    description:
      "Cutarra tradicional confeccionada a mano en cuero. Colores tradicional cuero chocolate y amarillo. A medida del cliente. ",
    price: 22.5,
    image: producto11,
    category: "Accesorios",
  },
  {
    id: 12,
    title: "Peineta",
    description:
      "Peineta en tonos rojos con perlas en tono rojo vino. Elaborados en escama de pescado. Por pedidos. No incluye transporte.",
    price: 18.0,
    image: producto12,
    category: "Accesorios",
  },
  {
    id: 13,
    title: "Mola para cuadro",
    description:
      "Mola para cuadro, diseño de aves. Medidas: 37 cm. de ancho por 32 cm. de alto. No incluye marcos",
    price: 75.0,
    image: producto13,
    category: "Mola",
  },
  {
    id: 14,
    title: "Mola dos aves",
    description: "Mola diseño tradicional de ave. Medida 8 y 1/2 de ancho x 9 pulgadas de alto",
    price: 18.5,
    image: producto14,
    category: "Mola",
  },
];

export default staticProducts;
