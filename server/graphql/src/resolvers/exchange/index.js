import { each } from 'lodash';
import { exchangeRatesApi } from '../../utils';

function getCurrencyText(currency) {
  switch (currency) {
    case 'AUD':
      return 'Australia Dollar';
    case 'BGN':
      return 'Bulgaria Lev';
    case 'BRL':
      return 'Brazil Real';
    case 'CAD':
      return 'Canada Dollar';
    case 'CHF':
      return 'Switzerland Franc';
    case 'CNY':
      return 'China Yuan/Renminbi';
    case 'CZK':
      return 'Czech Koruna';
    case 'DKK':
      return 'Denmark Krone';
    case 'GBP':
      return 'Great Britain Pound';
    case 'HKD':
      return 'Hong Kong Dollar';
    case 'HRK':
      return 'Croatia Kuna';
    case 'HUF':
      return 'Hungary Forint';
    case 'IDR':
      return 'Indonesia Rupiah';
    case 'ILS':
      return 'Israel New Shekel';
    case 'INR':
      return 'India Rupee';
    case 'ISK':
      return 'Iceland Krona';
    case 'JPY':
      return 'Japan Yen';
    case 'KRW':
      return 'South Korea Won';
    case 'MXN':
      return 'Mexico Peso';
    case 'MYR':
      return 'Malaysia Ringgit';
    case 'NOK':
      return 'Norway Kroner';
    case 'NZD':
      return 'New Zealand Dollar';
    case 'PHP':
      return 'Philippines Peso';
    case 'PLN':
      return 'Poland Zloty';
    case 'RON':
      return 'Romania New Lei';
    case 'RUB':
      return 'Russia Rouble';
    case 'SEK':
      return 'Sweden Krona';
    case 'SGD':
      return 'Singapore Dollar';
    case 'THB':
      return 'Thailand Baht';
    case 'TRY':
      return 'Turkish New Lira';
    case 'USD':
      return 'USA Dollar';
    case 'ZAR':
      return 'South Africa Rand';
    case 'EUR':
      return 'Euro';
    default:
      return 'XXX';
  }
}

function constructCurrencyAmount(data, amount = 1) {
  const currencyObj = {};
  const { base, date, rates } = data;

  each(rates, (rate, key) => {
    const newRates = Object.assign(
      {},
      {
        base: rate,
        amount: amount * rate,
        text: getCurrencyText(key),
      },
    );
    currencyObj[key] = newRates;
  });

  return { base, date, rates: currencyObj };
}

function getExchange(args) {
  const { base, amount } = args;
  return exchangeRatesApi(base)
    .then(response => constructCurrencyAmount(response.data, amount))
    .catch(error => error);
}

const resolvers = {
  RootQuery: {
    exchange: (root, args) => getExchange(args),
  },
};

export default resolvers;
