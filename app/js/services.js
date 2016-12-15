'use strict';

/* Services */
angular.module('productManagement.services', [])

    .factory('ProductService', ['$http', '$q', function($http, $q){

    //var REST_SERVICE_URI = 'http://localhost:8080/products';
   // var REST_SERVICE_URI = 'http://localhost:8000/app/stubs/products.json'
    var factory = {
        fetchAllProducts: fetchAllProducts,
        createProduct: createProduct,
        updateProduct:updateProduct,
        deleteProduct:deleteProduct
    };

    return factory;
    /* 
     @desc: Function to make $http get request for fetching all products
     @author: Vandanaa Swaminathan
    */
    function fetchAllProducts() {
        var deferred = $q.defer();
        $http.get('http://localhost:8080/products')
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching Products');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    /* 
     @desc: Function to make $http post request to create a new item
     @author: Vandanaa Swaminathan
    */
    function createProduct(product) {
        var deferred = $q.defer();
        $http.post('http://localhost:8080/products', product)
            .then(
            function (response) {
                deferred.resolve(response);
            },
            function(errResponse){
                console.error('Error while adding Product');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }


    function updateProduct(product, id) {
        var deferred = $q.defer();
        $http.put('http://localhost:8080/products/'+id+'', product)
            .then(
            function (response) {
                deferred.resolve(response);
            },
            function(errResponse){
                console.error('Error while updating Product');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    /* 
     @desc: Function to make $http DELETE request to delete an item
     @author: Vandanaa Swaminathan
    */
    function deleteProduct(id) {
        var deferred = $q.defer();
        $http.delete('http://localhost:8080/products/'+id+'')
            .then(
            function (response) {
                deferred.resolve(response);
            },
            function(errResponse){
                console.error('Error while deleting Product');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

}]);
