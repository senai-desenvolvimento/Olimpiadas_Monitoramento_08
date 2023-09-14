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
        iframe.src = item.url;
        iframe.width = "560";
        iframe.height = "315";
        iframe.allowFullscreen = true;

        iframeContainer.appendChild(title);
        iframeContainer.appendChild(iframe);

        // Adicione cada iframe com título à lista
        iframeList.appendChild(iframeContainer);
    });
}

// Chama a função para criar iframes quando a página for carregada
window.onload = createIframesFromJSON;