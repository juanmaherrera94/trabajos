let popup;

const openWindow = () => {
    popup = window.open("", "_blank", "width=550, height=380, resizable=no, scrollbars=no, toolbar=no, navigation=no");

    // Botones de colores
    const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
    colors.forEach(color => {
        const button = popup.document.createElement("button");
        button.textContent = color;
        button.addEventListener("click", () => {
            popup.document.getElementById("text").style.color = color;
        });
        popup.document.body.appendChild(button);
    });

    const closeButton = popup.document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => {
        popup.close();
    });
    popup.document.body.appendChild(closeButton);

    const moveButton = popup.document.createElement("button");
    moveButton.textContent = "Move";
    moveButton.addEventListener("click", () => {
        const entry = popup.prompt("Introduce los dos valores separados por una coma: (x,y)");
        if (entry) {
            const [x, y] = entry.split(",");
            popup.moveTo(parseInt(x), parseInt(y));
        }
    });
    popup.document.body.appendChild(moveButton);

    // Creación de texto
    const textElement = popup.document.createElement("p");
    textElement.id = "text";
    textElement.textContent = "La vida es una";
    popup.document.body.appendChild(textElement);
}

document.getElementById("open").addEventListener("click", () => {
    openWindow();
});

document.getElementById("close").addEventListener("click", () => {
    if (popup) {
        popup.close();
    }
});

document.getElementById("print").addEventListener("click", () => {
    window.print();
});