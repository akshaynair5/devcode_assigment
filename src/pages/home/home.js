import './home.css'
import Navbar from '../../components/Navbar/navbar'
import { useContext, useEffect, useRef, useState } from 'react'
import { Authcontext } from '../../contextprovider'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home(){
    const {currentUser} = useContext(Authcontext)
    const [news,setNews] = useState([
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "notateslaapp.com",
            "title": "Tesla Model 3 RWD Will Now Be Eligible for Tax Credit Until April 18th",
            "description": "Tesla Model 3 RWD Will Now Be Eligible for Tax Credit Until April 18th Tesla's Model 3 Rear-Wheel Drive (RWD) variant will be eligible for the $7,500 Inflation Reduction Act (IRA) EV tax credit for a little longer than expected. The tax credit was initially e…",
            "url": "https://biztoc.com/x/c0cada1e1c48aedd",
            "urlToImage": "https://c.biztoc.com/p/c0cada1e1c48aedd/og.webp",
            "publishedAt": "2023-04-02T13:44:06Z",
            "content": "Tesla Model 3 RWD Will Now Be Eligible for Tax Credit Until April 18thTesla's Model 3 Rear-Wheel Drive (RWD) variant will be eligible for the $7,500 Inflation Reduction Act (IRA) EV tax credit for a … [+296 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "forbes.com",
            "title": "‘A Legitimate Cryptocurrency’ Dogecoin Price Suddenly Soars After Elon Musk Hits Back At $258 Billion Lawsuit",
            "description": "Elon Musk, the Tesla billionaire and Twitter owner, has asked a judge to throw out a $258 billion lawsuit accusing him of trying to pump the dogecoin price. Subscribe now to Forbes' CryptoAsset & Blockchain Advisor and successfully navigate the bitcoin and cr…",
            "url": "https://biztoc.com/x/1bf7de4241e939d2",
            "urlToImage": "https://c.biztoc.com/p/1bf7de4241e939d2/og.webp",
            "publishedAt": "2023-04-02T13:40:10Z",
            "content": "Elon Musk, the Tesla billionaire and Twitter owner, has asked a judge to throw out a $258 billion lawsuit accusing him of trying to pump the dogecoin price.Subscribe now to Forbes' CryptoAsset &amp; … [+307 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "thestreet.com",
            "title": "Elon Musk Makes a Bold Prediction About the Cybertruck",
            "description": "Tesla promised to start producing the pickup truck later this year, four years after the vehicle was unveiled. The message was delivered in the early morning. It is likely to reassure Tesla fans. The electric vehicle maker may well deliver on its promise to s…",
            "url": "https://biztoc.com/x/0ad3ad9622deb89b",
            "urlToImage": "https://c.biztoc.com/p/0ad3ad9622deb89b/og.webp",
            "publishedAt": "2023-04-02T13:32:06Z",
            "content": "Tesla promised to start producing the pickup truck later this year, four years after the vehicle was unveiled.The message was delivered in the early morning. It is likely to reassure Tesla fans. The … [+308 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.abc.es"
            },
            "author": "(abc)",
            "title": "Científicos descubren la causa de las anomalías en el campo magnético terrestre",
            "description": "Geofísicos de la Universidad de Leeds afirman haber descubierto cómo surgen las anomalías surgidas en el campo magnético terrestre , gracias a una investigación, publicada recientemente en la revista científica Nature Geoscience. Según han revelado los cientí…",
            "url": "https://www.abc.es/ciencia/cientificos-descubren-causa-anomalias-campo-magnetico-terrestre-20230402152431-nt.html",
            "urlToImage": "https://s3.abcstatics.com/abc/www/multimedia/ciencia/2023/04/02/tierra-campo-magnetico-U11818465582LzZ-1024x512@abc.jpg",
            "publishedAt": "2023-04-02T13:24:32Z",
            "content": "Geofísicos de la Universidad de Leeds afirman haber descubierto cómo surgen las anomalías surgidas en el campo magnético terrestre, gracias a una investigación, publicada recientemente en la revista … [+2534 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "thestreet.com",
            "title": "Musk and 'Big Short' Burry Agree on What's Killing San Francisco",
            "description": "The Tesla CEO and the legendary investor believe that the progressive city, which has seen a corporate exodus since the pandemic, is a victim of its progressive values. They are both among the most influential personalities on Twitter. One is the owner of the…",
            "url": "https://biztoc.com/x/8f799b68d4d24c0d",
            "urlToImage": "https://c.biztoc.com/p/8f799b68d4d24c0d/og.webp",
            "publishedAt": "2023-04-02T13:18:08Z",
            "content": "The Tesla CEO and the legendary investor believe that the progressive city, which has seen a corporate exodus since the pandemic, is a victim of its progressive values.They are both among the most in… [+320 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ambcrypto.com"
            },
            "author": "Suzuki Shillsalot",
            "title": "Dogecoin (DOGE) Price Prediction 2025-2030: DOGE sees 6% rise, extreme fear, and more",
            "description": "Disclaimer: The datasets shared in the following article have been compiled from a set of online resources and do not reflect AMBCrypto’s own research on the subject.   A few events over the last week helped Dogecoin (DOGE) rally, surging by 6% in value.  Two…",
            "url": "https://ambcrypto.com/dogecoin-doge-price-prediction-27/",
            "urlToImage": "https://statics.ambcrypto.com/wp-content/uploads/2023/04/doge-fi-AMBCrypto_A_group_of_friends_gathered_in_a_vibrant_and_bustling_98f377e0-b910-476a-9c6e-307c2c2ebf92-1000x600.png",
            "publishedAt": "2023-04-02T13:10:15Z",
            "content": "Disclaimer: The datasets shared in the following article have been compiled from a set of online resources and do not reflect AMBCryptos own research on the subject.  \r\nA few events over the last wee… [+17744 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Haber7.com"
            },
            "author": "Ekrem Öztürk",
            "title": "New York Times'a Twitter şoku... Elon Musk böyle ti'ye aldı!",
            "description": "Twitter'ın mavi tik hizmeti için sunulan yeni hizmetine ödeme yapmayacağını belirten New York Times'a cevap gecikmedi. Elon Musk 54.9 milyon takipçisi bulunan hesabın mavi tikini alaya alarak kaldırdığını belirtti.",
            "url": "https://www.haber7.com/teknoloji/haber/3314348-new-york-timesa-twitter-soku-elon-musk-boyle-tiye-aldi",
            "urlToImage": "https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2023/13/new_york_timesa_twitter_soku_elon_musk_boyle_tiye_aldi_1680440644_2729.jpg",
            "publishedAt": "2023-04-02T13:09:00Z",
            "content": "Tesla, SpaceX ve Twitter gibi irketlerin CEO'su olan Elon Musk, 54.9 milyon takipçisi bulunan New York Times gazetesinin Twitter hesabnn mavi tikini kaldrd. Elon Musk geçtiimiz günlerde Twitter için … [+1557 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Roger Bootle",
            "title": "Brussels’ war on AI is destructive and wrong",
            "description": "Last week a group of tech leaders, including Elon Musk, issued a plea for the development of artificial intelligence (AI) to be paused for six months while...",
            "url": "https://finance.yahoo.com/news/brussels-war-ai-destructive-wrong-130645725.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/3lHfr4zZd2yCVAdsAJlDjQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NTA-/https://media.zenfs.com/en/the_telegraph_258/cc333196dc95dab333151306347908de",
            "publishedAt": "2023-04-02T13:06:45Z",
            "content": "ChatGPT page of the OpenAI website - AP Photo/Richard Drew, File\r\nLast week a group of tech leaders, including Elon Musk, issued a plea for the development of artificial intelligence (AI) to be pause… [+5714 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "benzinga.com",
            "title": "Car Experts Say Lucid's Air Could One Day 'End The Tesla's Reign.' Here's Why",
            "description": "While Tesla Inc TSLA has set the standard for electric vehicles across the globe, car experts at Edmunds compared the company's Model S Plaid to fellow U.S. EV competitor Lucid Group Inc's LCID Air late last year — and the results are closer than you think. W…",
            "url": "https://biztoc.com/x/dbf9388eb3be9a7a",
            "urlToImage": "https://c.biztoc.com/p/dbf9388eb3be9a7a/og.webp",
            "publishedAt": "2023-04-02T13:02:13Z",
            "content": "While Tesla Inc TSLA has set the standard for electric vehicles across the globe, car experts at Edmunds compared the company's Model S Plaid to fellow U.S. EV competitor Lucid Group Inc's LCID Air l… [+313 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "wsj.com",
            "title": "Individual Investors Slow Stock Purchases, Leaving Markets Vulnerable",
            "description": "A plunge in the purchases of Tesla shares has underpinned the drop in individuals’ equity buying. Individual investors are losing their appetite for U.S. stocks, leaving equity markets without a dependable leg of support after a rocky first quarter. They boug…",
            "url": "https://biztoc.com/x/3115a5e972593769",
            "urlToImage": "https://c.biztoc.com/p/3115a5e972593769/og.webp",
            "publishedAt": "2023-04-02T13:02:06Z",
            "content": "A plunge in the purchases of Tesla shares has underpinned the drop in individuals equity buying.Individual investors are losing their appetite for U.S. stocks, leaving equity markets without a depend… [+248 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TVLine"
            },
            "author": "Robert Clarke-Chan",
            "title": "SNL Video: Michael Che Pulls Off One Mean April Fools' Day Prank — Watch",
            "description": "It seems like most of America has grown tired of April Fools’ Day. Once upon a time, you couldn’t scroll a social media feed without finding dozens of your friends pregnant, married or cast in the latest Star Wars film. Then the corporations got involved — Kr…",
            "url": "https://tvline.com/2023/04/02/snl-video-weekend-update-april-fools-day-michael-che/",
            "urlToImage": "https://tvline.com/wp-content/uploads/2023/04/snl-weekend-update.png?w=620",
            "publishedAt": "2023-04-02T13:00:03Z",
            "content": "It seems like most of America has grown tired of April Fools’ Day. Once upon a time, you couldn’t scroll a social media feed without finding dozens of your friends pregnant, married or cast in the la… [+2191 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Howard Mustoe",
            "title": "Home working deals blow to defence companies in race with Russia and China",
            "description": "The rise of home working has left defence companies unable to hire crucial talent as they attempt to counter Russia and China, one of the industry's largest ...",
            "url": "https://finance.yahoo.com/news/home-working-deals-blow-defence-130000328.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/_VPL962F5pFsi3Zmm6JyTg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NTA-/https://media.zenfs.com/en/the_telegraph_258/202e93834ec3fd9fbe2a9d77e68e4e09",
            "publishedAt": "2023-04-02T13:00:00Z",
            "content": "RAF Eurofighter Typhoons taxiing to the runway RAF Coningsby - Jon Hobley/MI News/NurPhoto via Getty Images\r\nThe rise of home working has left defence companies unable to hire crucial talent as they … [+7325 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "bitcoinist.com",
            "title": "Dogecoin: Elon Musk Seeks To Dismiss $258 Billion Lawsuit",
            "description": "Elon Musk, the self-acclaimed “Dogefather,” has asked a US Judge to dismiss a $258 billion lawsuit filed against him in 2022. The lawsuit accuses Musk of manipulating the price of Dogecoin in a Ponzi-like manner leading investors to lose money on their invest…",
            "url": "https://biztoc.com/x/ccc836c5aa7aafb8",
            "urlToImage": "https://c.biztoc.com/p/ccc836c5aa7aafb8/og.webp",
            "publishedAt": "2023-04-02T12:48:06Z",
            "content": "Elon Musk, the self-acclaimed Dogefather, has asked a US Judge to dismiss a $258 billion lawsuit filed against him in 2022. The lawsuit accuses Musk of manipulating the price of Dogecoin in a Ponzi-l… [+308 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "futurezone.at"
            },
            "author": "futurezone.at",
            "title": "Problem mit Bremse: Rückruf von Tesla Semi",
            "description": "Die Feststellbremse des LKW kann in bestimmten Situationen versagen, wie es heißt.",
            "url": "https://futurezone.at/produkte/tesla-semi-rueckruf-problem-mit-bremse/402387389",
            "urlToImage": "https://image.futurezone.at/images/facebook/7760243/46-191085652.jpg",
            "publishedAt": "2023-04-02T12:44:06Z",
            "content": "Die Feststellbremse des LKW kann in bestimmten Situationen versagen, wie es heißt."
        },
        {
            "source": {
                "id": null,
                "name": "Ambcrypto.com"
            },
            "author": "Suzuki Shillsalot",
            "title": "Bitcoin (BTC) Price Prediction 2025-2030: Will BTC succumb to bearish pressure",
            "description": "Disclaimer: The datasets shared in the following article have been compiled from a set of online resources and do not reflect AMBCrypto’s own research on the subject. As options worth billions of dollars expired on 31 March and some traders placed bearish wag…",
            "url": "https://ambcrypto.com/bitcoin-btc-price-prediction-27/",
            "urlToImage": "https://statics.ambcrypto.com/wp-content/uploads/2023/04/btc-fi-AMBCrypto_A_blacksmith_working_at_their_forge_hammering_away_at_f166837a-771f-4b44-a5e8-eb565ee76cbb-1000x600.png",
            "publishedAt": "2023-04-02T12:37:26Z",
            "content": "Disclaimer: The datasets shared in the following article have been compiled from a set of online resources and do not reflect AMBCryptos own research on the subject.\r\nAs options worth billions of dol… [+21120 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Donanimhaber.com"
            },
            "author": "Yusuf Akbaş",
            "title": "Elon Musk, Dogecoin davasını bitirmek istiyor",
            "description": "Dogecoin'i desteklediği ve manipülasyon yaptığı iddiasıyla Elon Musk'a dava açılmıştı. Elon Musk bu davanın düşürülmesini istiyor.",
            "url": "https://www.donanimhaber.com/elon-musk-dogecoin-davasini-bitirmek-istiyor--162198",
            "urlToImage": "https://www.donanimhaber.com/images/images/haber/162198/src_340x1912xelon-musk-dogecoin-davasini-bitirmek-istiyor.jpg",
            "publishedAt": "2023-04-02T12:30:45Z",
            "content": "a').click(); event.preventDefault();\"&gt;Tam Boyutta GörTesla CEOsu Elon Musk, bir dönemin en popüler kripto yatrmclarndan birisiydi. Musk, özellikle bulunduu her ortamda Dogecoini tantmasyla ön plan… [+1185 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "‘A Legitimate Cryptocurrency’—Dogecoin Price Suddenly Soars After Elon Musk Hits Back At $258 Billion Lawsuit",
            "description": "Elon Musk, the Tesla billionaire and Twitter owner, has asked a judge to throw out a $258 billion lawsuit accusing him of trying to pump the dogecoin price...",
            "url": "https://www.forbes.com/sites/digital-assets/2023/04/02/a-legitimate-cryptocurrency-dogecoin-price-suddenly-soars-after-elon-musk-hits-back-at-258-billion-lawsuit/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/60c64fa7ab58a662f3764dfa/0x0.jpg?format=jpg&width=1200",
            "publishedAt": "2023-04-02T12:30:26Z",
            "content": "Elon Musk, the Tesla billionaire and Twitter owner, has asked a judge to throw out a $258 billion lawsuit accusing him of trying to pump the dogecoin price.\r\nSubscribenow to Forbes' CryptoAsset &amp;… [+2752 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Carlos Prego",
            "title": "Estas empresas buscan ingenieros y desarrolladores (y ofrecen hasta 100.000 euros al año con teletrabajo)",
            "description": "Si bien ha perdido parte de la fuerza que ganó durante la pandemia y hay compañías tecnológicas relevantes, como Amazon, Twitter o Tesla, que han dado ya pasos o están a punto de hacerlo para alejarse del modelo, el teletrabajo sigue teniendo una huella relev…",
            "url": "https://www.xataka.com/empresas-y-economia/estas-empresas-buscan-ingenieros-desarrolladores-ofrecen-100-000-euros-al-ano-teletrabajo",
            "urlToImage": "https://i.blogs.es/24645f/thisisengineering-raeng-64yrpkiguae-unsplash-min/840_560.jpeg",
            "publishedAt": "2023-04-02T12:30:01Z",
            "content": "Si bien ha perdido parte de la fuerza que ganó durante la pandemia y hay compañías tecnológicas relevantes, como Amazon, Twitter o Tesla, que han dado ya pasos o están a punto de hacerlo para alejars… [+6656 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "u.today",
            "title": "Elon Musk Seeks Dismissal of Dogecoin (DOGE) Pyramid Scheme Accusations",
            "description": "Elon Musk is seeking to dismiss a massive $258 billion class-action lawsuit that accuses him, Tesla, and the Dogecoin Foundation of committing fraud by promoting the cryptocurrency on social media Elon Musk has filed a motion to dismiss a $258 billion class-a…",
            "url": "https://biztoc.com/x/179a417aef9d70be",
            "urlToImage": "https://c.biztoc.com/p/179a417aef9d70be/og.webp",
            "publishedAt": "2023-04-02T12:26:06Z",
            "content": "Elon Musk is seeking to dismiss a massive $258 billion class-action lawsuit that accuses him, Tesla, and the Dogecoin Foundation of committing fraud by promoting the cryptocurrency on social mediaElo… [+278 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Caradisiac.com"
            },
            "author": "Caradisiac.com",
            "title": "Un Tesla Cybertruck s’excite sur la route",
            "description": "Une version de pré-serie du Tesla Cybertruck a encore été filmée sur la route. Son conducteur fait de drôles de choses au volant du pick-up électrique au design singulier…",
            "url": "https://www.caradisiac.com/un-tesla-cybertruck-s-excite-sur-la-route-201644.htm",
            "urlToImage": "https://images.caradisiac.com/logos/6/4/6/8/276468/S8-un-tesla-cybertruck-s-excite-sur-la-route-201644.jpg",
            "publishedAt": "2023-04-02T12:25:24Z",
            "content": "Plus que quelques semaines à attendre avant de découvrir la version définitive du Tesla Cybetruck, ce pick-up électrique au design incroyablement osé que Tesla doit commencer à produire au cours de l… [+1335 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PCMag.com"
            },
            "author": "Marco Marcelline",
            "title": "Elon Musk Tweet Broke Federal Labor Laws, US Court Rules",
            "description": "The 5th Circuit US Court of Appeals ruled Musk had broken federal labor laws by tweeting that Tesla workers would lose stock trading options if they joined a union.\nA federal appeals court has ruled Elon Musk broke US labor laws by tweeting that Tesla workers…",
            "url": "https://me.pcmag.com/en/cars-auto/15888/elon-musk-tweet-broke-federal-labor-laws-us-court-rules",
            "urlToImage": "https://sm.pcmag.com/t/pcmag_me/news/e/elon-musk-/elon-musk-tweet-broke-federal-labor-laws-us-court-rules_uxdf.1200.png",
            "publishedAt": "2023-04-02T12:19:13Z",
            "content": "A federal appeals court has ruled Elon Musk broke US labor laws by tweeting that Tesla workers would lose stock trading options if they joined a union.\r\nThe ruling, by the Fifth Circuit US Court of A… [+2284 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PCMag.com"
            },
            "author": "Marco Marcelline",
            "title": "Elon Musk Tweet Broke Federal Labor Laws, US Court Rules",
            "description": "The 5th Circuit US Court of Appeals ruled Musk had broken federal labor laws by tweeting that Tesla workers would lose stock trading options if they joined a union.\nA federal appeals court has ruled Elon Musk broke US labor laws by tweeting that Tesla workers…",
            "url": "https://uk.pcmag.com/cars-auto/146247/elon-musk-tweet-broke-federal-labor-laws-us-court-rules",
            "urlToImage": "https://sm.pcmag.com/t/pcmag_uk/news/e/elon-musk-/elon-musk-tweet-broke-federal-labor-laws-us-court-rules_bfnc.1200.png",
            "publishedAt": "2023-04-02T12:19:13Z",
            "content": "A federal appeals court has ruled Elon Musk broke US labor laws by tweeting that Tesla workers would lose stock trading options if they joined a union.\r\nThe ruling, by the Fifth Circuit US Court of A… [+2284 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Everyeye.it"
            },
            "author": "Brian Arnoldi",
            "title": "Guai legali per Elon Musk: avrebbe violato la legge sul lavoro degli Stati Uniti",
            "description": "La Corte d'Appello del Quinto Distretto degli Stati Uniti ha giudicato Elon Musk colpevole di aver violato le leggi nazionali in materia di lavoro.Mentre Elon Musk lavora a Snailbrook, la città-azienda per i lavoratori di Tesla, SpaceX e The Boring Company, s…",
            "url": "https://tech.everyeye.it/notizie/guai-legali-elon-musk-violato-legge-lavoro-uniti-642995.html",
            "urlToImage": "https://images.everyeye.it/img-notizie/guai-legali-elon-musk-violato-legge-lavoro-uniti-v3-642995.jpg",
            "publishedAt": "2023-04-02T12:17:00Z",
            "content": "Mentre Elon Musk lavora a Snailbrook, la città-azienda per i lavoratori di Tesla, SpaceX e The Boring Company, sembra che il miliardario sudafricano sia (nuovamente) finito nei guai con la giustizia.… [+2578 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "U.Today"
            },
            "author": "U.Today",
            "title": "Elon Musk Seeks Dismissal of Dogecoin (DOGE) Pyramid Scheme Accusations",
            "description": "Elon Musk is seeking to dismiss a massive $258 billion class-action lawsuit that accuses him, Tesla, and the Dogecoin Foundation of committing fraud by promoting the cryptocurrency on social media",
            "url": "https://u.today/elon-musk-seeks-dismissal-of-dogecoin-doge-pyramid-scheme-accusations",
            "urlToImage": "https://u.today/sites/default/files/styles/twitter/public/2023-04/32917_0.jpeg",
            "publishedAt": "2023-04-02T12:12:09Z",
            "content": "Elon Musk has filed a motion to dismiss a $258 billion class-action lawsuit accusing him of running a Dogecoin pyramid scheme.\r\nThe lawsuit alleges that Musk, Tesla, and the Dogecoin Foundation commi… [+1224 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "U.Today"
            },
            "author": "U.Today",
            "title": "Elon Musk Seeks Dismissal of Dogecoin (DOGE) Pyramid Scheme Accusations",
            "description": "Elon Musk is seeking to dismiss a massive $258 billion class-action lawsuit that accuses him, Tesla, and the Dogecoin Foundation of committing fraud by promoting the cryptocurrency on social media",
            "url": "https://u.today/elon-musk-seeks-dismissal-of-dogecoin-doge-pyramid-scheme-accusations-1",
            "urlToImage": "https://u.today/sites/default/files/styles/twitter/public/2023-04/32918.jpg",
            "publishedAt": "2023-04-02T12:12:09Z",
            "content": "Elon Musk has filed a motion to dismiss a $258 billion class-action lawsuit accusing him of running a Dogecoin pyramid scheme.\r\nThe lawsuit alleges that Musk, Tesla, and the Dogecoin Foundation commi… [+1224 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "wsj.com",
            "title": "Individual Investors Slow Stock Purchases, Leaving Markets Vulnerable",
            "description": "A plunge in the purchases of Tesla shares has underpinned the drop in individuals’ equity buying. Individual investors are losing their appetite for U.S. stocks, leaving equity markets without a dependable leg of support after a rocky first quarter. They boug…",
            "url": "https://biztoc.com/x/417ca04cfaf80119",
            "urlToImage": "https://c.biztoc.com/p/417ca04cfaf80119/og.webp",
            "publishedAt": "2023-04-02T12:08:08Z",
            "content": "A plunge in the purchases of Tesla shares has underpinned the drop in individuals equity buying.Individual investors are losing their appetite for U.S. stocks, leaving equity markets without a depend… [+248 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Frandroid"
            },
            "author": "Bob Jouy",
            "title": "Pourquoi les Tesla resteront les meilleures voitures électriques pour les longs trajets pendant encore quelques années",
            "description": "Voyager en voiture électrique n'est pas toujours un casse-tête. Avec une Tesla, cela peut d'ailleurs être facile grâce aux Superchargeurs et au planificateur d'itinéraire embarqué. Et si l'on en croit les dernières annonces, les Tesla sont bien parties pour r…",
            "url": "https://www.frandroid.com/marques/tesla/1639353_pourquoi-les-tesla-resteront-les-meilleures-voitures-electriques-pour-les-longs-trajets-pendant-encore-quelques-annees",
            "urlToImage": "https://images.frandroid.com/wp-content/uploads/2022/08/0x0-supercharger-10.jpg",
            "publishedAt": "2023-04-02T12:01:18Z",
            "content": "Voyager en voiture électrique n'est pas toujours un casse-tête. Avec une Tesla, cela peut d'ailleurs être facile grâce aux Superchargeurs et au planificateur d'itinéraire embarqué. Et si l'on en croi… [+10426 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Simon Hill",
            "title": "Zendure Superbase V6400 Review: Ultimate Modular Home Power Station",
            "description": "This expandable, modular power station can help you go off-grid and stay powered up during outages.",
            "url": "https://www.wired.com/review/zendure-superbase-v6400/",
            "urlToImage": "https://media.wired.com/photos/642721df88d6bb728e8506e4/191:100/w_1280,c_limit/Zendure-Superbase-v6400-Gear.jpg",
            "publishedAt": "2023-04-02T12:00:00Z",
            "content": "Zendure mentions support for Amazon Alexa and Google Home, enabling you to issue voice commands to your Superbase V6400. I only got the option to link Alexa in the Zendure app, and I needed some help… [+2917 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Autoblog"
            },
            "author": "Engadget",
            "title": "Uber adds 14 new cities to its EV rideshare service",
            "description": "Filed under:\n Green,Electric\n Continue reading Uber adds 14 new cities to its EV rideshare service\nUber adds 14 new cities to its EV rideshare service originally appeared on Autoblog on Sun, 2 Apr 2023 08:00:00 EDT. Please see our terms for use of feeds.\nPerm…",
            "url": "https://www.autoblog.com/2023/04/02/uber-ev-ridesharing-comfort-electric/",
            "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/crop/1744x981+0+111/resize/800x450!/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2023/03/31135328/Screenshot-2023-03-31-at-1.52.55-PM.png",
            "publishedAt": "2023-04-02T12:00:00Z",
            "content": "Uber announced that its adding 14 new markets to Comfort Electric, its EV rideshare service. The program allows you to hail electric vehicles like the Tesla Model 3, Ford Mustang Mach-E and Polestar … [+1439 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Portfolio.hu"
            },
            "author": "Portfolio.hu",
            "title": "A világ leggazdagabb emberei: itt a lista, elképesztő számokat mutat",
            "description": "Az elmúlt hónapokban is több változás történt a világ leggazdagabb embereit felsorakoztató listán; mutatjuk, hogyan áll jelenleg, ki a leggazdagabb ember a világon, ki a top 10 leggazdagabb ember a világon, továbbá kik próbálnak a top tíz leggazdagabb ember k…",
            "url": "https://www.portfolio.hu/gazdasag/20230402/a-vilag-leggazdagabb-emberei-itt-a-lista-elkepeszto-szamokat-mutat-606650",
            "urlToImage": "https://pcdn.hu/articles/images-xl/a/_/v/a-vila1-592944.jpg",
            "publishedAt": "2023-04-02T12:00:00Z",
            "content": "A Forbes 2022-ben 2668-ra tette a milliárdosok számát a világon, akik jelents szerepet játszanak a világgazdaság, a politika és a filantrópia terén - írta az Investopedia.\r\nAz alábbi listán szerepl s… [+12065 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Megacurioso.com.br"
            },
            "author": "Julio Cezar de Araujo",
            "title": "Mike Marcum: o homem que desapareceu após criar uma máquina do tempo",
            "description": "A primeira vez que alguém ouviu o nome Mike Marcum foi em meados de 1996, quando o radialista Art Bell, apresentador do Coast to Coast Radio AM, dos Estados Unidos, introduziu o jovem na transmissão diária para falar sobre seus experimentos ousados com viagem…",
            "url": "https://www.megacurioso.com.br//estilo-de-vida/124722-mike-marcum-o-homem-que-desapareceu-apos-criar-uma-maquina-do-tempo.htm",
            "urlToImage": "https://mega.ibxk.com.br/2023/03/28/28113607475128.jpg?ims=600x",
            "publishedAt": "2023-04-02T12:00:00Z",
            "content": "A primeira vez que alguém ouviu o nome Mike Marcum foi em meados de 1996, quando o radialista Art Bell, apresentador do Coast to Coast Radio AM, dos Estados Unidos, introduziu o jovem na transmissão … [+3736 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Researchbuzz.me"
            },
            "author": "ResearchBuzz",
            "title": "Early Baseball Publications, NYC Child Care, Google Bard, More: Sunday ResearchBuzz, April 2, 2023",
            "description": "NEW RESOURCES Library of Congress: Baseball Opening Day, and the Library Adds MLB History Online. “To celebrate the start of the 2023 season, the Library is pleased to announce a new digital […]",
            "url": "https://researchbuzz.me/2023/04/02/early-baseball-publications-nyc-child-care-google-bard-more-sunday-researchbuzz-april-2-2023/",
            "urlToImage": "https://s0.wp.com/i/blank.jpg",
            "publishedAt": "2023-04-02T11:59:22Z",
            "content": "NEW RESOURCES \r\nLibrary of Congress: Baseball Opening Day, and the Library Adds MLB History Online. “To celebrate the start of the 2023 season, the Library is pleased to announce a new digital collec… [+4741 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sg.hu"
            },
            "author": null,
            "title": "Az Apple valódi alternatívája akar lenni a Nothing",
            "description": "A cégre a vásárlóknak és a vetélytársaknak is egyre inkább oda kell figyelniük.",
            "url": "https://sg.hu/cikkek/it-tech/153416/az-apple-valodi-alternativaja-akar-lenni-a-nothing",
            "urlToImage": "http://sg.hu/https://media.sg.hu/kep/2023_04/0402not1.jpg",
            "publishedAt": "2023-04-02T11:46:34Z",
            "content": "A cégre a vásárlóknak és a vetélytársaknak is egyre inkább oda kell figyelniük.A Carl Pei, a OnePlus társalapítója által 2021 januárjában létrehozott Nothing 2021 márciusában jelentette be az els ter… [+6566 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "yahoo.com",
            "title": "America's Best Housing Markets For Growth & Stability",
            "description": "Gone are the days of a sub-3% mortgage, commonplace during the housing market boom of the COVID-19 pandemic. Mortgage rates have steadily increased since the Federal Reserve started hiking interest rates in March 2022 to combat inflation. As a result, home pr…",
            "url": "https://biztoc.com/x/b2c2d27268b9b831",
            "urlToImage": "https://c.biztoc.com/p/b2c2d27268b9b831/og.webp",
            "publishedAt": "2023-04-02T11:46:04Z",
            "content": "Gone are the days of a sub-3% mortgage, commonplace during the housing market boom of the COVID-19 pandemic. Mortgage rates have steadily increased since the Federal Reserve started hiking interest r… [+291 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "3dnews.ru"
            },
            "author": null,
            "title": "Суд подтвердил, что Илон Маск нарушил закон, написав твит со скрытой угрозой участникам профсоюза",
            "description": "Апелляционный суд пятого округа США принял сторону Национального совета по трудовым отношениям (NLRB), оставив в силе его решение, согласно которому твит Илона Маска (Elon Musk) содержал угрозу работникам в отношении предоставления компенсаций. Источник изобр…",
            "url": "https://3dnews.ru/1084409/publikatsiya-1084409",
            "urlToImage": "https://3dnews.ru/assets/external/illustrations/2023/04/02/1084409/sm.1.800.jpg",
            "publishedAt": "2023-04-02T11:39:00Z",
            "content": "(NLRB), , (Elon Musk) .\r\n: Adrees Latif /Reuters\r\n2018 Twitter . « Tesla . , , — . — ?».\r\n NLRB, 2021 , . Tesla , , , NLRB , .\r\n, « NLRB , ».\r\n , , NLRB (Richard Ortiz), Tesla . NLRB, ."
        },
        {
            "source": {
                "id": null,
                "name": "Leblogauto.com"
            },
            "author": "Nicolas Anderbegani",
            "title": "Hiperon Fosslin, un gros SUV venu de Malaisie",
            "description": "L’électrification permet aux start-up automobiles de se mutliplier comme des petits pains et à certains pays d’émerger sur la scène automobile mondiale, aux côtés des grands pays automobiles producteurs occidentaux et asiatiques traditionnels.",
            "url": "https://www.leblogauto.com/actualite/hiperon-fosslin--un-gros-suv-venu-de-malaisie-93893",
            "urlToImage": "https://medias.leblogauto.com/20/2023/04/photo_article/93893/175976/1200-L-hiperon-fosslin-un-gros-suv-venu-de-malaisie.jpg",
            "publishedAt": "2023-04-02T11:30:00Z",
            "content": "Un SUV aux racines mondialisées\r\nC'est ainsi que la startup automobile malaisienne Hiperon Motors – à ne pas confondre avec la société californienne Hyperion – a présenté les premiers rendus d'un SUV… [+2983 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "bitcoinist.com",
            "title": "Dogecoin: Elon Musk Seeks To Dismiss $258 Billion Lawsuit",
            "description": "Elon Musk, the self-acclaimed “Dogefather,” has asked a US Judge to dismiss a $258 billion lawsuit filed against him in 2022. The lawsuit accuses Musk of manipulating the price of Dogecoin in a Ponzi-like manner leading investors to lose money on their invest…",
            "url": "https://biztoc.com/x/7f685d66022cc3ae",
            "urlToImage": "https://c.biztoc.com/p/7f685d66022cc3ae/og.webp",
            "publishedAt": "2023-04-02T11:26:05Z",
            "content": "Elon Musk, the self-acclaimed Dogefather, has asked a US Judge to dismiss a $258 billion lawsuit filed against him in 2022. The lawsuit accuses Musk of manipulating the price of Dogecoin in a Ponzi-l… [+311 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Knowyourmeme.com"
            },
            "author": "Reddit Moments",
            "title": "Starter Packs | 041.jpg",
            "description": "Auto\r\nWeek\r\nBakawh\r\nSPORTS\r\nINGERS\r\n500\r\nThe Dutch Chav Starter Pack\r\nFIFA\r\nHOE\r\nTIMIEK IS TESLA NOG?\r\nMay die or\r\nkill in a car\r\naccident he\r\ncaused\r\nClassics\r\nKLEINE AUTOS\r\nSHOTL SCHOLNEN\r\nPSV\r\nWA\r\nSURSING\r\nrtL7///\r\nNot bad, but\r\nCasily\r\nmanipulated\r\nand\r\ni…",
            "url": "https://knowyourmeme.com/photos/2562880-starter-packs",
            "urlToImage": "https://i.kym-cdn.com/photos/images/facebook/002/562/880/041.jpg",
            "publishedAt": "2023-04-02T11:25:29Z",
            "content": "PROTIP:\r\nPress the ← and → keys to navigate the gallery,\r\n'g'\r\nto view the gallery, or\r\n'r'\r\nto view a random image."
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "yahoo.com",
            "title": "Elon Musk seeks to end $258 billion Dogecoin lawsuit",
            "description": "FILE PHOTO: FILE PHOTO: SpaceX owner and Tesla CEO Elon Musk speaks during a conversation with legendary game designer Todd Howard at the E3 gaming convention in Los Angeles NEW YORK (Reuters) - Elon Musk asked a U.S. judge on Friday to throw out a $258 billi…",
            "url": "https://biztoc.com/x/ab515ddaccb48996",
            "urlToImage": "https://c.biztoc.com/p/ab515ddaccb48996/og.webp",
            "publishedAt": "2023-04-02T11:24:05Z",
            "content": "FILE PHOTO: FILE PHOTO: SpaceX owner and Tesla CEO Elon Musk speaks during a conversation with legendary game designer Todd Howard at the E3 gaming convention in Los AngelesNEW YORK (Reuters) - Elon … [+298 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ilgiornale.it"
            },
            "author": "redazione@ilgiornale-web.it (Tommaso Giacomelli)",
            "title": "Tesla Model Y la più venduta. I dati sul mercato auto in Europa a febbraio",
            "description": "In Europa, nel mese di febbraio, Tesla Model Y è stata l'auto più venduta nel mercato in assoluto, mentre cresce la presenza delle vetture BEV",
            "url": "https://www.ilgiornale.it/news/automotive/mercato-auto-crescita-europa-febbraio-2023-2133886.html",
            "urlToImage": "https://img.ilgcdn.com/sites/default/files/styles/social/public/foto/2023/04/02/1680434127-tesla-model-y-40149-suv-5-porte-new-tesla-model-y.jpg?_=1680434127",
            "publishedAt": "2023-04-02T11:18:23Z",
            "content": "A febbraio il numero di nuove immatricolazioni di autovetture ha totalizzato poco più di 900.000 unità in Europa, con un aumento del 12% rispetto a Febbraio 2022. Contando i primi due mesi si raggiun… [+2916 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Grace Kay",
            "title": "Elon Musk isn't the only billionaire to try and build his own town. From Bill Gates to Peter Thiel, here's a list of the super rich who have attempted to build utopias.",
            "description": "Over the years, billionaires and top executives have poured millions into building their own kingdoms — from Larry Ellison to Peter Thiel.",
            "url": "https://www.businessinsider.com/billionaires-built-towns-islands-elon-musk-larry-ellison-peter-thiel-2023-4",
            "urlToImage": "https://i.insider.com/6426e153b643e80019dfa731?width=1200&format=jpeg",
            "publishedAt": "2023-04-02T11:16:09Z",
            "content": "Larry Ellison and Elon MuskGetty\r\n<ul>\n<li>Over the years, billionaires and executives have poured millions into building their own utopias.</li>\n<li>Earlier this month, The Wall Street Journal repor… [+11885 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bitcoinist"
            },
            "author": "Olowoporoku Adeniyi",
            "title": "Dogecoin: Elon Musk Seeks To Dismiss $258 Billion Lawsuit",
            "description": "Elon Musk, the self-acclaimed “Dogefather,” has asked a US Judge to dismiss a $258 billion lawsuit filed against him in 2022. The lawsuit accuses Musk of manipulating the price of Dogecoin in a Ponzi-like manner leading investors to lose money on their invest…",
            "url": "https://bitcoinist.com/dogecoin-elon-musk-seeks-to-dismiss-258-billion-lawsuit/",
            "urlToImage": "https://bitcoinist.com/wp-content/uploads/2023/04/Dogecoin-Elon-Musk.jpeg",
            "publishedAt": "2023-04-02T11:13:17Z",
            "content": "Elon Musk, the self-acclaimed “Dogefather,” has asked a US Judge to dismiss a $258 billion lawsuit filed against him in 2022. The lawsuit accuses Musk of manipulating the price of Dogecoin in a Ponzi… [+2878 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Giga"
            },
            "author": "Felix Gräber",
            "title": "Bittere Prognose für E-Autos: VW wird zum Nachzügler",
            "description": "Geht es um E-Autos, hat Tesla die Nase weltweit vorn. Während VW und Co. eigentlich immer weiter aufholen, kommt aus China aber richtig starke Konkurrenz. Gerade für die Wolfsburger könnten die China-E-Autos zum ernsthaften Problem werden.",
            "url": "https://www.giga.de/news/bittere-prognose-fuer-e-autos-vw-wird-zum-nachzuegler/",
            "urlToImage": "https://crops.giga.de/aa/21/f1/e5089ba478b487350f97dad1b2_YyAyMzY1eDEyMzYrNzUrOTACcmUgMTIwMCA2MjcDYTFlOGE4ODU5YWI=.jpg",
            "publishedAt": "2023-04-02T11:06:16Z",
            "content": "Geht es um E-Autos, hat Tesla die Nase weltweit vorn. Während VW und Co. eigentlich immer weiter aufholen, kommt aus China aber richtig starke Konkurrenz. Gerade für die Wolfsburger könnten die China… [+2577 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "u.today",
            "title": "Might Move Higher by 20% if This Occurs: Details",
            "description": "Dogecoin, the eighth largest cryptocurrency, is currently up 8.65% in the last 24 hours at $0.083. The cryptocurrency is likewise up 11.96% in the last seven days. Dogecoin has steadily climbed higher since hitting lows of $0.062 on March 10. Although it cons…",
            "url": "https://biztoc.com/x/606d74862db41ba6",
            "urlToImage": "https://c.biztoc.com/p/606d74862db41ba6/og.webp",
            "publishedAt": "2023-04-02T11:02:05Z",
            "content": "Dogecoin, the eighth largest cryptocurrency, is currently up 8.65% in the last 24 hours at $0.083. The cryptocurrency is likewise up 11.96% in the last seven days.Dogecoin has steadily climbed higher… [+272 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CleanTechnica"
            },
            "author": "David Waterworth",
            "title": "BrewDog — Electric Vehicle Oasis",
            "description": "Nestled under the giant Gateway Bridge in Brisbane, the BrewDog craft brewery is an oasis for electric vehicles. BrewDog aims to be a good corporate citizen with its “Make Earth Great Again” campaign. Solar panels have already been installed on the Brisbane b…",
            "url": "https://cleantechnica.com/2023/04/02/brewdog-electric-vehicle-oasis/",
            "urlToImage": "http://cleantechnica.com/files/2023/03/Tesla-EV-Hot-Wheels-Matchbox-toy-car-collection-e1680496623678.jpeg",
            "publishedAt": "2023-04-02T11:00:41Z",
            "content": "Nestled under the giant Gateway Bridge in Brisbane, the BrewDog craft brewery is an oasis for electric vehicles. BrewDog aims to be a good corporate citizen with its “Make Earth Great Again” campaign… [+6476 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Abertoatedemadrugada.com"
            },
            "author": "Carlos Martins",
            "title": "GM abandona CarPlay e muda para Android Auto",
            "description": "A GM vai abandonar o CarPlay da Apple nos seus automóveis, optando pelo CarPlay da Google pelos piores motivos.",
            "url": "https://abertoatedemadrugada.com/2023/04/gm-abandona-carplay-e-muda-para-android.html",
            "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFFJ7D7rErjUkr3GBY4DBSrH3AINleMlpMwu6ssXRF4ffazadxdTe_MTISd2aGlvniSvs9AGJ0zJqL-6pmW67tC8SHdWgRnu6MGbwtUSqZqsej9U6OEuj1RV2wC0pY9oHvYacgLdqEZsXYv9GaRzfs9zxzck2kExwMbnBB_HqBdhZ0IyIdVuqSgtI1eA/w1200-h630-p-k-no-nu/carplay.jpg",
            "publishedAt": "2023-04-02T11:00:00Z",
            "content": "A GM vai abandonar o CarPlay da Apple nos seus automóveis, optando pelo CarPlay da Google pelos piores motivos.\n\n\nOs fabricantes automóveis têm olhado com grande inveja para o lucro fácil das comissõ… [+1403 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "thestreet.com",
            "title": "Elon Musk Launches an Attack on the New York Times, and Here's Why",
            "description": "It's not the first time Musk has complained. Elon Musk has a history of criticizing the New York Times. The Twitter and Tesla (TSLA) - Get Free Report owner continued his attacks on the newspaper April 1. DON'T MISS: Elon Musk Changes a Big Twitter Move After…",
            "url": "https://biztoc.com/x/6336dbc5c3dc4607",
            "urlToImage": "https://c.biztoc.com/p/6336dbc5c3dc4607/og.webp",
            "publishedAt": "2023-04-02T10:58:08Z",
            "content": "It's not the first time Musk has complained.Elon Musk has a history of criticizing the New York Times.The Twitter and Tesla (TSLA) - Get Free Report owner continued his attacks on the newspaper April… [+301 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "U.Today"
            },
            "author": "U.Today",
            "title": "Dogecoin (DOGE) Might Move Higher by 20% if This Occurs: Details",
            "description": "Validation of interesting chart pattern might push Dogecoin (DOGE) up 20%",
            "url": "https://u.today/dogecoin-doge-might-move-higher-by-20-if-this-occurs-details",
            "urlToImage": "https://u.today/sites/default/files/styles/twitter/public/2023-04/32925.jpg",
            "publishedAt": "2023-04-02T10:54:00Z",
            "content": "Disclaimer: The opinion expressed here is not investment advice it is provided for informational purposes only. It does not necessarily reflect the opinion of U.Today. Every investment and all tradin… [+2264 chars]"
        },
        {
            "source": {
                "id": "der-tagesspiegel",
                "name": "Der Tagesspiegel"
            },
            "author": "Steffen Stierle, Oliver Voß",
            "title": "Überregulierung versus Unwirksamkeit: Wie soll Europa mit Künstlicher Intelligenz umgehen?",
            "description": "Künstliche Intelligenz entwickelt sich rasant – zu rasant? Forderungen nach einer KI-Entwicklungspause werden lauter. Die EU versucht bereits seit Jahren, eine Regelung zu finden.",
            "url": "https://www.tagesspiegel.de/politik/uberregulierung-versus-unwirksamkeit-wie-soll-europa-mit-kunstlicher-intelligenz-umgehen-9601610.html",
            "urlToImage": "https://www.tagesspiegel.de/images/humanoid-robot-chalk-board-writing-teacher-humanoid-robot-in-the-classroom-with-a-green-chalk-board-3d-illustration/alternates/BASE_16_9_W1400/humanoid-robot-chalk-board-writing-teacher-humanoid-robot-in-the-classroom-with-a-green-chalk-board-3d-illustration.jpeg",
            "publishedAt": "2023-04-02T10:47:28Z",
            "content": "Die Entwicklung im Bereich Künstliche Intelligenz (KI) ist atemberaubend. Seitdem ChatGPT Millionen Nutzer verblüfft, kommen fast täglich neue Tools auf den Markt. Microsoft und Google haben ein rege… [+5525 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tech Xplore"
            },
            "author": "Marc Levy",
            "title": "'War of the states': EV, chip makers lavished with subsidies",
            "description": "States are doling out more cash than ever to lure multibillion-dollar microchip, electric vehicle and battery factories, inspiring ever-more competition as they dig deeper into their pockets to attract big employers and capitalize on a wave of huge new projec…",
            "url": "https://techxplore.com/news/2023-04-war-states-ev-chip-makers.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/war-of-the-states-ev-c.jpg",
            "publishedAt": "2023-04-02T10:40:01Z",
            "content": "States are doling out more cash than ever to lure multibillion-dollar microchip, electric vehicle and battery factories, inspiring ever-more competition as they dig deeper into their pockets to attra… [+7545 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ixbt.com"
            },
            "author": "Prolus",
            "title": "Volkswagen против Tesla: конкуренция обостряется",
            "description": "Автопроизводители Европы понимают угрозу, которую несёт им компания Tesla и её будущая Model 2. Илон Маск подтвердил, что американская группа готовит новый автомобиль, который будет относительно доступным и подходящим для европейского рынка. Volkswagen и друг…",
            "url": "https://www.ixbt.com/live/car/volkswagen-protiv-tesla-konkurenciya-obostryaetsya.html",
            "urlToImage": "https://img.ixbt.site/live/topics/preview/00/04/08/37/acf2f50281.jpg",
            "publishedAt": "2023-04-02T10:40:00Z",
            "content": ", Tesla Model 2. , , . Volkswagen .\r\n 2022 , , Tesla Model 2. , Model 3, 25 000 . , (.. ), , , Gigafactory . , , , , , .\r\n2023 Volkswagen ID2.all, , 25 000 . MEB Entry, , Q2 e-tron Audi, , . Audi , 2… [+138 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "businessinsider.com",
            "title": "Commercial real estate could be where the next economic shock comes from. Here's what Elon Musk, Bill Ackman, and 5 others have predicted",
            "description": "(Photo by Fatih AktaÅ/Anadolu Agency via Getty Images) Fears are on the rise that commercial real-estate could be where the next economic shock could emanate from. A combination of high interest rates, work-from-home trends and tighter credit conditions could…",
            "url": "https://biztoc.com/x/84126639043c8b7a",
            "urlToImage": "https://c.biztoc.com/p/84126639043c8b7a/og.webp",
            "publishedAt": "2023-04-02T10:28:05Z",
            "content": "(Photo by Fatih AktaÅ/Anadolu Agency via Getty Images)Fears are on the rise that commercial real-estate could be where the next economic shock could emanate from.A combination of high interest rates,… [+303 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Clare Duffy",
            "title": "Welcome to the era of viral AI generated 'news' images | CNN Business",
            "description": "Pope Francis wearing a massive, white puffer coat. Elon Musk walking hand-in-hand with rival GM CEO Mary Barra. Former President Donald Trump being detained by police in dramatic fashion.",
            "url": "https://www.cnn.com/2023/04/02/tech/ai-generated-images-social-media/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230217154928-internet-users-stock.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-04-02T10:21:11Z",
            "content": "Pope Franciswearing a massive, white puffer coat. Elon Musk walking hand-in-hand with rival GM CEO Mary Barra. Former President Donald Trump being detained by police in dramatic fashion. \r\nNone of th… [+7263 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "wsj.com",
            "title": "Individual Investors Slow Stock Purchases, Leaving Markets Vulnerable",
            "description": "A plunge in the purchases of Tesla shares has underpinned the drop in individuals’ equity buying. Individual investors are losing their appetite for U.S. stocks, leaving equity markets without a dependable leg of support after a rocky first quarter. They boug…",
            "url": "https://biztoc.com/x/03e111410b475e6f",
            "urlToImage": "https://c.biztoc.com/p/03e111410b475e6f/og.webp",
            "publishedAt": "2023-04-02T10:08:06Z",
            "content": "A plunge in the purchases of Tesla shares has underpinned the drop in individuals equity buying.Individual investors are losing their appetite for U.S. stocks, leaving equity markets without a depend… [+248 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Zahra Tayeb",
            "title": "Commercial real estate could be where the next economic shock comes from. Here's what Elon Musk, Bill Ackman, and 5 others have predicted.",
            "description": "Higher interest rates, tighter lending and work-from-home trends spell trouble for the commercial real-estate market. Here's what 7 top voices have to say.",
            "url": "https://markets.businessinsider.com/news/stocks/commercial-real-estate-market-musk-ackman-chanos-lending-interest-rates-2023-3",
            "urlToImage": "https://i.insider.com/64258a47ed593e00183f39d6?width=1200&format=jpeg",
            "publishedAt": "2023-04-02T10:00:16Z",
            "content": "(Photo by Fatih AktaÅ/Anadolu Agency via Getty Images)\r\n<ul>\n<li>Fears are on the rise that commercial real-estate could be where the next economic shock could  emanate from.</li>\n<li>A combination o… [+4969 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Abertoatedemadrugada.com"
            },
            "author": "Carlos Martins",
            "title": "Tesla baralha fãs com pintura do Cybertruck",
            "description": "A Tesla abriu uma série de posições relacionadas com a pintura do Cybertruck, um veículo que supostamente não iria ser pintado.",
            "url": "https://abertoatedemadrugada.com/2023/04/tesla-baralha-fas-com-pintura-do.html",
            "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQvpq5EIW1Es2Zq_QOrhB9O_Qo8JdaFF-nfrZIXLgCn7M8sr9vgldAhZ8TuM_AYtTtYLITEpWbDsATK8k1XRLxyszX7KE8cJI6OiHyhFe4pAgMIJANB6YWa0GQMK-khFMtaV0qqconLAeHHm2C-2-fhzsssCgCC1etbrIRj0w87gnvM4OkMqq8toGnxw/w1200-h630-p-k-no-nu/cybertruck.jpg",
            "publishedAt": "2023-04-02T10:00:00Z",
            "content": "A Tesla abriu uma série de posições relacionadas com a pintura do Cybertruck, um veículo que supostamente não iria ser pintado.\n\n\nEnquanto se aguardam por novidades (e o lançamento) do Cybertruck - n… [+1143 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Archdaily.com.br"
            },
            "author": "Susanna Moreira",
            "title": "Loja Fernando Jaeger / Alan Chu",
            "description": "O projeto da nova loja Fernando Jaeger - Pronto pra Levar! em Moema, com arquitetura de Alan Chu, foi pensado considerando a relação entre quatro camadas bem definidas: o edifício existente, a intervenção dentro desse espaço, o mobiliário a ser exposto e o fl…",
            "url": "https://www.archdaily.com.br/br/998844/loja-fernando-jaeger-alan-chu",
            "urlToImage": "https://images.adsttc.com/media/images/6427/2a5e/079b/b252/9fc1/5249/large_jpg/loja-fernando-jaeger-alan-chu_20.jpg?1680288468",
            "publishedAt": "2023-04-02T10:00:00Z",
            "content": "© Fran Parente\r\n+ 23\r\n<ul><li>Elétrica : Tesla Subestação e Serviços Elétricos\r\n</li><li>Hidráulica : MDF Projetos\r\n</li><li>Execução De Obra : Hauz Engenharia\r\n</li><li></li><li></li></ul>\r\nMais inf… [+3673 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "wsj.com",
            "title": "Individual Investors Slow Stock Purchases, Leaving Markets Vulnerable",
            "description": "A plunge in the purchases of Tesla shares has underpinned the drop in individuals’ equity buying. Individual investors are losing their appetite for U.S. stocks, leaving equity markets without a dependable leg of support after a rocky first quarter. They boug…",
            "url": "https://biztoc.com/x/71ce221eb4ca52f5",
            "urlToImage": "https://c.biztoc.com/p/71ce221eb4ca52f5/og.webp",
            "publishedAt": "2023-04-02T09:44:04Z",
            "content": "A plunge in the purchases of Tesla shares has underpinned the drop in individuals equity buying.Individual investors are losing their appetite for U.S. stocks, leaving equity markets without a depend… [+248 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Daniel Miller)",
            "title": "Back From the Dead: Is Hertz Actually a Stock to Buy Now?",
            "description": "Many investors wrote off Hertz during its bankruptcy, but the vehicle rental company is a massive turnaround story.",
            "url": "https://www.fool.com/investing/2023/04/02/back-from-the-dead-is-hertz-actually-a-stock-to-bu/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/725679/hertz_mustang.jpg",
            "publishedAt": "2023-04-02T09:27:00Z",
            "content": "Hertz Global Holdings(HTZ 3.23%), a vehicle rental company with a history stretching over a century, was one of many to close the doors and restructure its business during the COVID-19 pandemic. Afte… [+3955 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Sean Williams)",
            "title": "Prediction: 3 Stocks That Could Be Worth More Than Tesla by 2040",
            "description": "Expect Wall Street's largest companies by market cap to shuffle around quite a bit over the next 17 years.",
            "url": "https://www.fool.com/investing/2023/04/02/prediction-3-stocks-worth-more-than-tesla-by-2040/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/726623/hourglass-coins-cash-bills-money-invest-rich-retirement-compound-getty.jpg",
            "publishedAt": "2023-04-02T09:21:00Z",
            "content": "Among S&amp;P 500 components, few (if any) have had a better run over the trailing decade than electric-vehicle (EV) manufacturer Tesla(TSLA 6.24%). As of the closing bell on March 30, 2023, shares o… [+7429 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Giga"
            },
            "author": "Felix Gräber",
            "title": "Kostenfalle E-Auto? Batterie kommt Fahrer teuer zu stehen",
            "description": "Wer schon früh aufs E-Auto umgestiegen ist, wird viele Vorzüge bereits kennengelernt haben. Doch beim vermeintlichen Kostenvorteil kann ein böse Überraschung drohen. Vor allem der Akku kann vielen E-Auto-Fahrern zum Verhängnis werden – und das noch für viele …",
            "url": "https://www.giga.de/news/kostenfalle-e-auto-batterie-kommt-fahrer-teuer-zu-stehen/",
            "urlToImage": "https://crops.giga.de/11/db/f9/b856078f46193e59e1fb26bd5c_YyA1ODM1eDMwNDkrMTg2KzU0NAJyZSAxMjAwIDYyNwMxYmI2ODYzOWY2NQ==.jpg",
            "publishedAt": "2023-04-02T09:09:53Z",
            "content": "Wer schon früh aufs E-Auto umgestiegen ist, wird viele Vorzüge bereits kennengelernt haben. Doch beim vermeintlichen Kostenvorteil kann ein böse Überraschung drohen. Vor allem der Akku kann vielen E-… [+2659 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Daniel Foelber)",
            "title": "These 3 Top ETFs Give You Tesla and So Much More",
            "description": "Investors looking to build a portfolio around Tesla have come to the right place.",
            "url": "https://www.fool.com/investing/2023/04/02/these-3-top-etfs-give-you-tesla-and-so-much-more/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/726124/gettyimages-1371098293.jpg",
            "publishedAt": "2023-04-02T09:03:00Z",
            "content": "Tesla(TSLA 6.24%) is a fan favorite among many individual investors. And even after the stock's decline over the past year or so, it has still been a rewarding stock over the long term.\r\nBut as great… [+5694 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Abertoatedemadrugada.com"
            },
            "author": "Carlos Martins",
            "title": "Tesla recolhe camiões Semi por peça defeituosa",
            "description": "A Tesla efectuou um processo oficial de recolha do seu camião Tesla Semi, por um problema que podia causar uma falha nos travões.",
            "url": "https://abertoatedemadrugada.com/2023/04/tesla-recolhe-camioes-semi-por-peca.html",
            "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHCJZfONccVLQ7SMCx3TGl_FCu_Sd8c_g-uSel5Eya1aOJfVm4RdeWnDQHHhsoL4g5BDgruXhNlm-Lz7Hw-A2Jhc0GZG-HdCEtG4UuhaXRdjW3iqxUdI1qAeYnNDnUR4LFjrzHwbZ_4rE1kCIKmg49l69DY8UWwnPCa5lQtWF57a0tkJ1g_VXCYay5ng/w1200-h630-p-k-no-nu/teslasemi.jpg",
            "publishedAt": "2023-04-02T09:00:00Z",
            "content": "A Tesla efectuou um processo oficial de recolha do seu camião Tesla Semi, por um problema que podia causar uma falha nos travões.\n\n\nA peça em questão estava relacionada com uma válvula de controlo do… [+925 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hibridosyelectricos.com"
            },
            "author": "Gonzalo García",
            "title": "Los secretos del eficiente motor eléctrico de Tesla quedan al descubierto en este vídeo",
            "description": "En sus primeros coches eléctricos, Tesla empleaba motores de corriente alterna asíncronos o de inducción, los que inventó Nikola Tesla, a quien la compañía debe su nombre. Si bien eran motores robustos, el fabricante decidió cambiar a motores síncronos de cor…",
            "url": "https://www.hibridosyelectricos.com/coches/secretos-eficiente-motor-electrico-tesla-video_68937_102.html",
            "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/42/67/35/desmontaje-motor-electrico-tesla-model-y-portada.jpeg",
            "publishedAt": "2023-04-02T09:00:00Z",
            "content": "En sus primeros coches eléctricos, Tesla empleaba motores de corriente alterna asíncronos o de inducción, los que inventó Nikola Tesla, a quien la compañía debe su nombre. Si bien eran motores robust… [+2777 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Haberturk.com"
            },
            "author": "Cem Özenen",
            "title": "Musk’a 2018’den tweet davası!",
            "description": "Elon Musk, 2018 yılında Tesla fabrika işçilerinin sendikalaşmayı seçmeleri durumunda hisse senedi seçeneklerinden vazgeçeceklerini tweetlediği için ABD iş yasasını ihlal ettiği kararına varıldı. Mahkeme, Elon Musk'ın 2018 tweet ile federal iş yasasını ihlal e…",
            "url": "https://www.haberturk.com/muska-2018den-tweet-davasi-3579255-teknoloji",
            "urlToImage": "https://im.haberturk.com/2023/04/02/ver1680424557/3579255_1200x627.jpg",
            "publishedAt": "2023-04-02T08:35:57Z",
            "content": "Deerli Haberturk.com okurlar.Haberturk.com ekibi olarak Türkiyede ve dünyada yaanan ve haber deeri tayan her türlü gelimeyi sizlere en hzl, en objektif ve en doyurucu ekilde ulatrmak için çalyoruz. Y… [+2178 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "netzwelt"
            },
            "author": "Michael Knott",
            "title": "Hallo Netzwelt: Bitte kauft das nicht!",
            "description": "Was bitte ist denn in Lidl gefahren? Und wieso verkauft Tesla neuerdings leuchtendes Bier für rund 90 Euro? Ein Pferd ist tot. Hallo Netzwelt - hier kommen die besten News der Woche.\nDieser Artikel wurde einsortiert unter \nTechnology.",
            "url": "https://www.netzwelt.de/news/215964-hallo-netzwelt-bitte-kauft-.html",
            "urlToImage": "https://img.netzwelt.de/dw1600_dh900_sw1872_sh1053_sx6_sy95_sr16x9_nu2/picture/original/2023/03/ufo-gelandet-the-pod-laesst-tiny-house-mobiler-arbeitsplatz-nutzen-367268.jpeg",
            "publishedAt": "2023-04-02T08:15:00Z",
            "content": "TECHNOLOGY\r\nWas bitte ist denn in Lidl gefahren? Und wieso verkauft Tesla neuerdings leuchtendes Bier für rund 90 Euro? Ein Pferd ist tot. Hallo Netzwelt - hier kommen die besten News der Woche.\r\nMan… [+7254 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Novinky.cz"
            },
            "author": "Milan Lažanský",
            "title": "Tesla začala nabízet pivo",
            "description": "Americká automobilka Tesla v pátek uvedla svou sadu tří lahví piva plzeňského typu nazvaného Gigabier. K mání je i na oficiálních českých stránkách.",
            "url": "https://www.novinky.cz/clanek/auto-tesla-zacala-nabizet-pivo-za-tri-lahve-plzenskeho-date-2-111-korun-40427537",
            "urlToImage": "https://d15-a.sdn.cz/d_15/c_img_QR_3/IGgDe/gigabier-tesla.jpeg?fl=cro,150,0,1605,902%7Cres,1200,,1%7Cwebp,75",
            "publishedAt": "2023-04-02T08:14:09Z",
            "content": "Tesla podruhé vstupuje do svta alkoholických nápoj. GigaBier je pivo plzeského typu, které se vaí v Nmecku a prodává se pouze v Evrop. \r\nV návaznosti na Tesla Tequilu se limitovaná edice piva vaí v b… [+1212 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hdmotori.it"
            },
            "author": "HDblog.it",
            "title": "Elon Musk colpevole: aveva minacciato i dipendenti Tesla su Twitter",
            "description": "I fatti risalgono al 2018.",
            "url": "https://www.hdmotori.it/tesla/articoli/n568319/elon-musk-tesla-colpevole-minacce-sindacato/",
            "urlToImage": "https://hd2.tudocdn.net/1089621?w=1920",
            "publishedAt": "2023-04-02T08:09:00Z",
            "content": "Elon Musk è stato accusato di aver illegalmente minacciato i suoi dipendenti Tesla. I fatti risalgono al 2018, quando il CEO aveva comunicato su Twitter che se i lavoratori si fossero iscritti al sin… [+1786 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Vnexpress.net"
            },
            "author": "VnExpress",
            "title": "Tesla có thể bán được số xe kỷ lục nhờ giảm giá",
            "description": "Cuối tuần này, hãng xe điện Mỹ được kỳ vọng công bố doanh số bán xe kỷ lục trong quý I, khi việc hạ giá kéo nhu cầu lên cao.",
            "url": "https://vnexpress.net/tesla-co-the-ban-duoc-so-xe-ky-luc-nho-giam-gia-4588386.html",
            "urlToImage": "https://vcdn1-kinhdoanh.vnecdn.net/2023/04/02/tesla-japan-bloom-1680409048-6891-1680409082.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=F02mGgSF4nb1LC_D5Y1xBw",
            "publishedAt": "2023-04-02T08:01:28Z",
            "content": "Cui tun này, hãng xe in M c k vng công b doanh s bán xe k lc trong quý I, khi vic h giá kéo nhu cu lên cao.Tháng 1, Tesla liên tc h giá xe in ti nhiu quc gia. Vic này ã kích hot cuc chin giá trên toà… [+1805 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hibridosyelectricos.com"
            },
            "author": "Diego Gutiérrez",
            "title": "Llegan a España las revolucionarias baterías Blade sin módulos, sin cobalto e indestructibles",
            "description": "Mucho se ha hablado de la tecnología de las baterías Blade del fabricante chino BYD, unas baterías innovadoras y disruptivas que proponen varias soluciones tecnológicas interesantes al mismo tiempo. Por un lado, son más baratas de fabricar gracias a los mater…",
            "url": "https://www.hibridosyelectricos.com/coches/llegan-espana-revolucionarias-baterias-byd-sin-modulos-sin-cobalto-mas-seguras_68926_102.html",
            "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/42/63/42/bateria-blade-byd-02_6_489x275.jpeg",
            "publishedAt": "2023-04-02T08:00:00Z",
            "content": "Mucho se ha hablado de la tecnología de las baterías Blade del fabricante chino BYD, unas baterías innovadoras y disruptivas que proponen varias soluciones tecnológicas interesantes al mismo tiempo. … [+4889 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nextpit.fr"
            },
            "author": "Edwin Kee",
            "title": "Les 5 meilleures applications Android et iOS de la semaine testées et approuvées",
            "description": "Consultez notre liste du Top 5 des applications de la semaine pour les smartphones iOS et Android ce week-end et voyez ce qui vous fait plaisir.(Ceci est un teaser - cliquez ici pour lire l'article en entier)",
            "url": "https://www.nextpit.fr/5-applications-android-ios-jeu-mobile-semaine-13-2023",
            "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/Top_5_Apps-COM.jpg",
            "publishedAt": "2023-04-02T08:00:00Z",
            "content": "Ce top 5 n'est pas comme nos sélections d'applications gratuites qu'on vous propose deux fois par semaine. Ici, on installe les applications sur nos propres smartphones et on les teste. On vérifie s'… [+7626 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nextpit.de"
            },
            "author": "Edwin Kee",
            "title": "Top 5 Android- und iOS-Apps der Woche: Diesmal mit Terra Nil von Netflix!",
            "description": "Dies ist unsere Liste mit den fünf besten iOS- und Android-App-Empfehlungen für diese Woche von unserem NextPit- und Netflix-Experten Edwin.(Dies ist ein Teaser - klick hier, um den kompletten Beitrag zu lesen)",
            "url": "https://www.nextpit.de/top-5-android-und-ios-apps-der-woche-2023-13",
            "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/Top_5_Apps-COM.jpg",
            "publishedAt": "2023-04-02T08:00:00Z",
            "content": "Dieser Artikel unterscheidet sich von unseren \"Gratis-Apps der Woche\"-Ausgabe, die zweimal pro Woche erscheint. Wir haben viel Zeit und Mühe in die Zusammenstellung dieser Liste investiert, indem wir… [+8539 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Techbang.com"
            },
            "author": "數位時代",
            "title": "Model S、Model X台灣開賣，304.9萬起！最快第二季交車，車款資訊一次看",
            "description": "首批交付車型包括 Model S、Model X 與 Model X Plaid 三種車型；但 Model S Plaid 目前尚未有明確抵台時程。特斯拉（Tesla）Model S、Model X 來了！台灣官方網站開放訂購，全新車色「Ultra Red 烈焰紅」也同步開放選配，最快將於今年第二季首批限量交付。首批交付車型包括 Model S、Model X 與 Model X Plaid 三種車型；但 Model S Plaid 目前尚未有明確抵台時程。\nModel S、Model X 售價：\nModel S…",
            "url": "https://www.techbang.com/posts/105092-model-s-and-model-x-go-on-sale-in-taiwan-starting-from-3049",
            "urlToImage": "https://cdn0.techbang.com/system/excerpt_images/105092/original/65c408708b93f462165b358243221c42.jpg?1680254351",
            "publishedAt": "2023-04-02T08:00:00Z",
            "content": "TeslaModel SModel X Ultra Red Model SModel X Model X Plaid Model S Plaid \r\nModel SModel X \r\nModel S 304.99 Model S Plaid 336.9 9Model X 348.99Model X Plaid 379.99\r\nModel S652304.99\r\n Model S 652 Mode… [+346 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ferra.ru"
            },
            "author": "Максим Многословный",
            "title": "В суде главе Tesla припомнили сообщение 5-летней давности: им он нарушил закон",
            "description": "Федеральный апелляционный суд постановил, что Илон Маск нарушил трудовое законодательство США в 2018 году, написав в Twitter, что работники завода Tesla потеряют опционы на акции, если объединятся в профсоюз.",
            "url": "https://www.ferra.ru/news/apps/v-sude-glave-tesla-pripomnili-soobshenie-5-letnei-davnosti-im-on-narushil-zakon-02-04-2023.htm",
            "urlToImage": "https://www.ferra.ru/imgs/2023/04/02/07/5859250/54c0205bf876bc4c26a7c623847ea0c2a2d7f65f.png",
            "publishedAt": "2023-04-02T07:59:59Z",
            "content": ", 2018 , Twitter, Tesla , ."
        },
        {
            "source": {
                "id": null,
                "name": "ZyCrypto"
            },
            "author": "Brenda Ngari",
            "title": "Elon Musk, Tesla Want $258 Billion Dogecoin Case Dismissed",
            "description": "Elon Musk’s legal team has asked a federal court in Manhattan to dismiss a $258 billion lawsuit brought against him by Dogecoin investors, the news of which ZyCrypto broke in June 2022.",
            "url": "https://zycrypto.com/elon-musk-tesla-want-258-billion-dogecoin-case-dismissed/",
            "urlToImage": "https://zycrypto.com/wp-content/uploads/2023/04/Elon-Musk-Tesla-Want-258-Billion-Dogecoin-Case-Dismissed.jpg",
            "publishedAt": "2023-04-02T07:42:23Z",
            "content": "Elon Musks legal team has asked a federal court in Manhattan to dismiss a $258 billion lawsuit brought against him by Dogecoin investors, the news of which ZyCrypto broke in June 2022.\r\nThe lawsuit, … [+2182 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gazzetta.it"
            },
            "author": "Maurizio Bertera",
            "title": "Lightship L1, ecco la prima roulotte a trazione elettrica",
            "description": "Una soluzione interessante dagli Usa per ridurre i consumi del mezzo che traina e non inquinare.",
            "url": "https://www.gazzetta.it/motori/la-mia-auto/02-04-2023/camper-elettrici-lightship-l1-la-prima-roulotte-a-batterie.shtml",
            "urlToImage": "https://dimages2.gazzettaobjects.it/files/og_thumbnail/uploads/2023/04/01/6427fe03ce0cf.jpeg",
            "publishedAt": "2023-04-02T07:18:01Z",
            "content": "Maurizio Bertera\r\n02 aprile 2023\r\nAlla fine, Tesla c'entra sempre. Il piccolo team che ha realizzato Lightship L1, il primo caravan rimorchiabile dotato di trazione elettrica, è formato da persone pr… [+2496 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Giga"
            },
            "author": "Felix Gräber",
            "title": "E-Auto-Reichweite: Winter-Test verrät, wie schlimm es steht",
            "description": "Die Sorge um die Reichweite bei E-Autos wird bei vielen Interessenten geringer. Doch ganz weg ist sie nicht, vor allem wenn die Temperaturen unter Null fallen. Denn im Winter schrumpft bei Elektroautos die Reichweite zusammen – und gar nicht mal so wenig, wie…",
            "url": "https://www.giga.de/news/e-auto-reichweite-winter-test-verraet-wie-schlimm-es-steht/",
            "urlToImage": "https://crops.giga.de/db/6b/d7/8b2127139f17a1752aa55a230d_YyA1MTI3eDI2NzkrMTY0KzQ3OQJyZSAxMjAwIDYyNwNkYjgxMWZhNWFhMA==.jpg",
            "publishedAt": "2023-04-02T07:03:23Z",
            "content": "Die Sorge um die Reichweite bei E-Autos wird bei vielen Interessenten geringer. Doch ganz weg ist sie nicht, vor allem wenn die Temperaturen unter Null fallen. Denn im Winter schrumpft bei Elektroaut… [+2310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Challenges"
            },
            "author": "Eric Bergerolle, Delphine Dechaux",
            "title": "La course aux données automobiles est bel et bien lancée",
            "description": "Gafam, constructeurs automobiles, équipementiers… Tous développent à présent des systèmes pour la conduite et la navigation. Qui récoltent les données précieuses et stratégiques des utilisateurs, à des fins de monétisation. Voici venir la nouvelle bataille de…",
            "url": "https://www.challenges.fr/high-tech/gafam-constructeurs-qui-remportera-la-course-aux-donnees-automobiles_850680",
            "urlToImage": "https://www.challenges.fr/assets/img/2023/03/30/cover-r4x3w1200-64257a27999bc-32974-1914629-k2-k1-4427959-jpg.jpg",
            "publishedAt": "2023-04-02T07:00:00Z",
            "content": "Alors que les constructeurs multiplient les alliances avec les géants de la tech, des questions essentielles restent dans un angle mort: où se trouvent les données des véhicules? Qui les contrôle? Co… [+6642 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Creative Bloq"
            },
            "author": "joe.foley@futurenet.com (Joseph Foley)",
            "title": "It looks like now even Elon Musk is terrified of AI",
            "description": "Experts fear things are getting out of control.",
            "url": "https://www.creativebloq.com/news/call-for-pause-in-ai-developement",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/ErtH27ryuMXbMwttUmmC2c-1200-80.jpg",
            "publishedAt": "2023-04-02T06:00:52Z",
            "content": "Many creatives are becoming concerned about the power of generative AI due to the advances in text-to-image models like DALL-E 2, Midjourney and Stable Diffusion. But now even some of the people invo… [+2896 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Jean-Yves Alric",
            "title": "Boire de la bière pourrait nous aider à sauver le climat (explications)",
            "description": "Des chercheurs utilisent les déchets de brasserie comme matériau pour les dispositifs de stockage d’énergie.",
            "url": "https://www.presse-citron.net/boire-de-la-biere-pourrait-nous-aider-a-sauver-le-climat-explications/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2019/12/biere-etude.jpg",
            "publishedAt": "2023-04-02T06:00:24Z",
            "content": "<ul><li>Des scientifiques ont constaté que les déchets de brasserie permettent de produire des matériaux pour les systèmes de stockage dénergie</li><li>Lavantage est que lon trouve des drêches un peu… [+2685 chars]"
        },
        {
            "source": {
                "id": "the-irish-times",
                "name": "The Irish Times"
            },
            "author": "Derek Scally",
            "title": "Lessons for Irish reunification from Germany: ‘Introduce new anthem and constitution’",
            "description": "Any successful unification, a German politician suggests, should take best from both societies rather than just impose one system on the other",
            "url": "https://www.irishtimes.com/politics/2023/04/02/lessons-for-irish-reunification-from-germany-introduce-new-anthem-and-constitution/",
            "urlToImage": "https://www.irishtimes.com/resizer/0OwIqWMSRf0bnH5gw1M_GwsodEk=/1200x630/filters:format(jpg):quality(70):focal(934x387:944x397)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/YGN66RQAYKRLXDH54DPO3NUXHQ.jpg",
            "publishedAt": "2023-04-02T06:00:00Z",
            "content": "From his office in Germanys federal chancellery, Carsten Schneider has one of Berlins best views. Before us, the historic Reichstag building renovated with its modern dome and home to the Bundestag p… [+7234 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "bitcoinik.com",
            "title": "Burger King UK seems interested in Dogecoin (Doge)",
            "description": "Burger King UK dragged Dogecoin (Doge) crypto token name in his recent tweet, which sparked happiness among the Dogecoin community. Burger King (BK) is an America-based multinational fast food chain of hamburger fast food restaurants. This company is Headquar…",
            "url": "https://biztoc.com/x/3e8765aa0d6c2a61",
            "urlToImage": "https://c.biztoc.com/p/3e8765aa0d6c2a61/og.webp",
            "publishedAt": "2023-04-02T05:54:05Z",
            "content": "Burger King UK dragged Dogecoin (Doge) crypto token name in his recent tweet, which sparked happiness among the Dogecoin community.Burger King (BK) is an America-based multinational fast food chain o… [+297 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Garbageday.email"
            },
            "author": "Ryan Broderick",
            "title": "Untitled (https://www.garbageday.email/p/kayfabe-content-and-podcasts-that)",
            "description": "Read to the end for a good crab video",
            "url": "https://www.garbageday.email/p/kayfabe-content-and-podcasts-that",
            "urlToImage": "https://substackcdn.com/image/upload/w_1028,c_limit,q_auto:best/do5esvozjuznkqogasz1",
            "publishedAt": "2023-04-02T05:47:01Z",
            "content": "So, over the weekend, I wrote about the curious rise of podcast clips that come from shows that dont actually exist. Essentially, there are a bunch of content creators mostly weird Gen Z hustlebros w… [+10481 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Times of Israel"
            },
            "author": "Barack Mandela",
            "title": "Psychotherapy as Cure for Jewish-Arab Tensions",
            "description": "I was in psychotherapy in Tel Aviv and Jerusalem with Dr. Shaul Livnay-Weisbrot, who is also a prominent hypnotherapist. These in-depth therapy sessions helped me uncover my unconscious mind using free association and dream analysis. While undergoing therapy …",
            "url": "https://blogs.timesofisrael.com/psychotherapy-as-cure-for-jewish-arab-tensions/",
            "urlToImage": "https://static.timesofisrael.com/blogs/uploads/users/barack-o-mandela1660920384-400x400.jpg",
            "publishedAt": "2023-04-02T05:38:37Z",
            "content": "I was in psychotherapy in Tel Aviv and Jerusalem with Dr. Shaul Livnay-Weisbrot, who is also a prominent hypnotherapist. These in-depth therapy sessions helped me uncover my unconscious mind using fr… [+4062 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Overclockers.ru"
            },
            "author": "Алексей Сычёв",
            "title": "К концу следующего года электромобили XPeng смогут автоматически перемещаться в большинстве городов Китая",
            "description": "Используя не только цифровые карты местности, но и данные в масштабе реального времени.",
            "url": "https://overclockers.ru/hardnews/show/125062/k-koncu-sledujuschego-goda-elektromobili-xpeng-smogut-avtomaticheski-peremeschatsya-v-bolshinstve-gorodov-kitaya",
            "urlToImage": "https://overclockers.ru/st/images/preview/JuGXp7724afkSWfE.jpg",
            "publishedAt": "2023-04-02T05:19:00Z",
            "content": "Tesla BYD, . CNBC, XPeng 2024 .\r\n , , , . XPeng , , . , .\r\nXNGP XPeng , , , , . 100 ."
        },
        {
            "source": {
                "id": null,
                "name": "Interia.pl"
            },
            "author": "Maciej Olesiuk",
            "title": "Kolejne problemy Tesli. Tym razem psują się ekrany w Semi",
            "description": "Egzemplarze Tesli Semi, działające w jednej z amerykańskich fabryk należących do Pepsi-Co, mają borykać się z różnego rodzaju awariami. Przynajmniej w części pojazdów problemy mają dotyczyć wyświetlaczy.",
            "url": "https://motoryzacja.interia.pl/raport-samochody-elektryczne/news-kolejne-problemy-tesli-tym-razem-psuja-sie-ekrany-w-semi,nId,6687341",
            "urlToImage": "https://i.iplsc.com/-/000FZ0K0Q5I6C83P-C429-F4.jpg",
            "publishedAt": "2023-04-02T05:00:00Z",
            "content": "Spis treci:\r\nElektryczny cignik siodowy Tesli, czyli model Semi, po raz pierwszy zaprezentowany zosta w 2017 roku. Zapowiadano, e dwa lata póniej wejdzie do sprzeday, jednak jego premiera bya regular… [+2734 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Overclockers.ru"
            },
            "author": "Алексей Сычёв",
            "title": "По итогам квартала NVIDIA вышла в лидеры по росту капитализации",
            "description": "Максимальный прирост с 2001 года.",
            "url": "https://overclockers.ru/hardnews/show/125060/po-itogam-kvartala-nvidia-vyshla-v-lidery-po-rostu-kapitalizacii",
            "urlToImage": "https://overclockers.ru/st/images/preview/x6uBmGd7sYkahuVi.jpg",
            "publishedAt": "2023-04-02T04:30:00Z",
            "content": ", Bloomberg , . Nasdaq 100 NVIDIA (+90%), Meta Platforms (+70%) Tesla (+90%). , Nasdaq 100 $2,4 $15,5 . 2021 $20 , , .\r\nNVIDIA 2001 . , NVIDIA , ChatGPT. , . NVIDIA , ."
        },
        {
            "source": {
                "id": null,
                "name": "CleanTechnica"
            },
            "author": "Raymond Tribdino",
            "title": "Kia Launches EV6 In The Philippines With Complete Ecosystem",
            "description": "It is Kia Motors Philippines’ belief that in order to promote the use of electric vehicles, a complete ecosystem is needed, not just the vehicle. So, when the Korean carmaker introduced the Kia EV6 at the Philippine International Motor Show (PIMS) last year, …",
            "url": "https://cleantechnica.com/2023/04/02/kia-launches-ev6-in-the-philippines-with-complete-ecosystem/",
            "urlToImage": "http://cleantechnica.com/files/2023/03/clip_image001-3-2.jpeg",
            "publishedAt": "2023-04-02T04:27:57Z",
            "content": "It is Kia Motors Philippines belief that in order to promote the use of electric vehicles, a complete ecosystem is needed, not just the vehicle. So, when the Korean carmaker introduced the Kia EV6 at… [+7531 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Reuters",
            "title": "Elon Musk seeks to end $258 billion Dogecoin lawsuit",
            "description": "The lawyers said the investors never explained how Musk intended to defraud anyone or what risks he concealed.",
            "url": "https://indianexpress.com/article/technology/crypto/elon-musk-seeks-to-end-258-billion-dogecoin-lawsuit-8533182/",
            "urlToImage": "https://images.indianexpress.com/2023/04/elon-musk-dogecoin-featured.jpg",
            "publishedAt": "2023-04-02T04:23:45Z",
            "content": "Elon Musk asked a U.S. judge on Friday to throw out a $258 billion racketeering lawsuit accusing him of running a pyramid scheme to support the cryptocurrency Dogecoin.In an evening filing in Manhatt… [+2114 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Matt Novak, Contributor, \n Matt Novak, Contributor\n https://www.forbes.com/sites/mattnovak/",
            "title": "Tesla Electric Semi Recalled After Just A Few Months On The Road",
            "description": "Tesla’s electric Semi trucks are being recalled over a faulty electronic parking brake, according to a notice posted online by the NHSTA. The recall comes after Tesla made its first deliveries of the highly anticipated Semi to PepsiCo and Frito Lay this past …",
            "url": "https://www.forbes.com/sites/mattnovak/2023/04/02/tesla-electric-semi-recalled-after-just-a-few-months-on-the-road/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6429010664a2e0f3ccbbf2c5/0x0.jpg?format=jpg&crop=4000,2249,x0,y206,safe&width=1200",
            "publishedAt": "2023-04-02T04:21:59Z",
            "content": "A Tesla Semi electric truck parked outside the Frito-Lay manufacturing facility in Modesto, ... [+] California, US, on Wednesday, Jan. 18, 2023. PepsiCos Frito-Lay is replacing its diesel-powered fre… [+2095 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "thedrive.com",
            "title": "Tesla Semi Recalled Already, Parking Brake May Fail",
            "description": "Just a few months after the first official deliveries of the long-awaited Tesla Semi to PepsiCo and Frito-Lay in December, the truck has been hit with its first recall. The electronic parking brake valve module (PVM) may not move into position when the truck …",
            "url": "https://biztoc.com/x/2bda77fff097c5b7",
            "urlToImage": "https://c.biztoc.com/p/2bda77fff097c5b7/og.webp",
            "publishedAt": "2023-04-02T04:06:05Z",
            "content": "Just a few months after the first official deliveries of the long-awaited Tesla Semi to PepsiCo and Frito-Lay in December, the truck has been hit with its first recall. The electronic parking brake v… [+255 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Unwire.hk"
            },
            "author": "唐美鳳",
            "title": "推出至今僅 3 個月 Tesla Semi 電動拖頭宣佈召回",
            "description": "電動車生產商 Tesla 可算是「召回」的常客，雖然並非每次都要求車主將車帶回維修中心，部分只需透過無線更新就能夠解決，但在過去數年發出的召回為數不少。日前美國國家公路交通安全管理局指出，Tesla 首次宣佈召回 Semi 純電動拖頭。\nThe post 推出至今僅 3 個月 Tesla Semi 電動拖頭宣佈召回 appeared first on 香港 unwire.hk 玩生活．樂科技.",
            "url": "https://unwire.hk/2023/04/02/tesla-recall-semi-ev-truck/life-tech/auto/",
            "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2023/04/03-1.png",
            "publishedAt": "2023-04-02T04:00:19Z",
            "content": "Tesla Tesla Semi \r\nTesla Semi 6 12 \r\n 2 Bendix Commercial Vehicle Systems Tesla 35 Semi 3 24 Tesla 5 23 Semi \r\ngizmodo\r\nunwire.hk Mewe https://mewe.com/p/unwirehk"
        },
        {
            "source": {
                "id": null,
                "name": "Www.ad.nl"
            },
            "author": "Erik Kouwenhoven",
            "title": "Verkoop nieuwe auto's stijgt met 51 procent: dit is de reden",
            "description": "Vorige maand zijn er in Nederland 37.452 nieuwe personenauto’s geregistreerd. Ten opzichte van maart vorig jaar gaat het om een bizarre stijging van maar liefst 51,5 procent.",
            "url": "https://www.ad.nl/auto/verkoop-nieuwe-auto-s-stijgt-met-51-procent-dit-is-de-reden~a55cdcbc/",
            "urlToImage": "https://images0.persgroep.net/rcs/ogZHKwGgw2hO90GSyB4udoyHmyE/diocontent/227062569/_fill/1200/630/?appId=21791a8992982cd8da851550a453bd7f&quality=0.7",
            "publishedAt": "2023-04-02T04:00:12Z",
            "content": "In maart vorig jaar reden nog slechts 24.781 nieuwe auto's de Nederlandse showroom uit. De groei over het hele eerste kwartaal is ook reusachtig, met een plus van 25,2 procent. Dit alles blijkt uit d… [+2304 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Overclockers.ru"
            },
            "author": "Алексей Сычёв",
            "title": "Tesla вынуждена отозвать 35 электрических грузовиков Semi из-за неработающего стояночного тормоза",
            "description": "Подвёл поставщик, но никто не пострадал.",
            "url": "https://overclockers.ru/hardnews/show/125059/tesla-vynuzhdena-otozvat-35-elektricheskih-gruzovikov-semi-iz-za-nerabotajuschego-stoyanochnogo-tormoza",
            "urlToImage": "https://overclockers.ru/st/images/preview/Gob3DS1d37XBN4gk.jpg",
            "publishedAt": "2023-04-02T03:30:00Z",
            "content": "Tesla . , Tesla Semi , . CNBC NHTSA, 35 Tesla Semi , .\r\n, , , 35 . , .\r\n, Tesla Semi PepsiCo, . , . Tesla , , Semi, ."
        },
        {
            "source": {
                "id": null,
                "name": "The Drive"
            },
            "author": null,
            "title": "Tesla Semi Recalled Already, Parking Brake May Fail",
            "description": "35 Tesla Semi trucks may have a fault in the electronic parking brake valve module causing the parking brake not to engage.",
            "url": "https://www.thedrive.com/news/tesla-semi-recalled-already-parking-brake-may-fail#article",
            "urlToImage": "https://www.thedrive.com/uploads/2023/03/01/teslasemi-hero-e1680318505871.jpeg?auto=webp",
            "publishedAt": "2023-04-02T02:30:24Z",
            "content": "Just a few months after the first official deliveries of the long-awaited Tesla Semi to PepsiCo and Frito-Lay in December, the truck has been hit with its first recall. The electronic parking brake v… [+1754 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Elliott.org"
            },
            "author": "Christopher Elliott",
            "title": "I’m on a car rental company’s Do Not Rent list — now they’re keeping my money, too!",
            "description": "How do you get on a car rental company's Do Not Rent list? And can it really keep your money if you make a nonrefundable reservation? \nThe post I’m on a car rental company’s Do Not Rent list — now they’re keeping my money, too! appeared first on Elliott Repor…",
            "url": "https://www.elliott.org/advocacy/im-on-a-car-rental-companys-do-not-rent-list-now-theyre-keeping-my-money-too/",
            "urlToImage": "https://www.elliott.org/wp-content/uploads/chris-images-38.jpg",
            "publishedAt": "2023-04-02T02:30:05Z",
            "content": "Imagine this: You show up at the airport car rental counter, and the company refuses to give you a vehicle. And then the company keeps the $1,749 you spent, too. \r\nOutrageous, right? That’s what Aliz… [+15463 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "yahoo.com",
            "title": "Want to land one of A.I.’s lucrative six-figure roles? Experts say there are ‘no technical skills required’",
            "description": "Experts often use an analogy of a toddler to describe A.I., suggesting products like chatbot phenomenon ChatGPT need to be taught everything they know by a real human being. In their early days, large language models (LLMs) like these are created by developer…",
            "url": "https://biztoc.com/x/ffd4f3f67b410dfd",
            "urlToImage": "https://c.biztoc.com/p/ffd4f3f67b410dfd/og.webp",
            "publishedAt": "2023-04-02T02:08:05Z",
            "content": "Experts often use an analogy of a toddler to describe A.I., suggesting products like chatbot phenomenon ChatGPT need to be taught everything they know by a real human being.In their early days, large… [+291 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "teslarati.com",
            "title": "Tesla Cybertruck spotted testing on Fremont test track",
            "description": "A prototype version of the Tesla Cybertruck has been spotted at the Tesla test track, and it looks more production-ready than ever. Thanks to a series of manufacturing upgrades, notably including the Gigapress at Giga Texas, the Tesla Cybertruck has never bee…",
            "url": "https://biztoc.com/x/bcc6fe2e76952429",
            "urlToImage": "https://c.biztoc.com/p/bcc6fe2e76952429/og.webp",
            "publishedAt": "2023-04-02T01:02:08Z",
            "content": "A prototype version of the Tesla Cybertruck has been spotted at the Tesla test track, and it looks more production-ready than ever.Thanks to a series of manufacturing upgrades, notably including the … [+317 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Vnexpress.net"
            },
            "author": "VnExpress",
            "title": "Bill Gates nói xe tự lái 'cách mạng như PC'",
            "description": "Sau khi trải nghiệm, tỷ phú Mỹ Bill Gates đánh giá ôtô tự lái là sản phẩm thay đổi thế giới giống như máy tính cá nhân.",
            "url": "https://vnexpress.net/bill-gates-noi-xe-tu-lai-cach-mang-nhu-pc-4588335.html",
            "urlToImage": "https://vcdn1-sohoa.vnecdn.net/2023/04/01/maxresdefault-1680361883-2402-1680361980.png?w=1200&h=0&q=100&dpr=1&fit=crop&s=o8Vm0wD8I1Ti0wdy8MAyYw",
            "publishedAt": "2023-04-02T00:08:12Z",
            "content": "Sau khi tri nghim, t phú M Bill Gates ánh giá ôtô t lái là sn phm thay i th gii ging nh máy tính cá nhân.Trong bài vit trên blog cui tháng 3, Bill Gates, nhà ng sáng lp Microsoft, cho rng lnh vc xe t… [+1946 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "bitcoin.com",
            "title": "Elon Musk Asks Judge to Dismiss $258B Dogecoin Lawsuit",
            "description": "Tesla and Twitter CEO Elon Musk has asked a U.S. judge to dismiss a $258 billion lawsuit filed against him by dogecoin investors. They alleged that the billionaire operated a pyramid scheme to promote the meme cryptocurrency dogecoin. “There is nothing unlawf…",
            "url": "https://biztoc.com/x/baa60d474cf8fe50",
            "urlToImage": "https://c.biztoc.com/p/baa60d474cf8fe50/og.webp",
            "publishedAt": "2023-04-01T23:42:06Z",
            "content": "Tesla and Twitter CEO Elon Musk has asked a U.S. judge to dismiss a $258 billion lawsuit filed against him by dogecoin investors. They alleged that the billionaire operated a pyramid scheme to promot… [+317 chars]"
        }
    ])
    const [i,seti] = useState(10)
    const [latest10,set10] = useState([])
    const [moreinfo,setMoreinfo] = useState({})
    const [vis,setVis] = useState('hidden')
    const pui = useRef(null)
    useEffect(()=>{
        // axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-03-03&sortBy=publishedAt&apiKey=2c74cb196ef84ccdbafe4f22fa7acba3')
        //     .then((response)=>{
        //         console.log(response.data.articles)
        //         setNews(response.data.articles)
        //     })
        let temp = []
        temp = news.slice(i-10,i)
        console.log(temp)
        set10(temp)
    },[])
    const moreInfo = (news)=>{
        setMoreinfo(news)
        setVis('visible')
    }
    const incre = ()=>{
        seti(i+10)
    }
    const decre = ()=>{
        seti(i-10)
    }
    useEffect(()=>{
        console.log(i)
    },[i])
    useEffect(()=>{
        let temp = news.slice(i-10,i)
        console.log(temp)
        set10(temp)
        window.scrollTo({
            top:pui.current.offsetTop,
            behavior: "smooth"
        })
    },[i])
    return(
        <div className="Home">
            <Navbar/>
            <div className="NewsBlock">
                {
                    latest10.map((news)=>(
                        <div className='News' onClick={()=>{moreInfo(news)}}>
                            <img src={news.urlToImage} className='np'></img>
                            <div className='content'>
                                <p className='headline'>{news.title}</p>
                                <p className='author'><b>Author - </b> {news.author},   <b>Published At - </b>{news.publishedAt}</p>
                            </div>
                        </div>
                    ))
                }
                <div className='pag-btns'>
                    {i!=10 &&
                        <button onClick={()=>{decre()}}>⇦ Prev</button>
                    }
                    {
                        i<100 &&
                        <button onClick={()=>{incre()}}>More ⇨</button>
                    }
                </div>
            </div>
            <div className="popupInfo" style={{visibility:`${vis}`}} onClick={()=>{setVis('hidden')}} ref={pui}>
                <button onClick={()=>{setVis('hidden')}}>X</button>
                <div className='popupcontent' style={{backgroundImage:`url(${moreinfo.urlToImage})`}}>
                    <div className='content'>
                        <p className='headline'>{moreinfo.title}</p>
                        <p className='news'>{moreinfo.content}</p>
                        <a href={`${moreinfo.url}`} style={{textDecoration:'none',fontWeight:'700'}}>Click to Visit full article</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home