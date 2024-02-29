let productsDB = localStorage.getItem('products')? JSON.parse(localStorage.getItem('products')):[
    {
        id:1,
        title:'coffee item',
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        size:'medium',
        imageUrl:'images/image 1.jpg',
        qty:1,
        isMe:'N',
    },
    {
        id:2,
        title:'keyboard item',
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        size:'large',
        imageUrl:'images/image 2.jpg',
        qty:1,
        isMe:'N',
    },
    {
        id:3,
        title:'laptop item',
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        size:'small',
        imageUrl:'images/image 3.jpg',
        qty:1,
        isMe:'N',
    },
    {
        id:4,
        title:'monitor item',
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        size:'large',
        imageUrl:'images/image 4.png',
        qty:1,
        isMe:'N',
    }
];

localStorage.setItem('products',JSON.stringify(productsDB))