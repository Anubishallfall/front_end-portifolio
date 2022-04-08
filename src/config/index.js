class ConfiguracaoSistema {
    static get tela() {
        return {
            tamanho: Tela.tamanho
        }
    }
}

class Tela {
    static get tamanho() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

        }
    }
}

export default ConfiguracaoSistema;