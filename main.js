import './style.css';

import { HomeScreen } from './src/home.js';
import { ListagemScreen } from './src/listagem.js';
import { DetalhesScreen } from './src/detalhes.js';
import { PerfilScreen } from './src/perfil.js';
import { CadastroScreen } from './src/cadastro.js';

const routes = {
    home: HomeScreen,
    listagem: ListagemScreen,
    detalhes: DetalhesScreen,
    perfil: PerfilScreen,
    cadastro: CadastroScreen
};

function navigateTo(screenKey, idParam = null) {
    const screen = routes[screenKey];
    const appContainer = document.getElementById('app');
    
    if (screen && appContainer) {
        appContainer.innerHTML = screen.render(idParam);
        screen.after_render(navigateTo, idParam);
        
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-screen') === screenKey);
        });
    }
}

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetScreen = btn.getAttribute('data-screen');
        navigateTo(targetScreen);
        
        document.getElementById('navLinks')?.classList.remove('active');
    });
});

document.getElementById('menuToggle')?.addEventListener('click', () => {
    document.getElementById('navLinks')?.classList.toggle('active');
});

window.addEventListener('DOMContentLoaded', () => navigateTo('home'));