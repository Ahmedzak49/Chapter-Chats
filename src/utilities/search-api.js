import sendRequest from "./send-request";
const BASE_URL = '/api/books';

export async function searchBooks(searchTerm) {
    return sendRequest(`${BASE_URL}/search`, 'POST', searchTerm);
  }
