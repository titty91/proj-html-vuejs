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
      ],
      descriptionElm:[
        {
          imgDesk:'img/lamp.png',
          title:'One to One',
          text:'Getting the necessary clarity about the current state to help you improve your game.'
        },
        {
          imgDesk:'img/position.png',
          title:'Anywhere',
          text:'Access to valuable and portable program which allow you to setup and live anywhere you want.'
        },
        {
          imgDesk:'img/time.png',
          title:'On Time',
          text: "Punctuality is our top priority because it's an essential criteria to assess a program quality."
        },
        {
          imgDesk:'img/pc.png',
          title:'Online Coures',
          text:'Online business coaching now offers you a very powerful way to empower your business into success.'
        },
        {
          imgDesk:'img/jacket.png',
          title:'Consulting',
          text:'You will get a clear sense of direction for your business, thorough assessment and faster results. '
        },
        {
          imgDesk:'img/gear.png',
          title:'Self Development',
          text:'Business Coaching often keep your focus and develop you both in a professional and personal way. '
        },
      ],
      dateCalendar:[
        {
          city: 'Texas, Us',
          event:'Storytelling Workshop',
          day: '22',
          month: 'apr'
        },
        {
          city: 'New York, Us',
          event:'Painting Art Contest 2020',
          day: '10',
          month: 'oct'
        },
        {
          city: 'Hamburg, Germany',
          event:'International Art Fair 2020',
          day: '23',
          month: 'nov'
        },
        {
          city: 'Illinois, Us',
          event:'Street Performance: Call for Artist',
          day: '15',
          month: 'dec'
        },
        {
          city: 'Illinois, Us',
          event:'Consumer Food Safety Education Conference',
          day: '22',
          month: 'jul'
        },
        {
          city: 'Dubai',
          event:'How meditation improve your mental health?',
          day: '12',
          month: 'agu'
        },
      ],
      caroselCard:[
        {
          imgCrsl: 'img/home-business-service-slide-01-480x298.jpg',
          title: 'Consultative Training',
          text: 'With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.'
        },
        {
          imgCrsl: 'img/home-business-service-slide-02-480x298.jpg',
          title: 'Real Deal Coaching',
          text: 'Brings an exceptionally powerful opportunity. Being able to accept, to work with that opportunity.'
        },
        {
          imgCrsl: 'img/home-business-service-slide-03-480x298.jpg',
          title: 'Advisor Training Program',
          text: 'Getting high quality, entrepreneur mindset driven online business coaching, is what is needed.'
        }
      ]
    },

  })
}

init();
