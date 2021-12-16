module.exports = {

     doceCuotas : price => {
    let divisor = (Math.ceil(price) / 12);
    return parseInt(divisor);
},
     seisCuotas : price => {
        let divisor = (Math.ceil(price) / 6);
        return parseInt(divisor);
}

}