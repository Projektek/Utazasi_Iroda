function feltolt(e) {
    e.preventDefault();
    const destination = document.getElementById('destination').value;
    const kep_1 = document.getElementById('kep_1').value;
    const kep_2 = document.getElementById('kep_2').value;
    const kep_3 = document.getElementById('kep_3').value;
    const kep_4 = document.getElementById('kep_4').value;
    const idegenvezeto = document.getElementById('touristGuide').value;

    fetch('/utazasok', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            destination,
            kep_1,
            kep_2,
            kep_3,
            kep_4,
            idegenvezeto,
        }),
    })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            window.alert(response.message);
            window.location.replace('/utazasok');
        })
        .catch((err) => console.log(err.message));
}

function modosit(e) {
    e.preventDefault();
    const id = document.getElementById('id').value;
    const destination = document.getElementById('destination').value;
    const kep_1 = document.getElementById('kep_1').value;
    const kep_2 = document.getElementById('kep_2').value;
    const kep_3 = document.getElementById('kep_3').value;
    const kep_4 = document.getElementById('kep_4').value;
    const idegenvezeto = document.getElementById('touristGuide').value;

    fetch('/utazasok/modositas', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            id,
            destination,
            kep_1,
            kep_2,
            kep_3,
            kep_4,
            idegenvezeto,
        }),
    })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            window.alert(response.message);
            window.location.replace('/utazasok');
        })
        .catch((err) => console.log(err.message));
}

function torol(e) {
    console.log(e);

    fetch('/utazasok/torles', {
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
            window.location.replace('/utazasok');
        })
        .catch((err) => console.log(err.message));
}
