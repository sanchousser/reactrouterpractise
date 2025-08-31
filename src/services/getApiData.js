const BASE_URL = 'https://openlibrary.org/subjects';

export default function fetchBooks(subject = 'fiction', limit = 8) {
  return fetch(`${BASE_URL}/${subject}.json?limit=${limit}`)
    .then(res => {
      if (!res.ok) throw new Error('Network error');
      return res.json();
    })
    .then(data => data.works);
}
