describe('angularjs movie app', function() {

      it('should include input box for movie title and search button', function() {
          browser.get('http://localhost:8000');
          var inputBoxMovieTitle = element(by.css('#searchInput'));
          var searchButton = element(by.css('#searchButton'));

          expect( inputBoxMovieTitle.getTagName() ).toBe('input');
          expect( searchButton.getTagName() ).toBe('button');

      });



        it('should display movies of same title as input box', function() {
             browser.get('http://localhost:8000');
             var inputBoxMovieTitle = element(by.css('#searchInput'));
             inputBoxMovieTitle.sendKeys('Terminator');

              var searchButton = element(by.css('#searchButton'));
              searchButton.click();

              var movieList = element.all(by.repeater('movie in omdb.movies'));



        });




      it('should open a show page for clicked movie', function() {
           browser.get('http://localhost:8000');
           expect(true).toBe(false)
      });




      it('should have movie details and image on the show page', function(){
           browser.get('http://localhost:8000');
           expect(true).toBe(false)

      });


      it('should have the search input on every page', function(){
           browser.get('http://localhost:8000');
           expect(true).toBe(false)

      });





});
