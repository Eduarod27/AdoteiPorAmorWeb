import { animais } from './data.js';

export const ListagemScreen = {
    render: () => {
        let favoritos = JSON.parse(localStorage.getItem('adotei_favoritos')) || [];
        
        const cards = animais.map(pet => {
            const isFav = favoritos.includes(pet.id) ? 'favoritado' : '';
            return `
                <div class="card-pet">
                    <div class="img-placeholder"><i class="fa-solid ${pet.icone}"></i></div>
                    <div class="card-info">
                        <h3>${pet.nome}</h3>
                        <span class="tag-idade">${pet.idade}</span>
                        <p>Porte: ${pet.porte}</p>
                        <div class="card-actions">
                            <button class="btn-primary btn-detalhes" data-id="${pet.id}">Detalhes</button>
                            <button class="btn-fav ${isFav}" data-id="${pet.id}">
                                <i class="fa-solid fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <h2 class="section-title">Animais para Adoção</h2>
            <div class="grid-animais">${cards}</div>
        `;
    },
    after_render: (navigateTo) => {
        // Evento para ir para a tela de Detalhes
        document.querySelectorAll('.btn-detalhes').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                navigateTo('detalhes', id);
            });
        });

        // Evento de Favoritar (LocalStorage)
        document.querySelectorAll('.btn-fav').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'));
                let favoritos = JSON.parse(localStorage.getItem('adotei_favoritos')) || [];
                
                if (favoritos.includes(id)) {
                    favoritos = favoritos.filter(favId => favId !== id);
                    btn.classList.remove('favoritado');
                } else {
                    favoritos.push(id);
                    btn.classList.add('favoritado');
                }
                localStorage.setItem('adotei_favoritos', JSON.stringify(favoritos));
            });
        });
    }
};