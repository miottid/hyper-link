import { mount } from '@vue/test-utils'
import HyperLink from '@/components/hyper-link.vue'

describe('<hyper-link>', () => {
  test('exists and is a Vue instance', () => {
    const wrapper = mount(HyperLink, {
      propsData: {
        href: '/foo'
      },
      stubs: ['router-link']
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('has correct href attribute', () => {
    const wrapper = mount(HyperLink, {
      propsData: {
        href: 'https://muxumuxu.com'
      },
      stubs: ['router-link']
    })
    expect(wrapper.attributes('href')).toBe('https://muxumuxu.com')
  })

  test('has target blank with external link', () => {
    const wrapper = mount(HyperLink, {
      propsData: {
        href: 'https://muxumuxu.com'
      },
      stubs: ['router-link']
    })
    expect(wrapper.attributes('target')).toBe('_blank')
  })

  test('has no target with relative link', () => {
    const wrapper = mount(HyperLink, {
      propsData: {
        href: '/relative/path'
      },
      stubs: ['router-link']
    })
    expect(wrapper.attributes('target')).toBe(undefined)
  })
})
