export const HomeScreen = {
    render: () => {
        return `
            <div class="hero">
                <h1>Encontre seu novo melhor amigo</h1>
                <p>Conectando corações e transformando vidas através da adoção responsável.</p>
                <button class="btn-primary" id="btnIrAdotar">Ver Animais Disponíveis</button>
            </div>
        `;
    },
    after_render: (navigateTo) => {
        document.getElementById('btnIrAdotar').addEventListener('click', () => {
            navigateTo('listagem');
        });
    }
};