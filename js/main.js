// console.log('ciao mondo');
function init() {
  new Vue({
    el:'#app',
    data:{
      elmNav:[
        {
          text: 'Home'
        },
        {
          text: 'Pages'
        },
        {
          text: 'Pages'
        },
        {
          text: 'Courses'
        },
        {
          text: 'Features'
        },
        {
          text: 'Blog'
        },
        {
          text: 'Shop'
        }
      ],
      elmFooter:
        {
          address:'382NE 191st St #87394 Miami, FL33179-3899',
          phone: '+1(305)547-9909(9am - 5pm EST,Monday - Friday)',
          mail: 'support@maxcoach.com',
          social: [
            'fab fa-facebook-square',
            'fab fa-instagram',
            'fab fa-twitter',
            'fab fa-linkedin'
          ]
        },

      Explore:[
        {
          ExTxt: 'Start here'
        },
        {
          ExTxt: 'Blog'
        },
        {
          ExTxt: 'About us'
        },
        {
          ExTxt: 'Success story'
        },
        {
          ExTxt: 'Courses'
        },
        {
          ExTxt: 'Contacts us'
        }
      ],
      Information:[
        {
          infoTxt: 'Membership'
        },
        {
          infoTxt: 'Puchase guide'
        },
        {
          infoTxt: 'Privacy policy'
        },
        {
          infoTxt: 'Terms of service'
        }
      ]
    },

  })
}

init();
