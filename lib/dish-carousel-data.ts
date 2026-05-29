export interface DishCarouselItem {
  name: string;
  description: string;
  price?: string;
  image: string;
  alt: string;
}

export const dishCarouselItems: DishCarouselItem[] = [
  {
    name: "Classic Wrap",
    description: "Hähnchen, Thunfisch oder vegetarisch. Der meistgenannte Klassiker am Tresen.",
    price: "7,20 €",
    image: "/assets/acquisition/dishes/hahnchen-wrap-01.jpg",
    alt: "Hähnchen-Wrap mit Salat und Gemüse"
  },
  {
    name: "Falafel Bowl",
    description: "Hausgemachte Falafel mit Couscous, Salat und Sesamsauce. Dazu ein frisch gepresster Saft.",
    price: "11,90 €",
    image: "/assets/acquisition/dishes/falafel-bowl-und-orangensaft-01.jpg",
    alt: "Falafel-Bowl mit Salat und Couscous neben einem Glas Orangensaft"
  },
  {
    name: "Couscous Salat",
    description: "Bulgur-Kısır mit frischen Kräutern, garniert mit Gurke und Zitrone.",
    price: "6,90 €",
    image: "/assets/acquisition/dishes/ksr-bulgursalat-01.jpg",
    alt: "Bulgursalat Kısır mit Zitronenspalten und Gurkenscheiben"
  },
  {
    name: "Falafel Wrap",
    description: "Knusprige Falafel mit frischem Gemüse und Sesamsauce, handgerollt am Tresen.",
    price: "7,40 €",
    image: "/assets/acquisition/dishes/falafel-wrap-mit-frischem-gemuse-01.jpg",
    alt: "Falafel-Wrap umgeben von frischem Gemüse"
  },
  {
    name: "Hackfleischbörek",
    description: "Blätterteig gefüllt mit Rinderhack und gebratenen Zwiebeln, frisch aus dem Ofen.",
    price: "5,00 €",
    image: "/assets/acquisition/dishes/gefullte-teigtasche-01.jpg",
    alt: "Aufgeschnittene Teigtasche mit Hackfleischfüllung"
  },
  {
    name: "Chicken Bowl",
    description: "Hähnchenstreifen, Avocado, frischer Salat und cremige Sauce mit Röstzwiebeln.",
    price: "11,90 €",
    image: "/assets/acquisition/dishes/salatschale-mit-fleisch-und-avocado-01.jpg",
    alt: "Bowl mit Hähnchenstreifen, Avocado, Brokkoli und Röstzwiebeln"
  }
];
