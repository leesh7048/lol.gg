export default class LolApi {
  constructor(krHttpClient, asiaHttpClient) {
    this.krLolApi = krHttpClient;
    this.asiaLolApi = asiaHttpClient;
  }

  async summoner(id) {
    const response = await this.krLolApi.get(
      `lol/summoner/v4/summoners/by-name/${id}`
    );

    return response.data;
  }

  async rank(id) {
    const response = await this.krLolApi.get(
      `lol/league/v4/entries/by-summoner/${id}`
    );

    return response.data;
  }

  async matches(puuid) {
    const response = await this.asiaLolApi.get(
      `lol/match/v5/matches/by-puuid/${puuid}/ids`,
      {
        params: {
          start: 0,
          count: 5,
        },
      }
    );

    return response.data;
  }

  async matchInfo(leagueId) {
    const response = await this.asiaLolApi.get(
      `lol/match/v5/matches/${leagueId}`
    );
    return response.data;
  }
}
