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

function clearEffect(element, text, delay, callback) {
    let index = text.length;
    function clear() {
        if (index > 0) {
            element.textContent = text.slice(0, index - 1);
            index--;
            setTimeout(clear, delay);
        } else if (callback) {
            callback();
        }
    }
    clear();
}

document.addEventListener("DOMContentLoaded", () => {
    const helloElement = document.querySelector(".type-hello");
    const nameElement = document.querySelector(".type-name");
    const presentationElement = document.querySelector(".type-presentation");

    const helloText = "Olá, meu nome é";
    const nameText = "Douglas Freitas.";
    const presentationText = "Eu desenvolvo softwares.";

    const loopTypingEffect = () => {
        typeEffect(helloElement, helloText, 100, () => {
            typeEffect(nameElement, nameText, 100, () => {
                typeEffect(presentationElement, presentationText, 100, () => {
                    setTimeout(() => {
                        clearEffect(presentationElement, presentationText, 50, () => {
                            clearEffect(nameElement, nameText, 50, () => {
                                clearEffect(helloElement, helloText, 50, loopTypingEffect);
                            });
                        });
                    }, 2000); // Delay before clearing text
                });
            });
        });
    };

    // Set static space for text to avoid layout shifting
    helloElement.style.minWidth = `${helloText.length}ch`;
    nameElement.style.minWidth = `${nameText.length}ch`;
    presentationElement.style.minWidth = `${presentationText.length}ch`;

    loopTypingEffect();
});
