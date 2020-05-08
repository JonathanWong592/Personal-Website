// Option 2 - jQuery Smooth Scrolling
// $('.navbar a').on('click', function (e) {
//   if (this.hash !== '') {
//     e.preventDefault();

//     const hash = this.hash;

//     $('html, body')
//       .animate({
//         scrollTop: $(hash).offset().top
//       },700);
//   }
// });

const innerCard = document.querySelectorAll('.inner-card')
const innerContent = document.querySelectorAll('.inner-content')

for(var i = 0; i < innerCard.length; i++){
	innerCard[i].addEventListener('mouseover', function() {
		for(var i = 0; i < innerContent.length; i++){
			innerContent[i].className = 'inner-content'
		}
		document.getElementById(this.dataset.id).className = 'inner-content active'
		
		for(var i = 0; i < innerCard.length; i++){
			innerCard[i].className = 'inner-card'
		}
		this.className = 'inner-card active'
	})
}


// Option 3 - Smooth Scroll - https://github.com/cferdinandi/smooth-scroll
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
	speed: 700
});