
const sendEmail = (envio) => {
    envio.preventDefault;
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const message = document.querySelector('#message')

    const dados = {
        name: name.value,
        email: email.value,
        message: message.value
    };

    const url = 'http://curriculo.exceltri.com/mail/mail.php'

    $.post(url, dados).done(function (data) {
        document.querySelector('.alert').classList.add('show')
        document.querySelector('.alert').classList.remove('hide-alert')
        setInterval(() => {
            document.querySelector('.alert').classList.add('hide-alert')
            document.querySelector('.alert').classList.remove('show')
        }, 4000);
        clearForm()
    }).fail(function(err) {
        document.querySelector('.alert-error').classList.add('show')
        document.querySelector('.alert-error').classList.remove('hide-alert')
        clearForm()
        setInterval(() => {
            document.querySelector('.alert-error').classList.add('hide-alert')
            document.querySelector('.alert-error').classList.remove('show')
        }, 4000);
    });
    
}

const clearForm = () => {
    document.querySelector('#name').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#message').value = ''
}

