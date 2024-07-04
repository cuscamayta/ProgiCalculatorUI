import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import PriceCalculator from "../../src/modules/priceCalculator/views/PriceCalculator.vue";

const localVue = createLocalVue();
localVue.use(Vuetify);

describe("PriceCalculator.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("renders select with label and items", async () => {
    const wrapper = mount(PriceCalculator, {
      localVue,
      vuetify,
    });
    await wrapper.vm.$nextTick();

    const select = wrapper.findComponent({ name: "v-select" });
    expect(select.exists()).toBe(true);
    expect(select.props("label")).toBe("Enter the price of the vehicle");
    expect(wrapper.vm.$data.items).toEqual(["Common", "Luxury"]);
  });
});
