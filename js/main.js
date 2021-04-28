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
      elmFooter:[
        {
          address:'382NE 191st St #87394 Miami, FL33179-3899',
          phone: '+1(305)547-9909(9am - 5pm EST,Monday - Friday)',
          mail: 'support@maxcoach.com',
          social: [
            '<i class="fab fa-facebook-square"></i>',
            '<i class="fab fa-instagram"></i>',
            '<i class="fab fa-twitter"></i>',
            '<i class="fab fa-linkedin"></i>'
          ]
        }
      ],
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
