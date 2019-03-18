import Vue from 'vue';
import Stats from "@/components/Stats.vue";

// helper function that mounts and returns the rendered text
function getRenderedText(Component, propsData) {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor({ propsData: propsData }).$mount();
    return vm.$el.textContent.$refs
}

describe('Stats Comp', () => {
    it('has a created hook', () => {
        const vm = new Vue(Stats).$mount()
        // expect(typeof Stats.created).toBe('function');

        // expect(typeof Stats.data).toBe('function')
        const defaultData = Stats.data()
        expect(defaultData.name).toBe('Shibu');

        expect(vm.name).toBe('Shibu');
    })

    it('renders correctly with different props', () => {
        expect(getRenderedText(Stats, {
            msg: 'Hello'
        })).toBe('Hello')

        expect(getRenderedText(Stats, {
            msg: 'Bye'
        })).toBe('Bye')
    })
})
