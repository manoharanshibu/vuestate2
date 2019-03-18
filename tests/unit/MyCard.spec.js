import { mount } from '@vue/test-utils';
import MyCard from '@/components/CustomComponent.vue';

describe('CoolCard', () => {
  test('should render content correctly', () => {
    const wrapper = mount(MyCard);
    expect(wrapper.find('[data-test="cool-card-div"]').text()).toEqual(
      'hello I am a card :)...'
    );
  });
});