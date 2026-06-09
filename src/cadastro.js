// src/cadastro.js

export const CadastroScreen = {
    render: () => {
        return `
            <section class="cadastro-section">
                <div class="cadastro-card">
                    <h2>Criar Conta</h2>
                    <p class="subtitle">Faça seu cadastro para ajudar ou adotar um amigo!</p>
                    
                    <form id="formCadastro">
                        <div class="form-group">
                            <label for="cadNome">Nome Completo</label>
                            <input type="text" id="cadNome" placeholder="Digite seu nome..." required>
                        </div>
                        
                        <div class="form-group">
                            <label for="cadTelefone">Telefone / WhatsApp</label>
                            <input type="tel" id="cadTelefone" placeholder="(81) 99999-9999" required>
                        </div>

                        <div class="form-group">
                            <label for="cadCidade">Cidade</label>
                            <input type="text" id="cadCidade" placeholder="Ex: Recife - PE" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="cadEmail">E-mail</label>
                            <input type="email" id="cadEmail" placeholder="seu@email.com" required>
                        </div>

                        <button type="submit" class="btn-primary">Finalizar Cadastro</button>
                    </form>
                </div>
            </section>
        `;
    },

    after_render: (navigateTo) => {
        const form = document.getElementById('formCadastro');
        
        form?.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita a página de recarregar
            
            // Criando o objeto com as informações capturadas corretamente pelos IDs atuais do HTML
            const usuarioLogado = {
                nome: document.getElementById('cadNome').value,
                telefone: document.getElementById('cadTelefone').value,
                cidade: document.getElementById('cadCidade').value,
                email: document.getElementById('cadEmail').value               
            };
            
            // Salvando exatamente a variável criada acima
            localStorage.setItem('usuario_logado', JSON.stringify(usuarioLogado));
            
            alert('Cadastro realizado com sucesso!');
            navigateTo('perfil'); // Redireciona para ver o perfil atualizado
        });
    }
};