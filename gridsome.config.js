const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/*.scss')
      ]
    })
}

module.exports = {
  siteName: 'Running Journal',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'journal/**/*.md',
        route: '/journal/:slug',
        typeName: 'Entry',
        remark: {

        }
      }
    },
    // {
    //   use: '~/source-csv-plugin',
    //   options: {}
    // }
    // {
    //   use: 'gridsome-source-google-sheets',
    //   options: {
    //     sheetId: '1RTnjZqn5TWF1dqzg3sDTuzJxlniQ5BR2H7zbQBH8hco',
    //     apiKey: 'AIzaSyCXljhRIORaItEkpYSAQCWRjjjHGAPIpQk',
    //     type: 'RunningMetric'
    //   }
    // }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  },
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
