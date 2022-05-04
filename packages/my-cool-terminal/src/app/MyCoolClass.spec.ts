import { MyCoolClass } from './MyCoolClass';

describe("MyCoolClass", () => {
    it("should contain abc", () => {
        const cool = new MyCoolClass(false);
        expect(cool.doSomething()).toContain("development")
    });

    it("should return xyz", () => {
        const cool = new MyCoolClass(true);
        expect(cool.doSomething()).toContain("production")
    });
});