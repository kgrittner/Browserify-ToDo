var proxyquire = require('proxyquireify')(require);

describe("The taskModule", function () {
    describe("add function", function () {
        it("calls taskRenderer.renderNew", function () {

            //var tasks = require('../src/js/tasks');
            //var taskRenderer = require('../src/js/renderer/taskRenderer');

            var taskRenderer = {
                renderNew: function () {}
            };
            var mocks = {
                './renderer/taskRenderer': taskRenderer
            };
            var tasks = proxyquire('../src/js/tasks', mocks);





            spyOn(taskRenderer, "renderNew");

            tasks.add();

            expect(taskRenderer.renderNew).toHaveBeenCalled();
        });
    });
});
