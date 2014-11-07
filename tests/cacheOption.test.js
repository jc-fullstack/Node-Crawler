'use strict';

var Crawler = require('../lib/crawler');
var expect = require('chai').expect;
var sinon = require('sinon');
var httpbinHost = 'localhost:8000';
var c;

describe('Cache features tests', function() {
    describe('Cache', function() {
        afterEach(function () {
            c = {};
        });
        it.skip('should crawl one url', function (done) {
            c = new Crawler({
                maxConnections: 1,
                cache: true,
                jquery: false,
                onDrain: function () {
                    expect(spy.calledOnce).to.be.true;
                    done();
                },
                callback: function (error, result) {
                    expect(error).to.be.null;
                    expect(result.statusCode).to.equal(200);
                }
            });
            var spy = sinon.spy(c, '_buildHttpRequest');
            c.queue(['http://'+httpbinHost, 'http://' + httpbinHost, 'http://' + httpbinHost, 'http://' + httpbinHost]);
        });
    });

    //describe('Skip Duplicate', function() {
    //    afterEach(function () {
    //        c = {};
    //    });
    //    it('should skip previous crawled urls', function (done) {});
    //    it('should not skip one single url', function (done) {});
    //});
});

