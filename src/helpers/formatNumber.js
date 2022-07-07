export const formatNumber = (number) => {
    const numberArr = number
      .replace(/\s+/g, '')
      .replace(/-/g, '')
      .replace(/\)/g, '')
      .replace(/\(/g, '')
      .split('');
      console.log(number, numberArr);
    if ((numberArr.length === 11 || numberArr.length === 12)) {
        let countryCodeNumber;
        const operatorNumber = numberArr.slice(-10, -7).join('');
        const phoneNumber = [
          numberArr.slice(-7, -4).join(''), 
          numberArr.slice(-4, -2).join(''), 
          numberArr.slice(-2).join('')
        ];
        if (numberArr[0] === '+') countryCodeNumber = numberArr.slice(-12, -10).join('');
        if (numberArr[0] === '8' || numberArr[0] === '7') countryCodeNumber = '+7';
        return countryCodeNumber + ' (' + operatorNumber + ') ' + phoneNumber.join('-');
    } else {
        return number;
    }
  };