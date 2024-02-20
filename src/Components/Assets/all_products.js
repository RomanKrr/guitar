import product_img1 from './product_img2.png'
import product_img2 from './Deluxe Acoustic.Satin See Thru Black.01.png'
import product_img3 from './product_img3.png'
import product_img4 from './product_img1.png'
import product_img5 from './медіатор.png'


import img1_pr1 from './pexels-pixabay-164729.jpg'
import img2_pr1 from './img2_pr1.jpg'

import img1_pr2 from './img1_pr2.jpg'
import img2_pr2 from './img2_pr2.jpg'

import img1_pr3 from './img1_pr3.jpg'
import img2_pr3 from './img2_pr3.jpg'

import img1_pr4 from './pexels-markus-spiske-92069.jpg'
import img2_pr4 from './pexels-amirhossein-hasani-16546739.jpg'

import img1_pr11 from './img1_pr11.jpg'


let all_products = [
    {
        id: 1,
        name: "Акустична гітара",
        category: "acoustic",
        image: product_img1,
        image1: img1_pr1,
        image2: img2_pr1,
        price: 8000,
        strings: 6,
        color: "Натуральний",
        size: "4/4",
        topDeck: "Цілісна ялина (Solid Sitka Spruce)",
        backDeck: "Червоне дерево, ламінат",
        neck: "Червоне дерево",
        manufacturer: "Україна",
        description: "Чудова акустична гітара з якісним звуком та стильним дизайном. Підходить як для початківців, так і для професіоналів."
    },
    {
        id: 2,
        name: "Schecter Deluxe Acoustic",
        category: "acoustic",
        image: product_img2,
        image1: img1_pr2,
        image2: img2_pr2,
        price: 15000,
        strings: 6,
        color: "Чорний",
        size: "4/4",
        topDeck: "Цілісна ялина (Solid Sitka Spruce)",
        backDeck: "Червоне дерево, ламінат",
        neck: "Червоне дерево",
        manufacturer: "Мексика",
        description: "Бооожжже це мега крута акустична гітара, Роман сказав, шо це прям кайф, він оцінив її колір, форми, гриф, ну це просто бомба, клянусь!"
    },
    {
        id: 3,
        name: 'Бас-гитара Squier by Fender Affinity LR BW SB',
        category: "bass",
        image: product_img3,
        image1: img1_pr3,
        image2: img2_pr3,
        price: 15000,
        strings: 4,
        color: "Оранжевий",
        size: "Standard",
        topDeck: "Цілісна ялина (Solid Sitka Spruce)",
        backDeck: "Чорвона дерево, ламінат",
        neck: "Червоне дерево",
        manufacturer: "США",
        description: "Професійна бас-гітара від Fender. Має потужний звук та комфортний гриф. Ідеально підходить для виступів уживу."
    },
    {
        id: 4,
        name: 'Класична гітара',
        category: "classic",
        image: product_img4,
        image1: img1_pr4,
        image2: img2_pr4,
        price: 8000,
        strings: 6,
        color: "Натуральний",
        size: "4/4",
        topDeck: "Цілісна ялина (Solid Sitka Spruce)",
        backDeck: "Чорвона дерево, ламінат",
        neck: "Червоне дерево",
        manufacturer: "Іспанія",
        description: "Класична гітара з чудовим звуком та елегантним дизайном. Підходить для будь-якого рівня майстерності."
    },
    {
        id: 5,
        name: 'Бас-гітара',
        category: "bass",
        image: product_img1,
        price: 10000,
        strings: 4,
        color: "Чорний",
        size: "Standard",
        topDeck: "Цілісна ялина (Solid Sitka Spruce)",
        backDeck: "Чорвона дерево, ламінат",
        neck: "Червоне дерево",
        manufacturer: "Україна",
        description: "Бас-гітара з потужним звуком та зручним грифом. Ідеально підходить для гри в різних стилях музики."
    },
    {
        id: 6,
        name: 'Martin X-Series D-X2E Rosewood',
        category: "electric",
        image: product_img2,
        price: 12000,
        strings: 6,
        color: "Натуральний",
        size: "4/4",
        topDeck: "Цілісна ялина (Solid Sitka Spruce)",
        backDeck: "Чорвона дерево, ламінат",
        neck: "Червоне дерево",
        manufacturer: "США",
        description: "Електрогітара від відомого виробника Martin. Має чудовий звук і стильний дизайн. Ідеальний вибір для професійних музикантів."
    },
    {
        id: 7,
        name: 'Бас-гитара Squier by Fender Affinity LR BW SB',
        category: "electric",
        image: product_img3,
        price: 11000,
        strings: 4,
        color: "Чорний",
        size: "Standard",
        topDeck: "Цілісна ялина (Solid Sitka Spruce)",
        backDeck: "Чорвона дерево, ламінат",
        neck: "Червоне дерево",
        manufacturer: "США",
        description: "Електрична бас-гітара від Squier. Забезпечує потужний звук і зручний гриф. Ідеально підходить для виступів у живих виступах."
    },
    {
        id: 8,
        name: 'Ну да',
        category: "classic",
        image: product_img4,
        price: 23000,
        strings: 6,
        color: "Чорний",
        size: "4/4",
        topDeck: "Цілісна ялина (Solid Sitka Spruce)",
        backDeck: "Чорвона дерево, ламінат",
        neck: "Червоне дерево",
        manufacturer: "Іспанія",
        description: "Просто чудова класична гітара з багатим звуком та елегантним дизайном. Ідеально підходить для концертів та студійних записів."
    },
    {
        id: 9,
        name: 'Акустична гітара',
        category: "classic",
        image: product_img4,
        price: 23000,
        strings: 6,
        color: "Натуральний",
        size: "4/4",
        topDeck: "Цілісна ялина (Solid Sitka Spruce)",
        backDeck: "Чорвона дерево, ламінат",
        neck: "Червоне дерево",
        manufacturer: "Іспанія",
        description: "Прекрасна акустична гітара з багатим звуком та елегантним дизайном. Ідеально підходить для гри вдома або на виступах уживу."
    },
    {
        id: 10,
        name: 'Б/У гітара',
        category: "classic",
        image: product_img4,
        price: 23000,
        strings: 6,
        color: "Чорний",
        size: "4/4",
        topDeck: "Цілісна ялина (Solid Sitka Spruce)",
        backDeck: "Чорвона дерево, ламінат",
        neck: "Червоне дерево",
        manufacturer: "Іспанія",
        description: "Б/У гітара в ідеальному стані. Має прекрасний звук і збережена естетика. Ідеальний вибір для економії грошей."
    },
    {
        id: 11,
        name: 'Медіатор',
        category: "accessories",
        image: product_img5,
        image1: img1_pr11,
        price: 500,
        color: "Чорний",
        manufacturer: "Іспанія",
        description: "Професійний медіатор для гітаристів. Забезпечує чудове відчуття та контроль під час гри на гітарі."
    },
];

export default all_products;
