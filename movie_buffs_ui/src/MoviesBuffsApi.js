const api = "http://127.0.0.1:8000"


export const register = (firstName, lastName, age, email, password) => {
	return fetch(`${api}/user/register/`, {
		method: 'POST',
		body: JSON.stringify({
			first_name: firstName,
			last_name: lastName,
			age: age,
			email: email,
			password: password
		})
	})
	.then((response) => {
		return response.json()
	})
}

export const login = (email, password) => {
	return fetch(`${api}/user/login/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json' 
		},
		body: JSON.stringify({
			email: email,
			password: password
		})
	})
	.then((response) => {
		return response.json()
	})

}

export const logout = (refreshToken) => {
	return fetch(`${api}/user/logout/?refresh_token=${refreshToken}`, {
		method: 'GET'
	})
	.then((response) => {
		return response.json()
	})
}

export const getUserMovies = (imdb_id) => {
	return fetch(`${api}/user/movies/?imdb_id=${imdb_id}`, {
		method: 'GET'
	})
	.then((response) => {
		return response.json()
	})
}

export const addUserMovie = (user_id, imdb_id) => {
	return fetch(`${api}/user/add_movie/?user_id=${user_id}&imdb_id=${imdb_id}`, {
		method: 'PUT'
	})
	.then((response) => {
		return response.json()
	}) 
}

export const searchTitle = (title) => {
	return fetch(`${api}/movies/search_title/?title=${title}`, {
		method: 'GET'
	})
	.then((response) => {
		return response.json()
	})
}

export const searchId = (imdb_id) => {
	return fetch(`${api}/movies/search_id/?imdb_id=${imdb_id}`, {
		method: 'GET'
	})
	.then((response) => {
		return response.json()
	})
}
