const { mockLogger } = require("./__mocks__");

const { traced, trace, cleanTrace, cleanTraced } = require("../src");

beforeEach(() => {
  jest.clearAllMocks();
});

const _mockResult = "sample-function-result";

describe("traced", () => {
  test("test normal function", () => {
    const res = traced(function testFunction() {
      return _mockResult;
    })();
    expect(res).toStrictEqual(_mockResult);
    expect(mockLogger.info).toBeCalledWith("testFunction execution initiated", {});
  });
  test("test async function", async () => {
    const res = await traced(async function testFunction() {
      return _mockResult;
    })();
    expect(res).toStrictEqual(_mockResult);
    expect(mockLogger.info).toBeCalledWith("testFunction execution initiated", {});
  });
  test("test arrow function", () => {
    const testArrowFunction = () => _mockResult;
    const res = traced(testArrowFunction)();
    expect(res).toStrictEqual(_mockResult);
    expect(mockLogger.info).toBeCalledWith("testArrowFunction execution initiated", {});
  });
  test("test unnamed function", () => {
    const res = traced(() => _mockResult)();
    expect(res).toStrictEqual(_mockResult);
    expect(mockLogger.info).toBeCalledWith("Unnamed function execution initiated", {});
  });
  test("test disabled tracing", () => {
    process.env.DISABLE_FUNCTION_TRACING = "true";
    const res = traced(() => _mockResult)();
    expect(res).toStrictEqual(_mockResult);
    expect(mockLogger.info).not.toBeCalled();
    delete process.env.DISABLE_FUNCTION_TRACING;
  });
  test("test cascading errors", () => {
    const tracedOuterFn = traced(function outerFn() {
      traced(function innerFn() {
        throw new Error("Failure in innner function");
      })();
    });
    try {
      tracedOuterFn();
    } catch (e) {
      expect(mockLogger.error).toBeCalledTimes(1);
    }
  });
});

describe("trace", () => {
  test("test trace execution", () => {
    const res = trace(function foo() {
      return _mockResult;
    });
    expect(res).toStrictEqual(_mockResult);
    expect(mockLogger.info).toBeCalledWith("foo execution initiated", {});
  });
});

describe("clean-trace", () => {
  test("test normal function", () => {
    const res = cleanTrace(function namedFunction() {
      return _mockResult;
    });
    expect(res).toStrictEqual(_mockResult);
    expect(mockLogger.info).toBeCalledWith("namedFunction execution initiated", {});
  });
  test("test unnamed function", () => {
    const res = cleanTrace(() => _mockResult);
    expect(res).toStrictEqual(_mockResult);
    expect(mockLogger.info).not.toBeCalled();
  });
});

describe("clean-traced", () => {
  test("test normal function", () => {
    const res = cleanTraced(function namedFunction() {
      return _mockResult;
    })();
    expect(res).toStrictEqual(_mockResult);
    expect(mockLogger.info).toBeCalledWith("namedFunction execution initiated", {});
  });
  test("test unnamed function", () => {
    const res = cleanTraced(() => _mockResult)();
    expect(res).toStrictEqual(_mockResult);
    expect(mockLogger.info).not.toBeCalled();
  });
});
