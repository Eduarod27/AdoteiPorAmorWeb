export const CadastroScreen = {

    render: () => {

        return `
            <h2 class="section-title">
                Cadastrar Animal
            </h2>

            <div class="perfil-card">

                <form id="formCadastro">

                    <div class="form-group">
                        <label>Nome do Animal</label>

                        <input
                            type="text"
                            id="nomeAnimal"
                            placeholder="Ex: Rex"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label>Espécie</label>

                        <select id="especieAnimal">

                            <option value="Cão">Cão</option>
                            <option value="Gato">Gato</option>

                        </select>
                    </div>

                    <div class="form-group">
                        <label>Idade</label>

                        <input
                            type="text"
                            id="idadeAnimal"
                            placeholder="Ex: 2 anos"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label>Porte</label>

                        <select id="porteAnimal">

                            <option value="Pequeno">Pequeno</option>
                            <option value="Médio">Médio</option>
                            <option value="Grande">Grande</option>

                        </select>
                    </div>

                    <div class="form-group">
                        <label>Temperamento</label>

                        <input
                            type="text"
                            id="temperamentoAnimal"
                            placeholder="Ex: Brincalhão"
                            required
                        >
                    </div>

                    <button type="submit" class="btn-primary">
                        Cadastrar Animal
                    </button>

                </form>

            </div>
        `;
    },

    after_render: (navigateTo) => {

        document
            .getElementById('formCadastro')
            ?.addEventListener('submit', (e) => {

                e.preventDefault();

                // Criar novo animal
                const novoAnimal = {
                    id: Date.now(),
                    nome: document.getElementById('nomeAnimal').value,
                    especie: document.getElementById('especieAnimal').value,
                    idade: document.getElementById('idadeAnimal').value,
                    porte: document.getElementById('porteAnimal').value,
                    temperamento: document.getElementById('temperamentoAnimal').value,
                    icone: document.getElementById('especieAnimal').value === 'Cão'
                        ? 'fa-dog'
                        : 'fa-cat'
                };

                // Buscar animais existentes
                let animais =
                    JSON.parse(localStorage.getItem('animais')) || [];

                // Adicionar novo
                animais.push(novoAnimal);

                // Salvar no localStorage
                localStorage.setItem('animais', JSON.stringify(animais));

                // Feedback
                alert(`Animal ${novoAnimal.nome} cadastrado com sucesso! 🐶🐱`);

                // Ir para listagem
                navigateTo('listagem');
            });
    }
};