function formatDate(date) {
    let dd = date.getDate();
    dd < 10 ? dd = '0' + dd : '';
    
    let mm = date.getMonth() + 1;
    mm < 10 ? mm = '0' + mm : '';
    
    let yy = date.getFullYear() % 100;
    yy < 10 ? yy = '0' + yy : '';
    
    let hh = date.getHours()
    hh < 10 ? hh += '0' + hh : '';
    
    let mn = date.getMinutes()
    mn < 10 ? mn += '0' + mn : '';
    
    return '20' + yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mn + ':00';
    }