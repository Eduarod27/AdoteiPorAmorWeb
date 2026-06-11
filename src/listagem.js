import { getAnimais } from './data.js';

export const ListagemScreen = {
    render: (filtro = 'todos') => {
        let favoritos = JSON.parse(localStorage.getItem('adotei_favoritos')) || [];
        const animais = getAnimais(); // Resgatado para o lugar correto
        let animaisFiltrados = animais;

        if (filtro === 'cao') {
            animaisFiltrados = animais.filter(
                pet => pet.especie === 'Cão'
            );
        }

        if (filtro === 'gato') {
            animaisFiltrados = animais.filter(
                pet => pet.especie === 'Gato'
            );
        }

        const cards = animaisFiltrados.map(pet => {
            const isFav = favoritos.includes(pet.id) ? 'favoritado' : '';

            return `
                <div class="card-pet">
                    <div class="img-placeholder">
                        <i class="fa-solid ${pet.icone}"></i>
                    </div>

                    <div class="card-info">
                        <h3>${pet.nome}</h3>

                        <span class="tag-idade">
                            ${pet.idade}
                        </span>

                        <p>Porte: ${pet.porte}</p>

                        <div class="card-actions">
                            <button
                                class="btn-primary btn-detalhes"
                                data-id="${pet.id}">
                                Detalhes
                            </button>

                            <button
                                class="btn-fav ${isFav}"
                                data-id="${pet.id}">
                                <i class="fa-solid fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <h2 class="section-title">Animais para Adoção</h2>

            <div class="filtros">
                <button class="btn-filtro" data-filtro="todos">Todos</button>
                <button class="btn-filtro" data-filtro="cao">Cães</button>
                <button class="btn-filtro" data-filtro="gato">Gatos</button>
            </div>

            <div class="grid-animais">
                ${cards}
            </div>
        `;
    },

    after_render: (navigateTo, filtro = 'todos') => {
        document.querySelectorAll('.btn-filtro')
            .forEach(btn => {
                btn.addEventListener('click', () => {
                    const novoFiltro = btn.getAttribute('data-filtro');
                    const app = document.getElementById('app');

                    app.innerHTML = ListagemScreen.render(novoFiltro);
                    ListagemScreen.after_render(navigateTo, novoFiltro);
                });
            });

        document.querySelectorAll('.btn-detalhes')
            .forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = btn.getAttribute('data-id');
                    navigateTo('detalhes', id);
                });
            });

        document.querySelectorAll('.btn-fav')
            .forEach(btn => {
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