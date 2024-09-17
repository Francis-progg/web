document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cuenta creada exitosamente');
});

document.getElementById('search-btn').addEventListener('click', function() {
    const destination = document.getElementById('destination').value;
    if (destination) {
        alert('Dirección de destino: ' + destination);
    } else {
        alert('Por favor, ingrese una dirección de destino.');
    }
});

document.getElementById('request-ride').addEventListener('click', function() {
    alert('Solicitud de viaje realizada.');
});

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pago realizado.');
});

document.getElementById('submit-feedback').addEventListener('click', function() {
    const feedback = document.getElementById('feedback').value;
    if (feedback) {
        alert('Comentario enviado: ' + feedback);
    } else {
        alert('Por favor, ingrese un comentario.');
    }
});
