class Service {
  url = `http://localhost:6882`;

  async post(body) {
    console.log(body.params);
    return await (
      await fetch(`${this.url}/${body.endpoint}`, {
        body: body.params,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        method: 'POST',
      })
    ).json();
  }

  async get(body) {
    return await (
      await fetch(`${this.url}/${body.endpoint}`, {
        headers: {
          'Content-type': 'application/json',
        },
        method: 'GET',
      })
    ).json();
  }
}

export default new Service();
