export default class LolApi {
  constructor(httpClient) {
    this.lolApi = httpClient;
  }

  async summoner(id) {
    const response = await this.lolApi.get(
      `lol/summoner/v4/summoners/by-name/${id}`
    );
    return response.data.id;
  }
}
