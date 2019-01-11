import './css/styles.scss';
import './js/twitterFetcher_min';
import { debounce } from 'lodash-es';

class Yell {
    constructor(tweetCount) {
        console.log('👋👋👋👋👋👋👋');
        this.tweetCount = tweetCount;

        this.getLatestTweets();
    }

    showContent(e) {
        e.preventDefault();

        const body = document.getElementsByTagName("body")[0];
        body.classList.add('openContent');
    }

    closeContent(e) {
        e.preventDefault();
        const body = document.getElementsByTagName("body")[0];
        body.classList.remove('openContent');
    }

    getLatestTweets() {
        const configProfile = {
            "profile": { "screenName": 'realDonaldTrump' },
            "domId": 'tweetContent',
            "maxTweets": this.tweetCount,
            "enableLinks": true,
            "showUser": false,
            "showTime": false,
            "showImages": false,
            "lang": 'en',
            'customCallback': this.loadTweet
        };

        twitterFetcher.fetch(configProfile);
    }

    displayTweet(tweet) {
        const tweetWrapper = document.getElementById('tweetContent');
        const randomTweet = localStorage.getItem(`tweet${tweet}`);
        tweetWrapper.insertAdjacentHTML('beforeend', JSON.parse(randomTweet));
    }

    loadTweet(tweets) {
        // now store tweets for later
        for (let twert = 0; twert < tweets.length; twert++) {
            localStorage.setItem(`tweet${twert}`, JSON.stringify(tweets[twert]));
        }
    }

    positionTweet() {
        // pass the pinking shears
        const html = document.getElementsByTagName('html')[0];
        const tweetWrapper = document.getElementById('tweetWrapper');
        const tweetWidth = tweetWrapper.offsetWidth;
        html.style.setProperty('--tweetWidth', `${tweetWidth}px`)
        tweetWrapper.classList.add('shown');
    }

    getRandomTweet(e) {
        e.preventDefault();

        // generate a random number between 1 and 10
        const rando = Math.floor(Math.random() * 15) + 1;
        // Retrieve the object from storage
        const randomTweet = localStorage.getItem(`tweet${rando}`);

        // this.displayTweet(randomTweet);
        const tweetWrapper = document.getElementById('tweetContent');
        tweetWrapper.innerHTML = JSON.parse(randomTweet);

        const tweetLoaded = new CustomEvent('tweetLoaded');
        tweetWrapper.dispatchEvent(tweetLoaded);
    }

    showtime() {
        const html = document.getElementsByTagName('html')[0];
        html.classList.add('showtime');

        setTimeout(() => {
            document.getElementById("loader").style.animationPlayState = "paused";
        }, 500);
    }

    setup() {
        // what do I need here?
        // Pretty much doing it wrong, bro.
        console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');
        console.log('what do I scream for? This is my theme park!');
        console.log('🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // how many tweets u want, bro?
    const yell = new Yell(16);

    window.addEventListener('resize', debounce(() => {
        yell.positionTweet();
    }), 300);

    window.addEventListener('load', () => {
        yell.displayTweet(0);
        yell.showtime();
        yell.positionTweet();

        const tweetWrapper = document.getElementById('tweetContent');
        tweetWrapper.addEventListener('tweetLoaded', yell.positionTweet);

        const shuffleButter = document.getElementById('shuffleTweet');
        shuffleButter.addEventListener('click', yell.getRandomTweet);

        const contentRevealer = document.getElementById('whatthe🔥isthis');
        contentRevealer.addEventListener('click', yell.showContent);

        const contentCloser = document.getElementById('closeContent');
        contentCloser.addEventListener('click', yell.closeContent);
    });

    yell.setup();
    console.log('⚡️ Powered by Old Chub ️️️️️⚡️');
    console.log('🇺🇸 Hail Dale ️️️️️🇺🇸');
    console.log('Don\'t close your eyes.');
    console.log('--------------------------');
});