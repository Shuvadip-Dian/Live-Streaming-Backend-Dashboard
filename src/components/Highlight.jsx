import React from 'react'
import Video from './Video'

export default function Highlight() {
  const data = [
    {"src":"https://www.dreamteamcric.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/India-vs-South-Africa-Final-T20-.jpg.webp",
      "title":"IND vs SA",
      "description":"Highlight of t20 world cup final"
    },
    {"src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQad3s5NRZg8Pm2ZFNnxfP3i9VSMRHiAPXg5nWN_x3nQM2nKu5w5sNS35RNOHdlQo_JrXs&usqp=CAU",
      "title":"IND vs AUS",
      "description":"jdjnslks"
    },
    {"src":"https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/06/ind-v-seng.png",
      "title":"IND vs ENG",
      "description":"jksjj,s"
    },
    {"src":"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202406/666517293f717-since-the-201213-season--these-two-teams-have-only-met-in-multi-nation-competitions-like-the-asia-c-094456154-16x9.jpg?size=948:533",
      "title":"IND vs PAK",
      "description":"jknjknk"
    },
    {"src":"https://resize.indiatv.in/resize/newbucket/1200_-/2022/11/india-vs-new-zealand-1668688413.jpg",
      "title":"IND vs NZ",
      "description":"sdcscs"
    }
  ]
  return (
    <div>
        <div className='h-10 w-full rounded-md flex justify-between items-center mt-4'>
            <h1 className='ml-4 text-lg font-bold text-white'>Highlight</h1>
            <div className='w-24 h-8 mr-4 rounded-md flex justify-center items-center bg-blue-600'>
              <button>Uploade</button>
            </div>
        </div>
        <div className='w-full h-auto grid md:grid-cols-2 lg:grid-cols-3  justify-center items-center'>
          {
            data.map(video=>{
              return (
                <Video key={video.title} video={video}/>
              )
              
            })
          }

        </div>
    </div>
  )
}
