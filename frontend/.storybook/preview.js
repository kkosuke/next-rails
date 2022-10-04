export const parameters = {
  viewport:{
    viewports:{
      iphonex:{
        name: 'iPhone X',
        styles:{
          width : '375px',
          height: '812px'
        },
      },
      smallmobile:{
        name: 'small mobile',
        styles:{
          width : '320px',
          height: '568px'
        },
      },
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}