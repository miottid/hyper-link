<template>
  <a
    v-if="isExternal"
    :href="href"
    :target="target || '_blank'"
    :rel="rel || 'noopener'"
  >
    <slot />
  </a>

  <a v-else-if="containsHash || isJavaScript || isMailtoOrTel" :href="href">
    <slot />
  </a>

  <router-link v-else :to="href">
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
      default: '#'
    },
    target: {
      type: String,
      required: false,
      validator: function(value) {
        return ['_blank', '_self', '_parent', '_top'].indexOf(value) !== -1
      },
      default: () => null
    },
    rel: {
      type: String,
      required: false,
      default: () => null
    }
  },
  computed: {
    isExternal() {
      return this.href.startsWith('http')
    },
    containsHash() {
      return this.href.includes('#')
    },
    isJavaScript() {
      return this.href.startsWith('javascript:')
    },
    isMailtoOrTel() {
      return this.href.startsWith('mailto:') || this.href.startsWith('tel:')
    }
  }
}
</script>
