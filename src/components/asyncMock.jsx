const products = [
    {id: "1",name :"iPhone 15",price : 1700,category: "celulares",img:"",stock: 25,description: "iPhone 15 - 128GB"},
    {id: "2",name :"iPhone 11",price : 700,category: "celulares",img:"",stock: 56,description: "iPhone 11 - 128GB"},
    {id: "3",name :"Airpods 3 pro",price : 800,category: "accesorio",img:"",stock: 5,description: "Airpods 3 Pro - Nuevo"}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}