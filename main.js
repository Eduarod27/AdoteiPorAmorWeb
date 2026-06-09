import './style.css';

import { HomeScreen } from './src/home.js';
import { ListagemScreen } from './src/listagem.js';
import { DetalhesScreen } from './src/detalhes.js';
import { PerfilScreen } from './src/perfil.js';
import { CadastroScreen } from './src/cadastro.js'; 
import { CadastroPetsScreen } from './src/cadastro-pets.js'; 

// Objeto de rotas mapeando todas as telas perfeitamente
const routes = {
    home: HomeScreen,
    listagem: ListagemScreen,
    detalhes: DetalhesScreen,
    cadastro: CadastroScreen,       
    cadastro_pet: CadastroPetsScreen, 
    perfil: PerfilScreen
};

// Tornando a função global para que as outras telas consigam navegar entre si
export function navigateTo(screenKey, idParam = null) {
    const screen = routes[screenKey];
    const appContainer = document.getElementById('app');

    if (screen) {
        appContainer.innerHTML = screen.render(idParam);
        
        if (screen.after_render) {
            screen.after_render(navigateTo, idParam);
        }
    } else {
        appContainer.innerHTML = '<h2>Página não encontrada</h2>';
    }
}

// Configuração dos cliques do menu superior baseado no index.html
document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.nav-links button[data-screen]');

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            menuButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const targetScreen = button.getAttribute('data-screen');
            navigateTo(targetScreen);
        });
    });

    // Inicia na Home por padrão
    navigateTo('home');
});