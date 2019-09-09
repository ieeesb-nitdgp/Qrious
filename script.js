// ----- On render -----
var green = "#3CC796";
var black = "rgba(0,0,0,0.65)";
var firsts = $($('.leader>li')[0]);
var thirds = $($('.leader>li')[2]);
var seconds = $($('.leader>li')[1]);
var fourths = $($('.leader>li')[3]);
var fifths = $($('.leader>li')[4]);

$(function() {
  TweenMax.set($('.leader>li'), {
    autoAlpha: 0,
    y: 20
  })
  firsts.find('.number').css({
    'color': green
  });
  setTimeout(function() {
    TweenMax.staggerTo($('.leader>li'), 0.6, {
      autoAlpha: 1,
      y: 0,
      ease: Expo.easeOut

    }, 0.075, swappem)
  }, 1500);
});

var swappem = function() {
  setTimeout(function() {
    TweenMax.to(firsts, 0.25, {
      scale: 1.1,
      onComplete: function() {
        firsts.find('.list_num').text(1);
        firsts.find('.number').css('color', green);
      }
    });
    TweenMax.to(thirds, 0.6, {
      y: 0,
      delay: 0.1
    })
    TweenMax.to(firsts, 0.5, {
      scale: 1,
      delay: 0.6,
      ease: Elastic.easeOut.config(1, 0.3)
    })
    TweenMax.to(firsts, 0.5, {
      y: 0,
      delay: 0.1,
      onUpdate: function() {
        firsts.find('.list_num').text(1);
        firsts.find('.number').css('color', green);
      }
    })
    var numbers = {
      firsts: 0,
      thirds: 0,
      seconds: 0,
      fourths: 0,
      fifths: 0
    };
    TweenMax.to(numbers, 0.667, {
      firsts: 6.5,
      thirds: 5.5,
      seconds: 6,
      fourths: 5.5,
      fifths: 5.5,
      onUpdate: function() {
        var thirdsNum = numbers.thirds.toLocaleString();
        thirds.find('.number').text(thirdsNum)
        var firstsNum = numbers.firsts.toLocaleString();
        firsts.find('.number').text(firstsNum)
        var secondsNum = numbers.seconds.toLocaleString();
        seconds.find('.number').text(secondsNum)
        var fourthsNum = numbers.fourths.toLocaleString();
        fourths.find('.number').text(fourthsNum)
        var fifthsNum = numbers.fifths.toLocaleString();
        fifths.find('.number').text(fifthsNum)
      }
    })
    TweenMax.to($('#decoration'), 0.12, {
      autoAlpha: 1,
      scaleX: 1.05,
      scaleY: 1.3,
      delay: 0.6,
      ease: Power3.easeOut,
      onComplete: function() {
        TweenMax.to($('#decoration'), 0.125, {
          scale: 0,
          delay: 0.2,
          ease: Power3.easeIn
        })
      }
    })
    TweenMax.to($('#decoration2'), 0.12, {
      autoAlpha: 1,
      scaleX: 1.05,
      scaleY: 1.3,
      delay: 0.65,
      ease: Power3.easeOut,
      onComplete: function() {
        TweenMax.to($('#decoration2'), 0.125, {
          scale: 0,
          delay: 0.1,
          ease: Power3.easeIn
        })
      }
    })
    TweenMax.to($('#decoration3'), 0.12, {
      autoAlpha: 1,
      scaleX: 1.05,
      scaleY: 1.3,
      delay: 0.7,
      ease: Power3.easeOut,
      onComplete: function() {
        TweenMax.to($('#decoration3'), 0.125, {
          scale: 0,
          ease: Power3.easeIn
        })
      }
    })
  }, 1000)
}
