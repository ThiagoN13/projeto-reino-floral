angular.module('app')
	.controller('listaDeRelatorios', listaDeRelatorios);

function listaDeRelatorios($scope, $state, $location, $resource) {
	$scope.lista = [{
					  "id": "1",
					  "titulo": "Caminhada",
					  "autor": "Thiago",
					  "instrutor": "Bruno",
					  "atualizacao": "10/21/21",
					  "status": true
	},{
					  "id": "1",
					  "titulo": "Caminhada",
					  "autor": "Filipe",
					  "instrutor": "Anderson",
					  "atualizacao": "10/21/21",
					  "status": false
	}];


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