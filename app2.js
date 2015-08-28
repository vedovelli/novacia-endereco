new Vue({
    el: '#enderecoApp',

    data: {
        msgErro: '',
        endereco: {
            cep: '',
            logradouro: '',
            bairro: '',
            localidade: '',
            uf: '',
        }
    },

    methods: {
        buscar: function(ev)
        {
            var objER = /^[0-9]{5}-[0-9]{3}$/,
            cep       = ev.currentTarget.value;

            this.msgErro = '';

            if(objER.test(cep))
            {
                this.$http.get('http://viacep.com.br/ws/'+cep+'/json/', function(endereco){
                    if(!endereco.erro)
                    {
                        this.endereco = endereco;
                        jQuery(this.$$.numero).focus();
                    } else {
                        this.msgErro = 'Endereço não localizado. Favor entrar manualmente';
                        this.$$.logradouro.focus();
                    }
                });
            }
        }
    }
});