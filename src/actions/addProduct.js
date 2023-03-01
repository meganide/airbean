const addProduct = (product) => {
    return {
        type: 'ADD-PRODUCT',
        payload: product
    }
}

export { addProduct };