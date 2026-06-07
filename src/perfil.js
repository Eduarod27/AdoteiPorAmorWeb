import { animais } from './data.js';

export const PerfilScreen = {
    render: () => {
        let favoritos = JSON.parse(localStorage.getItem('adotei_favoritos')) || [];

        const perfilSalvo = JSON.parse(
            localStorage.getItem('adotei_perfil')
        ) || {
            nome: 'Luiz Eduardo L. C. V.',
            curso: 'Sistemas de Informação (3º Período)',
            instituicao: 'UNINASSAU'
        };

        const petsFavoritados = animais.filter(pet =>
            favoritos.includes(pet.id)
        );

        const cardsFav = petsFavoritados.map(pet => `
            <div class="card-pet-mini">
                <i class="fa-solid ${pet.icone}"></i>
                <div>
                    <h4>${pet.nome}</h4>
                    <button class="btn-ver-mini" data-id="${pet.id}">
                        Ver
                    </button>
                </div>
            </div>
        `).join('');

        return `
            <h2 class="section-title">Meu Perfil</h2>

            <div class="perfil-grid">

                <div class="perfil-card">
                    <h3>Editar Dados</h3>

                    <form id="formPerfil">

                        <div class="form-group">
                            <label>Nome</label>
                            <input
                                type="text"
                                id="nomePerfil"
                                value="${perfilSalvo.nome}"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label>Curso</label>
                            <input
                                type="text"
                                id="cursoPerfil"
                                value="${perfilSalvo.curso}"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label>Instituição</label>
                            <input
                                type="text"
                                id="instituicaoPerfil"
                                value="${perfilSalvo.instituicao}"
                                required
                            >
                        </div>

                        <button type="submit" class="btn-primary">
                            Salvar Perfil
                        </button>

                    </form>
                </div>

                <div class="perfil-card">
                    <h3>Meus Favoritos</h3>

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

        document
            .getElementById('formPerfil')
            ?.addEventListener('submit', (e) => {

                e.preventDefault();

                const perfil = {
                    nome: document.getElementById('nomePerfil').value,
                    curso: document.getElementById('cursoPerfil').value,
                    instituicao: document.getElementById('instituicaoPerfil').value
                };

                localStorage.setItem(
                    'adotei_perfil',
                    JSON.stringify(perfil)
                );

                alert('Perfil salvo com sucesso!');
            });
    }
};