(function(document) {
    // Now a library like jQuery can add
    // listeners to the wrapped document
    $(document).on('click', function(e) {
      console.log('Clicked on', e.target);
    });
  })(wrap(document));