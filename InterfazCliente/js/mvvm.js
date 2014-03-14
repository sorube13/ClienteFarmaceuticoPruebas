function AppViewModel() {
   	self = this;
   	self.folders = ['Home','Client','Log In']
    self.pagina = ko.observable('home');
    self.tsi = ko.observable(' ');
    self.formu = function(){
        self.pagina('formulario');
        self.tsi(' ');
    }
    self.logIn = function(){
    	self.pagina('login');
    }
    self.home = function(){
    	self.pagina('home');
    }
   self.listaCliente = function(){
      self.pagina('listaCliente');
    }
    self.resumen = function(){
      self.pagina('resumen');
    };
    self.prueba = function(){
      console.log("Resumen!");
    }

    var date = new Date();
    $('#today').html(date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear());



}
  $(document).ready(function() {
    ko.applyBindings(new AppViewModel());
});      


