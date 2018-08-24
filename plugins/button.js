module.exports = {
  template: function(elemRef) {
    return {
      tag: 'button',
      attributes: {
        class: 'btn'
      },
      children: elemRef.innerHTML
    }
  },
  styles: function() {
    return {
      'button.btn': {
        border: 'none',
        width: '180px',
        height: '35px',
        borderRadius: '100vh',
        fontSize: '16px',
        fontWeight: '600',
        backgroundColor: '[theme]',
        color: '#ffffff',
        cursor: 'pointer',
        fontFamily: 'Source Sans Pro'
      }
    }
  }
}