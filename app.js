
let limit = 500,
  header = document.getElementById('header');

 const loop = {
    start: function() {
       for (let i = 0; i <= limit; i++) {
        let star = this.newStar();
        star.style.top = this.rand() * 100 + '%';
        star.style.left = this.rand() * 100 + '%';
        star.style.webkitAnimationDelay = this.rand() + 's';
        header.appendChild(star);
       }
    }, 

    rand: function() {
       return Math.random();
    },

    newStar: function() {
     let d = document.createElement('div');
     d.innerHTML = 
      '<figure class="star"></figure>';
      return d.firstChild;
    }
 };

 loop.start();

 

