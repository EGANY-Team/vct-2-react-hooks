const API_URL = "https://reqres.in/api";

export function getAllUsers() {
  return fetch(`${API_URL}/users`).then(response => response.json());
}

export function getUserById(userId) {
  return fetch(`${API_URL}/users/${userId}`).then(response => response.json());
}
