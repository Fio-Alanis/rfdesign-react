const products = [
    {
        id: '1',
        name: 'pack 1',
        price: '1000',
        category: 'basic',
        img: 'https://www.google.com/search?q=asthetic+design&tbm=isch&ved=2ahUKEwiDvs2UnpL5AhU3OLkGHdIMClsQ2-cCegQIABAA&oq=asthetic+design&gs_lcp=CgNpbWcQAzIECAAQEzIECAAQEzIECAAQEzIICAAQHhAHEBMyCAgAEB4QBxATMggIABAeEAcQEzIICAAQHhAHEBMyCAgAEB4QBxATMggIABAeEAcQEzIICAAQHhAHEBM6BAgjECc6BAgAEEM6BQgAEIAEOgYIABAeEAdQmAVYxDRg5zZoAnAAeACAAaQDiAHOC5IBCTkuMS4xLjAuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=OprdYoO5D7fw5OUP0pmo2AU&bih=722&biw=767#imgrc=d1miCn0p2XBwCM',
        stock: 10,
        description: 'Descripción del pack 1'
    },

    {
        id: '2',
        name: 'pack 2',
        price: '1500',
        category: 'standar',
        img: 'https://www.google.com/search?q=asthetic+design&tbm=isch&ved=2ahUKEwiDvs2UnpL5AhU3OLkGHdIMClsQ2-cCegQIABAA&oq=asthetic+design&gs_lcp=CgNpbWcQAzIECAAQEzIECAAQEzIECAAQEzIICAAQHhAHEBMyCAgAEB4QBxATMggIABAeEAcQEzIICAAQHhAHEBMyCAgAEB4QBxATMggIABAeEAcQEzIICAAQHhAHEBM6BAgjECc6BAgAEEM6BQgAEIAEOgYIABAeEAdQmAVYxDRg5zZoAnAAeACAAaQDiAHOC5IBCTkuMS4xLjAuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=OprdYoO5D7fw5OUP0pmo2AU&bih=722&biw=767#imgrc=0uv0BHzjTFwXUM&imgdii=M3smPNvbnWxS8M',
        stock: 5,
        description: 'Descripción del pack 1'
    },

    {
        id: '3',
        name: 'pack 3',
        price: '2000',
        category: 'luxe',
        img: 'https://www.google.com/search?q=asthetic+design&tbm=isch&ved=2ahUKEwiDvs2UnpL5AhU3OLkGHdIMClsQ2-cCegQIABAA&oq=asthetic+design&gs_lcp=CgNpbWcQAzIECAAQEzIECAAQEzIECAAQEzIICAAQHhAHEBMyCAgAEB4QBxATMggIABAeEAcQEzIICAAQHhAHEBMyCAgAEB4QBxATMggIABAeEAcQEzIICAAQHhAHEBM6BAgjECc6BAgAEEM6BQgAEIAEOgYIABAeEAdQmAVYxDRg5zZoAnAAeACAAaQDiAHOC5IBCTkuMS4xLjAuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=OprdYoO5D7fw5OUP0pmo2AU&bih=722&biw=767#imgrc=aFLZtbwOXQNR6M',
        stock: 2,
        description: 'Descripción del pack 1'
    },
]


   export const getProducts = () => {
        return new  Promise((resolve) =>{
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })
    }
