exports.prices = (price) =>{
    let result;
    switch (price) {
        case 'five':
            result = 'price <= 50000'; 
            break;
        case 'ten':
            result = 'price <= 100000'; 
            break;
        case 'twenty':
            result = 'price <= 200000'; 
            break;
        default:
            result = 'price <= 99999999'; 
            break;
    }
    return result;
}
