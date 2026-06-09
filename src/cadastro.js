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
                            <label for="nome">Nome Completo</label>
                            <input type="text" id="nome" placeholder="Digite seu nome..." required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <input type="email" id="email" placeholder="seu@email.com" required>
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
            alert('Cadastro clicado! Vamos programar o comportamento dele logo mais.');
            navigateTo('home'); // Após cadastrar, volta para a home
        });
    }
};