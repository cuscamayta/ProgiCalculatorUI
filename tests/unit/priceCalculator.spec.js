import { mount } from "@vue/test-utils";
import PriceCalculator from "@/views/PriceCalculator.vue";

describe("PriceCalculator.vue", () => {
  it("renders select with label and items", async () => {
    const wrapper = mount(PriceCalculator);
    await wrapper.vm.$nextTick();

    const select = wrapper.findComponent({ name: "v-select" });
    expect(select.exists()).toBe(true);
    expect(select.props("label")).toBe("Enter the price of the vehicle");
    expect(wrapper.vm.$data.items).toEqual(["Common", "Luxury"]);
  });

  it("renders buttons with correct text", async () => {
    const wrapper = mount(PriceCalculator);
    await wrapper.vm.$nextTick();

    const buttons = wrapper.findAll("button");

    expect(buttons.length).toBe(1);
    expect(buttons[0].text()).toBe("Save Quote");
  });
});
