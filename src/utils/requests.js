const BASE_URL = 'https://airbean.awesomo.dev';

async function httpSignup(userInfo) {
  try {
    const response = await fetch(BASE_URL + '/api/user/signup', {
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

export { httpSignup };
