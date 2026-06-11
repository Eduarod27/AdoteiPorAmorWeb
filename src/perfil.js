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

        const usuario = JSON.parse(localStorage.getItem('usuario_logado'));

        let dadosUsuarioHTML = '';
        if (usuario) {
            dadosUsuarioHTML = `
                <p><strong><i class="fa-solid fa-user"></i> Nome:</strong> ${usuario.nome}</p>
                <p><strong><i class="fa-solid fa-phone"></i> Contato:</strong> ${usuario.telefone}</p>
                <p><strong><i class="fa-solid fa-location-dot"></i> Localização:</strong> ${usuario.cidade}</p>
                <p><strong><i class="fa-solid fa-envelope"></i> E-mail:</strong> ${usuario.email}</p>
                <button id="btnLimparCadastro" class="btn-register" style="margin-top: 15px; padding: 8px 16px; font-size: 0.85rem;">
                    <i class="fa-solid fa-right-from-bracket"></i> Sair da Conta
                </button>
            `;
        } else {
            dadosUsuarioHTML = `
                <p style="color: #666; margin-bottom: 15px;">Nenhum usuário cadastrado neste navegador.</p>
                <button id="btnIrParaCadastro" class="btn-primary">
                    <i class="fa-solid fa-user-plus"></i> Cadastrar Agora
                </button>
            `;
        }

        let botaoLimparFavoritosHTML = '';
        if (favoritos.length > 0) {
            botaoLimparFavoritosHTML = `
                <button id="btnLimparFavoritos" class="btn-register" style="margin-top: 15px; padding: 8px 16px; font-size: 0.85rem; background-color: #e74c3c; color: white; border: none;">
                    <i class="fa-solid fa-trash-can"></i> Limpar Todos os Favoritos
                </button>
            `;
        }

        return `
            <h2 class="section-title">Meu Perfil & Configurações</h2>
            <div class="perfil-grid">
                
                <div class="perfil-card">
                    <h3>Dados do Usuário</h3>
                    <div class="user-info">
                        ${dadosUsuarioHTML}
                    </div>
                </div>
                
                <div class="perfil-card">
                    <h3>Meus Favoritos Salvos</h3>
                    <div class="grid-favoritos-mini">
                        ${cardsFav || '<p style="color: #666;">Nenhum pet favoritado ainda.</p>'}
                    </div>
                    ${botaoLimparFavoritosHTML}
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

        document.getElementById('btnIrParaCadastro')?.addEventListener('click', () => {
            navigateTo('cadastro');
        });

        document.getElementById('btnLimparCadastro')?.addEventListener('click', () => {
            if (confirm('Deseja realmente sair e limpar os dados de cadastro?')) {
                localStorage.removeItem('usuario_logado');
                navigateTo('perfil'); 
            }
        });

        document.getElementById('btnLimparFavoritos')?.addEventListener('click', () => {
            if (confirm('Tem certeza que deseja remover todos os pets dos seus favoritos?')) {
                localStorage.removeItem('adotei_favoritos');
                navigateTo('perfil'); 
            }
        });
    }
};