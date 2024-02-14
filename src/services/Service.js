class Service {
  //win 3Nd2TPQntAvrXN3TyCY1KQr5dYJRtm9akKW CxpkVeA3E1Rx-2lShWmqEg
  //mac 3NwAugvmn1pP9go99QKhcDaJEbEaKkG5KsY f8K7X6klVnBC_hSl3D7w9g
  addressContract = '84a8HaWUseDy6YHLLpqskyeEd4E3uwp8zL17WsQfwvsx';
  sender = '3NwAugvmn1pP9go99QKhcDaJEbEaKkG5KsY';
  passwordSender = 'f8K7X6klVnBC_hSl3D7w9g';
  contractId = 4;

  async post(data) {
    return await (
      await fetch('http://localhost:6882/transactions/signAndBroadcast', {
        body: JSON.stringify({
          contractId: `${this.addressContract}`,
          fee: 0,
          sender: `${this.sender}`,
          password: `${this.passwordSender}`,
          type: 104,
          params: data,
          version: 2,
          contractVersion: this.contractId,
        }),
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        method: 'POST',
      })
    ).json();
  }

  async get(data) {
    return await (
      await fetch(`http://localhost:6882/contracts/${this.addressContract}/${data.endpoint}`, {
        headers: {
          'Content-type': 'application/json',
        },
        method: 'GET',
      })
    ).json();
  }
}

export default new Service();
