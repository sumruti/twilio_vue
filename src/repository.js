import axios from 'axios';

const BASE_URL = 'https://twiliowilson.herokuapp.com';


export function sendmessage(data) {
	  console.log(data);

	return axios.post(`${BASE_URL}/api/send_message`, { number: data.number, message: data.message })
		.then(response => {
			return response.data
		})
		.catch(err => Promise.reject(err.message));
}

