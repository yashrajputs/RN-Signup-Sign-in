import axios from 'axios';

const API_KEY = 'AIzaSyDai4Yj-aWJ8nhi2VmmmsKR2jno7Lv1i3Q';

async function authenticateUser(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
 const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true
  });
  
  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
 return authenticateUser('signUp', email, password);

}

export function loginUser(email, password) {
 return authenticateUser('signInWithPassword', email, password);
 
}