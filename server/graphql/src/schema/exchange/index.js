const Exchange = `
  type Exchange {
    base: String
    date: String
    rates: Rates
  }

  type Currency {
    base: Float
    amount: Float
    text: String
  }

  type Rates {
    AUD: Currency
    BGN: Currency
    BRL: Currency
    CAD: Currency
    CHF: Currency
    CNY: Currency
    CZK: Currency
    DKK: Currency
    GBP: Currency
    HKD: Currency
    HRK: Currency
    HUF: Currency
    IDR: Currency
    ILS: Currency
    INR: Currency
    ISK: Currency
    JPY: Currency
    KRW: Currency
    MXN: Currency
    MYR: Currency
    NOK: Currency
    NZD: Currency
    PHP: Currency
    PLN: Currency
    RON: Currency
    RUB: Currency
    SEK: Currency
    SGD: Currency
    THB: Currency
    TRY: Currency
    USD: Currency
    ZAR: Currency
    EUR: Currency
  }
`;

export default () => [Exchange];
