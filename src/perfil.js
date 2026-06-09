import { getAnimais } from './data.js';

export const PerfilScreen = {
    render: () => {
        // 1. Busca os favoritos (seu código original)
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

        // 2. Busca os dados do usuário cadastrado no localStorage
        const usuario = JSON.parse(localStorage.getItem('usuario_logado'));

        // 3. Cria o HTML dos dados dinamicamente baseado se o usuário existe ou não
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

        // 4. Cria o botão de limpar favoritos dinamicamente (só aparece se houver favoritos)
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
        // Evento dos botões de ver favoritos (seu código original)
        document.querySelectorAll('.btn-ver-mini').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                navigateTo('detalhes', id);
            });
        });

        // Evento para o botão de "Cadastrar Agora" (caso não esteja logado)
        document.getElementById('btnIrParaCadastro')?.addEventListener('click', () => {
            navigateTo('cadastro');
        });

        // Evento para o botão de "Sair da Conta" (limpa o cadastro para testes)
        document.getElementById('btnLimparCadastro')?.addEventListener('click', () => {
            if (confirm('Deseja realmente sair e limpar os dados de cadastro?')) {
                localStorage.removeItem('usuario_logado');
                navigateTo('perfil'); // Recarrega a tela de perfil
            }
        });

        // ⏬ NOVO EVENTO: Remove a chave de favoritos e recarrega a tela ⏬
        document.getElementById('btnLimparFavoritos')?.addEventListener('click', () => {
            if (confirm('Tem certeza que deseja remover todos os pets dos seus favoritos?')) {
                localStorage.removeItem('adotei_favoritos');
                navigateTo('perfil'); // Recarrega o perfil para atualizar a listagem
            }
        });
    }
};