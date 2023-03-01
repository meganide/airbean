const BASE_URL = 'https://airbean.awesomo.dev/api';

async function httpAuth(userInfo, isLogin = true) {
  let FETCH_URL = BASE_URL + '/user/signup';

  if (isLogin) {
    FETCH_URL = BASE_URL + '/user/login';
  }

  try {
    const response = await fetch(FETCH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function httpUserToken(history = false) {
  let FETCH_URL = BASE_URL + '/user/status';

  if (history) {
    FETCH_URL = BASE_URL + '/user/history';
  }

  const token = sessionStorage.getItem('token');


  try {
    const response = await fetch(FETCH_URL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}


export { httpAuth, httpUserToken };
