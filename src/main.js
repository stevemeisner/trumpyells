import './css/styles.scss';
import 'core-js';
require('es6-promise').polyfill();

class Yell {
    constructor() {
        console.log('hellowww');
    }

    // returns an number (converted from the string value in the hidden field)
    static getlatestTweets() {
        const tweet = 'https://api.twitter.com/1.1/search/tweets.json?q=realDonaldTrump';
        function getUserTweet() {
            return axios.get(`${tweet}`, { headers: { 'Authorization': 'VhrPWOWLvs05vcyCKoARli1rk' } }).then(function (response) {
                console.log(response.data)
                console.log(response.status)
            });
        }
    }

    // // returns an number (converted from the string value in the hidden field)
    // static getOrgLevel() {
    //     return +document.getElementById('hdnOrgLevel').value;
    // }

    // // returns an array (converted from the string value in the hidden field)
    // static getComponentsList() {
    //     const componentsArr = JSON.parse(`[${document.getElementById('hdnComponents').value }]`);
    //     return componentsArr;
    // }

    setup() {
        // get twitters
        console.log('get twitters');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const yell = new Yell();
    yell.setup();
});