
export const CadastroScreen = {
    render: () => {
        const usuarioExistente = JSON.parse(localStorage.getItem('usuario_logado')) || {};

        return `
            <section class="pet-cadastro-section">
                
                <div class="pet-cadastro-card">
                    <h2 class="section-title" style="border-bottom: 2px solid #e6f0fa; padding-bottom: 10px; margin-bottom: 20px;">Meu Cadastro</h2>
                    <p class="subtitle" style="color: #666; margin-bottom: 20px; font-size: 14px;">Mantenha seus dados atualizados para adotar ou cadastrar pets!</p>
                    
                    <form id="formCadastro" style="display: flex; flex-direction: column; gap: 20px;">
                        
                        <div class="form-group-pet">
                            <label for="cadNome">Nome Completo</label>
                            <input 
                                type="text" 
                                id="cadNome" 
                                placeholder="Digite seu nome..." 
                                value="${usuarioExistente.nome || ''}" 
                                required
                            >
                        </div>
                        
                        <div class="form-group-pet">
                            <label for="cadTelefone">Telefone / WhatsApp</label>
                            <input 
                                type="tel" 
                                id="cadTelefone" 
                                placeholder="(81) 99999-9999" 
                                value="${usuarioExistente.telefone || ''}" 
                                required
                            >
                        </div>

                        <div class="form-group-pet">
                            <label for="cadCidade">Cidade</label>
                            <input 
                                type="text" 
                                id="cadCidade" 
                                placeholder="Ex: Recife - PE" 
                                value="${usuarioExistente.cidade || ''}" 
                                required
                            >
                        </div>
                        
                        <div class="form-group-pet">
                            <label for="cadEmail">E-mail</label>
                            <input 
                                type="email" 
                                id="cadEmail" 
                                placeholder="seu@email.com" 
                                value="${usuarioExistente.email || ''}" 
                                required
                            >
                        </div>

                        <button type="submit" class="btn-primary" style="align-self: flex-start; margin-top: 10px;">
                            <i class="fa-solid fa-floppy-disk"></i> Salvar Alterações
                        </button>
                    </form>
                </div>
            </section>
        `;
    },

    after_render: (navigateTo) => {
        const form = document.getElementById('formCadastro');
        
        form?.addEventListener('submit', (event) => {
            event.preventDefault(); 
            
            const usuarioLogado = {
                nome: document.getElementById('cadNome').value.trim(),
                telefone: document.getElementById('cadTelefone').value.trim(),
                cidade: document.getElementById('cadCidade').value.trim(),
                email: document.getElementById('cadEmail').value.trim()               
            };
            
            localStorage.setItem('usuario_logado', JSON.stringify(usuarioLogado));
            
            alert('Cadastro atualizado com sucesso! 🎉');
            
            navigateTo('perfil');
        });
    }
};