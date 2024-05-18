import { toArray } from "src/common/utils";

describe("toArray", () => {
    it("should return empty array when input is empty", () => {
        const result = toArray("");
        expect(result).toEqual([""]);
    });

    it("should return array when input is string", () => {
        const result = toArray("test");
        expect(result).toEqual(["test"]);
    });

    it("should return array when input is number", () => {
        const result = toArray(1);
        expect(result).toEqual([1]);
    });

    it("should return array when input is object", () => {
        const result = toArray({ test: "test" });
        expect(result).toEqual([{ test: "test" }]);
    });

    it("should return array when input is array", () => {
        const result = toArray(["test"]);
        expect(result).toEqual(["test"]);
    });

    it("should return array when input is null", () => {
        const result = toArray(null);
        expect(result).toEqual([]);
    });

    it("should return array when input is undefined", () => {
        const result = toArray(undefined);
        expect(result).toEqual([]);
    });

    it("should return array when input is boolean", () => {
        const result = toArray(true);
        expect(result).toEqual([true]);
    });
});
