import { getAnimais } from './data.js';

export const DetalhesScreen = {
    render: (petId) => {
        const animais = getAnimais();
        const pet = animais.find(a => a.id === parseInt(petId));
        if (!pet) return `<p>Pet não encontrado.</p>`;

        return `
            <button class="btn-secondary" id="btnVoltarLista">
                <i class="fa-solid fa-arrow-left"></i> Voltar para Lista
            </button>
            <div class="detalhes-container">
                <div class="detalhes-header">
                    <div class="img-placeholder-grande"><i class="fa-solid ${pet.icone}"></i></div>
                    <div>
                        <h2>Nome: ${pet.nome}</h2>
                        <span class="tag-idade">${pet.idade}</span>
                    </div>
                </div>
                <div class="detalhes-info">
                    <p><strong>Espécie:</strong> ${pet.especie}</p>
                    <p><strong>Porte:</strong> ${pet.porte}</p>
                    <p><strong>Temperamento:</strong> ${pet.temperamento}</p>
                </div>
                
                <form class="form-adocao" id="formAdocao">
                    <h3>Formulário de Interesse</h3>
                    <div class="form-group">
                        <label>Seu Nome completo:</label>
                        <input type="text" id="nomeAdotante" required placeholder="Ex: Luiz Eduardo">
                    </div>
                    <div class="form-group">
                        <label>Seu Telefone:</label>
                        <input type="tel" id="telAdotante" required placeholder="(81) 99999-9999">
                    </div>
                    <button type="submit" class="btn-primary">Enviar Pedido de Adoção</button>
                </form>
            </div>
        `;
    },
    after_render: (navigateTo, petId) => {
        const animais = getAnimais();

        const pet = animais.find(a => a.id === parseInt(petId)
);

        document.getElementById('btnVoltarLista').addEventListener('click', () => {
            navigateTo('listagem');
        });

        document.getElementById('formAdocao')?.addEventListener('submit', (e) => {
            e.preventDefault();
            alert(`Sucesso! Seu pedido para adotar o(a) ${pet.nome} foi enviado.`);
            navigateTo('listagem');
        });
    }
};