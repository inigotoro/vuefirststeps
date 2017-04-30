new Vue({
	el: '#app',
  data: {
    title: 'Hello World! (Vue)',
    link: 'http://www.google.com',
    finishedLink: '<a href="http://www.google.com">Google FinishedLink</a>',
    clickCounter: 0,
    coords: {x:0, y:0}
  },
  methods: {
  	changeTitle: function(ev) {
    	this.title = ev.target.value;
    },
    increaseCounter: function(step, event) {
      this.clickCounter+= parseInt(step) ? step : 1;
      console.log(event);
    },
    updateCoordinates: function(ev) {
      this.coords.x = ev.clientX;
      this.coords.y = ev.clientY;
    }
  }
});