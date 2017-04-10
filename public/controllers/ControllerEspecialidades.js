angular.module('app')
	.controller('listaDeEspecialidades', listaDeEspecialidades);

function listaDeEspecialidades($scope, $state, $location, $resource) {

$scope.selecionarTodos = function(lista) {
    lista.forEach(function(item) {
      if($scope.itemToggle) item.selected = true;
      else item.selected = false;
    });
  };

$scope.mudaStatus = function(item){
	var dataAssinatura ;
	if(!item.status) dataAssinatura = new Date;
	else dataAssinatura = item.atualizacao;
	item.status = !item.status;
	item.atualizacao = dataAssinatura;
}

}
