function gallery() {
    return {
        show: false,
        activeImageUrl: null,
        
        isOpen() {
            return this.show
        },
        
        open($event) {
            this.activeImageUrl = $event.target.parentNode.href
            this.show = true
        },
        
        close() {
            this.show = false
            // Clear the active image URL after the image closed
            setTimeout(() => this.activeImageUrl = null, 300)
        }
    }
}