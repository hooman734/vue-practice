let app = new Vue({
    el: '#assignment',
    data: {
        style1: '',
        style2: '',
        isVisible: true,
        userColor: '',
    },
    methods: {
        setStyle: function(event) {
            this.style1 = event.target.value;
        },
        chVis: function() {
            if (this.isVisible) {
                this.isVisible = !this.isVisible;
                this.style2 = 'hidden';
            } else {
                this.isVisible = !this.isVisible;
                this.style2 = 'visible';
            }
        }
    }
});
