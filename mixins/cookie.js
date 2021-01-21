export default {
  methods: {
    checkCookie() {
      const cCookie = this.$cookies.get('cookieConsent')

      if (cCookie !== 'ok') {
        const nuxt = this

        this.$toast.show(
          "Questo sito utilizza dei cookie per garantirti l'esperienza migliore",
          {
            position: 'bottom-right',
            duration: null,
            iconPack: 'fontawesome',
            icon: 'fa-cookie',
            theme: 'outline',
            singleton: true,
            action: [
              {
                text: 'OK',
                onClick: (e, toastObject) => {
                  nuxt.$cookies.set('cookieConsent', 'ok')
                  toastObject.goAway(0)
                },
              },
              {
                text: 'Leggi',
                onClick: () => {
                  nuxt.$router.push({ path: 'cookie' })
                },
              },
            ],
          }
        )
      }
    },
  },
}
