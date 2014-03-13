function AppViewModel() {
   	self = this;
   	self.folders = ['Home','Client','Log In']
    self.pagina = ko.observable('home');
    self.formu = function(){
        self.pagina('formulario');
    }
    self.logIn = function(){
    	self.pagina('login');
    }
    self.home = function(){
    	self.pagina('home');
    }
   self.listaCliente = function(){
      self.pagina('login');
    }
}
  $(document).ready(function() {
    ko.applyBindings(new AppViewModel());
});      


