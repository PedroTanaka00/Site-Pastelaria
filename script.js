document.addEventListener('DOMContentLoaded', () => {
    const pasteis = [
        { name: 'Carne', description: 'Carne moída temperada com cebola e especiarias, envolta em uma massa crocante e dourada. Um clássico que nunca sai de moda!', price: 11.00, image: './carne.jpeg' },
        { name: 'Queijo', description: 'Recheado com uma mistura de queijos derretidos, este pastel é uma explosão de sabor a cada mordida. Perfeito para os amantes de queijo!', price: 11.00, image: './queijo.jpg' },
        { name: 'Frango c/ catupiry', description: 'Frango desfiado e temperado com ervas finas, criando um recheio suculento e aromático. Uma opção leve e saborosa!', price: 12.00, image: './frango.jpg' },
        { name: 'Pizza', description: 'Todos os sabores de uma pizza em um pastel crocante. Recheado com queijo, tomate e orégano, é uma fusão deliciosa de duas favoritas!', price: 11.00, image: './pizza.jpg' },
        { name: 'Palmito', description: 'Uma opção vegetariana irresistível! Palmito refogado com temperos especiais, perfeito para quem busca um sabor diferenciado.', price: 12.00, image: './palmito.jpg' },
        { name: 'Alho', description: 'Crocante e dourado, o pastel de alho traz um recheio cremoso e aromático, perfeito para quem aprecia um sabor intenso e irresistível.', price: 12.00, image: './alho.jpg' },
        { name: 'Pepperoni', description: 'Crocante e dourado, o pastel de pepperoni é recheado com fatias saborosas e queijo derretido, oferecendo um toque picante irresistível a cada mordida.', price: 12.00, image: './pastel.jpg' },
        { name: 'Carne com Queijo', description: 'A combinação perfeita de carne moída temperada e queijo derretido. Duplamente delicioso!', price: 12.00, image: './carneQ.jpg' },
        { name: 'Marguerita', description: 'Crocante e dourado, o pastel marguerita combina queijo derretido, tomate fresco e manjericão, trazendo um sabor leve e irresistível.', price: 12.00, image: './marg.jpg' },
    ];

    const miniPasteis = [
        { name: 'Mini Carne', description: 'Versão menor do nosso clássico pastel de carne. Perfeito para petiscar!', price: 1.80, image: './mini5.jpg' },
        { name: 'Mini Queijo', description: 'Pequenos pastéis recheados com queijo derretido. Irresistíveis!', price: 1.80, image: './mini7.jpg' },
        { name: 'Mini Frango c/ Catupiry', description: 'Frango desfiado em uma versão menor e igualmente saborosa.', price: 1.80, image: './mini3.webp' },
        { name: 'Mini Pizza', description: 'Todo o sabor de uma pizza em um pastel pequeno e crocante.', price: 1.80, image: './mini4.jpg' },
        { name: 'Mini Palmito', description: 'Nossa opção vegetariana em tamanho reduzido, mas com o mesmo sabor incrível.', price: 1.90, image: './mini1.jpg' },
        { name: 'Mini Brócolis', description: 'Crocante e recheado com brócolis e queijo cremoso, o pastel de brócolis é leve e delicioso.', price: 1.90, image: './mini6.jpg' },
        { name: 'Mini Calabresa', description: 'Calabresa picante em uma versão menor, perfeita para acompanhar bebidas.', price: 1.90, image: './mini2.jpg' },
        { name: 'Mini Carne com Queijo', description: 'A combinação de carne e queijo em um pastel pequeno e delicioso.', price: 1.90, image: './mini8.jpg' },
        { name: 'Mini Três Queijos', description: 'Recheado com uma mistura cremosa de três queijos, o pastel é crocante e irresistível.', price: 2.00, image: './mini1.jpg' },
    ];

    const pasteisGrandesGrid = document.getElementById('pasteis-grandes');
    const pasteisPequenosGrid = document.getElementById('pasteis-pequenos');
    const pastelInfo = document.getElementById('pastel-info');

    function createPastelCard(pastel) {
        const card = document.createElement('div');
        card.classList.add('pastel-card');
        card.innerHTML = `
            <img src="${pastel.image}" alt="${pastel.name}">
            <div class="pastel-content">
                <h4>${pastel.name}</h4>
                <p class="price">R$ ${pastel.price.toFixed(2)}</p>
            </div>
        `;
        card.addEventListener('mouseenter', () => showPastelInfo(pastel));
        card.addEventListener('mouseleave', hidePastelInfo);
        return card;
    }

    function showPastelInfo(pastel) {
        const infoContent = pastelInfo.querySelector('.pastel-info-content');
        infoContent.innerHTML = `
            <div class="pastel-info-text">
                <h3>${pastel.name}</h3>
                <p>${pastel.description}</p>
                <p class="price">R$ ${pastel.price.toFixed(2)}</p>
            </div>
            <div class="pastel-info-image">
                <img src="${pastel.image}" alt="${pastel.name}">
            </div>
        `;
        pastelInfo.style.display = 'block';
    }

    function hidePastelInfo() {
        pastelInfo.style.display = 'none';
    }

    pasteis.forEach(pastel => {
        pasteisGrandesGrid.appendChild(createPastelCard(pastel));
    });

    miniPasteis.forEach(pastel => {
        pasteisPequenosGrid.appendChild(createPastelCard(pastel));
    });

    // Smooth scrolling for header links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});