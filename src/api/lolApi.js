import axios from "axios";

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

  async matches(puuid, matchPage) {
    const response = await this.asiaLolApi.get(
      `lol/match/v5/matches/by-puuid/${puuid}/ids`,
      {
        params: {
          queue: 420,
          queue: 430,
          queue: 440,
          queue: 450,
          queue: 1400,
          queue: 900,
          start: matchPage * 10,
          count: 10,
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

  async spellInfo() {
    const response = await axios.get(
      "https://ddragon.leagueoflegends.com/cdn/12.4.1/data/ko_KR/summoner.json"
    );
    return response.data.data;
  }

  async runeInfo() {
    const response = await axios.get(
      "https://ddragon.leagueoflegends.com/cdn/12.4.1/data/ko_KR/runesReforged.json"
    );
    return response.data;
  }

  async itemsInfo() {
    const response = await axios.get(
      "http://ddragon.leagueoflegends.com/cdn/12.4.1/data/ko_KR/item.json"
    );

    return response.data.data;
  }
  async championInfo() {
    const response = await axios.get(
      "https://ddragon.leagueoflegends.com/cdn/10.6.1/data/ko_KR/champion.json"
    );
    return response.data.data;
  }
}
