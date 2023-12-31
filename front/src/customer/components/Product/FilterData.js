export const color = [
    "White",
    "Black",
    "Brown",
    "Grey",
    "Red",
    "Green",
    "Pink",
    "Blue",
    "Orange",
    "Yellow",

];

export const filters = [
    {
    id: "color",
    name: "Цвет",
    options: [
        {value: "white", label: "Белый"},
        {value: "black", label: "Черный"},
        {value: "brown", label: "Коричневый"},
        {value: "grey",  label: "Серый" },
        {value: "red", label: "Красный"},
        {value: "green", label: "Зеленый"},
        {value: "pink", label: "Розовый"},
        {value: "blue", label: "Синий"},
        {value: "orange", label: "Оранжевый"},
        {value: "yellow", label: "Желтый"},
    ],
},

{
    id: "size",
    name: "Размер",
    options: [
        {value: "xs", label: "XS"},
        {value: "s", label: "S"},
        {value: "m", label: "M"},
        {value: "l", label: "L"},
        {value: "xl", label: "XL"},
    ]
},

];

export const singleFilter= [
    {
        id: "price",
        name: "Цена",
        options: [
            {value: "199-599", label: "от 199 до 599"},
            {value: "599-999", label: "от 599 до 999"},
            {value: "999-1999", label: "от 999 до 1999"},
            {value: "1999-2999", label: "от 1999 до 2999"},
            {value: "2999-3999", label: "от 2999 до 3999"},
            {value: "3999-9999", label: "от 3999 до 9999"},
        ]
    },
    {
        id: "discount",
        name: "Размер скидки",
        options: [
            {value: "10", label: "10% или выше"},
            {value: "20", label: "20% или выше"},
            {value: "30", label: "30% или выше"},
            {value: "40", label: "40% или выше"},
            {value: "50", label: "50% или выше"},
            {value: "60", label: "60% или выше"},
            {value: "70", label: "70% или выше"},
            {value: "80", label: "80% или выше"},
        ]
    },
    {
        id: "stock",
        name: "Наличие",
        options: [
        {value: "in_stick", label: "В наличии"},
        {value: "out_of_stock", label: "Товар закончился"},
        ],
    },
]



export const sortOptions = [
    {name: "По цене: от меньшей к большей", query: "price_low", current: false},
    {name: "По цене: от большей к меньшей", query: "price_high", current: false},
];