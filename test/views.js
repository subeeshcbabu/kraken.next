'use strict';

var test = require('tape'),
    path = require('path'),
    kraken = require('../'),
    nconf = require('nconf'),
    express = require('express'),
    request = require('supertest');


test('views', function (t) {

    function reset() {
        nconf.stores  = {};
        nconf.sources = [];
    }


    t.test('renderer', function (t) {
        var basedir, app;

        t.on('end', reset);

        basedir = path.join(__dirname, 'fixtures', 'views');

        app = express();
        app.use(kraken(basedir));
        app.on('start', function () {
            var server;

            function done(err) {
                t.error(err);
                server.app.close(t.end.bind(t));
            }

            server = request(app).get('/').expect(200, 'Hello, world!', done);
        });

    });


    t.test('renderer with consolidate', function (t) {
        var options, app;

        t.on('end', reset);

        options = {
            basedir: path.join(__dirname, 'fixtures', 'views'),
            onconfig: function (settings, cb) {
                settings.set('express:view engine', 'ejs');
                cb(null, settings);
            }
        };

        app = express();
        app.use(kraken(options));
        app.on('start', function () {
            var server;

            function done(err) {
                t.error(err);
                server.app.close(t.end.bind(t));
            }

            server = request(app).get('/').expect(200, 'Hello, world!', done);
        });

    });


    t.test('alt renderer with consolidate', function (t) {
        var options, app;

        t.on('end', reset);

        options = {
            basedir: path.join(__dirname, 'fixtures', 'views'),
            onconfig: function (settings, cb) {
                settings.set('express:view engine', 'jade');
                cb(null, settings);
            }
        };

        app = express();
        app.use(kraken(options));
        app.on('start', function () {
            var server;

            function done(err) {
                t.error(err);
                server.app.close(t.end.bind(t));
            }

            server = request(app).get('/').expect(200, 'Hello, world!', done);
        });

    });


    t.test('configured renderer function', function (t) {
        var options, app;

        t.on('end', reset);

        options = {
            basedir: path.join(__dirname, 'fixtures', 'views'),
            onconfig: function (settings, cb) {
                settings.set('express:view engine', 'dust');
                cb(null, settings);
            }
        };

        app = express();
        app.use(kraken(options));
        app.on('start', function () {
            var server;

            function done(err) {
                t.error(err);
                server.app.close(t.end.bind(t));
            }

            server = request(app).get('/').expect(200, 'Hello, world!', done);
        });

    });


    t.test('configured renderer factory function', function (t) {
        var options, app;

        t.on('end', reset);

        options = {
            basedir: path.join(__dirname, 'fixtures', 'views'),
            onconfig: function (settings, cb) {
                settings.set('express:view engine', 'htmlx');
                cb(null, settings);
            }
        };

        app = express();
        app.use(kraken(options));
        app.on('start', function () {
            var server;

            function done(err) {
                t.error(err);
                server.app.close(t.end.bind(t));
            }

            server = request(app).get('/').expect(200, 'Hello, world!', done);
        });

    });


    t.test('configured renderer exported function', function (t) {
        var options, app;

        t.on('end', reset);

        options = {
            basedir: path.join(__dirname, 'fixtures', 'views'),
            onconfig: function (settings, cb) {
                settings.set('express:view engine', 'dustx');
                cb(null, settings);
            }
        };

        app = express();
        app.use(kraken(options));
        app.on('start', function () {
            var server;

            function done(err) {
                t.error(err);
                server.app.close(t.end.bind(t));
            }

            server = request(app).get('/').expect(200, 'Hello, world!', done);
        });

    });

});