/*
 * The MIT License (MIT)
 *
 * Copyright (c)  2015  Tilde ry
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

sponsor_images = [
    'img/vectors/logo_asus.svg',
    'img/vectors/logo_avanade.svg',
    'img/vectors/logo_fantasiapelit.svg',
    'img/vectors/logo_metropolia.svg',
    'img/vectors/logo_microsoft.svg',
    'img/vectors/logo_reaktor.svg',
    'img/vectors/logo_smilehouse.svg',
    'img/vectors/logo_teho.svg'
];
past_numbers = [];

$(document).ready(function() {
    sponsorUpdater()
});

function sponsorCarousel(){
    var i, random_number, cur_pos, image;
    random_number = Math.ceil(Math.random()*7);
    var sponsors = $("#sponsors");
    sponsors = sponsors.find('div.sponsor img');
    sponsors.fadeOut('fast', function() {
        for (i=0;i<sponsor_count;i++) {
            cur_pos = random_number+i;
            if(cur_pos > sponsor_images.length-1) {
                cur_pos = cur_pos-sponsor_images.length;
            }
            //console.log('Replaced `'+$(sponsors[i]).attr('src')+'` with `'+sponsor_images[cur_pos]+'` at pos '+i, cur_pos, random_number);
            image = $(sponsors[i])
            image.attr('src', sponsor_images[cur_pos]);
        }
    }).delay('300').fadeIn('fast');
}
function sponsorUpdater () {
    sponsorCarousel();
    setTimeout(sponsorUpdater, 10*60*1000);
}