module.exports = {
  head: {
    title: 'Blender Skool Documentation',
  },
  logo: '/logo.png',
  themeColor: '#f76d18',
  darkTheme: {
    toggle: true
  },
  plugins: {
    callout: 'https://docbook.netlify.com/plugins/callout.js',
    youtube: 'https://docbook.netlify.com/plugins/youtube.js',
    icon: 'https://docbook.netlify.com/plugins/icons.js',
    btn: 'plugins/button'
  },
  navigation: [
    ['Go to main site', {
      link: 'http://www.blenderskool.cf/',
      newTab: true
    }]
  ],
  sidebar: [
    ['Overview', '/'],
    ['Enrich', {
      'Getting started': '/enrich/getting-started.html',
      'Using the add-on': '/enrich/using-the-addon.html',
      'Installing custom presets': '/enrich/installing-custom-presets.html',
      'Updating': '/enrich/updating.html'
    }],
    ['Kaleidoscope', {
      'Getting started': '/kaleidoscope/getting-started.html',
      'Spectrum interface': '/kaleidoscope/spectrum-interface.html',
      'Using Spectrum': '/kaleidoscope/using-spectrum.html',
      'Intensity node': '/kaleidoscope/intensity-node.html',
      'Setup syncing': '/kaleidoscope/setup-syncing.html',
      'User preferences': '/kaleidoscope/user-preferences.html'
    }],
    ['Photo Editing Nodes']
  ],
  footer: [
    ['<icon type="logo">facebook</icon>', {
      link: 'http://www.facebook.com/blenderskool',
      newTab: true
    }],
    ['<icon type="logo">twitter</icon>', {
      link: 'http://www.twitter.com/blenderskool',
      newTab: true
    }],
    ['<icon type="logo">youtube</icon>', {
      link: 'http://www.youtube.com/c/AkashHamirwasia1',
      newTab: true
    }],
    ['<icon type="logo">github</icon>', {
      link: 'http://www.github.com/blenderskool',
      newTab: true
    }],
    '© 2017-2018 | Blender Skool'
    // ['Designed by Akash Hamirwasia', 'https://github.com/blenderskool']
  ]
}