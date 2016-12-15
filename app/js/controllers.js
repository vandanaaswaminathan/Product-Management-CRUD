'use strict';

/* Controllers */

angular.module('productManagement.controllers', [])

  .controller('productAppCtrl',
    ['$scope', 'ProductService',
      function($scope,ProductService) {

    var self = this;
    self.item={id:null,productTitle:'',price:''};
    self.items=[];

    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;
          
    $scope.validateNumber = /^[1-9]\d*(\.\d+)?$/;
          
    $scope.itemsDisplayList ={};
          
    /* 
     @desc: Function to fetch all products by making a service call to fetchAllProducts API.
     @author: Vandanaa Swaminathan
    */
    $scope.fetchAllProducts = function(){
          ProductService.fetchAllProducts()
            .then(
            function(d) {
                self.items = d._embedded.products;

            },
            function(errResponse){
                console.error('Error while fetching Products');
            }
        );
    };
     /* 
     @desc: Function to add a new item  by making a service call to createProduct API.
     @author: Vandanaa Swaminathan
    */
    $scope.createProduct = function(item){
         ProductService.createProduct(item)
            .then(
             function(response){
                if(response.status == '200'){
                console.dir(response); 
                alert('Item added successfully!!');
                $scope.fetchAllProducts();  
                }
              
            },
            function(errResponse){
                console.error('Error while creating Item');
            }
        );
    };
    
    /* 
     @desc: Function to edit an item  by making a service call to updateProduct API.
     @author: Vandanaa Swaminathan
    */
    $scope.updateProduct = function (item, id){
        console.log('inside updateProduct')
        ProductService.updateProduct(item, id)
            .then(
            $scope.fetchAllProducts(),
            function(errResponse){
                console.error('Error while updating Item');
            }
        );
    }
    /* 
     @desc: Function to delete an item  by making a service call to deleteProduct API.
     @author: Vandanaa Swaminathan
    */
    $scope.deleteProduct = function (id){
        console.log('Inside delete PRoduct');
        ProductService.deleteProduct(id)
            .then(
            function(response){
               if(response.status == '200'){
                console.dir(response); 
                alert('Item added successfully!!');
                $scope.fetchAllProducts();  
                } 
            }, 
            function(errResponse){
                console.error('Error while deleting item');
            }
        );
    }
    /* 
     @desc: Function called when submit is pressed.
     @author: Vandanaa Swaminathan
    */
    function submit() {
        if(self.item.id===null){
            console.log('Saving New Item', self.item);
            $scope.createProduct(self.item);
        }else{
            $scope.updateProduct(self.item, self.item.id);
            console.log('item updated with id ', self.item.id);
        }
        reset();
    }

    function edit(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.items.length; i++){
            if(self.items[i].id === id) {
                self.item = angular.copy(self.items[i]);
                break;
            }
        }
    }

    function remove(id){
        console.log('id to be deleted', id);
        if(self.item.id === id) {//clean form if the user to be deleted is shown there.
            reset();
        }
        $scope.deleteProduct(id);
    }

    /* 
     @desc: Function reset the form values.
     @author: Vandanaa Swaminathan
    */
    function reset(){
        self.item={id:null,productTitle:'',price:''};
        $scope.myForm.$setPristine(); //reset Form
    }
    
    $scope.fetchAllProducts();

  }])
