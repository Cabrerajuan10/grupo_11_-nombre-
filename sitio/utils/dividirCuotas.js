module.exports = (price) =>  {
    let divisor = (Math.ceil(price) / 12);
    return parseInt(divisor);
}