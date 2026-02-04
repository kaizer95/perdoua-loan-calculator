import alzaImg from '../assets/alza.png';
import aruzImg from '../assets/aruz.png';
import ativaImg from '../assets/ativa.png';
import axiaImg from '../assets/axia.png';
import bezzaImg from '../assets/bezza.png';
import myviImg from '../assets/myvi.png';
import trazImg from '../assets/traz.png';

export const CAR_MODELS = [
  {
    id: "alza",
    name: "Alza",
    image: alzaImg,
    variants: [
      { name: "1.5 X", price: 65000.00 },
      { name: "1.5 H", price: 70671.00 },
      { name: "1.5 AV", price: 78368.00 }
    ]
  },
  {
    id: "aruz",
    name: "Aruz",
    image: aruzImg,
    variants: [
      { name: "1.5 X", price: 75572.00 },
      { name: "1.5 AV", price: 80712.00 }
    ]
  },
  {
    id: "ativa",
    name: "Ativa",
    image: ativaImg,
    variants: [
      { name: "1.0 T X", price: 64988.00 },
      { name: "1.0 T H (M)", price: 69929.00 },
      { name: "1.0 T H (SM)", price: 70457.00 },
      { name: "1.0 T AV (M)", price: 75369.00 },
      { name: "1.0 T AV (SM)", price: 75898.00 },
      { name: "1.0 T AV (2 Tone)", price: 76198.00 }
    ]
  },
  {
    id: "axia",
    name: "Axia",
    image: axiaImg,
    variants: [
      { name: "1.0 G", price: 40392.00 },
      { name: "1.0 X", price: 41848.00 },
      { name: "1.0 SE", price: 45901.00 },
      { name: "1.0 AV", price: 51600.00 }
    ]
  },
  {
    id: "bezza",
    name: "Bezza",
    image: bezzaImg,
    variants: [
      { name: "1.0 G (MT)", price: 36311.00 },
      { name: "1.0 G (AT)", price: 38367.00 },
      { name: "1.3 X", price: 45992.00 },
      { name: "1.3 AV", price: 52164.50 }
    ]
  },
  {
    id: "myvi",
    name: "Myvi",
    image: myviImg,
    variants: [
      { name: "1.3 G", price: 48529.00 },
      { name: "1.3 G (ASA)", price: 50585.00 },
      { name: "1.5 X", price: 52923.00 },
      { name: "1.5 H", price: 57216.00 },
      { name: "1.5 AV", price: 62356.00 }
    ]
  },
  {
    id: "traz",
    name: "TRAZ",
    image: trazImg,
    variants: [
      { name: "X", price: 78500.00 },
      { name: "H", price: 83600.00 },
      { name: "H 2 TONE", price: 84600.00 }
    ]
  }
];
