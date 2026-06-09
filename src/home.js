import { getAnimais } from './data.js';

export const HomeScreen = {
    render: () => {
        const animais = getAnimais(); 

        return `
            <section class="hero">
                <div class="hero-container">
                    <div class="hero-text">
                        <h1> Encontre seu novo melhor amigo</h1>
                        <p>Conectando corações e transformando vidas através da adoção responsável.</p>

                        <div class="hero-buttons">
                            <button class="btn-primary" id="btnIrAdotar">
                                <i class="fa-solid fa-paw"></i> Ver Animais Disponíveis
                            </button>    
                            <button class="btn-primary" id="btnCadastrarHero">
                                    <i class="fa-solid fa-user-plus"></i> Cadastre-se
                            </button>
                        </div>
                    </div>
                    <div class="hero-image">
                        <img src="https://www.bahianoticias.com.br/fotos/hall_colunas/1502/IMAGEM_COLUNA_9.jpg?checksum=1738078134" alt="Cachorro e Gato felizes">
                    </div>
                </div>
            </section>

            <section class="institucional-section">
                <div class="institucional-header">
                    <h2>Quem Somos?</h2>
                    <p class="subtitle">Conectando corações e transformando a realidade de animais abandonados.</p>
                </div>

                <div class="pillars-grid">
                    <div class="pillar-card" >
                        <div class="pillar-icon">
                            <i class="fa-solid fa-handshake-angle"></i>
                        </div>
                        <h3>Nossa Iniciativa</h3>
                        <p>Conectamos protetores de animais que precisam de um lar a famílias dispostas a oferecer amor, cuidado e responsabilidade</p>
                    </div>
                
                    <div class="pillar-card">
                        <div class="pillar-icon">
                            <i class="fa-solid fa-bullseye"></i>
                        </div>
                        <h3>Nosso Objetivo</h3>
                        <p>Incentivar fortemente a adoção consciente e combater na raiz os índices de abandono de animais na nossa região.</p>
                    </div>

                    <div class="pillar-card slogan-card">
                        <div class="pillar-icon pulse">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <h3>Nosso Lema</h3>
                        <span class="highlight-text">NÃO COMPRE, ADOTE!</span>
                        <p>Acreditamos que o amor verdadeiro não tem preço e que a vida de um pet não deve ser comercializada.</p>
                    </div>
                </div>
            </section>

            <section class="missao-section">
                <h2>Nossa Missão</h2>

                <div class="missao-grid">
                    <div class="missao-card">
                        <div class="missao-image-container">
                            <img src="https://tse3.mm.bing.net/th/id/OIP.gZxMuSEToZnxR7HK8--K8QHaER?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Resgate de animais">
                        </div>  
                        <div class="missao-content">       
                            <h3>Resgate</h3>
                            <p>Dar uma nova oportunidade aos animais de rua ou em situação de risco.</p>
                        </div>
                    </div>

                    <div class="missao-card">
                        <div class="missao-image-container">
                            <img src="https://tse1.mm.bing.net/th/id/OIP.XCh5cVMWEn-hcz4r4jzujAHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Cachorrinho fofo">
                        </div>
                        <div class="missao-content">
                            <h3>Adoção</h3>
                            <p>Conectar famílias amorosas e pets que buscam um lar definitivo.</p>
                        </div>
                    </div>

                    <div class="missao-card">
                        <div class="missao-image-container">
                            <img src="https://i.pinimg.com/736x/24/0c/83/240c83420a6d3ca789706bb7f3f53803.jpg" alt="Gatinho fofo">
                        </div>
                        <div class="missao-content">
                            <h3>Bem-estar</h3>
                            <p>Promover e orientar a comunidade sobre a importância da adoção responsável.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="estatisticas">
                <h2>Nossos Números</h2>

                <div class="estatisticas-grid">
                    <div class="estatistica-card">
                        <h3>${animais.length}</h3>
                        <p>Pets Disponíveis</p>
                    </div>
                    <div class="estatistica-card">
                        <h3>150+</h3>
                        <p>Adoções Realizadas</p>
                    </div>
                    <div class="estatistica-card">
                        <h3>100%</h3>
                        <p>Compromisso com os Animais</p>
                    </div>
                </div>
            </section>

            <section class="contato-card-novo">
                <h2>Contato e Localização</h2>

                <div class="contato-lista-simples">
                    <p><i class="fa-solid fa-location-dot"></i> <strong>Endereço:</strong> Recife - PE</p>
                    <p><i class="fa-solid fa-phone"></i> <strong>Telefone:</strong> (81) 99999-9999</p>
                    <p><i class="fa-brands fa-instagram"></i> <strong>Instagram:</strong> @adoteiporamor</p>
                    <p><i class="fa-solid fa-envelope"></i> <strong>E-mail:</strong> contato@adoteiporamor.com</p>
                </div>
                
                <button class="btn-primary" id="btnIrAdotar2">
                    <i class="fa-solid fa-paw"></i> Ver Animais Disponíveis
                </button>
            </section>
        `;
    },

    after_render: (navigateTo) => {
        document.getElementById('btnIrAdotar')?.addEventListener('click', () => {
            navigateTo('listagem');
        });

        document.getElementById('btnIrAdotar2')?.addEventListener('click', () => {
            navigateTo('listagem');
        });

        document.getElementById('btnCadastrarHero')?.addEventListener('click', () => {
            navigateTo('cadastro');
        });
    }
};