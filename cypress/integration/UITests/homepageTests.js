import Homepage from "../PageObjects/homepage";

const homepage = new Homepage();

describe('basic test', () => {
    beforeEach(() => {
        homepage.getHomepage();
    })

    it('Checks homepage header to confirm on homepage', () => {
        homepage.checkOnHomepage();
    })
})