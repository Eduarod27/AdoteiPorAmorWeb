import { getAnimais } from './data.js';

export const PerfilScreen = {
    render: () => {
        let favoritos = JSON.parse(localStorage.getItem('adotei_favoritos')) || [];
        const animais = getAnimais();
        const petsFavoritados = animais.filter(pet => favoritos.includes(pet.id));

        const cardsFav = petsFavoritados.map(pet => `
            <div class="card-pet-mini">
                <i class="fa-solid ${pet.icone}"></i>
                <div>
                    <h4>${pet.nome}</h4>
                    <button class="btn-ver-mini" data-id="${pet.id}">Ver</button>
                </div>
            </div>
        `).join('');

        return `
            <h2 class="section-title">Meu Perfil & Configurações</h2>
            <div class="perfil-grid">
                <div class="perfil-card">
                    <h3>Dados do Usuário</h3>
                    <div class="user-info">
                        <p><strong>Nome:</strong> Luiz Eduardo L. C. V.</p>
                        <p><strong>Curso:</strong> Sistemas de Informação (3º Período)</p>
                        <p><strong>Instituição:</strong> UNINASSAU</p>
                    </div>
                </div>
                <div class="perfil-card">
                    <h3>Meus Favoritos Salvos</h3>
                    <div class="grid-favoritos-mini">
                        ${cardsFav || '<p>Nenhum pet favoritado ainda.</p>'}
                    </div>
                </div>
            </div>
        `;
    },
    after_render: (navigateTo) => {
        document.querySelectorAll('.btn-ver-mini').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                navigateTo('detalhes', id);
            });
        });
    }
};