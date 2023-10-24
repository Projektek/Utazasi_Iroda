function feltolt(e) {
    e.preventDefault();
    const nev = document.getElementById('nev').value;
    const kep = document.getElementById('kep').value;

    fetch('/idegenvezetok', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ nev, kep }),
    })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            window.alert(response.message);
            window.location.replace('/idegenvezetok');
        })
        .catch((err) => console.log(err.message));
}

function modosit(e) {
    e.preventDefault();
    const id = document.getElementById('id').value;
    const nev = document.getElementById('nev').value;
    const kep = document.getElementById('kep').value;

    fetch('/idegenvezetok/modositas', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ id, nev, kep }),
    })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            window.alert(response.message);
            window.location.replace('/idegenvezetok');
        })
        .catch((err) => console.log(err.message));
}

function torol(e) {
    console.log(e);

    fetch('/idegenvezetok/torles', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ e }),
    })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            window.alert(response.message);
            window.location.replace('/idegenvezetok');
        })
        .catch((err) => console.log(err.message));
}
