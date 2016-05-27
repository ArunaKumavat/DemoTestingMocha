
describe('app', function() {
    it('should make an ajax call', function(done) {
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
        expect($.ajax.calledOnce).to.be.true;
        done();
    });
});
