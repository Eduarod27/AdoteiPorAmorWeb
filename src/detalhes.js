import { getAnimais } from './data.js';

export const DetalhesScreen = {
    render: (petId) => {
        const animais = getAnimais();
        // O operador '==' previne quebras caso o ID venha como String ou Number
        const pet = animais.find(a => a.id == petId);
        
        if (!pet) {
            return `
                <button class="btn-secondary" id="btnVoltarLista">
                    <i class="fa-solid fa-arrow-left"></i> Voltar para Lista
                </button>
                <p style="padding: 20px; text-align: center;">Pet não encontrado.</p>
            `;
        }

        return `
            <button class="btn-secondary" id="btnVoltarLista">
                <i class="fa-solid fa-arrow-left"></i> Voltar para Lista
            </button>
            
            <div class="detalhes-container">
                <div class="detalhes-header">
                    <div class="img-placeholder-grande"><i class="fa-solid ${pet.icone || 'fa-paw'}"></i></div>
                    <div>
                        <h2>Nome: ${pet.nome}</h2>
                        <span class="tag-idade">${pet.idade}</span>
                    </div>
                </div>
                <div class="detalhes-info" style="margin-bottom: 30px;">
                    <p><strong>Espécie:</strong> ${pet.especie}</p>
                    <p><strong>Porte:</strong> ${pet.porte}</p>
                    <p><strong>Temperamento:</strong> ${pet.temperamento}</p>
                </div>
                
                <div class="pet-cadastro-card" style="margin: 0; max-width: 100%;">
                    <h3 class="section-title" style="margin-bottom: 20px;">Formulário de Interesse</h3>
                    
                    <form id="formAdocao" style="display: flex; flex-direction: column; gap: 20px;">
                        
                        <div class="form-group-pet">
                            <label for="nomeAdotante">Seu Nome completo:</label>
                            <input type="text" id="nomeAdotante" required placeholder="Ex: Luiz Eduardo">
                        </div>
                        
                        <div class="form-group-pet">
                            <label for="telAdotante">Seu Telefone:</label>
                            <input type="tel" id="telAdotante" required placeholder="(81) 99999-9999">
                        </div>
                        
                        <button type="submit" class="btn-primary" style="align-self: flex-start; margin-top: 10px;">
                            <i class="fa-solid fa-paper-plane"></i> Enviar Pedido de Adoção
                        </button>
                    </form>
                </div>
            </div>
        `;
    },
    
    after_render: (navigateTo, petId) => {
        const animais = getAnimais();
        const pet = animais.find(a => a.id == petId);

        document.getElementById('btnVoltarLista')?.addEventListener('click', () => {
            navigateTo('listagem');
        });

        if (pet) {
            document.getElementById('formAdocao')?.addEventListener('submit', (e) => {
                e.preventDefault();
                alert(`Sucesso! Seu pedido para adotar o(a) ${pet.nome} foi enviado.`);
                navigateTo('listagem');
            });
        }
    }
};