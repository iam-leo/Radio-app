document.addEventListener('DOMContentLoaded', () => {
    const btnPlay = document.querySelector('#btn-play');
    const btnStop = document.querySelector('#btn-stop');
    const btnVolumen = document.querySelector('#btn-volume');
    const volumen = document.querySelector('#volume');
    const radioStreaming = document.querySelector('#radio-streaming');
    const urlStreaming = 'https://cdn.instream.audio/:9081/stream';
    let status, volumenGuarado;

    btnPlay.addEventListener('click', reproducirRadio);
    btnStop.addEventListener('click', pararRadio);
    volumen.addEventListener('change', controlVolumen);
    btnVolumen.addEventListener('click', volumeOnOff);

    // Play streaming
    function reproducirRadio(){
        radioStreaming.src = urlStreaming;
        radioStreaming.play();
        status = true;
    }

    // Stop streaming
    function pararRadio(){
        // Stop y reset urlStream en el html para asegurar que siempre se reproduzca en vivo y no retrasado
        if(status){
            radioStreaming.pause();
            radioStreaming.src = urlStreaming;
            status = false;
        }

    }

    // Subir/Bajar volumen
    function controlVolumen(){
        radioStreaming.volume = volumen.value;
    }

    // Mutear/Desmutear
    function volumeOnOff(){
        const iconON = document.querySelector('#icon-on');
        const iconOFF = document.querySelector('#icon-off');

        btnVolumen.classList.toggle('muted');

        if(btnVolumen.classList.contains('muted')){
            // Mostramos el icono de muted
            iconOFF.classList.toggle('hidden');

            // Ocultamos el icono de sound
            iconON.classList.toggle('hidden');

            // Guardamos el volumen para recuperarlo luego de desmutear
            volumenGuarado = volumen.value;

            // Establecemos el volumen en 0
            radioStreaming.volume = 0;

            // Establecemos la barra del volumen en 0
            volumen.value = 0;
        }else{
            // Ocultamos el icono de muted
            iconOFF.classList.toggle('hidden');

            // Mostramos el icono de sound
            iconON.classList.toggle('hidden');

            // Establecemos el nivel de volumen anterior al muted
            radioStreaming.volume = volumenGuarado;

            // Establecemos la barra de volumen al volumen actual
            volumen.value = volumenGuarado;
        }
    }
});