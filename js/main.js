new Vue({
	el: '#app',
  data: {
    title: 'Hello World! (Vue)',
    link: 'http://www.google.com'
  },
  methods: {
  	changeTitle: function(ev) {
    	this.title = ev.target.value;
    }
  }
});