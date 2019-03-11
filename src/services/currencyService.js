import requestService from './requestService';

export default class currencyService {
  constructor () {
    this.request = new requestService();
  }

  async getCurrencies () {
    try {
      const url = 'http://localhost:8000/readCurrencies';
      const currencies = await this.request.get(url);
      return currencies;
    } catch (err) {
      console.log('error: ', err);
      throw err;
    }
  }

  async getCurrencyExchange (exchange_origin, exchange_destination) {
    try {
      const url = 'http://localhost:8000/readCurrencyExchange?exchange_origin=' + exchange_origin + '&exchange_destination=' + exchange_destination;
      const exchange = await this.request.get(url);
      return exchange;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
