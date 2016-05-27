describe('app', function() {
    it('return a Json object', function(done) {
        app.readTextFile(function(value){
            var lines;
            var station_id = [];
            lines = value.split('\n');
            lines.forEach(function (line, index) {
                var properties = line.split(' ');
                properties = properties.filter(Boolean)
                station_id.push(properties[0]);
            });

            return station_id.reduce(function(o, v, i) {
                o[i] = v;
                return o;
            }, {});
        });

        expect(app.jsonString).to.be.an('object');
        done();
    });
});
