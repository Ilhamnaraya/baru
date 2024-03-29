module.exports = {
  content: ["./public/**/*.{html,js,jsx,ts,tsxjs}",
            "./cms/**/*.{html,js,jsx,ts,tsxjs}",   
            "./index.html",
            "./login.html",
            "./register.html",
        ],
  darkMode: "class",
  theme: {
      container: {
          center: true,
          padding: "16px",
      },
      extend: {
        backgroundImage: {
            'hero': "url('/img/logo-rapier-login-register.png')",
        },
        
          colors: {
              primary: "#039fc6",
              secondary: "#64748b",
              merah: "#FF1F1F",
              dark: "#07011A",
              abumuda: "#CECECE",
              birutua: "#0E0133",
              ungumuda: "#838FFF",
              white: "#ffffff",
              purple: "#3f3cbb",
              midnight: "#121063",
              metal: "#565584",
              tahiti: "#3ab7bf",
              silver: "#ecebff",
              bubblegum: "#ff77e9",
              bermuda: "#78dcca",
          },
          screens: {
              "2xl": "1320px",
          },
      },
  },
  plugins: [

  ],
};