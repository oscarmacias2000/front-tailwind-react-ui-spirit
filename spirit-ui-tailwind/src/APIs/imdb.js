const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGNiYzdlZTFjY2I5NTBmMzFiMmUxYTJkYjhiOGU5YSIsIm5iZiI6MTcyODk0NjA4My41MzMsInN1YiI6IjY3MGQ5ZmEzZDVmOTNhM2RhMGJiZjkxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JOeZtFdcMuPVPNQKLTNUMyOcVAYeYxilY6mgdHZmq0U'
    }
};

fetch('https://api.themoviedb.org/3/authentication', options)
.then(res=> res.json())
.then(res=> console.log(res))
.catch(err=> console.error(err))