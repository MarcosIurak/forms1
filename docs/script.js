document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();})})

        document.addEventListener("DOMContentLoaded", function () {
            const form = document.getElementById("myForm");
            form.addEventListener("submit", function (event) {
                event.preventDefault();
        
                displayParabens();
        
                
                const colors = ["#FF5733", "#33FFC1", "#338AFF", "#FF33F5", "#33FF33"]; 
                let currentIndex = 0;
        
                function changeBackgroundColor() {
                    document.body.style.backgroundColor = colors[currentIndex];
                    currentIndex = (currentIndex + 1) % colors.length;
                }
        
                const backgroundColorInterval = setInterval(changeBackgroundColor, 2000); // Meu Deus demorei 4 dias pra fazer mudar de cor a cada 2 seg SLLSLSLSLSKKSSKSK
        
                
                setTimeout(function () {
                    clearInterval(backgroundColorInterval); 
                    parabensElement.remove();
                    joinhaElement.remove();
                }, 10000); 
            });
        
            function displayParabens() {
                const parabensElement = document.createElement("div");
                parabensElement.textContent = "Parabéns!";
                parabensElement.classList.add("parabens");
                document.body.appendChild(parabensElement);
        
                const joinhaElement = document.createElement("div");
                joinhaElement.textContent = "👍";
                joinhaElement.classList.add("joinha");
                document.body.appendChild(joinhaElement);
            }
        });
    