    describe('Main page', function() {

        beforeEach(function() {
            browser().navigateTo('/');
        });

        it ('has two links', function () {
            expect(element('a').count()).toBe(2);
        });

        it ('contains button to personal Timer', function () {
            expect(element('a[href*=me]').count()).toBe(1);
        });

        it ('contains button to friends Timers', function () {
            expect(element('a[href*=friends]').count()).toBe(1);
        });
    });
