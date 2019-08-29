const expo = new Vue({
	el: '.demostracao',
	store,
	methods: {
		APLICA_IMAGEM(imagem){
			this.$store.commit('SET_IMAGEM_EX',imagem)
		},
		SELECIONA_TAMANHO(n){
			this.$store.commit('SET_PRODUTO_SIZE', n)
		},
		SELECIONA_COR(COR){
			this.$store.commit('SET_COR', COR)
		}
	},
	computed:{
		listaImagens(){
			return this.$store.state.imagens;
		},
		exibeImagem(){
			return this.$store.state.imagemAtual;
		},
		avalPro(){
			return this.$store.state.produto.estrelas;
		},
		sizePro(){
			return this.$store.state.produto.size;
		},
		tamanho_atual(){
			return this.$store.state.selectSize;
		},
		inColors(){
			return this.$store.state.produto.colors;
		},
		corSelecionada(){
			return this.$store.state.selectColor;
		}
	},
	mounted(){
		//recebe de API rest, como é exemplo está manual
		this.$store.commit('SET_IMAGEM',{code:1, src: 'img/produto/bolsa-festa-p-tiracolo-textura-glitter-ouro.jpg'})
		this.$store.commit('SET_IMAGEM',{code:2, src: 'img/produto/bolsa-festa-p-tiracolo-textura-glitter-prata.jpg'})
		this.$store.commit('SET_IMAGEM',{code:3, src: 'img/produto/bolsa-festa-p-tiracolo-textura-glitter-preto.jpg'})
		this.$store.commit('SET_IMAGEM_EX','img/produto/bolsa-festa-p-tiracolo-textura-glitter-preto.jpg')
	}
})