$(document).ready(function () {
    $('form').on('submit', function (e) {

        e.preventDefault();
        const novaTarefa = $('#novaTarefa').val();
        const novoItem = $('<li style="border-bottom: 1px solid rgba(0,0,0,0.2)"></li>')



        $(`<a href="#">${novaTarefa}</a>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#novaTarefa').val(' ')
    })


    $('#listaTarefas').on('click', 'li', function () {

        $(this).find('a').toggleClass('riscado');
    });


    $('#btn-cancelar').on('click', function (e)
    {
        $('#listaTarefas').empty()
    })

});