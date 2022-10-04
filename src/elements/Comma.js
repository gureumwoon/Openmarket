// 콤마
export const comma = (price) => {
    price = String(price)
    return price.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')
}

// 콤마 해제
export const unComma = (price) => {
    price = String(price)
    return price.replace(/[^\d]+/g, '')
}