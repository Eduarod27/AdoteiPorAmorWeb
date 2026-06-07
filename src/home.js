import { animais } from './data.js';

export const HomeScreen = {
    render: () => {

        return `
            <section class="hero">
                <h1>Encontre seu novo melhor amigo 🐾</h1>

                <p>
                    Conectando corações e transformando vidas através da adoção responsável.
                </p>

                <button class="btn-primary" id="btnIrAdotar">
                    Ver Animais Disponíveis
                </button>
            </section>

            <section class="institucional-card">
                <h2>Quem Somos?</h2>

                <p>
                    A Adotei Por Amor é uma iniciativa voltada para conectar
                    animais que precisam de um lar com famílias dispostas a
                    oferecer amor, cuidado e responsabilidade.
                </p>

                <p>
                    Nosso objetivo é incentivar a adoção consciente e contribuir
                    para a redução do abandono de animais.
                </p>

                <p>
                    Nosso lema : NÃO COMPRE , ADOTE!
                </p>
            </section>

            <section class="institucional-card">
                <h2>Nossa Missão</h2>

                <div class="missao-grid">

                    <div class="missao-item">
                        <h3>🐾 Resgate</h3>
                        <p>Dar uma nova oportunidade aos animais.</p>
                    </div>

                    <div class="missao-item">
                        <h3>❤️ Adoção</h3>
                        <p>Conectar famílias e pets.</p>
                    </div>

                    <div class="missao-item">
                        <h3>🏠 Bem-estar</h3>
                        <p>Promover adoções responsáveis.</p>
                    </div>

                </div>
            </section>

            <section class="institucional-card">
                <h2>Nossos Números</h2>

                <div class="estatisticas">

                    <div class="estatistica">
                        <h3>${animais.length}</h3>
                        <p>Pets Disponíveis</p>
                    </div>

                    <div class="estatistica">
                        <h3>150+</h3>
                        <p>Adoções Realizadas</p>
                    </div>

                    <div class="estatistica">
                        <h3>100%</h3>
                        <p>Compromisso com os Animais</p>
                    </div>

                </div>
            </section>

            <section class="institucional-card">
                <h2>Contato e Localização</h2>

                <p><strong>📍 Endereço:</strong> Recife - PE</p>

                <p><strong>📞 Telefone:</strong> (81) 99999-9999</p>

                <p><strong>📍 Instagram:</strong> @adoteiporamor</p>

                <p><strong>✉ E-mail:</strong> contato@adoteiporamor.com</p>

                <button class="btn-primary" id="btnIrAdotar2">
                    Ver Animais Disponíveis
                </button>
            </section>
        `;
    },

    after_render: (navigateTo) => {

        document
            .getElementById('btnIrAdotar')
            ?.addEventListener('click', () => {
                navigateTo('listagem');
            });

        document
            .getElementById('btnIrAdotar2')
            ?.addEventListener('click', () => {
                navigateTo('listagem');
            });
    }
};