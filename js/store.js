const store = new Vuex.Store({
	state: {
		imagens: [],
		imagemAtual: '',
		produto: {
			nome: 'BOLSA FESTA PEQUENA TIRACOLO COM TEXTURA DE GLITTER',
			promocao: '10% OFF',
			new: true,
			price: 481,
			old_price: 500,
			parcelas: [{parcela:'2x', valor: 240.50, sj: true}],
			estrelas: 3,
			colors: [
				{name: 'Preto', src: 'img/produto/bolsa-festa-p-tiracolo-textura-glitter-preto.jpg'},
				{name: 'Prata', src: 'img/produto/bolsa-festa-p-tiracolo-textura-glitter-prata.jpg'},
				{name: 'Ouro', src: 'img/produto/bolsa-festa-p-tiracolo-textura-glitter-ouro.jpg'},
			],
			size: {
				p: true,
				m: true,
				g: false,
				gg: false
			}
		},
		selectSize: 'p',
		selectColor: 'preto',
	},
	mutations: {
		SET_COR(state,valor){
			state.selectColor = valor;
		},
		SET_PRODUTO(state, payload){
			state.listProduct.push(payload)
		},
		SET_PRODUTO_SIZE(state,payload){
			state.selectSize = payload;
		},
		SET_IMAGEM(state, imagem){
			state.imagens.push(imagem)
		},
		SET_IMAGEM_EX(state, imagem){
			state.imagemAtual = imagem;
		}
	}
})