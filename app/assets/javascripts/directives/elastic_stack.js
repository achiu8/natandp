var elasticStackDirective = function() {
  return {
    templateUrl: 'templates/directives/elastic_stack.html.erb',
    link: function(elem) {
      new ElastiStack( document.getElementById( 'elasticstack' ) );
    }
  }
}

natAndP.directive('elasticStack', elasticStackDirective);
