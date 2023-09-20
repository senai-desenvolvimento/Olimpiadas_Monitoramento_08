// Função para ler o arquivo JSON e criar iframes com títulos
async function createIframesFromJSON() {
    const response = await fetch('telas.json'); // Carrega o arquivo JSON
    const jsonData = await response.json(); // Converte a resposta em um objeto JSON

    const iframeList = document.getElementById("iframeList");

    // Itera pelos objetos JSON e cria iframes com títulos
    jsonData.forEach(item => {
        const iframeContainer = document.createElement("div");
        const title = document.createElement("h2");
        const iframe = document.createElement("iframe");

        title.textContent = item.dr;
        iframe.src = item.url + '&autoplay=1'; // Adiciona o parâmetro de autoplay
        iframe.width = "100%";
        iframe.height = "400";
        iframe.allowFullscreen = true;
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('gesture', 'media');
        iframe.setAttribute('allow', 'autoplay');

        iframeContainer.appendChild(title);
        iframeContainer.appendChild(iframe);

        // Adicione cada iframe com título à lista
        iframeList.appendChild(iframeContainer);
    });
}

// Chama a função para criar iframes quando a página for carregada
window.onload = createIframesFromJSON;