class API {
  constructor() {}
  GetUserFullName(params) {
    return params;
  }
  async GetSampleDataSet() {
    let response = await fetch(
      "https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json"
    ).catch((error) => console.error(error));
    let json = await response.json();
    return json;
  }

  async GetSampleDataSet(requestBody) {
    let response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    });
    let json = await response.json();
    return json;
  }
}

const api = new API();
export default api;
