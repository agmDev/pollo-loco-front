const endpoint = 'http://localhost:8888/';

export async function post(end, params) {
  try {
    console.log(JSON.stringify(params));
    const ret = fetch(endpoint + end, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then(response => response.json())
      .catch((error) => {
        console.error(error);
      });
    return ret;
  } catch (e) {
    console.log(e.message);
    return false;
  }
}

export async function get(end) {
  try {
    const rep = await fetch(endpoint + end, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

    });
    const json = rep.json();
    return json;
  } catch (e) {
    return false;
  }
}

export async function update(end, params) {
  try {
    const rep = await fetch(endpoint + end, {
      method: 'UPDATE',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: params,
    });
    const json = rep.json();
    return json;
  } catch (e) {
    return false;
  }
}

export async function del(end, params) {
  try {
    const rep = await fetch(endpoint + end, {
      method: 'DELETE',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: params,
    });
    const json = rep.json();
    return json;
  } catch (e) {
    return false;
  }
}
