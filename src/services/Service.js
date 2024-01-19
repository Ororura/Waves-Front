import axios from "axios";

class Service {
  url = `http://localhost:6882`;
  obj = {
    contracts: ["55UNq9mHHfU8u8L8VYFwptk7vwn3j2Tk48uk5i9qnUKF"],
  };

  async getData() {
    try {
      await axios.post(this.url, this.obj).then((el) => {
        console.log(el);
      });
    } catch (e) {
      console.log(e);
    }
  }

  async getSupp() {
    try {
      return await axios.get(
        this.url +
          "/Etz3EPCbzzwpJuvL6wWBV1a5Cb3pnCpg8TvpsfmojkJb/SUPPLIERS_BMW",
      );
    } catch (e) {
      console.log(e);
    }
  }

  async getDist() {
    try {
      return await axios.get(
        this.url +
          "/Etz3EPCbzzwpJuvL6wWBV1a5Cb3pnCpg8TvpsfmojkJb/DISTRIBUTOR_SAdwadawdawd",
      );
    } catch (e) {
      console.log(e);
    }
  }

  async getRef(param, contract, name) {
    try {
      return await axios.get(this.url + `/${param}/${contract}/REF_${name}`);
    } catch (e) {
      console.log(e);
    }
  }

  async getUser(name) {
    try {
    } catch (e) {}
  }

  async createUser(name, password) {
    try {
      return await axios.post(this.url + "/transactions/signAndBroadcast", {
        contractId: "EKnbLByBpqBzkGKMekLq8PnFU95WWpVQ3B3UQgVDxwiy",
        fee: 10,
        sender: "3NjpGwi1pr4Soak5QGYGp6H6HYUmUcmeiHk",
        password: "iduWZ1Ljz3KsnXdNsjjp4g",
        type: 104,
        params: [
          {
            type: "string",
            value: "addUser",
            key: "action",
          },
          {
            type: "string",
            value: { login: `${name}`, password: `${password}` },
            key: "addUser",
          },
        ],
        version: 1,
        contractVersion: 1,
      });
    } catch (e) {
      console.log(e);
    }
  }
}

export default new Service();
