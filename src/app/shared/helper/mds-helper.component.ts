/* Mediadesain Helper
* Documentation https://bitbucket.org/mediadesain/javascript-mds-doc/src/javascript-mds-doc/
*
* Version 1.1.4
* Last Update 17-Aug-2021
*/

// String
export const lowerCase = (str: any) => {
    return str.toLowerCase();
};
export const upperCase = (str: any) => {
    return str.toUpperCase();
};
export const titleCase = (str: any) => {
    return str.replace(/\b(\w)/g, (k: any) => k.toUpperCase());
};
export const pascalCase = (str: any) => {
    return str.toLowerCase().replace(/[^\w\s]/gi, ' ').replace(/(?:_| |\b)(\w)/g, (p1: any) => {
    return p1.toUpperCase(); }).replace(/\s/g, '');
};
export const randomKarakter = (length: any) => {
    const chars = 'abcefghijklnopqrtuvwxyz0123456789'; // sample random karakter
    let result = '';
    for (let i = length; i > 0; --i) { result += chars[Math.floor(Math.random() * chars.length)]; }
    return result;
};
export const konfersiURLslug = (text: any) => {
    if (!text) { return; }
    const result = text.toLowerCase().replace('.', ' ').replace('-', ' ').replace(/[^\w ]+/g, '').replace(/ +/g, '-');
    return result;
};
export const youtubeID = (url: any) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) { return match[2]; }
    else { return ''; }
};
export const youtubeEmbed = (val: any) => {
    val = youtubeID(val);
    return 'https://www.youtube.com/embed/' + val;
};
export const youtubeThumbnail = (val: any, size: any) => {
    val = youtubeID(val);
    return 'https://i.ytimg.com/vi/' + val + '/' + size + '.jpg';
};

// Interger
export const perpendekAngka = (value: any) => {
    const suffixes = ['', 'k', 'm', 'b', 't'];
    const suffixNum = Math.floor(('' + value).length / 3);
    let shortValue: any = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2));
    if (shortValue % 1 !== 0) {
        shortValue = shortValue.toFixed(1);
    }
    return shortValue + suffixes[suffixNum];
};
export const mataUang = (money: any, format: any, code: any, decimal: any) => {
    return new Intl.NumberFormat(format,
        { style: 'currency', currency: code, minimumFractionDigits: decimal }
    ).format(money);
};

// Object
export const hapusObjValKosong = (obj: any) => {
    for (const namaProperty in obj) {
        if (obj[namaProperty] === null || obj[namaProperty] === undefined || obj[namaProperty] === '') {
            delete obj[namaProperty];
        }
    }
    return obj;
};

// Array
export const hitungUnikValue = (data: any) => {
    const count: any = {};
    data.forEach((i: any) => {
        count[i] = (count[i] || 0) + 1;
    });
    return count;
};
export const filterMultiple = (data: any, key: any, filterdata: any) => {
    // console.log('FilterMultiple', data, key, filterdata)
    filterdata = filterdata.join().toLocaleLowerCase().split(',');
    const newdata: any = [];
    data.filter( (a: any) => {
        const isArray = Array.isArray(a[key]);
        if (a[key]){
            // If values of key is string
            if (!isArray){
                if (filterdata.indexOf(a[key].toLocaleLowerCase()) !== -1) {
                    newdata.push(a);
                }
            }
            // If values of key is Array
            if (isArray){
                a[key].forEach( (val: string) => {
                    if (filterdata.indexOf(val.toLocaleLowerCase()) !== -1) {
                        newdata.push(a);
                    }
                });
            }
        }
    });
    return [...new Set(newdata)];
};
export const groupSeValue = (arr: any, key: any) => {
    const keyvalue = (a: any) => a[key];
    return arr.reduce((r: any, v: any, i: any, a: any, k: any = keyvalue(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
};
export const jumblahKan = (arr: any) => {
    return arr.reduce( (total: any, num: any) => total + num );
};
export const listObject = (arr: any, objectkey: string) => {
    const groupObj = {};
    for (const item of arr){
        const newobj: any = {};
        newobj[item[objectkey]] = item;
        Object.assign(groupObj, newobj);
    }
    return groupObj;
};
