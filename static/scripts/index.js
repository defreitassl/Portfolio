function typeEffect(element, text, delay, callback) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.textContent = text.slice(0, index + 1);
            index++;
            setTimeout(type, delay);
        } else if (callback) {
            callback();
        }
    }
    type();
}


document.addEventListener("DOMContentLoaded", () => {
    const helloElement = document.querySelector(".type-hello");
    const nameElement = document.querySelector(".type-name");
    const presentationElement = document.querySelector(".type-presentation");

    const helloText = "Olá, meu nome é";
    const nameText = "Douglas Freitas.";
    const presentationText = "Eu desenvolvo softwares.";

    // Call typeEffect for each element without looping
    typeEffect(helloElement, helloText, 100, () => {
        typeEffect(nameElement, nameText, 100, () => {
            typeEffect(presentationElement, presentationText, 100)
        });
    });

    // Set static space for text to avoid layout shifting
    helloElement.style.minWidth = `${helloText.length}ch`;
    nameElement.style.minWidth = `${nameText.length}ch`;
    presentationElement.style.minWidth = `${presentationText.length}ch`;
});
