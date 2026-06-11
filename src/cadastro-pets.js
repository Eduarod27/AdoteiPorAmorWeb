
export const CadastroPetsScreen = {
    render: () => {
        return `
            <section class="pet-cadastro-section">
                <h2 class="section-title">Cadastrar Novo Pet</h2>

                <div class="pet-cadastro-card">
                    <form id="petFormCadastro">

                        <div class="form-group-pet">
                            <label for="petNome">Nome do Animal</label>
                            <input type="text" id="petNome" placeholder="Ex: Rex" required>
                        </div>

                        <div class="form-group-pet">
                            <label for="petEspecie">Espécie</label>
                            <select id="petEspecie">
                                <option value="Cão">Cão</option>
                                <option value="Gato">Gato</option>
                            </select>
                        </div>

                        <div class="form-group-pet">
                            <label for="petIdade">Idade</label>
                            <input type="text" id="petIdade" placeholder="Ex: 2 anos" required>
                        </div>

                        <div class="form-group-pet">
                            <label for="petPorte">Porte</label>
                            <select id="petPorte">
                                <option value="Pequeno">Pequeno</option>
                                <option value="Médio">Médio</option>
                                <option value="Grande">Grande</option>
                            </select>
                        </div>

                        <div class="form-group-pet">
                            <label for="petTemperamento">Temperamento</label>
                            <input type="text" id="petTemperamento" placeholder="Ex: Brincalhão, dócil..." required>
                        </div>

                        <button type="submit" class="btn-primary">
                            <i class="fa-solid fa-paw"></i> Concluir Cadastro do Pet
                        </button>

                    </form>
                </div>
            </section>
        `;
    },

    after_render: (navigateTo) => {
        const form = document.getElementById('petFormCadastro');

        form?.addEventListener('submit', (e) => {
            e.preventDefault();

            const novoAnimal = {
                id: Date.now(), 
                nome: document.getElementById('petNome').value,
                especie: document.getElementById('petEspecie').value,
                idade: document.getElementById('petIdade').value,
                porte: document.getElementById('petPorte').value,
                temperamento: document.getElementById('petTemperamento').value,
                icone: document.getElementById('petEspecie').value === 'Cão' ? 'fa-dog' : 'fa-cat'
            };

            let animais = JSON.parse(localStorage.getItem('animais')) || [];
            animais.push(novoAnimal);
            localStorage.setItem('animais', JSON.stringify(animais));

            alert(`O pet ${novoAnimal.nome} foi cadastrado com sucesso e está pronto para adoção! 🐶🐱`);
            navigateTo('listagem');
        });
    }
};