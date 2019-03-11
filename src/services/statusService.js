import requestService from './requestService';

export default class statusService {
  constructor () {
    this.request = new requestService();
  }
  async status () {
    try {
      const status = await this.request.get('http://localhost:8000/status');
      return status;
    } catch (err) {
      console.log('error: ', err);
      throw err;
    }
  }
}
