import axios from 'axios';

export async function getReviews() {
  try {
    let  res = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    return res.data;
  } catch (err) {
    return err;
  }
}