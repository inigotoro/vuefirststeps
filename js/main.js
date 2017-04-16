new Vue({
	el: '#app',
  data: {
    title: 'Hello World! (Vue)',
    link: 'http://www.google.com',
    finishedLink: '<a href="http://www.google.com">Google FinishedLink</a>'
  },
  methods: {
  	changeTitle: function(ev) {
    	this.title = ev.target.value;
    }
  }
});