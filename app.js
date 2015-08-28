$(document).ready(function()
{
    var
        $msgErro     = $('#msgErro'),
        $cep         = $('#cep'),
        $logradouro  = $('#logradouro'),
        $numero      = $('#numero'),
        $complemento = $('#complemento'),
        $bairro      = $('#bairro'),
        $cidade      = $('#cidade'),
        $estado      = $('#estado');

    $cep.on('keyup', function(ev)
    {
        var objER = /^[0-9]{5}-[0-9]{3}$/,
        cep       = ev.currentTarget.value;

        $logradouro.val('');
        $complemento.val('');
        $bairro.val('');
        $cidade.val('');
        $estado.val('');

        if(objER.test(cep))
        {
            $.getJSON('http://viacep.com.br/ws/'+cep+'/json/', function(endereco)
            {
                if(!endereco.erro)
                {
                    $msgErro.addClass('hide');
                    $logradouro.val( endereco.logradouro );
                    $complemento.val( endereco.complemento );
                    $bairro.val( endereco.bairro );
                    $cidade.val( endereco.localidade );
                    $estado.val( endereco.uf );
                    $numero.focus();
                } else {
                    $msgErro.removeClass('hide');
                    $logradouro.focus();
                }
            });
        }
    });
});