function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            // Extraindo apenas o conteúdo da tag <body>
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            const bodyContent = tempDiv.querySelector('body').innerHTML;
            document.getElementById('main-content').innerHTML = bodyContent;
        })
        .catch(error => console.error('Error loading page:', error));
}
