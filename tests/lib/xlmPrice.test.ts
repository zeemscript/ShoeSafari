import { describe, expect, it, vi } from "vitest";
import { fetchXlmSpotPrice, usdToXlmRawUnits } from "../../lib/xlmPrice";

describe("USD to native XLM quote conversion", () => {
  it("rounds upward at the seven decimal XLM boundary", () => {
    expect(usdToXlmRawUnits(1, 0.5)).toBe("20000000");
    expect(usdToXlmRawUnits(0.01, 0.5)).toBe("200000");
    expect(usdToXlmRawUnits(0.00000001, 1)).toBe("1");
  });

  it("rejects invalid totals, prices, and unsupported precision", () => {
    expect(() => usdToXlmRawUnits(0, 0.5)).toThrow();
    expect(() => usdToXlmRawUnits(1, 0)).toThrow();
    expect(() => usdToXlmRawUnits(1, Number.NaN)).toThrow();
    expect(() => usdToXlmRawUnits(1, 0.5, 19)).toThrow();
  });
});

describe("fresh XLM spot quotes", () => {
  it("rejects stale source timestamps", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ stellar: { usd: 0.5, last_updated_at: 100 } }),
      }),
    );

    await expect(fetchXlmSpotPrice(200_000)).rejects.toThrow(/stale/i);

    vi.unstubAllGlobals();
  });
});
