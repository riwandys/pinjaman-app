export const currencyFormat = (num) => {
    return 'Rp ' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export const validateEmail = (mail) => {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}