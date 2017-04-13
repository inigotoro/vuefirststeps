new Vue({
	el: '#app',
  data: {
    title: 'Hello World! (Vue)'
  },
  methods: {
  	changeTitle: function(ev) {
    	this.title = ev.target.value;
    }
  }
});