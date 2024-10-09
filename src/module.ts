import { defineNuxtModule, createResolver, addComponentsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)

    addComponentsDir({ path: resolver.resolve('./runtime/components') })

    nuxt.options.alias['#my-module'] = resolver.resolve('runtime')
  },
})
